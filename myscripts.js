
function game() {

    score = 0;
    compScore = 0;
     
    const click = document.querySelector('#buttons');

    click.addEventListener('click', function(e) {
        playRound(e.srcElement.id);
        })    

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
        console.log('It\'\s a draw!')
    } else {
        win = whoWins(playerSelection, computerSelection)
        if (win) {
            console.log('You win!')
            score ++;
        } else {
            console.log('You lost!')
            compScore ++;
        }
    }

    document.getElementById('player-score').innerHTML = score
    document.getElementById('computer-score').innerHTML = compScore

    if (score === 5 || compScore === 5) {
        if (score > compScore) {
            alert('You win!')
        } else {
            alert('Computer won!')
        }
    }


    
}


game()