// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

//console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//c//onsole.log(document.all);
//console.log(document.all[10]);
//document.all[1].textContent = 'hello';
//console.log(document.forms);

//console.log(document.getElementById('header-title'));

//var take = document.getElementById('header-title');
//console.log(take);
//  take.textContent = 'hello';
//  take.innerText = 'goodbye';
//take.innerHTML = '<h3> Hello </h3>';
// var items = document.getElementsByClassName('list-group-item');

// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello';
// items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'yellow';


// for(var i = 0 ; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// var take = document.querySelector('#main-header');
// take.style.boderBottom = 'solid 4px #ccc';
// var take2 = document.querySelector('input');

// take2.value = 'Hello world';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send';
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var cd2 = document.querySelector('.list-group-item:nth-child(2)');
// cd2.style.color = 'red';

// var title = document.querySelectorAll('title');

// console.log(title);

// title[0].textContent = 'hello';


// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.background = '#f4f4f4';
// }

// TRAVELSING DOM //

// var take = document.querySelector('#items');

//parentnode 

// console.log(take.parentNode);
// take.parentNode.style.background = '#f4f4f4';
// console.log(take.parentNode.parentNode);
//parentElement
// console.log(take.parentElement);
// take.parentElement.style.background = '#f4f4f4';
// console.log(take.parentElement.parentElement);

// childNodes

// console.log(take.childNodes);

// // chilren 

// // console.log(take.children);
// // take.children[1].style.backgroundColor = 'black';

// //traversing the dom //

// var take = document.querySelector('#items');
// //parentnode 
// // console.log(take.parentNode);
// // take.parentNode.style.backgroundColor = 'black';

// // console.log(take.parentNode.parentNode);
// //parentElement
// // console.log(take.parentElement);
// // take.parentElement.style.backgroundColor = 'black';

// // console.log(take.parentElement.parentElement);

// chilren 

// // console.log(take.children);
// // take.children[1].style.backgroundColor = 'black';

// //traversing the dom //

// var take = document.querySelector('#items');
// //parentnode 
// // console.log(take.parentNode);
// // take.parentNode.style.backgroundColor = 'black';

// // console.log(take.parentNode.parentNode);
// //parentElement
// // console.log(take.parentElement);
// // take.parentElement.style.backgroundColor = 'black';

// // console.log(take.parentElement.parentElement);


// // childNode
// // console.log(take.childNodes);

// // console.log(take.children);

// // console.log(take.children[1]);
// // take.children[1].style.backgroundColor = 'yellow';

// // //firstChild    

// // console.log(take.firstChild);
// //firstElementChild 

// // console.log(take.firstElementChild);
// // take.firstElementChild.innerHTML = 'hello';

// // //LastElementChild 

// // console.log(take.lastElementChild);
// // // take.lastElementChild.innerHTML = 'hello';

// // console.log(take.nextSibling);

// // console.log(take.nextElementSibling);

// // privious sibling

// console.log(take.previousSibling);

// //privios Element sibing

// console.log(take.previousElementSibling);

// take.previousElementSibling.style.color = 'green';

// //createElement 



// // create a div

// var div2 = document.createElement('div');

// // Add  className
// div2.className = 'hello';
// // Add Id
// div2.id = 'take2';

// //Add attr 
// div2.setAttribute('title','hello div');

// div2.setAttribute('id','thanks');

// //create text node

// var newdivtext = document.createTextNode('thank');

// //add text to div
// div2.appendChild(newdivtext);


// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header .h1');


// console.log(div2);

// container.insertBefore(div2,h1 );   

// // childNode
// // console.log(take.childNodes);

// // console.log(take.children);

// // console.log(take.children[1]);
// // take.children[1].style.backgroundColor = 'yellow';

// // //firstChild    

// // console.log(take.firstChild);
// //firstElementChild 

// // console.log(take.firstElementChild);
// // take.firstElementChild.innerHTML = 'hello';

// // //LastElementChild 

// // console.log(take.lastElementChild);
// // // take.lastElementChild.innerHTML = 'hello';

// // console.log(take.nextSibling);

// // console.log(take.nextElementSibling);

// // privious sibling

// console.log(take.previousSibling);

// //privios Element sibing

// console.log(take.previousElementSibling);

// take.previousElementSibling.style.color = 'green';

// //createElement 



// // create a div

// var div2 = document.createElement('div');

// // Add  className
// div2.className = 'hello';
// // Add Id
// div2.id = 'take2';

// //Add attr 
// div2.setAttribute('title','hello div');

// div2.setAttribute('id','thanks');

// //create text node

// var newdivtext = document.createTextNode('thank');

// //add text to div
// div2.appendChild(newdivtext);


// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header .h1');


// console.log(div2);

// container.insertBefore(div2,h1 );   


var button = document.getElementById('button').addEventListener
('click',buttonClick);


function buttonClick(e){
    // console.log('button click');
    // document.getElementById('header-title').textContent = 'changed';
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    // // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id+'</h3>';

    // console.log(e.type);
    // console.log(e.clientX);
    // console.log(e.clientY);

    console.log(e.offsetX);


}




