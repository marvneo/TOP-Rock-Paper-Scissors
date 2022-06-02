
function game() {

    score = 0;
    compScore = 0;
     
    const click = document.querySelector('#buttons');

    click.addEventListener('click', function(e) {
        
        input = e.srcElement.id
        
        console.log(input)
        if (input != 'buttons') {
            playRound(input);
        }})    

    document.getElementById('player-score').innerHTML = score
    document.getElementById('computer-score').innerHTML = compScore

}    


// Outputs the computer's choice
function computerPlay() {

    roll = Math.random()

    if (roll <= .32) {
        return 'rock'
    } else if (roll <= .65) {
        return 'paper'
    } else {
        return 'scissors'
    }
}


// Determine who wins 
function whoWins(playerSelection, computerSelection) {

    win = false

    var winningCombo = {
        'rock': 'scissors',
        'scissors': 'paper',
        'paper': 'rock'
    }

    if (winningCombo[playerSelection] === computerSelection) {
        win = true
    }

    return win
}


// Plays one round
function playRound(playerSelection) {


    computerSelection = computerPlay()
        
    if (playerSelection === computerSelection) {
        message = 'It\'\s a draw!'
    } else {
        win = whoWins(playerSelection, computerSelection)
        if (win) {
            score ++;
        } else {
            compScore ++;
        }
    }

    const notification = document.getElementById('information')

    notification.textContent = 'You selected ' + playerSelection +'. Computer selected ' + computerSelection + '.'

    document.getElementById('player-score').innerHTML = score
    document.getElementById('computer-score').innerHTML = compScore

    if (score === 5 || compScore === 5) {
        announceWinner(score,compScore)
    }

}


// Anounces winner through browser alert
function announceWinner(score, compScore) {
    if (score > compScore) {
        alert('You win!')
    } else {
        alert('Computer won!')
    }

    const notification = document.getElementById('information')

    notification.textContent = 'Game over, better luck next time.'


}


game()