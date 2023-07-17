const div = document.getElementById('exercise1') as HTMLDivElement

interface Question {
    question: string;
    choices: string[];
    correctAnswer: number;
}

const questions: Question[] = [
    {
        question: 'What is the output of the following code?\n\nconsole.log(typeof null);',
        choices: ['"object"', '"null"', '"undefined"', '"boolean"'],
        correctAnswer: 0,
    },
    {
        question: 'Which method is used to add one or more elements to the end of an array?',
        choices: ['push()', 'join()', 'slice()', 'concat()'],
        correctAnswer: 0,
    },
    {
        question: 'What is the result of the following expression?\n\n3 + 2 + "7"',
        choices: ['"327"', '"12"', '"57"', '"NaN"'],
        correctAnswer: 2,
    },
    {
        question: 'What is the purpose of the "use strict" directive in JavaScript?',
        choices: ['Enforce stricter type checking', 'Enable the use of modern syntax', 'Enable strict mode for improved error handling', 'Disable certain features for better performance'],
        correctAnswer: 2,
    },
    {
        question: 'What is the scope of a variable declared with the "let" keyword?',
        choices: ['Function scope', 'Global scope', 'Block scope', 'Module scope'],
        correctAnswer: 2,
    },
    {
        question: 'Which higher-order function is used to transform elements of an array into a single value?',
        choices: ['map()', 'filter()', 'reduce()', 'forEach()'],
        correctAnswer: 2,
    },
    {
        question: 'What does the "=== " operator in JavaScript check for?',
        choices: ['Equality of values', 'Equality of values and types', 'Inequality of values', 'Reference equality'],
        correctAnswer: 1,
    },
    {
        question: 'What is the purpose of the "this" keyword in JavaScript?',
        choices: ['Refer to the current function', 'Refer to the parent function', 'Refer to the global object', 'Refer to the object that owns the current code'],
        correctAnswer: 3,
    },
    {
        question: 'What does the "NaN" value represent in JavaScript?',
        choices: ['Not a Number', 'Null', 'Negative Number', 'Not Applicable'],
        correctAnswer: 0,
    },
    {
        question: 'Which method is used to remove the last element from an array?',
        choices: ['pop()', 'shift()', 'slice()', 'splice()'],
        correctAnswer: 0,
    },
];
let number = 0;

const div1 = document.createElement('div')
const br2 = document.createElement('br')




div1.innerText = "Current question:" + number + "/" + questions.length + "";
div.appendChild(div1);
div.appendChild(br2);


for (let i = 0; i < questions.length; i++) {


    const question = questions[i];
    const divQuestion = document.createElement('div');

    const div3 = document.createElement('div');
    divQuestion.innerText = question.question;
    div.appendChild(divQuestion);
    const divChoices = document.createElement('div');
    const br3 = document.createElement('br')

    const br4 = document.createElement('br')

    const button = document.createElement('button');
    button.textContent = 'submit';


    div.appendChild(divChoices);
    divChoices.appendChild(br3);
    div.appendChild(button);

    div.appendChild(div3);
    // div.appendChild(br);
    div.appendChild(br4);


    for (let j = 0; j < question.choices.length; j++) {

        const choice = question.choices[j];

        const divChoice = document.createElement('div');
        const option1 = document.createElement('input');
        option1.type = 'radio';
        option1.name = 'question' + i;
        option1.value = choice;
        divChoice.appendChild(option1);
        const span = document.createElement('span');
        span.textContent = choice;
        divChoice.appendChild(span);
        divChoices.appendChild(divChoice);

        
    
       


        button.addEventListener('click', () => {
            if (option1.checked) {
                if (option1.value === question.choices[question.correctAnswer]) {
                    number++;
                    div1.innerText = "Current question: " + number + "/" + questions.length;
                    button.disabled = true;
                    option1.disabled = true;
                    div3.innerText = "\nCorrect!";
                
            
                }else {
                    button.disabled = true;
                    option1.disabled = true;
                    div3.innerText = "\nIncorrect!";
                }
            }

        });
    }
}



export { }