// The function is used to get list items from input box
function todoList() { 
   let item = document.getElementById("todoInput").value
   let text = document.createTextNode(item)
   let error = document.getElementById("error")
   if (item === "") {
      // here displays a paragraph if no list item added
      error.textContent = "PLEASE DON'T LEAVE IT EMPTY!!!!";
     


   } else {
      //remove previous error
      error.textContent = "";
      let newItem = document.createElement("li")

      newItem.appendChild(text)
      //It writes HTML code append li
      document.getElementById("todoList").appendChild(newItem)
      //Here a paragraph disappears when list item added.
   }
 // it clears the input field
   document.getElementById("todoInput").value = "";

}
// This function is used to delete list items from input
function removeFromList() {
   let list = document.getElementById("todoList");
   list.removeChild(list.childNodes[0]);
}

function onInput(event){
   if(event.key==="Enter"){
      todoList()
   }

     
} 

let inputField = document.getElementById("todoInput")
inputField.addEventListener("keypress", onInput)