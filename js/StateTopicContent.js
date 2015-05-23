$(document).ready(function() {
  $.get("content/mdEconomy.html", function(data) {
    $("#StateTopicContent").html(data); 
  });
});
