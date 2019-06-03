var myHeading = document.querySelector('h1');
myHeading.onclick = function() {
    myHeading.textContent = "Let's go running!";
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/running-through-forest.jpg') {
      myImage.setAttribute ('src','images/running-in-sunset.jpg');
    } else {
      myImage.setAttribute ('src','images/running-through-forest.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name:');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Join my running community, ' + myName + " !";
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Join my running community, ' + storedName + " !";
  }

  myButton.onclick = function() {
    setUserName();
  }