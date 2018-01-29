var height = $("#input_height");
var width = $("#input_width");
var canvas = $("#pixel_canvas");
var gridCreator = $("#sizePicker");

function defineGrid(e) {
  e.preventDefault();
  $("tr").remove();
  $("td").remove();
  $(height).attr("value", $(height).val());
  $(width).attr("value", $(width).val());
  var rows = $(height).val();
  var columns = $(width).val();
  makeGrid(rows, columns);
};

function makeGrid(rows, columns) {
  for (var i = 0; i < rows; i++) {
    $(canvas).append("<tr></tr>");
    for (var j = 0; j < columns; j++) {
      var row = $("tr")[i];
      $(row).append("<td></td>");
    };
  };
};

function addColor() {
  var color = $("#colorPicker").val();
  $(this).css("background-color", color);
}

$(gridCreator).submit(defineGrid);

$(canvas).on('click', 'td', addColor);
