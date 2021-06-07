var choices = ['rock', 'paper', 'scissors'];
var player_choice = '';

function computerplay (arr)
{
    var random_index = Math.floor(Math.random()*3);
    return arr[random_index];
}

function playgame(player, computer)
{
    if (player == computer)
    {
        return 'tie game';
    }
    else if (
        (player == 'rock') && (computer == 'scissors') ||
        (player == 'scissors') && (computer == 'paper') ||
        (player == 'paper') && (computer == 'rock'))
    {
        return 'User Wins';
    }
    else
    {
        return 'Computer Wins';
    }
}

var btn = document.querySelectorAll('button');
btn.forEach((button) => 
{
    button.addEventListener('click', () =>
    {
        player_choice = button.value;
        var compchoice = computerplay(choices);
        console.log(player_choice);
        console.log(compchoice);
        console.log(playgame(player_choice, compchoice));
    })
})
