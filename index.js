
let bonusPoints = 50;
bonusPoints = bonusPoints + 100 ;
bonusPoints = bonusPoints - 25;
bonusPoints = bonusPoints + 70
console.log(bonusPoints)

// steps for increment 
// initilize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the inner html to relflect the new count
function increment() {
    console.log(`the funcking buttton was clicked`)
}


function countDown(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
    console.log(0)
}
countDown()

function MyLogger (){
    console.log(42)
}
MyLogger()

let lap1 = 20 ;
let lap3 = 3 ;
let lap2 = 40 ;
function racers (){
    let totaltime = lap1 + lap2 +  lap3
console.log(totaltime)
}
  racers()
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")// passing arguement
let count = 0
function increment() {
    count += 1
    countEl.innerText = count
}



function save(){
    let countstr = count + " - "
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
}
let firstName = "Obasan"
let lastName = " joseph olaniyi"
let fullName = firstName + lastName
console.log(fullName)





let name = "linda"
let gretings = "Hi there"
function lol(){
console.log(gretings + " " + name)
}
lol()


let errorRead = document.getElementById("error-btn")
console.log(errorRead)
function purchase(){
    console.log("get the fuck")
    errorRead.textContent = "something went wrong"
}

// 2. Use getRandomCard() to set the values of firstCard and secondCard
let player = {
    name: "Per",
    chips: 200,
    sayHello: function (){
        console.log("heissann")
    }
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
let age = 21
if (age <= 20){
    console.log("you cant enter here")
}
else{
    console.log ("you are welcome")
}



let Age = 99
if( Age <= 99){
    console.log("you are not elegible")
}
else if (Age === 100){
    console.log("Here is you birthday card from thr king")
}
else{
    console.log("not elegible you av already gotten one")
}

// creating array 
let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]
 for (let counts = 1; counts < 21; counts += 2 ){
console.log(counts)
 }

//  creating loop
for( let i = 0; i < 6; i +=1 ){
    console.log(i)
}
for (let l = 10; l < 101; l +=10){
    console.log(l)
}

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!"
]
for (let i = 0; i < 6; i += 1) {
    console.log(messages[i])
}
let cardss = [7,3,9]
for ( let i = 0; i<cardss.length; i++){
    console.log(cardss[0])
}

let sentence = ["Hello","my","name","is","Per"] 
let greetingEl = document.getElementById("greeting-el")
for (let i =0; i<sentence.length; i++){
    greetingEl.textContent += sentence[i] +" "
}


let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRace = getFastestRaceTime()


function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}

// console.log( rollDice() )
let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true || givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
}



let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}
function showSolution() {
    console.log("Showing the solution....")
}
let likeDocumentaries = true
let likesStartups = false
if (likeDocumentaries === true|| likesStartups === true ){
    recommendMovie()
}
function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}
let course={
    titile:"learn css grid for free",
    lesson:16,
    creator:"per harald borgen",
    length:63,
    level:2,
    idFree:true,
    tags:["html","css"]
}
console.log(course.tags)
let bnb = {
    number: 20,
    string:"this is a string",
    array:["html","css"],
    boolean:false
}
console.log(bnb.boolean)