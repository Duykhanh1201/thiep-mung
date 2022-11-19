
var to = 'Huyen Chenggg!';
var gift_url = 'https://www.instagram.com/_huynchengg.2011_/';
var gift_image_url = 'https://i.pinimg.com/564x/36/3c/59/363c59a689dcacab0be6eeae8727738c.jpg';
var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('car-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

