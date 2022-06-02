
function game() {

    score = 0;
    compScore = 0;
     
    const click = document.querySelector('#buttons');

    click.addEventListener('click', function(e) {
        
        input = e.srcElement.id

        if (input != 'buttons') {
            playRound(input);
        }})    
    


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

    const scoreboard = document.getElementById('scoreboard')
    scoreboard.textContent = 'Your score is ' + score + '. Computer score is ' + compScore + '.'

    const notification = document.getElementById('information')
    notification.textContent = 'You selected ' + playerSelection +'. Computer selected ' + computerSelection + '.'

    if (score === 5 || compScore === 5) {
        announceWinner(score,compScore)
    }

}


// Anounces winner through browser alert
function announceWinner(score, compScore) {

    const notification = document.getElementById('information')

    if (score > compScore) {
        alert('You win!')
        notification.textContent = 'Congrats!'
    } else {
        alert('Computer won!')
        notification.textContent = 'Game over, better luck next time.'
    }


   


}


game()