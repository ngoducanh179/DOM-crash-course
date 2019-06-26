var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');


// form sub event 

form.addEventListener('submit', additem);

// add items

function additem(e) {
  e.preventDefault();

  console.log(1);
}