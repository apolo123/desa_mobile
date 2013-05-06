//esperando que el dispositivo este listo
document.addEventListener("deviceready",onDiviceReady,false);


//phonegap esta listo
function onDiviceReady (){
   navigator.notificacion.alert("phonegap esta listo para ejecutarse",function(){
	   
   },"Biomedica","Aceptar");
}


/*
$(function(){
  $('#btn_busca').click(function(){
     var responce=$.ajax({
	     type:"post",
		 url:"",
		 dataType:"json",
		 data:{},
		 success: function(){
		 
		 },
		 error: function(){
		 
		 }
	 });
  });
});
*/