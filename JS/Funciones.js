function ClearSearch() {
$("#search").val('');
setTimeout(function() {
  $("#search").focus();
}, 10);
}