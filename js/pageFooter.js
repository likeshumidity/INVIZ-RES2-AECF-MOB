$(document).ready(function() {
  $.get("content/pageFooter.html", function(data) {
    $("#pageFooter").html(data); 
  });
});
