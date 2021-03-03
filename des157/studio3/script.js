(function(){
    "use strict";
    console.log("reading js");

    /* These are my DOM elements that I will need quick access to */
    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    /* Here are the sounds I used */
    const diceSound = new Audio('media/mixkit-bag-of-coins-touch-3187.wav');
    const winSound = new Audio('media/mixkit-game-level-completed-2059.wav');
    const snakeEyeSound = new Audio('media/mixkit-retro-arcade-game-over-470.wav');

    /* Objects that contains all of the the game datas available */
    const gameData = {
        dice: [
            'images/1die.png', 
            'images/2die.png', 
            'images/3die.png', 
            'images/4die.png', 
            'images/5die.png', 
            'images/6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    /* This click handler will start the game and change content to the game control */
    startGame.addEventListener("click", function(){

        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML = '<button id="quit">Wanna Quit?</button>';

        document.getElementById("quit").addEventListener('click', function(){
            location.reload();
        });
        console.log(gameData.index);
        setUpTurn();

    });

    /* This function sets up a turn to be ready for the dice throw */
    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){

            throwDice();
            diceSound.play();
        });
    }

    /* This is the function that rolls the dice */
    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1 - 1]}"> 
                           <img src="${gameData.dice[gameData.roll2 - 1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData);

        if ( gameData.rollSum === 2) {
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            snakeEyeSound.play();
            showCurrentScore();
            setTimeout(setUpTurn, 1500);
            diceSound.play();
        }
        else if ( gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry one of your rolls was a one. Switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 1500);
            diceSound.play();
        }
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">pass</button>';

            document.getElementById('rollagain').addEventListener('click', function(){
                throwDice();
                diceSound.play();
            });

            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }
    }
 
    /* This function sets the winning requirements and determines who wins */
    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]}
            wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = "";
           
            document.getElementById('quit').innerHTML = "Start a New Game";
            document.getElementById("winner").className="showing";
            winSound.play();
            
        }
        else {
            showCurrentScore();
        }
    }

    /* This function displays the current scores of the players */
    function showCurrentScore(){
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}
        ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}
        ${gameData.score[1]}</strong></p>`;
    }

}());