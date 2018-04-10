$(document).ready(function(){

  function submit(){

  }

  function onSubmit(event){
    event.preventDefault();
    let item = $('#item').val();
    let listItem = document.createElement("li");
    listItem.innerText = item;
    $('ol').append(listItem);
  }

  $('form').on('submit', onSubmit);
});
//
// function submit(){
//   $('form').on('submit', function(event) {
//     let item = $('#item').val();
//     let listItem = document.createElement("li");
//     listItem.innerText = item;
//     $('ol').append(listItem);
//   }
// }




// function onSubmit() {
//   $('form').on('submit', )
// }
//
// function onSubmit(event){
//   let task = $('#task').val();
//   $('ol').appendChild(task);
//   event.preventDefault();
// }
