// check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "li span", function(evnt){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  evnt.stopPropagation();
});

$("input[type='text']").keypress(function(evnt){
  if(evnt.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span>X</span> "+todoText+"</li>")
  }
})