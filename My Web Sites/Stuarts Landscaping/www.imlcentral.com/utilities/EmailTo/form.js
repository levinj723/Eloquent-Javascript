
function FORM_CHECK_AjaxObjectGen(){
  if(window.XMLHttpRequest){
    return new XMLHttpRequest();
  }else if(window.ActiveXObject){
    var msxmls=new Array( 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0',  'Msxml2.XMLHTTP.3.0', 'Msxml2.XMLHTTP', 'Microsoft.XMLHTTP');
    for (var i=0; i<msxmls.length; i++){
      try{
        return new ActiveXObject(msxmls[i]);
      }catch(e){
      }
    }
  }
  throw new Error("Could not instantiate XMLHttpRequest");
}  



function FORM_CHECK_encodeUTF8(string){
        string=new String(string);
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if(string.charAt(n)=="+") utftext += "%2b";
            else if (c < 128) utftext += escape(string.charAt(n));
            else utftext += "%26%23"+c+"%3b";
        }
        return utftext;
}


var FORM_CHECK_cp1251=[0x82,  0x201A,0x84,  0x201E,0x85,  0x2026, 0x86 , 0x2020,0x87,  0x2021,0x88 , 0x20AC,0x91 , 0x2018,0x92,  0x2019, 0x93,  0x201C,0x94,  0x201D, 0x95,  0x2022, 0x96,  0x2013, 0x97,  0x2014, 0x98,  0x0020, 0x99,  0x2122];
function FORM_CHECK_encodeCl1251(str){

  var out="";
  str=new String(str);
  for(i=0; i<str.length; i++){
    if(str.charCodeAt(i)<=127) out=out+str.charAt(i);
    else{
      for(j=1; j<FORM_CHECK_cp1251.length; j+=2){
        if(str.charCodeAt(i)==FORM_CHECK_cp1251[j]){
          out=out+String.fromCharCode(FORM_CHECK_cp1251[j-1]);
        }
      }
    }
  }
  return escape(out);
}


function FORM_CHECK_getTagValue(node,tag){
  var result="";
  if(node){
    if(node.getElementsByTagName(tag)){
      var first_tag=node.getElementsByTagName(tag)[0];    
      if(first_tag){
        var x=first_tag.childNodes;  
        for(var i=0; i<x.length; i++) result=result+x[i].nodeValue;     
      }
    }
  }  
  return result;
}

function el(id){ return document.getElementById(id);}


function FormObject(ID){
  this.FormID=ID;
  this.FormName="";
  this.ProcessURL="";
  this.EmailID="";
  this.OnSubmit=null; 
  this.getID=new FORM_CHECK_AjaxObjectGen();
  this.submitForm=new FORM_CHECK_AjaxObjectGen();  
  this.submitFormTracking=new FORM_CHECK_AjaxObjectGen();  
  var instance=this;
  this.getID.open('GET', "proxy.iml?PROXYURL=https://www.imlcentral.com/utilities/EmailTo/form.iml&FormID="+this.FormID+"&"+Date(), true);
  this.getID.onreadystatechange=function(){
    if(instance.getID.readyState==4){
        var rxml=instance.getID.responseXML;
        instance.FormName=FORM_CHECK_getTagValue(rxml,'formname');
        instance.ProcessURL=FORM_CHECK_getTagValue(rxml,'processurl');
        instance.EmailID=FORM_CHECK_getTagValue(rxml,'emailid');
        if(instance.EmailID*1>0){        
          instance.OnSubmit=document.forms[instance.FormName].onsubmit;
          document.forms[instance.FormName].onsubmit=function(){return instance.sendForm();};
        }else{
          var rm=document.forms[instance.FormName];
           rm.parentNode.removeChild(rm);
        }
    }
  }
  this.getID.send(null);  
}

FormObject.prototype.sendForm=function(){
 var sendNow=1;
 if(this.OnSubmit!=null){
      sendNow=this.OnSubmit();
 }
 if(sendNow==1){
  var instance=this;
  var parameters;
  var submitURL="proxy.iml";
  if(this.ProcessURL.indexOf("http")==0){
     parameters="PROXYURL="+this.ProcessURL+"&EmailID="+this.EmailID;
  }else{
    submitURL=this.ProcessURL;
    parameters="EmailID="+this.EmailID;
  }
  var x=document.forms[instance.FormName].getElementsByTagName("*");
  for(var i=0; i<x.length; i++){  
    var name=""; var val="";
    if(x[i].nodeName=='INPUT'){
      if(x[i].type=="checkbox"||x[i].type=="radio"){
        if(x[i].checked) name=x[i].name; val=x[i].value;
      }else  name=x[i].name; val=x[i].value;
    }
    if(x[i].nodeName=='SELECT'){
       name=x[i].name;        
       if(x[i].selectedIndex>=0) val=x[i].options[x[i].selectedIndex].value;
    }
    if(x[i].nodeName=='TEXTAREA'){
       name=x[i].name; val=x[i].value;
    }
    if(name!=""){
      if(parameters=="") parameters=name+"="+FORM_CHECK_encodeUTF8(val);
      else parameters=parameters+"&"+name+"="+FORM_CHECK_encodeUTF8(val);
    }
  }

  var trackingParameters="PROXYURL=https://www.imlcentral.com/utilities/EmailTo/form_tracking.iml&EmailID="+this.EmailID;
  this.submitFormTracking.open('POST', 'proxy.iml', true);
  this.submitFormTracking.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=ISO-8859-1");
  this.submitFormTracking.setRequestHeader("Content-length", trackingParameters.length);
  this.submitFormTracking.setRequestHeader("Connection", "close");
  this.submitFormTracking.send(trackingParameters);

  this.submitForm.open('POST', submitURL, true);
  this.submitForm.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=ISO-8859-1");
  this.submitForm.setRequestHeader("Content-length", parameters.length);
  this.submitForm.setRequestHeader("Connection", "close");
  this.submitForm.onreadystatechange=function(){
    if(instance.submitForm.readyState==4){
      document.forms[instance.FormName].submit();
    }
  }
  this.submitForm.send(parameters);
 }
 return false;
}



