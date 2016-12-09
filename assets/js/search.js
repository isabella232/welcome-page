$(document).ready(function () {
  $('#searchsubmit').on('click', function () {
    var searchInput = $('#textinput').val();
    var url = "http://xtupleuniversity.xtuple.com/search/gss/" + searchInput;
    window.open(url);
  });
});