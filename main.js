$(document).ready(function () {
  $("#definicje .rozwijanie").click(function () {
    $(this).next().slideToggle("slow");
  });

  $("h4").css("cursor", "pointer");
});
