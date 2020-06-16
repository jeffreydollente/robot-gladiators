var fightOrSkip = function() {
  // ask user if they'd like to fight or skip using function
  var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

 // if the `promptFight` is NOT a valid value, then execute the following statements.
  if (!promptFight) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
   }
  // if user picks "skip" confirm and then stop the loop
  promptFight = promptFight.toLowerCase();
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping, but don't let them go into the negative
      playerInfo.money = Math.max(0, playerInfo.money - 10);

      // return true if user wants to leave
      return true;
    }
      shop();
  }
}
//fight function
var fight = function(enemy) {
// repeat and execute as long as the enemy robot is alive 
while (playerInfo.health > 0 && enemy.health > 0) {
  // ask user if they'd like to fight or skip using fightOrSkip function
  if (fightOrSkip()) {
    // if true, leave fight by breaking loop
    break;
  }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    enemy.health = Math.max(0, enemy.health - playerInfo.attack);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = Math.max(0, playerInfo.money + 20);

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }
    // remove players's health by subtracting the amount set in the enemy.attack variable
    playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );
    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};

// function to start a new game
var startGame = function() {
// fight each enemy robot by looping over them and fighting them on at a time
for (var i = 0; i < enemyInfo.length; i++) {
     // reset player stats
 playerInfo.reset();
  if (playerInfo.health > 0) {
    // let user know what round they are in, remember that arrays start at 0
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
// pick new ememy to fight based on the index of the enemy.names array
    var pickedEnemyObj = enemyInfo[i];
// reset enemy.health before starting a new fight
    pickedEnemyObj.health = randomNumber(40, 60);

    fight(pickedEnemyObj);
    // if player is still alive and we're not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
      // ask if user wants to use the store befor next round
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

      // if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }
  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
}
}
}
// after loop ends, player is either out of health or enemies to fight, so run the endGame function
endGame();
};

 // function to end the entire game
 var endGame = function() {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }

  //ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  //restart the game
  startGame();
}
    else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  };


          // function to generate a random numeric value
          var randomNumber = function (min, max) {
            var value = Math.floor(Math.random() * (max - min + 1) + min);
      
            return value;
          };
    var shop = function() {
      // ask player what they'd like to do
      var shopOptionPrompt = window.prompt("would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

      // use switch to carry out action
      shopOptionPrompt = shopOptionPrompt.toLowerCase();
      switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
          playerInfo.refillHealth();
          break;
        
        case "UPGRADE": // new case
        case "upgrade":
          playerInfo.upgradeAttack();
        break;

        case "LEAVE": // new case
        case "leave":
          window.alert("Leave the store");

          // do nothing, so function will end
          break;
          default:
            window.alert("You did not pick up a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
  }
};
var getPlayerName = function() {
  var name = "";
  while (name === ""  || name === null) {
    name = prompt("What is your robot's name?");
  }
};
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function(){
    this.health = 100;
    this.attack = 10;
    this.money = 10;
  }, // comma!
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
  }
  else {
    window.alert("You don't have enough money!");
  }
  }, // comma!
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }   
};
//console.log(playerInfo);
// 
playerInfo.reset();
// You can also log multiple values at once like this
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];
console.log(enemyInfo);

// start the game when the page loads
startGame();
