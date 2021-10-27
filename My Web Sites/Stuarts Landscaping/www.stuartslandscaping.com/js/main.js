var slider;
var listAdd = 'img/wishlist.png';
var listRemove = 'img/remove-btn.png';
$(window).load(function(){
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 135,
        itemMargin: 5,
        asNavFor: '#slider'
    });
    slider = $('#slider').flexslider({
        animation: "fade",
        controlNav: false,
        animationLoop: true,
        slideshow: false,
        sync: "#carousel",
        smoothHeight: true,
        start : function(){
            $('.imgLoading').remove();
        }
    });
    slider = $('#slider').data('flexslider');
});

$(function(){
    // Image slider, used throughout the site
    
    // Fancybox for image slider
    $('#slider .slides li').fancybox({
        loop : false,
        afterLoad: function(current, previous){
            //var direction = current.index > previous.index ? 'right' : 'left';
            slider.flexAnimate(current.index);
        },
        helpers : {
            title : {
                type: 'inside'
            }
        }
	});
    // Plant page thumbnail fancybox
    $('.plant-row .plant-pic figure a').fancybox({
        helpers: {
            title: {
                type: 'inside'
            }
        }
    });

    $('.wishlist').on('click','figure a img',function(e){
        e.preventDefault();
        var item = $(this).data('itemid');
        var type = $(this).closest('.plant-row').data('type');
        var list_item = item + '_' + type;
        var price = $(this).closest('.plant-row').data('price');
        var name = $(this).closest('.plant-row').data('name');
        var $button = $(this);
        var remove = $(this).data('remove');
        $.post('json.iml',{mdl:'wishlist_update.aj',ITEM:list_item, PRICE:price},function(data){
            var curTotal = 0;
            if (data.status=='remove') {
                $button.attr('src',listAdd);
                $('.your-list ul[data-listitem="'+list_item+'"]').remove();
                updateCount('minus');
            } else {
                $button.attr('src',listRemove);
                $('.your-list').prepend('<ul class="clearfix" data-listitem="'+list_item+'"><li class="name">'+name+'</li><li class="price" data-price="'+price+'">$'+price+'</li></ul>')
                updateCount('');
            }
            $('.your-list').find('ul .price').each(function(){
                curTotal = curTotal + Number($(this).data('price'));
            });
            curTotal = curTotal + (curTotal * 0.055);
            $('.your-list .total_price').text(curTotal.toFixed(2));
            if(remove){$button.closest('.plant-row').remove();}
            if($('.wish-list').is(':hidden')) {$('.wish-list').show();}
            if($('.wish-list .your-list ul').length == 0) {$('.wish-list').hide();}
        },'json');
    });

    $('.plant-info').on('change','.add-sizes',function(){
        var price = $(this).find('option:selected').val();
        $(this).closest('.plant-row').attr('data-price',price);
        $(this).closest('.plant-row').find('.wishlist p').text('$'+price);
    });

    $('.row-fluid').on('click','.pageDots',function(e){
        e.preventDefault();
        var page = $(this).attr('mypage');
        $('#blogCats .know_content').hide();
        $('#blogCats .know_content#scroll_tab'+page).show();
        $('.pageDots span').removeClass('bluedot');
        $(this).find('span').addClass('bluedot');
        var isNext = $(this).next('.pageDots');
        var isPrev = $(this).prev('.pageDots');
    }).on('click','.arw .knowtabs li a',function(e){
        e.preventDefault();
    });


});

function updateCount(action) {
    var items = Number($('.wish-button').data('items'));
    if ($('.wish-button').is(':hidden')) {$('.wish-button').show();}
    if (action == 'minus') {
        items = items - 1;
    } else {
        items = items + 1;
    }
    $('.wish-button').data('items',items).find('span.item_count').text(items);
    if (items == 0) {$('.wish-button').hide()}
}









// Share buttons on fancy box if they want to add it later
//     beforeShow: function () {
//            if (this.title) {
//              var plainTitle = this.title;
//                // New line
//                this.title += '<br />';
//                
//                // Add tweet button
//                //this.title += '<a href="https://twitter.com/share" class="twitter-share-button" data-count="none" data-url="' + this.href + '">Tweet</a> ';
//
//              this.title +=   '<a target="_blank" href="http://pinterest.com/pin/create/button/?url='+encodeURIComponent(document.location.href)+'&media='+encodeURIComponent('http://www.thegemhotel.com/chelsea/uploads/'+this.href)+'&description='+plainTitle+'" class="pin-it-button" count-layout="horizontal">'+'<img border="0" src="http://assets.pinterest.com/images/PinExt.png" title="Pin It" align="absmiddle"/></a>';
//
//                
//                // Add FaceBook like button
//                this.title += '&nbsp;&nbsp;<iframe src="//www.facebook.com/plugins/like.php?href=http://www.thegemhotel.com/'+this.href+'&amp;width=110&amp;height=23&amp;colorscheme=light&amp;layout=button_count&amp;action=like&amp;show_faces=true&amp;send=true&amp;appId=148231792045077" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:80px;" allowTransparency="true"></iframe>';
//            }
//        },  