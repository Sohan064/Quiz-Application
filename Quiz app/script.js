const quizData = [
    {
        question: "A and B invest in a business in the ratio 3 : 2. If 5% of the total profit goes to charity and A's share is Rs. 855, the total profit is:",
        options:[
           "Rs. 1425","Rs. 1500 ","Rs. 1537","Rs. 1576"
        ],
        correct:1
    },
    {
        question: "P and Q invest in a business in the ratio 2 : 3. If 6% of the total profit goes to charity and P's share is Rs. 720, the total profit is:",
        options:[
        "Rs. 1200",
        "Rs. 1440",
        "Rs. 1500",
        "Rs. 1600"
        ],
        correct: 2
        },
        {
        question: "M and N invest in a business in the ratio 5 : 6. If 5% of the total profit goes to charity and M's share is Rs. 1200, the total profit is:",
        options:[
        "Rs. 1800",
        "Rs. 2400",
        "Rs. 2500",
        "Rs. 2600"
        ],
        correct: 1
        },
        {
        question: "T and U invest in a business in the ratio 3 : 4. If 5% of the total profit goes to charity and T's share is Rs. 1440, the total profit is:",
        options:[
        "Rs. 2400",
        "Rs. 2600",
        "Rs. 2800",
        "Rs. 3000"
        ],
        correct: 0
        },
        {
        question: "V and W invest in a business in the ratio 7 : 8. If 7% of the total profit goes to charity and V's share is Rs. 1260, the total profit is:",
        options:[
        "Rs. 2400",
        "Rs. 2500",
        "Rs. 2600",
        "Rs. 2800"
        ],
        correct: 2
        }
]

const questionNumberElement = document.getElementById("question_number");
const quiz = document.querySelector(".container");
const answerElm = document.querySelectorAll(".answer");
const [questionElm,option_1,option_2,option_3,option_4] = document.querySelectorAll("#question, .option_1,.option_2,.option_3,.option_4");


const submitBtn = document.querySelector("#submit");
const nextQuestionBtn =document.querySelector("#b5");
const prevQuestionBtn =document.querySelector("#b4");
 

let currentQuiz =0;
let score =0;

const loadQuiz = () => {
    const {question,options} = quizData[currentQuiz];
    questionElm.innerText = `${currentQuiz+1}.${question}` ;
    questionNumberElement.innerText = "Question "+`${currentQuiz+1}`;
    options.forEach(
        (curOption,index) => (window[`option_${index +1}`].innerText=curOption)
    );

};

loadQuiz();



const getSelectedOption = () => {
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
};



const deselectedAnswers= () =>
{
    answerElm.forEach((curElem)=> curElem.checked =false);
};

submitBtn.addEventListener("click",()=>
{
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

if (selectedOptionIndex === quizData[currentQuiz].correct){
    score = score +1 ;
}



    currentQuiz++;
    if(currentQuiz<quizData.length)
    {
        deselectedAnswers();
        loadQuiz();
    }
    else{
        quiz.innerHTML = `
            <div class="result">
                <h3>Your Score: ${score}/${quizData.length} Correct Answers</h3>
                <button class="reload-button" onclick="location.reload()">Play again</button>
            </div>
        `;
    }

});
