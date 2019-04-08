$("#ratingSlider").change(
  function(event) {
    $("#ratingValue").text(this.value);
  }
);

$("#submission").submit(
  function(event) {
    event.preventDefault();
    var vals = compressValues($("#submission"));
    alert(JSON.stringify(vals));
    postSubmission(vals);
  }
);

function compressValues(form) {
  var vals = jQuery(form).serializeArray();
  var json = {};

  jQuery.each(vals, function() {
      json[this.name] = this.value;
  });
  return json;
};

function postSubmission(vals) {
  $.ajax({
      url: 'http://pi.matthewkerber.com',
      dataType: 'text',
      type: 'post',
      contentType: 'application/json',
      data: vals,
      success: function() {
        alert("success");
      },
      error: function() {
        alert("error");
      }
  })
};

//Future Useful Functions~~~~~~~
/*
$.getJSON
*/
