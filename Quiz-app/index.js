
const questions=[
    {
        question:"which is the largest animal in the world?",
        answers:[
                {text:"Shark",correct:false},
                {text:"Blue Whale",correct:true},
                {text:"Giraffe",correct:false},
                {text:"Elephant",correct:false}
        ]
    },
     {
        question:"which is the largest desert in the world?",
        answers:[
                {text:"thar",correct:false},
                {text:"Kalahari",correct:false},
                {text:"Sahara",correct:true},
                {text:"Arctic",correct:false}
        ]
    },
     {
        question:"which is the smallest continent in the world?",
        answers:[
                {text:"Asia",correct:false},
                {text:"Antarctic",correct:false},
                {text:"Australia",correct:true},
                {text:"Africa",correct:false}
        ]
    },
     {
        question:"which is the smallest country in the world?",
        answers:[
                {text:"Vatican city",correct:true},
                {text:"France",correct:false},
                {text:"India",correct:false},
                {text:"Thailand",correct:false}
        ]
    }
];


const questionElement=document.getElementById("question")
const answerBtn=document.querySelector("#answer-buttons")
const nextBtn=document.getElementById("next")

let currentQuestionIndex=0;
let score=0

function startQuiz(){
    resetState()
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML="Next";
    showQuestion()
}

function showQuestion(){
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML= questionNo+"."+currentQuestion.question;

    currentQuestion.answers.forEach( answer => {
        const button=document.createElement("button")
        button.innerHTML=answer.text
        button.classList.add("btn")
        answerBtn.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer)
    })
}




function resetState(){
    nextBtn.style.display="none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerBtn.children).forEach( button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true
    })

    nextBtn.style.display="block"
}


function showScore(){
    resetState()
    questionElement.innerHTML=` You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML="Play Again"
    nextBtn.style.display="block"
}

function handleNextButton(e){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore();
    }
}

nextBtn.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz()