$(document).ready(function(){
 $('.enlace').click(function(){
  valor = $(this).attr('data-nombre');
 if(valor == "todos"){
  $('.filtro').show(100); 
 }else{
   $('.filtro').not('.' + valor).hide(100); 
   $('.filtro').filter('.' + valor).show(100); 
 }

  $('ul .enlace').click(function(){
    $(this).addClass('activo').siblings().removeClass('activo');
  })

 })
})