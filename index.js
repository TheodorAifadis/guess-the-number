function randomInt(n){
    return Math.floor(Math.random() * n) + 1
}

const randomNumber = randomInt(100)
console.log(randomNumber)

function getUserGuess(){
    const stringValue = document.getElementById("user-input").value
    return parseInt(stringValue, 10)
}

document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        if (randomNumber === getUserGuess()){
            setMessage('Correct!')
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