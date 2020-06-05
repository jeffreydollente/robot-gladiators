var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index ");
}

var fight = function(enemyName) {
  //fight function statements
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter `FIGHT` or `SKIP` to choose. ")

  // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
enemyHealth = enemyHealth - playerAttack;
console.log(
    playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
);

// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died .");
} else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ");
}
  // remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(
  enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
);

// check player's Health
if (playerHealth <= 0) {
    window.alert(playerName + " has died. ");
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
//if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("If you quit your money will be subtracted by 2. Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerName + " has chosen to skip the fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
    window.alert("playerName loses money for skipping!");
    }
    // if no (false), ask question again by running fight() again
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }
}
  
    //Game States
    //"wIN" - Player robot has defeated all enemy robots
    // * Fight all enemy robots
    // * Defeat each enemy robot
    // "LOSE" - Player robot's health is zero or less

for(var i = 0; i< enemyNames.length; i++) {
  fight(enemyNames[i]);
}