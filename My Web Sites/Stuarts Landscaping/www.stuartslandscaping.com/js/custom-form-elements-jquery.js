

function clearRadiosAndCheckboxes(){
  $(':checkbox.styled,:radio.styled').each(function(){
    if($(this).is(':checked')) $(this).prev('span').addClass('checked');
    else $(this).prev('span').removeClass('checked');
  });
}

function customFormUpdate(obj){
  obj.find('select.styled:enabled').change(function(){
    $(this).prev('span').text($(this).find('option:selected').html());
  });

}

function loadElements(obj){
  obj.find(':checkbox.styled,:radio.styled').each(function(){
    var s=$('<span>');
    s.addClass($(this).attr('type'));
    if($(this).is(':checked'))s.addClass('checked');
    if($(this).is(':disabled'))s.addClass('disabled');
    $(this).before(s);
  })
  .change(clearRadiosAndCheckboxes);

  obj.find('select.styled').each(function(){
    var s=$('<span>');
    s.addClass($(this).attr('styled')).text($(this).val());
    if($(this).is(':disabled'))s.addClass('disabled');
    $(this).before(s).css('width', s.outerWidth()+"px"); 
	$(this).prev('span').text($(this).find('option:selected').html());       
  }).filter(':enabled').change(function(){
    $(this).prev('span').text($(this).find('option:selected').html());
  });
  

  obj.on('click','span.radio:not(.disabled),span.checkbox:not(.disabled)',function(){
    var e = $(this).next(':input');
    var status = e.prop('checked');
    if (status) {
      $(this).removeClass('checked');
      e.prop('checked',false);
    } else {
      $(this).addClass('checked');
      e.prop('checked',true);
    }
    e.trigger('change');

  });

  
}

$(function(){ 
	loadElements($(document)); 
	$(document).mouseup(clearRadiosAndCheckboxes()); 
});

