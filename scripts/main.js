var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc !== 'images/02-dress.jpg') {
        myImage.setAttribute('src', 'images/02-dress.jpg');
    }
}

var mybut = document.querySelector('button');
var myhead = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myhead.textContent = 'You are cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myhead.textContent = 'You are cool, ' + storedName;
  }
  mybut.onclick = function() {
    setUserName();
  }