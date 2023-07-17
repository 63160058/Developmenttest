// const divApp = document.getElementById('app');
// divApp.innerText = "Hello Javascript";
// const divApp: HTMLDivElement = document.getElementById('app') as HTMLDivElement
// const inputNumber: HTMLInputElement = document.getElementById('inputNumber') as HTMLInputElement
// const plusButton: HTMLButtonElement = document.getElementById('equalButton') as HTMLButtonElement
// const minusButton: HTMLButtonElement = document.getElementById('notEqualButton') as HTMLButtonElement
// const multiplyButton: HTMLButtonElement = document.getElementById('greaterThanButton') as HTMLButtonElement
// const divideButton: HTMLButtonElement = document.getElementById('greaterThanOrEqualButton') as HTMLButtonElement
// const output: HTMLParagraphElement  = document.getElementById('output') as HTMLParagraphElement
// // divApp.innerText = "Hello Typescript"
// plusButton.addEventListener('click', function() {
//     const value = +inputNumber.value;
//     const result = value == 10
//     output.innerText = result.toString();

// }

// )
// minusButton.addEventListener('click', function() {
//     const value = +inputNumber.value;
//     const result = value != 10
//     output.innerText = result.toString();

// }

// )
// multiplyButton.addEventListener('click', function() {
//     const value = +inputNumber.value;
//     const result = value > 10
//     output.innerText = result.toString();

// }

// )
// divideButton.addEventListener('click', function() {
//     const value = +inputNumber.value;
//     const result = value >= 10
//     output.innerText = result.toString();

// }
// )
// const person = {
//     name: "John",
//     age: 30,
//     address: {
//         street: "50 Main St",
//         city: "Boston",
//         country: "USA"
//     },
//     hobbies: ["music", "movies", "sports"]
//     }
//     console.log(person.address.country);
// interface Address {
//     street: string,
//     city: string,
//     coutnry: string
// }
// interface Person {
//     name: string,
//     age: number,
//     address: Address,
//     hobbies: string[]
// }
// const person: Person = {
//     name: "John", age: 30, address: { city: "Boston", coutnry: "USA", street: "a" }, hobbies: ["music", "movies", "sports"]
// }
// console.log(person.address.city);

// function add(number1: number, number2: number){
//     return number1 + number2;
// }
// function log(message: string | number){
//     return message;
// }
// function DisplayDetail(person: Person):string{
//     return 'name='+person.name +',\nage=' + person.age + ',\naddress=' + person.address.city + "," + person.address.coutnry + "," + person.address.street + ' \nhobbies=' + person.hobbies.join(',');
// }
// console.log(DisplayDetail(person));

// const addresses: Address[] = [
//     { street: 'a', city: 'b', coutnry: 'c' },
//     { street: 'a', city: 'b', coutnry: 'c' },
//     { street: 'a', city: 'b', coutnry: 'c' },
//     { street: 'a', city: 'b', coutnry: 'c' }
// ];
// interface Menu {

// }
// const n: number=10
// const s: string="text"
// const b: boolean=true
// const array: number[]= [1,2,3]
// const array2: number[] = [1,2,3]    
const div= document.getElementById('exercise1') as HTMLDivElement




interface Menu {
    name: string 
    subMenu: SubMenu[]
  }
   
  interface SubMenu {
    name: string
  }
   
  const menus: Menu[] = [
    {
      name: 'Home',
      subMenu: [],
    },
    {
      name: 'About',
      subMenu: [
        {
          name: 'Company',
        },
        {
          name: 'Team',
        },
      ],
    },
    {
      name: 'Products',
      subMenu: [
        {
          name: 'Electronics',
        },
        {
          name: 'Clothing',
        },
        {
          name: 'Accessories',
        },
      ],
    },
    {
      name: 'Services',
      subMenu: [],
    },
    {
      name: 'Contact',
      subMenu: [
        {
          name: 'Phone',
        },
      ],
    },
    {
      name: 'Blog',
      subMenu: [],
    },
    {
      name: 'Gallery',
      subMenu: [
        {
          name: 'Photos',
        },
        {
          name: 'Videos',
        },
        {
          name: 'Events',
        },
      ],
    },
    {
      name: 'FAQ',
      subMenu: [],
    },
    {
      name: 'Downloads',
      subMenu: [
        {
          name: 'Documents',
        },
        {
          name: 'Software',
        },
      ],
    },
    {
      name: 'Support',
      subMenu: [
        {
          name: 'Help Center',
        },
        {
          name: 'Contact Us',
        },
        {
          name: 'Knowledge Base',
        },
      ],
    },
  ];
  const ul = document.createElement('ul')
    for(let i=0;i<menus.length;i++){
        const li = document.createElement('li')
        li.innerText = menus[i].name
        ul.appendChild(li)
        if(menus[i].subMenu.length>0){
            const ul2 = document.createElement('ul')
            for(let j=0;j<menus[i].subMenu.length;j++){
                const li2 = document.createElement('li')
                li2.innerText = menus[i].subMenu[j].name
                ul2.appendChild(li2)
            }
            li.appendChild(ul2)
        }
    
    }
    div.appendChild(ul)
    
export {}