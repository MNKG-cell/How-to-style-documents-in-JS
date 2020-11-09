Nayebare Maureenconsole.log('Hello World!');
//This is for the first and last Children of the div parent//
var divElement=document.getElementById('container');
divElement.firstElementChild.style.color='red';
divElement.lastElementChild.style.color='brown';
//This is for selecting the second child of a parent//
var divEle=document.getElementById('maintain');
divEle.children[1].style.color='purple';
