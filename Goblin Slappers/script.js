//#region global variables
let heroMultiplier = 0;
let enemyMultiplier = 0;
let heroName = "";
let enemyName = "";
let dodge;
let block;
let health;
let myHero;
let myEnemies;
let heroPower;
let trueHeroPower;
let enemyPower;
let trueEnemyPower;
let murderedGobs = 0;

//#endregion

//#region heroStats
var hero = [
  {
    name: "Ithcar",
    heroType: "Hero Human",
    specialAbility: "Divine Slap",
    hp: 250,
    dodge: 15,
    block: 25,
    attackPower: 20,
    experience: "",
  },
  {
    name: "Heliodar",
    heroType: "Hero Human",
    specialAbility: "Death Slap",
    hp: 275,
    dodge: 12,
    block: 30,
    attackPower: 23,
    experience: "",
  },
];
//#endregion

//#region goblinStats
var goblinArmy = [
  {
    name: "Goblin",
    enemyType: "Goblonian",
    specialAbility: "Knee Stabbing",
    hp: 25,
    dodge: 1,
    block: 1,
    Power: 10,
  },
  {
    name: "Armored Goblin",
    enemyType: "Armored Goblonian",
    specialAbility: "Ankle Shank",
    hp: 40,
    dodge: 3,
    block: 3,
    Power: 15,
  },
  {
    name: "Hobgoblin",
    enemyType: "Goblonian",
    specialAbility: "Sword Flurry",
    hp: 50,
    dodge: 5,
    block: 5,
    Power: 25,
  },
  {
    name: "Armored Hobgoblin",
    enemyType: "Armored Goblonian",
    specialAbility: "Super Suplex",
    hp: 60,
    dodge: 4,
    block: 8,
    Power: 35,
  },
  {
    name: "Hob Boss",
    enemyType: "Armored Goblonian",
    specialAbility: "Condepondium of Chaos ",
    hp: 100,
    dodge: 10,
    block: 10,
    Power: 50,
  },
];

//#endregion

//#region functions

function heroSelect() {
  myHero = Math.floor(Math.random() * hero.length);
  console.log(myHero);
  if (myHero == 0) {
    heroName = "Ithcar";
    dodge = 15;
    block = 25;
    health = 250;
    heroPower = 5;
  } else if (myHero == 1) {
    heroName = "Heliodar";
    dodge = 12;
    block = 30;
    health = 275;
    heroPower = 7;
  } else {
    console.log("something is broke");
  }
}

function enemySelect() {
  myEnemies = Math.floor(Math.random() * goblinArmy.length);
  console.log(myEnemies);
  if (myEnemies == 0) {
    enemyName = "Goblin";
    dodge = 1;
    block = 1;
    gobHealth = 25;
    enemyPower = 2;
  } else if (myEnemies == 1) {
    enemyName = "Armored Goblin";
    dodge = 3;
    block = 3;
    gobHealth = 40;
  } else if (myEnemies == 2) {
    enemyName = "Hobgoblin";
    dodge = 5;
    block = 5;
    gobHealth = 50;
    enemyPower = 3;
  } else if (myEnemies == 3) {
    enemyName = "Armored Hobgoblin";
    dodge = 4;
    block = 8;
    gobHealth = 60;
    enemyPower = 4;
  } else if (myEnemies == 4) {
    enemyName = "Hob Boss";
    dodge = 10;
    block = 10;
    gobHealth = 100;
    enemyPower = 5;
  } else {
    console.log("something is broke");
  }
}




//starts the game

function start() {
  document.getElementById("battlelog").innerHTML =
    "You have started the Slappening!";
  document.getElementById("button").style.display = "none";
  document.getElementById("button1").style.display = "";
  document.getElementById("button2").style.display = "";
  document.getElementById("button3").style.display = "";
  document.getElementById("hero").style.display = "";
  document.getElementById("gob").style.display = "";
  document.getElementById("vs").style.display = "";
  document.getElementById("slapcounter").style.display = "";
  heroSelect();
  enemySelect();
  document.getElementById("heroname").innerHTML = heroName;
  document.getElementById("herohealth").innerHTML = "Health: " + health;
  document.getElementById("gobbler").innerHTML = enemyName;
  document.getElementById("enemyhealth").innerHTML = "Health: " + gobHealth;
}





function slapMove() {
  trueHeroPower = Math.floor((Math.random()*10)+1 * heroPower);
  document.getElementById('battlelog').innerHTML = `You slap the enemy for ${trueHeroPower} damage`;
  gobHealth -=trueHeroPower;
  document.getElementById('enemyhealth').innerHTML = "Health: " + gobHealth;
  console.log(trueHeroPower);
  if (gobHealth <= 0) {
    enemySelect();
    document.getElementById("gobbler").innerHTML = enemyName;
    document.getElementById("enemyhealth").innerHTML = "Health: " + gobHealth;
    console.log('The goblin died');
    murderedGobs++;
    console.log(murderedGobs);
    document.getElementById("slapcounter").innerHTML = `Goblins Brutally Slapped: ${murderedGobs}`;
  }else{
    console.log('Goblin is alive!');
  }
  goblinMove()
}

 function dodgeMove(){
   document.getElementById("battlelog").innerHTML =
     "You do a dodge roll, but we slap around here!";
    goblinMove()
 }

 function blockMove(){
   document.getElementById("battlelog").innerHTML =
     "You stand your ground and block, but we slap around here!";
    goblinMove()
 }


 function goblinMove(){
  trueEnemyPower = Math.floor((Math.random()*10)+1 * enemyPower);
  health -= trueEnemyPower;
  document.getElementById("herohealth").innerHTML = "Health: " + health;
  if(health <= 0){
    alert('You have been slapped to doom by the goblin menace!')
  }
}


//#endregion
