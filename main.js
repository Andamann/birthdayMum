window.addEventListener('load', init)

//Globals

//Available levels
const levels = {
	easy: 5,
	medium: 3,
	hard: 1
}

//To change levels
let currentLevel = levels.easy

let time = currentLevel
let score = 0
let isPlaying

//Dom elements
//Game
const easyBtn = document.querySelector('#easy-btn')
const mediumBtn = document.querySelector('#medium-btn')
const hardBtn = document.querySelector('#hard-btn')
const wordInput = document.querySelector('input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#alert')
const seconds = document.querySelector('#seconds')
//List
const listItems = document.querySelector('.list-items')
//Winner modif
const header = document.querySelector('header')
const container = document.querySelector('.container')
const winner = document.querySelector('#winner')
const html = document.querySelector('html')
const final = document.querySelector('#final-sentence')

const words = [
	'Happy',
	'birthday',
	'cuty',
	'Mummy',
	'Have',
	'lot of',
	'fun',
	'and',
	'happiness',
	'in this',
	'day of',
	'celebration',
	'Yeaah !'
]

/*//Choosing level
easyBtn.addEventListener('click', function chooseE() {
	currentLevel = levels.easy
	console.log(currentLevel)
})
mediumBtn.addEventListener('click', function chooseM() {
	currentLevel = levels.medium
	console.log(currentLevel)
})
hardBtn.addEventListener('click', function chooseH() {
	currentLevel = levels.hard
	console.log(currentLevel)
})*/

//Initialise Game
function init() {
	//Show number of seconds in UI
	seconds.innerHTML = currentLevel
	//load word from array
	showWord(words)
	//Start matching on word input
	wordInput.addEventListener('input', startMatch)
	//Call countdown every second
	setInterval(countdown, 1000)
	//Check game status
	setInterval(checkStatus, 50)
}

//StartMatch function

function startMatch() {
	if (matchWords()) {
		isPlaying = true
		time = currentLevel + 1
		showWord(words)
		wordInput.value = ''
		score++
	} else if (score === -1) {
		scoreDisplay.innerHTML = 0
	} else {
		scoreDisplay.innerHTML = score
	}
}

//Match currentWord to wordInput
function matchWords() {
	if (wordInput.value === currentWord.innerHTML) {
		message.innerHTML = 'Correct!'
		//Add to the list
		let li = document.createElement('li')
		li.appendChild(document.createTextNode(currentWord.innerHTML))
		listItems.appendChild(li)
		//Pass to next word
		index++
		return true
	} else {
		message.innerHTML = ''
		return false
	}
}

//Pick and show random word
/*function showWord(words) {
	//generate random array index
	const randIndex = Math.floor(Math.random() * words.length)
	//Output random word
	currentWord.innerHTML = words[randIndex]
}*/
//
//
let index = 0
function showWord(words) {
	currentWord.innerHTML = words[index]
	//If end of words = end of the game -> winner modif
	length = words.length
	if (index >= length) {
		console.log('hello')
		isPlaying = false
		header.style.display = 'none'
		container.style.display = 'none'
		winner.style.display = 'inline'
		html.style.backgroundImage = 'url("img/winner.jpg")'
		final.innerHTML =
			"Bien joué Moumoune, en vous souhaitant un très bon <span id='white'>anniversaire à toi et Mina!</span>"
	}
}

//Countdown timer
function countdown() {
	//Make sure the time is not ran out
	if (time > 0) {
		//decrement
		time--
	} else if (time === 0) {
		//Game is over
		isPlaying = false
	}
	//Show time
	timeDisplay.innerHTML = time
}

//Check game status
function checkStatus() {
	if (!isPlaying && time === 0) {
		message.innerHTML = 'Try again!!! <i class="far fa-grin-wink"></i>'
		score = -1
	}
}

//Pushing words to the list
function pushWords() {
	listItems.push()
}
