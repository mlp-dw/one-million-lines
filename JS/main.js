jQuery(document).ready(function($){

$("#open").click(function(){
    $("header nav").addClass("open");
});

$("#close").click(function(){
    $("header nav").removeClass("open");
});
});