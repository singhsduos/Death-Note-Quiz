// require npm packages
var readlineSync = require('readline-sync');
const chalk = require('chalk');

// declare a variable score to calculate score
var score = 0;
var highScore = 9;

// rules of game
var rules = "There are some rules in game. There will be 15 questions";
var rules1 = "Out of which you have to give atleast 10 correct answer. And each question gives you 1 point."
var rules2 ="If you unable to give 10 correct answer then don't say 'You are true fan of DEATH NOTE'."
var rules3 = "There will be multiple options question and only one option will be correct and you have to write only option name like 'a/b/c/d'."

// Declare some variable ready to use
var rightAns = "Right Answer 👍";
var wrongAns = "Wrong Answer 👎";
var correctAns = "The correct option is ";
var currentScore = "Current score: ";
var divideLine = chalk.yellowBright("--------------------------");
var emptySpace = "\n";
var congratsWin = "CONGRATULATION! You have scored ";
var congratsLoss = "LOL, TRY AGAIN! first watch DEATH NOTE then again do this QUIZ 😜 and your total score is ";


// take username input
var userName = readlineSync.question(chalk.blue('May I have your name please? '));
console.log(chalk.magentaBright('Welcome to the game of death and life Mr. ' + chalk.bold.yellowBright(userName.toUpperCase()) + " Let's test your knowledge of DEATH-NOTE in this game."));
console.log(emptySpace);


// Quiz rules
console.log(chalk.bgRed("\nDo you have what it takes to play with life and death? If yes then, Let's Begin!"));
console.log(emptySpace);
console.log(chalk.yellowBright(`${rules} \n1. ${rules1} \n2. ${rules2} \n3. ${rules3} \n${divideLine}`));

// write function to take questions and answer
function playQuiz(questions,answer){
  var userAnswer = readlineSync.question(chalk.cyan(`${questions}`));
  console.log(`You entered '${userAnswer.toUpperCase()}'.`);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score++;
    console.log(chalk.greenBright(rightAns));
  }
  else{
    console.log(chalk.red(wrongAns));
    console.log(correctAns + chalk.italic.yellowBright(`${answer}.`));
  }

  console.log(currentScore + chalk.cyan(`${score}`));
  console.log(divideLine);
  console.log(emptySpace);
}

// declare questions and answer 
var questionsList = [
{
question: "Question 1- \nWHAT IS A SHINIGAMI?  \na. AN OTHER-WORLDLY MONSTER \nb. A GOD OF DEATH \nc. AN ALIEN \nd. A SOUL IN PAIN \nWrite your option here: ",
answer : "b"
},
{
question: "Question 2- \nWHO DID THE ORIGINAL DEATH NOTE BELONG TO? \na. IT HAD NO OWNER \nb. IT FELL FROM HEAVEN \nc. RYUK, THE SHINIGAMI \nd. A WIZARD \nWrite your option here: ",
answer : "c"
},
{
question: "Question 3- \nWHAT DO YOU NEED WHEN YOU ADD SOMEONE TO THE DEATH NOTE?  \na. ONLY THEIR NAME \nb. THEIR NAME AND THEIR FACE \nc. THEIR FIRST, MIDDLE, AND LAST NAME \nd. THEIR FULL NAME, PHOTO ID, AND LAST TWO PAY STUBS \nWrite your option here: ",
answer : "b"
},
{
question: "Question 4- \nUNLESS OTHERWISE SPECIFIED, HOW DOES SOMEONE DIE ONCE THEIR NAME IS ADDED TO THE DEATH NOTE?  \na. IN AN ACCIDENT \nb. THEY JUST DISAPPEAR \nc. FROM A HEART ATTACK \nd. A DEATH GOD COMES TO TAKE THEM \nWrite your option here: ",
answer : "c"
},
{
question: "Question 5- \nWHAT DO YOU NEED TO DO TO SEE THE SHINIGAMI OWNER OF A DEATH NOTE?  \na. SIMPLY TOUCH THE DEATH NOTE \nb. KILL YOUR FIRST VICTIM WITH THE DEATH NOTE \nc. WRITE THE SHINIGAMI'S NAME THREE TIMES \nd. OFFER THE SHINIGAMI AN APPLE \nWrite your option here: ",
answer : "a"
},
{
question: "Question 6- \nWHAT MUST BE SACRIFICED IN ORDER TO USE THE POWER OF SHINIGAMI EYES?  \na. THE LIFE OF A LOVED ON \nb. YOUR ABILITY TO USE THE DEATH NOTE \nc. YOUR NATURAL SIGHT \nd. HALF YOUR LIFE EXPECTANCY \nWrite your option here: ",
answer : "d"
},
{
question: "Question 7- \nWHAT DO YOU GAIN FROM USING THE POWER OF SHINIGAMI EYES?  \na. YOU CAN SEE THE FUTURE \nb. YOU CAN READ OTHER PEOPLE'S' THOUGHTS \nc. YOU CAN SEE THE NAMES AND LIFE EXPECTANCIES OF OTHERS \nd. YOU CAN USE THE DEATH NOTE \nWrite your option here: ",
answer : "c"
},
{
question: "Question 8- \nWHAT IS THE ONLY THING THAT CAN KILL A SHINIGAMI? \na. SAVING A HUMAN'S LIFE \nb. WRITING THEIR NAME IN THE DEATH NOTE \nc. WITH A SPELL \nd. THEY DO NOT DIE \nWrite your option here: ",
answer : "a"
},
{
question: "Question 9- \nWHAT HAPPENS IF YOU TEAR A PAGE FROM A DEATH NOTE?  \na. THE DEATH NOTE LOSES ITS POWER \nb. THE PAGE WORKS THE SAME AS THE BOOK IT WAS TORN FROM \nc. YOU DIE \nd. THE NOTEBOOK CATCHES FIRE AND BURNS UP \nWrite your option here: ",
answer : "b"
},
{
question: "Question 10- \nHOW MANY PAGES ARE IN A DEATH NOTE?  \na. 666 \nb. 999 \nc. ONE FOR EACH YEAR REMAINING IN YOUR LIFE \nd. INFINITE \nWrite your option here: ",
answer : "d"
},
{
question: "Question 11- \nWHAT IS THE MINIMUM AGE SOMEONE HAS TO BE TO BE KILLED BY THE DEATH NOTE?  \na. THERE IS NO MINIMUM \nb. 780 DAYS OLD \nc. 2 YEARS OLD \nd. 1 DAY OLD \nWrite your option here: ",
answer : "b"
},
{
question: "Question 12- \nWHAT'S THE MAXIMUM AGE SOMEONE CAN BE BEFORE THE DEATH NOTE WON'T WORK ON THEM?  \na. THERE IS NO AGE LIMIT \nb. 100 YEARS OLD \nc. 124 YEARS OLD \nd. DOUBLE THE AGE OF THE PERSON USING IT \nWrite your option here: ",
answer : "c"
},
{
question: "Question 13- \nWHAT HAPPENS IF YOU ACCIDENTALLY MISSPELL YOUR VICTIM'S NAME FOUR TIMES?  \na. YOU DIE \nb. THEY BECOME IMMUNE TO THE DEATH NOTE \nc. NOTHING \nd. THE DEATH NOTE LOSES ITS POWER \nWrite your option here: ",
answer : "b"
},
{
question: "Question 14- \nAND WHAT IF YOU DO IT ON PURPOSE?  \na. NOTHING \nb. YOU DIE \nc. YOU BECOME IMMUNE TO THE DEATH NOTE \nd. THE DEATH NOTE LOSES ITS POWER \nWrite your option here: ",
answer : "b"
},
{
question: "Question 15- \nWHAT HAPPENS WHEN A HUMAN LOSES THEIR DEATH NOTE?  \na. NOTHING \nb. THEY LOSE ALL MEMORY OF IT \nc. THEY DIE \nd. THEIR VICTIMS ALL COME BACK TO LIFE \nWrite your option here: ",
answer : "b"
}
];



// loop taking questions one by one
for(var i=0; i<questionsList.length; i++){
  var currentQuestion = questionsList[i];
   playQuiz(currentQuestion.question,currentQuestion.answer);
}

// check the minimum score to win
if(score>9){
  console.log(emptySpace);
  console.log(chalk.greenBright(congratsWin + `'${score}'. You are the true fan of DEATH NOTE 🤝`));
  console.log(emptySpace);
  console.log(divideLine);
}

if(score<10){
  console.log(emptySpace);
  console.log(chalk.red(congratsLoss + `'${score}'.`));
  console.log(emptySpace);
  console.log(divideLine);
}

// Quiz End
console.log(emptySpace);
console.log(chalk.magentaBright('Thank You ' + chalk.bold.white(userName.toUpperCase()) + ' for playing this quiz game! ❤️'));
console.log(emptySpace);
