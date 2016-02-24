function encodeImageFileAsURL(cb) {
  return function() {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      cb(reader.result);
    }
    reader.readAsDataURL(file);
  }
}

$('#inputFileToLoad').change(encodeImageFileAsURL(function(base64Img) {
  console.log(base64Img);
  $('main').find('img').attr('src', base64Img)}));
