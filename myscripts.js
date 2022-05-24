
function computerPlay() {

    roll = Math.random()

    if (roll <= .32) {
        return 'Rock'
    } else if (roll <= .65) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {

    win = false

    var winningCombo = {
        'Rock': 'Scissors',
        'Scissors': 'Paper',
        'Paper': 'Rock'
    }

    if (winningCombo[playerSelection] === computerSelection) {
        win = true
    }

    return win
}

function game() {

    score = 0;
    compScore = 4;
    

    while (score < 5 && compScore < 5)  {

        computerSelection = computerPlay()
        playerSelection = prompt('Please enter Rock, Paper or Scissors')
        win = playRound(playerSelection, computerSelection)
        console.log('Computer chose ' + computerSelection, '. You chose ' + playerSelection)

        if (win) {
            console.log('You win!')
            score ++;
        } else {
            console.log('You lost!')
            compScore ++;
        }
        console.log('Your score is '+score+'. The computer score is ' + compScore)
    }
    
    if (score > compScore) {
        console.log('You won the game!')
    } else {
        console.log('You lost the game...')
    }

}

game()