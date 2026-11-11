
// THE DOM - Selection, CHANGE, CREATE, REMOVE 

const title = document.querySelector("#title") //first match
console.log(title.textContent)
title.textContent = 'Title Changed'

// create

const p = document.createElement('p')
p.textContent = "I'm a new paragraph - To be removed later"
p.style.color = "green"

document.querySelector(".card").append(p)

p.remove()


// theme button 
const themeBtn = document.querySelector('#theme-toggle')

themeBtn.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark") //true
    console.log(isDark)
    applyTheme(isDark)
    //creating and saving local storage
    localStorage.setItem("theme",isDark ? "dark": "light")

})
function applyTheme(isDark){
    document.body.classList.toggle("dark", isDark);
    themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark mode"
}

//local storage
const savedTheme = localStorage.getItem("theme") === "dark"
applyTheme(savedTheme)


//EVENTS & DELEGATION



function addList(){
    const list = document.querySelector("#delegation-list")
    const li = document.createElement('li')
    li.textContent= "Last Item"
    const button = document.createElement("button")
    button.textContent = 'Delete'
    button.className = "delete btn-small"
    li.append(button)
    list.append(li)
}

document.querySelector('#click-me').addEventListener('click', () => {
    addList()
})

document.querySelector("#delegation-list").addEventListener('click',(event) => {
    if(event.target.matches(".delete")){
        event.target.closest("li").remove()
    }
})



//DIVS - containers
// list.innerHTML = `
// <ol>
// <li>ORANGES</li>
// <li>mANGOES</li>
// <li>APPLES</li>
// <li>PINEAPPLE</li>
// </ol>
// `


//FORMS

const form = document.querySelector('#note-form')
const input =  document.querySelector('#note-input')
const notesList = document.querySelector('#notes') // ul

form.addEventListener("submit", (e) => {
    e.preventDefault()  //to prevent refreshing

    const text = input.value
    console.log(text)
    if (!text) return;
    // add to the list 
    addNote(text)
    form.reset()

})

function addNote(text){
    const li = document.createElement('li')
    li.textContent = text
    notesList.append(li)
    success()
}

function success(){
    const p = document.createElement('p')
    p.textContent = 'Added Successfully'
    p.style.color = 'green'
    document.querySelector('#s').append(p)

    setTimeout(() => {
        p.remove()
    }, 5000);
}

// 7. 
// API  - application programming Interface
// https://jsonplaceholder.typicode.com/users
// GET - fetching 

const usersBtn = document.querySelector('#load-users')
const usersEl = document.querySelector('#users')
const usersStatus = document.querySelector('#users-status')
// load users -
// asynchronous functions 
async function loadUsers(){
//  usersEl.innerHTML=''
 usersBtn.disable =true;
 
 const response = await fetch("https://jsonplaceholder.typicode.com/users")
//  not okay --end it here
const users = await response.json() //array/object
 renderUsers(users)
 console.log(users)
return users
}


usersBtn.addEventListener('click',loadUsers)
//render - display
function renderUsers(users){
    usersEl.innerHTML = '' //clear
    users.forEach((user) => {
        const card = document.createElement("div")
        card.className = 'user-card'

        const h3 = document.createElement("h3")
        h3.textContent = user.name 
        
        const email = document.createElement("p")
        email.textContent = user.email

        const phone = document.createElement("p")
        phone.textContent = user.phone

        const address = document.createElement("p")
        address.textContent = user.address?.street ?? "No street"

        card.append(h3, email, phone, address)
        usersEl.append(card)
    })

}



// PUT/PATCH - EDITING OR UPDATING 
// POST - ADD/CREATING 
// DELETE - DELETING