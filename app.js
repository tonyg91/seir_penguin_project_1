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

// Player names 
const playerOne = prompt("Player one please enter your name: ")
const playerTwo = prompt("Player two please enter your name: ")

// Append the names to the board 
$("#player1").children().eq(0).append(playerOne)

$("#player2").children().eq(0).append(playerTwo)

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
            alert("Ready " + playerTwo)
        }else{
            state.player2++
            state.which = !state.which
            alert("Ready " + playerOne)
        }

        // Set a win function 
        if(state.player1 === 10){
            alert("Congratulations " + playerOne +  " on your victory")
            setBoard(questions)
            state.player1 = 0
            state.player2 = 0
        }else if (state.player2 === 10){
            alert("Congratulations " + playerTwo +  " on your victory")
            setBoard(questions)
            state.player1 = 0
            state.player2 = 0
        }
            setBoard(questions)
    }else {
        alert("That was incorrect. Next player your up")
        console.log("incorrect")
        setBoard(questions)
        state.which = !state.which
    }
   
}

// Getting random Question 
const setBoard = (q) => {
    // Random Question Generator 
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
    $("#reset").on("click", () => {
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

