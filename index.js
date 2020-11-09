let count = 0
const guesses = []
let randomNumber = randomInt(100)
const resetButton = document.getElementsByTagName('button')[0]
const highScoreTitle = document.getElementsByTagName('h1')[0]
const guessText = document.getElementsByTagName('p')[1]

function randomInt(n){
    return Math.floor(Math.random() * n) + 1
}

highScoreTitle.innerHTML = 'Highscore: ' + readResults()

function getUserGuess(){
    const stringValue = document.getElementById("user-input").value
    return parseInt(stringValue, 10)
}

resetButton.addEventListener('click', resetGame)

document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {

        guesses.push(getUserGuess())
        count++

        guessText.innerHTML = guesses

        if (randomNumber === getUserGuess()){
            setMessage('Correct!     ' +  count + '     attempts')

            if (!readResults() || readResults() > count) {
                saveResults(count)
            }

            highScoreTitle.innerHTML = 'Highscore: ' + readResults()

        } else if (randomNumber > getUserGuess()) {
            setMessage('Too low!')
        } else if (randomNumber < getUserGuess()) {
            setMessage('Too high!')
        }
        document.getElementById('user-input').value = ''
    }
})

function setMessage(msg){
    document.getElementById("message").innerText = msg
}

function resetGame() {
    guesses.length = 0
    count = 0
    randomNumber = randomInt(100)
    document.getElementById('user-input').value = ''
    setMessage('Guess a number between 0 and 100')
}

function saveResults(x) {
    localStorage.setItem('Highscore', x)
}

function readResults() {
    return localStorage.getItem('Highscore')
}

