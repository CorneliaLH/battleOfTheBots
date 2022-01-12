let root = document.getElementById("root");
let h1 = document.createElement("h1");
h1.innerText = "Battle of the hands";
let playBtn = document.createElement("button");
playBtn.innerText = "Spela";

root.append(h1);
root.append(playBtn);

let containerBots = document.createElement("div");
containerBots.classList = "containerBots";
let bot1 = document.createElement("div");
bot1.classList = "bot1";
let bot2 = document.createElement("div");
bot2.classList = "bot2";

root.append(containerBots);
containerBots.append(bot1);
containerBots.append(bot2);

let imgRock1 = document.createElement("img");
imgRock1.src = "./img/rock-paper-scissors-g0b30d0132_640.png";
let imgPaper1 = document.createElement("img");
imgPaper1.src = "./img/rock-paper-scissors-gde9e75554_640.png";
let imgScissors1 = document.createElement("img");
imgScissors1.src = "./img/rock-paper-scissors-g3acb553dd_640.png";
let imgRock2 = document.createElement("img");
imgRock2.src = "./img/rock-paper-scissors-g0b30d0132_640.png";
let imgPaper2 = document.createElement("img");
imgPaper2.src = "./img/rock-paper-scissors-gde9e75554_640.png";
let imgScissors2 = document.createElement("img");
imgScissors2.src = "./img/rock-paper-scissors-g3acb553dd_640.png";

let containerResult = document.createElement("div");
containerResult.classList = "containerResult";
let bot1ResultText = document.createElement("p");
bot1ResultText.classList = "botText1";
let bot2ResultText = document.createElement("p");
bot2ResultText.classList = "botText2";
let containerPoints = document.createElement("div");
containerPoints.classList = "containerPoints";
let containerPoint1 = document.createElement("p");
let containerPoint2 = document.createElement("p");
let bot1points = document.createElement("span");
let bot2points = document.createElement("span");
bot1points.innerText = 0;
bot2points.innerText = 0;
containerPoint1.innerText = `Poäng: ${bot1points.innerText}`;
containerPoint2.innerText = `Poäng: ${bot2points.innerText}`;

root.append(containerResult);
root.append(containerPoints);
containerPoints.append(containerPoint1, containerPoint2);

/*randomNumber
If numbers match "oavgjort"
0 : sten bot 1
1 : sax bot 1
2 : påse bot 1
0 : sten bot 2
1 : sax bot 2
2 : påse bot 2

0 + 0 = oavgjort
0 + 1 = bot1 vinner
0 + 2 = bot 2 vinner
1 + 0 = bot2 vinner
1 + 1 = oavgjort
1 + 2 = bot1 vinner
2 + 0 = bot1 vinner
2 + 1 = bot2 vinner
2 + 2 = oavgjort

Om oavgjort = automatiskt starta random funktionen igen
*/

playBtn.addEventListener("click", changeHands);

function changeHands() {
  bot1.innerHTML = "";
  bot2.innerHTML = "";
  let imgHands1 = document.createElement("img");
  bot1.append(imgHands1);
  let imgHands2 = document.createElement("img");
  bot2.append(imgHands2);
  let imgArray = [
    "./img/rock-paper-scissors-g0b30d0132_640.png",
    "./img/rock-paper-scissors-gde9e75554_640.png",
    "./img/rock-paper-scissors-g3acb553dd_640.png",
  ];
  let index = 0;
  let interval = 100;
  function slide() {
    imgHands1.src = imgArray[index++ % imgArray.length];
    imgHands2.src = imgArray[index++ % imgArray.length];
  }

  setInterval(slide, interval);

  setTimeout(randomNumber, 1000);
}

function randomNumber() {
  bot1.innerHTML = "";
  bot2.innerHTML = "";
  containerResult.innerHTML = "";

  let bot1Result = Math.floor(Math.random() * 3);

  if (bot1Result == 0) {
    bot1.append(imgRock1);
  } else if (bot1Result == 1) {
    bot1.append(imgScissors1);
  } else {
    bot1.append(imgPaper1);
  }
  let bot2Result = Math.floor(Math.random() * 3);
  if (bot2Result == 0) {
    bot2.append(imgRock2);
  } else if (bot2Result == 1) {
    bot2.append(imgScissors2);
  } else {
    bot2.append(imgPaper2);
    console.log("yes");
  }

  console.log("bot1 = " + bot1Result);
  console.log("bot2 = " + bot2Result);

  if (
    (bot1Result == 0 && bot2Result == 1) ||
    (bot1Result == 2 && bot2Result == 0) ||
    (bot1Result == 1 && bot2Result == 2)
  ) {
    containerResult.append(bot1ResultText);
    bot1ResultText.innerText = "Jag vann!!";
    bot1.style.border = "6px solid green";
    bot1ResultText.style.color = "rgb(106, 224, 106)";
    bot1points.innerText++;
    containerPoint1.innerText = `Poäng: ${bot1points.innerText}`;
    containerResult.append(bot2ResultText);
    bot2ResultText.innerText = "Jag förlorade";
    bot2ResultText.style.color = "rgb(233, 111, 141)";
    bot2.style.border = "6px solid red";

    console.log("bot1 winner");
  } else if (
    (bot1Result == 0 && bot2Result == 2) ||
    (bot1Result == 1 && bot2Result == 0) ||
    (bot1Result == 2 && bot2Result == 1)
  ) {
    containerResult.append(bot1ResultText);
    bot1ResultText.innerText = "Jag förlorade";
    bot1ResultText.style.color = "rgb(233, 111, 141)";
    bot1.style.border = "6px solid red";
    containerResult.append(bot2ResultText);
    bot2ResultText.innerText = "Jag vann!!";
    bot2ResultText.style.color = "rgb(106, 224, 106)";
    bot2.style.border = "6px solid green";
    bot2points.innerText++;
    containerPoint2.innerText = `Poäng: ${bot2points.innerText}`;
    console.log("bot2 vinner");
  } else {
    containerResult.append(bot1ResultText);
    bot1ResultText.innerText = "Oavgjort";
    bot1.style.border = "6px solid blue";
    bot2ResultText.style.color = "blue";
    bot1ResultText.style.color = "blue";
    containerResult.append(bot2ResultText);
    bot2ResultText.innerText = "En gång till..";
    bot2.style.border = "6px solid blue";
    setTimeout(changeHands, 700);
    console.log("Oavgjort");
  }
}
