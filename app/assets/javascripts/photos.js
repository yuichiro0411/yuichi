$(document).on('turbolinks:load', function(){
  function changeNewPhoto(){
    var newPhoto = `<div class=newPhotos>
                      <img src='DSC_1158.JPG'>
                    </div>`
    $('.photos').remove();
    $('.photos').append(newphoto);
  };
  $('.photos1').on('click','.photos1', function(){
  	changeNewPhoto
  });
});