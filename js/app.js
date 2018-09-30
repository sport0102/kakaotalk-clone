$(document).ready(function () {
  var $actionBtn = $('#actionBtn'),
    $iconBtn = $('#actionBtn .fa'),
    $lockbtn = $('#lockBtn')
  $actionBtn.click(function () {
    $iconBtn.toggleClass('fa-times fa-comment')
    $lockbtn.toggleClass('showing-button')
  })
})
