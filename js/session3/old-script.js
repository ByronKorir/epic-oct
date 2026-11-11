


// Select by ID
const title = document.getElementById('title');
// console.log(title.textContent)


// Select by Class (returns HTMLCollection)
const texts = document.getElementsByClassName('text');
// console.log(texts)
// Select by Tag Name
const paragraphs = document.getElementsByTagName('p'); //<p></p> <div></div>

// Select by CSS Selector (first match)
const firstText = document.querySelector('.text'); // mostly used
console.log(firstText.textContent)


// Select by CSS Selector (all matches)
const allTexts = document.querySelectorAll('.text');
allTexts.forEach((p)=> console.log(p.textContent))
// Modern methods
const list = document.querySelector('#list');
// const items = list.querySelectorAll('li');

// INNSERT OR CREATE 
const main = document.querySelector("#main")
console.log("main",main)
//create
const p = document.createElement("p")
p.textContent = "This is the new paragraph"
p.className = "para"
main.append(p)

//remove 

firstText.remove()

