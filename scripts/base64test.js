(function(module) {
  var base64test= {};

  function encodeImageFileAsURL(cb) {
    return function() {
      var file = this.files[0];
      var reader = new FileReader();
      reader.onloadend = function() {
        cb(reader.result);
      };
      reader.readAsDataURL(file);
    };
  }

  base64test.handle = function () {
    $('#inputFileToLoad').change(encodeImageFileAsURL(function(base64Img) {
      console.log(base64Img);
      $('#emergenecy-info').find('img').attr('src', base64Img)}));
  };
    module.base64test = base64test;
})(window);
