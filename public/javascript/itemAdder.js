
const button = document.getElementById('itemAdder-button');
const createButton = document.getElementById('create-button');

const html = '<div class="item-container"><input type="text" name="" id="" placeholder="Item"><input type="number" name="" id="" placeholder="price"><div><input type="checkbox" name="user2" id="user1" value="user1"><label for="user1">User 1</label></div><div><input type="checkbox" name="user2" id="user2" value="user2"><label for="user2">User 2</label></div><div><input type="checkbox" name="user3" id="user3" value="user3"><label for="user3">User 3</label></div></div>';

button.addEventListener('click', () =>{
  createButton.insertAdjacentHTML('beforebegin', html);
});
