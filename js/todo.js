$(document).ready(function(){
  // call functions here
  submitForm();

});

// define functions here

function submitForm(){
  $('form').on('submit', function(event){
    var listItem = $('#item').val();
    $('ol').append( '<li>' + listItem + '</li>' );
    event.preventDefault();
  });
}
