let myTodo = ["Do Homework", "Walk the Dog", "Push code"]
let myStatus = false
let myID = 0
let myCategory = ["DGM3760", "Home", "Work"]
let myDueDate = Date()


let submitBtn = document.getElementById('submitButton')

let newTodo = document.getElementById('todo')

//let newCategory = document.getElementById('category')

//Edit todos function
function editTodo() {}

//Edit Status function
function editStatus() {}

//Edit Category function
function editCategory() {}

//Edit Due Date function
function editDueDate() {}

//Complete Todo function
function completeTodo() {}

//Delte Todo function
function deleteTodo() {}

//Delete Category function
function deleteCategory() {}

//Add New Todo function
submitBtn.addEventListener('click', addTodo)

function addTodo() {
    newTodo = document.getElementById('todo').value
    if(newTodo == '') {
        alert("Please enter a todo")
        
    } else { myTodo.push(newTodo)
         console.log(myTodo) 
        }
}
 
//Add New Category function
submitBtn.addEventListener('click', addCategory)

function addCategory() {
    newCategory = document.getElementById('category').value
    if(newTodo == '') {
        alert("Please add a category")
    } else {
        myCategory.push(newCategory)
        console.log(myCategory)
    }
}