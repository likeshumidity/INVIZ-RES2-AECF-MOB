$(document).ready(function() {
  $.get("content/stateList.csv", function(data) {
    var html = '<form role="form">';
    html += '<div class="form-group">';
    html += '<label for="selectState">Select a state:</label>';
    html += '<select id="selectState" class="form-control">';

    var rows = data.split("\n");

    rows.forEach( function getvalues(rowState) {
// <option value="MD">Maryland</option>
      html += '<option value="' + rowState[1] + '">' + rowState[0] + '</option>';
    });

    html += '</select>';
    html += '</div>';
    html += '</form>';

    $("#formStateSelection").html(html); 
  });
});
