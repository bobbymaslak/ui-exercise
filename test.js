$(document).ready(function(){
  $('#sidebar').click(function(e){
    e.preventDefault();
    console.log('dupa');
    $('#section').toggleClass('noSidebar');
  });
});
