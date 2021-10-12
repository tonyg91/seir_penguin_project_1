////////////////////////////
// APP State
////////////////////////////

const state = {
    player1: 0,
    player2: 0,
    currentQuestion: {},
    which: true
    
}

let questions = []
////////////////////////////
// Main DOM Element
////////////////////////////

const $question = $("#question")
const $a = $("#a")
const $b = $("#b")
const $c = $("#c")
const $d = $("#d")
const $p1score = $("#player1 h4")
const $p2score = $("#player2 h4")


////////////////////////////
// Functions
////////////////////////////


// Chose answer Function 
const chooseAnswer = (event, question) => {
    console.log(event)
    if(event.target.innerText === question.answer){
        console.log("correct")
        if(state.which){
            state.player1++
            state.which = !state.which
        }else{
            state.player2++
            state.which = !state.which
        }
        setBoard(questions)
    }else {
        console.log("incorrect")
        setBoard(questions)
        state.which = !state.which
    }
}

// Getting random Question 
const setBoard = (q) => {

    const randomIndex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomIndex]

    // Update Question  
    $question.text(randomQuestion.question) 
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c)
    $d.text(randomQuestion.d)

    // Update player scores 
    $p1score.text(state.player1)
    $p2score.text(state.player2)

    $("li").off()
    $("li").on("click", (event) => {
        chooseAnswer(event, randomQuestion)
    })
 
}

////////////////////////////
// Main App Logic
////////////////////////////


const URL = "https://cdn.contentful.com/spaces/28xx4dkjsh9g/environments/master/entries?access_token=XNZPJ3yCNcRaclwCNKJlZa7voaiR9CUVsixP44EaKes&content_type=triviaQ"
$.ajax(URL)
.then((data) => {
    questions = data.items.map((q) => q.fields)
    console.log(data)
    console.log(questions)

    setBoard(questions)
})

