$(document).ready(function() {
  $.get("content/stateList.csv", function(data) {
    var html = '<form role="form">';
    html += '<div class="form-group">';
    html += '<label for="selectState">EXPLORE THE DATA</label>';
    html += '<select id="selectState" class="form-control" onchange="selectionUpdateState();">';

    var rows = data.split("\n");

    rows.forEach( function getvalues(rowState) {
      cols = rowState.split(',');
//      console.log(cols[1] + ' - ' + cols[0]);
      if ((cols[0] != 'Name') && (cols[0].length > 0)) {
        html += '<option value="' + cols[1] + '">' + cols[0] + '</option>';
      }
    });

    html += '</select>';
    html += '</div>';
    html += '</form>';

    $("#formStateSelection").html(html); 
  });
});
