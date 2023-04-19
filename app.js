const tasks = [
    {id:1,name:'washing utensils'},
    {id:2,name:'cook supper'},
    {id:3,name:'read a book'},
];
const tasksContainer = document.querySelector('.todos')

const createTask = (task)=>{
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('todo')
    let titleElement = document.createElement('p')
    titleElement.innerText = task.name
    const iconContainer = document.createElement('div')
    iconContainer.classList.add('icons')
    const checkButton = document.createElement('span')
    const completedTask = (e)=>{
        e.stopPropagation()
        for(let tsk in tasks){
            if(tasks[tsk].id==task.id){
                checkButton.classList.toggle('check')
                titleElement.classList.toggle('strike')
                // titleElement.style.textDecoration='underline'
            }
            // console.log(task[tsk].id)
        }
    }
    checkButton.addEventListener('click',completedTask)
   
    
    checkButton.innerHTML = `<ion-icon name="checkbox"></ion-icon>`
    const deleteButton = document.createElement('span')
    deleteButton.id = task.id
    deleteButton.classList.add('trash')
    deleteButton.innerHTML = `<ion-icon name="trash"></ion-icon>`
    const deleteItem = (e)=>{
        e.stopPropagation()
        for(let tsk in tasks){
           
            if(tasks[tsk].id==task.id){
                tasks.splice(tsk, 1)
                appendTasks(tasks)
            }
            // if(tasks[tsk].id == task.id){
                
            // }
            
        }
    }
    deleteButton.addEventListener('click',deleteItem)
    
    iconContainer.append(checkButton,deleteButton)
    taskContainer.append(titleElement,iconContainer) 
     
 
    return taskContainer
}

    


const appendTasks= (tasks)=>{
    tasksContainer.innerHTML = ''
    const singleTask = tasks.map(task=>{
        tasksContainer.appendChild(createTask(task))
    })
}
appendTasks(tasks)

const submit_btn = document.getElementById("add");
const input_ele = document.getElementById("input")


//submit new todo handler
const handleSubmit = () => {

      if (input_ele.value.trim() !== "") {
            const new_todo = { id: new Date().toISOString(), name: input_ele.value }
            //adding the todo as the first element
            tasks.unshift(new_todo)
            tasksContainer.innerHTML = ""
            input_ele.value = ""

            //updating the ui to include  the new todo
            appendTasks(tasks)
      }
}


//listening for a click event from the button submit
submit_btn.addEventListener("click", handleSubmit)
