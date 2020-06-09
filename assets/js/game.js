var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter `FIGHT` or `SKIP` to choose. ")

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {

//if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
// confirm user wants to skip
var confirmSkip = window.confirm("If you quit your money will be subtracted by 10. Are you sure you'd like to quit?");
if (confirmSkip) {
// if yes (true), leave fight
  window.alert(playerName + " has chosen to skip the fight. Goodbye!");
// subtract money from playerMoney for skipping
  playerMoney = playerMoney - 10;
  window.alert("playerName loses money for skipping!");
  console.log("playerMoney" , playerMoney);
}
// if no (false), ask question again by running fight() again
} else {
  window.alert("You need to pick a valid option. Try again!");
  }

//fight function
var fight = function(enemyName) {
//repeat and execute as long as the enemy robot is alive
  while (enemyHealth > 0 && playerHealth > 0) {
  enemyHealth = enemyHealth - playerAttack;
// if the enemy robot's health is zero or less, exit from the fight loop.
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  break;
} else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ");
}
//repeat and execute as long as the player robot is alive
playerHealth = playerHealth - enemyAttack;
if (playerHealth <= 0) {
  window.alert(playerName + " has died! ");
  break;
} else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}

// remove enemy's health by subtracting the amount set in the playerAttack variable
  console.log(
    playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining.");
}

// remove player's health by subtracting the amount set in the enemyAttack variable
console.log(
  enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining.");
}

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}


    //Game States
    //"wIN" - Player robot has defeated all enemy robots
    // * Fight all enemy robots
    // * Defeat each enemy robot
    // "LOSE" - Player robot's health is zero or less