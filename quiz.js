const correctAnswers = ['D', 'A', 'C', 'B', 'C', 'B', 'B', 'A', 'C', 'C'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const correct = document.getElementsByClassName('correct');
const wrong = document .getElementsByClassName('wrong');


form.addEventListener ('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    //check correct answers
    userAnswers.forEach ((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 10;  
        } 
    });

    console.log (score);
   
    //Use window object to scroll to the top
    scrollTo(0,0);

    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    //Animation
    let output = 0;

    const timer = setInterval (() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval (timer);
        } else {
            output++;
        }
    }, 50);
});

// setTimeout (() => {
//     alert ('Hello, there!')
// }, 1000);