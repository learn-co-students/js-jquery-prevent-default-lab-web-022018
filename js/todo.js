$(document).ready(function(){
  // call functions here
  submitForm()
});

// define functions here
function submitForm(){
  $('form').on("submit", function(event){
    event.preventDefault();
    $("ol").append('<li>'+event.target[0].value+'</li>')
  })
}


// $(document).ready(function(){
//   submitForm();
// });
//
// function submitForm(){
//   $('form').on('submit', function(event){
//     var listItem = $('#item').val();
//     $('ol').append( '<li>' + listItem + '</li>' );
//     event.preventDefault();
//   });
// }
