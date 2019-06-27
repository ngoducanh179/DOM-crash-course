var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');
// form sub event 

form.addEventListener('submit', additem);

//Delete event

itemlist.addEventListener('click', remove);

//filter event

filter.addEventListener('keyup', filteritem);


// add items

function additem(e) {
  e.preventDefault();

  // // console.log(1);
  var newitems = document.getElementById('item').value;
  // console.log(newitems);

  //create new li elememt

  var li = document.createElement('li');
  li.className = 'list-group-item';
  // console.log(li); 

  li.appendChild(document.createTextNode(newitems));



  // create button for delete \

  var deleteBtn = document.createElement('button');

  //add classes to del button
  deleteBtn.className = ' btn btn-danger btn-sm float-right delete';

  // append text node

  deleteBtn.appendChild(document.createTextNode('x'));

  //appel button to li

  li.appendChild(deleteBtn);



  itemlist.appendChild(li);




}

// add id for button


function remove(e) {

  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement;
      itemlist.removeChild(li);
    }
  }
}

function filteritem(e) {
  var text = e.target.value.toLowerCase();
}