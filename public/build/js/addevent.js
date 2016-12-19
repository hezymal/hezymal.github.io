$("#formaddevent").submit(function() {
  var data = $(this).serialize();
  $.ajax({
    type: "POST",
    url: "addevent.php",
    data: data,
    success: function() {
      alert('Ваше сообщение отправлено');
    },
    error: function() {
      alert('Ваше сообщение не отправлено');
    }
  });
  return false;
}); 