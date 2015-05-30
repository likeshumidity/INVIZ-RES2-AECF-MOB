//d3.select('#rankNavImg').style('display', 'none');

var svg = d3.select('#rankingSelector').append('svg')
  .attr('width', '100%')
  .attr('height', '450')
  .attr('viewbox', '0 0 290 450');

/*        var selectionUpdateState = function() {
            var selection = document.getElementById('selectState').value;
            
            mapSelectionToggle(selection);
            console.log(selection);
        }
        
        var mapSelectionToggle = function(selectionNew) {
            $(".selectedState").removeClass('selectedState');
            $("#" + selectionNew).addClass('selectedState');

            
        }
        
        var RS = d3.select('#rankingSelector');

        var RSsvg = RS.append('svg')
          .attr('width', "100%")
          .attr('height', "450px")
          .attr("viewbox", "0 0 290 450");
        
        RSsvg.append('rect')
          .attr('width', 290)
          .attr('height', 450)
          .style('fill', '#BBBBBB');

*/
//        var stateListCSV = d3.csv('content/stateList.csv', function(error, data) {
//            data.forEach(function(d) {
//                console.log(d.Name);
//            }
//        });
        

// <svg width="200px" height="400px" viewbox="0 0 200 400">
//            <rect width="200" height="400" style="fill:rgb(0,0,255);" />
//        </svg>            
//        d3.select('#rankingSelector')
//          .enter().append('svg')
//          .style('width: 100%;');
    
