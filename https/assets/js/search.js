$(document).ready(function () {
  $('#searchsubmit').on('click', function () {
    var searchInput = $('#textinput').val();
    var url = "https://xtupleuniversity.xtuple.com/search/gss/" + searchInput;
    window.open(url);
  });
});