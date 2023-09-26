

const data = document.querySelector('.user-content');
const datas = document.querySelectorAll('.item');


// DOM traversal 


// parent Traversal 

// console.log(data.parentNode);
// console.log(data.parentElement);


//  child traversal

// console.log(data.childNodes); // return the array of the children with text nodes as Nodelist
// console.log(data.children); // return the arrray with only child element of the parent as HtmlCollection
// console.log(data.childElementCount); // return the count of the child element


// sibling traversal 

// console.log(data.nextElementSibling); // return the  previous nearby element in the DOM  
// console.log(data.previousElementSibling); // return next nearby element in the DOM


// append vs appendChild

const div = document.createElement('div');
const li = document.createElement('li');

li.innerText = "Hey The fuck ...";
li.classList.add("item");
li.style.listStyle = 'none';
div.innerText = "Hello How are you ?";
div.classList.add('item');


// data.append(div , li);

const userData = [
    {
        name : "prasanna" , 
        age : 20,
        citizen : "India"
    },
    {
        name : "Jagadesh" , 
        age : 17,
        citizen : "India"
    },
    {
        name : "Krishna" , 
        age : 17,
        citizen : "India"
    },
    {
        name : "Itachi Uchiha " , 
        age : 22,
        citizen : "Konoha"
    },
    {
        name : "Naruto Uzmaki" , 
        age : 17,
        citizen : "Konoha"
    },
];


const template = (data) => {
    return `
        <div class="item ${data.citizen}"> 
         ${data.name}  ... ${data.age}
        </div> 
    `;
} 

let d = [];

userData.forEach(ele=>{
    d.push(template(ele));
});

// data.appendChild(d.join(''));
data.innerHTML = DOMPurify.sanitize(d.join(''));

console.log(DOMPurify.sanitize(d.join('')));



