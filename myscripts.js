score = 0;
compScore = 0;

     
const click = document.querySelector('#buttons');

click.addEventListener('click', function(e) {
    playRound(e.srcElement.id);
    })    
        
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

        
        console.log('Computer chose ' + computerSelection, '. You chose ' + playerSelection)

        
        console.log('Your score is '+score+'. The computer score is ' + compScore)
    }



