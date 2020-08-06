var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit',addItem);
// Delete Item
itemList.addEventListener('click',removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add Item
function addItem(e){
    e.preventDefault();

    // Get Input Value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');

    // Add Class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text Node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
    // Removes the element showing "No Items Added"
    var firstli = document.getElementById('firstli');
    firstli.style.display = 'none';
}

// Remove Items
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get List
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}