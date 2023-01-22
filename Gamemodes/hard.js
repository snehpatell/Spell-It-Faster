//Hard Mode

var gameState = false
var wordList = ['ABSOLUTE', 'ADMONISH', 'ADVISORY', 'AGNOSTIC', 'ALTRUISM',
'ASTEROID', 'AVERSION', 'BACHELOR', 'BANISHED', 'BANISTER',
'BANKRUPT', 'BARITONE', 'BEAUTIFY', 'BEHAVIOR', 'BIRDCAGE',
'BLACKOUT', 'BLOCKAGE', 'BLUDGEON', 'BOTULISM', 'BOUNDARY',
'BRACKISH', 'BUNGALOW', 'BUTCHERY', 'CANISTER', 'CATEGORY',
'CAULDRON', 'CHILDREN', 'CHIPMUNK', 'CHLORINE', 'CLARINET',
'CLOISTER', 'CLOTHIER', 'COLISEUM', 'COMPLAIN', 'COMPUTER',
'COURTESY', 'CREATION', 'CULINARY', 'CYLINDER', 'DEMOLISH',
'DIALOGUE', 'DINOSAUR', 'DISCOUNT', 'DOCTRINE', 'DOMESTIC',
'DOMINATE', 'DYNAMITE', 'DYSLEXIA', 'EDUCATOR', 'EMIGRANT',
'EMULSIFY', 'ENORMITY', 'FAVORITE', 'FEROCITY', 'FILAMENT',
'FLOUNDER', 'FLOURISH', 'FRACTION', 'FRAGMENT', 'FRIGHTEN',
'FUMIGATE', 'GASOLINE', 'GOLDFISH', 'GRACEFUL', 'HABITUDE',
'HANDGRIP', 'HANDOVER', 'HANDSOME', 'HANDWORK', 'HANGBIRD',
'HANGOVER', 'HARDLINE', 'HARMONIC', 'HAYFIELD', 'HAZELNUT',
'HEADLOCK', 'HEADLONG', 'HEADWORK', 'HEDONISM', 'HEDONIST',
'HELIPORT', 'HERDSMAN', 'HINDMOST', 'HOLDFAST', 'HOMELAND',
'HOMESICK', 'HOMESPUN', 'HOMEWARD', 'HORNBEAM', 'HORSEFLY',
'HORSEMAN', 'HOSPITAL', 'HOSTELRY', 'HOUSEFLY', 'HOUSEMAN',
'HOWITZER', 'HUCKSTER', 'HUMANELY', 'HUMANIST', 'HUMANITY',
'HUMANIZE', 'HUMANOID', 'HUMBLEST', 'HUMBLING', 'HUMORING',
  'HUMORIST', 'HUMPBACK', 'HUNGRILY', 'HURDLING', 'HURTLING',
  'HYDROGEN', 'HYPNOTIC', 'HYSTERIA', 'HYSTERIC', 'ICEBOUND',
  'IDEOGRAM', 'IDOLATER', 'IDOLATRY', 'IMPACTED', 'IMPARTED',
  'IMPLORED', 'IMPORTED', 'IMPOSTER', 'IMPROVED', 'IMPUDENT',
  'IMPUGNED', 'IMPURELY', 'INCHOATE', 'INCLOSED', 'INCUBATE',
  'INCURVED', 'INDUCTOR', 'INDULGER', 'INDURATE', 'INDUSTRY',
  'INFLAMED', 'INFLATED', 'INFORMAL', 'INFORMED', 'INGROWTH',
  'INJECTOR', 'INSOMUCH', 'INSULATE', 'INSULTED', 'INTEGRAL',
  'INTERCOM', 'INTERVAL', 'INVESTOR', 'INVOLUTE', 'INWARDLY',
  'ISLANDER', 'ISOLATED', 'ISOMETRY', 'ISOPLETH', 'ISOTHERM',
  'JALOUSIE', 'JARGONED', 'JAUNDICE', 'JAUNTIER', 'JAUNTILY',
  'JAWBONED', 'JEALOUSY', 'JEOPARDY', 'JOCUNDLY', 'JOINTURE',
  'JOKINGLY', 'JONGLEUR', 'JOSTLING', 'JOUSTING', 'JOWLIEST',
  'JUBILANT', 'JUBILATE', 'JUDGMENT', 'JUMBLING', 'JUMPIEST',
  'JUNGLIER', 'KEYBOARD', 'KEYPUNCH', 'KILOBYTE', 'KILOGRAM',
  'KLYSTRON', 'KNIGHTED', 'KNIGHTLY', 'KNITWEAR', 'KNOWABLE',
  'KOHLRABI', 'LABORING', 'LACEWING', 'LACONISM', 'LADYSHIP',
  'LAMBENCY', 'LAMBSKIN', 'LANGUISH', 'LANKIEST', 'LARDIEST',
  'LATCHING', 'LATCHKEY', 'LAUGHTER', 'LAUNCHED', 'LAUNCHER',
  'OPAQUING', 'OPERATIC', 'ORDINATE',   'ORGANDIE', 'ORGANISM',
  'ORGANIST', 'ORGANIZE',  'ORGASTIC', 'ORIENTAL',
  'ORIGANUM', 'ORNATELY', 'ORPHANED',   'OSCULATE', 'OUTBRAVE',
  'OUTBREAK', 'OUTCRIED', 'OUTDRIVE',   'OUTFACED', 'OUTFIELD',
  'OUTFLANK', 'OUTLAWED', 'OUTLAWRY',   'OUTLINED', 'OUTLIVED',
  'OUTLYING', 'OUTMARCH', 'OUTPACED',   'OUTRACED', 'OUTRAGED',
  'OUTREACH', 'OUTRIVAL', 'OUTSHINE',   'OUTSIDER', 'OUTSIZED',
  'OUTSPEAK', 'OUTSPEND', 'OUTVYING',   'OUTWEIGH', 'OVERBUSY',
  'OVERCAST', 'OVERHAND', 'OVERHANG',   'OVERHAUL', 'OVERHUNG',
  'OVERLAID', 'OVERLAIN', 'OVERLAND',   'OVERMUCH', 'OVERPAID',
  'OVERPLAY', 'OVERSTAY', 'OVULATED', 'PALIMONY', 'PALMIEST',
  'PALSYING',        'PANICKED',   'PANICLED', 'PARCHING',
  'PARHELIC', 'PARODIST', 'PAROLING',   'PAROQUET', 'PAROXYSM',
  'PARTIBLE', 'PARTICLE', 'PARTYING',   'PASTICHE', 'PASTURED',
  'PATCHIER', 'PATCHILY', 'PATCHING',   'PATHOGEN', 'PEACHING',
  'PEARLING', 'PECTORAL', 'PECULIAR',   'PEDALING', 'PEDANTIC',
  'PEDANTRY', 'PEGBOARD', 'PENLIGHT',   'PENUMBRA', 'PERCHING',
  'PERIANTH', 'PERSONAL', 'PERUSING',   'PESTLING', 'PETALOID',
  'PHENOLIC', 'PHENYLIC', 'PHONEMIC',   'PHONETIC', 'PHONIEST',
  'PHRASING', 'PHYSICAL', 'PHYSIQUE',   'PICAYUNE', 'PICTURED',
  'SMIDGEON', 'SMIRCHED', 'SMOCKING', 'SMOULDER', 'SMUDGIER',
  'SMUDGILY', 'SNATCHED', 'SNATCHER', 'SNEAKILY', 'SNOWBIRD',
  'SOBERING', 'SOBRIETY', 'SOCIABLE', 'SOCIABLY', 'SOCIETAL',
  'SODALITY', 'SOFTBACK', 'SOFTWARE', 'SOLACING', 'SOLARIUM',
  'SOLDIERY', 'SOLITARY', 'SOLITUDE', 'SOLVATED', 'SOLVENCY',
  'SOMBRELY', 'SOMEWHAT', 'SONGBIRD', 'SONGLIKE', 'SOURCING',
  'SOUTHERN', 'SOUTHPAW', 'SOUVENIR', 'SOUVLAKI', 'SOWBREAD',
  'SPADEFUL', 'SPANGLED', 'SPARKING', 'SPARKLED', 'SPAVINED',
  'SPEAKING', 'SPEARING', 'SPECKING', 'SPECTRAL', 'SPECTRUM',
  'SPECULAR', 'SPHAGNUM', 'SPHENOID', 'SPHERING', 'SPHEROID',
  'SPICULAR', 'SPIRACLE', 'SPITEFUL', 'SPLAYING', 'SPLENDOR',
  'SPLINTED', 'SPLINTER', 'SPLOTCHY', 'SPLURGED', 'SPOILAGE',
  'SPONDAIC', 'SPONGIER', 'SPONGILY', 'SPORADIC', '',
  'SPORTILY', 'SPORTING', 'SPORTIVE', 'SPOUTING', 'SPRAINED',
  'SPRAWLED', 'SPRAYING', 'SPRINKLE', 'SPRINTED', 'SPROCKET',
  'SPROUTED', 'SPRUCELY', 'SPRUCING', 'SPUNKIER', 'SPURTING',
  'SQUADRON', 'SQUANDER', 'SQUARELY', 'SQUARING', 'SQUAWKED',
  'SQUAWKER', 'SQUINTED', 'SQUINTER', 'SQUIRMED', 'SQUIRTED',
  'STABLING', 'STACKING', 'STALKING', 'STAMPING', 'STANCHED',
  'STANCHLY', 'STAPLING', 'STARCHED', 'STARLIKE', 'STARLING',
  'TAILORED', 'THANKFUL',
  'THOUSAND', 'TRIBUNAL',
  'UNDERWAY', 'VELOCITY',
  'VINEYARD', 'VISCERAL',
  'VOCALIST', 'WEAPONRY',
  'YOURSELF',]

document.addEventListener("DOMContentLoaded", () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBmF8G-QiDO3wjafbYBTTIfWh0WOjCh_e4",
    authDomain: "spell-it-faster.firebaseapp.com",
    projectId: "spell-it-faster",
    storageBucket: "spell-it-faster.appspot.com",
    messagingSenderId: "198160381471",
    appId: "1:198160381471:web:286ea57db26a45c65f072a",
    measurementId: "G-TQK3N2HDPM"
  };

  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  
  function submitScore(playerName, userscore) {
    usernameMain = playerName.slice(0, 15)
    db.collection("scores8").add({
      playerName: usernameMain,
      userscore: userscore
    })
    .then(function(docRef) {
      console.log("Score submitted successfully");
    })
    .catch(function(error) {
      console.error("Error submitting score: ", error);
    });
  }

  var topScores2DArray = [];
  function getTopScores() {
    return db.collection("scores8")
      .orderBy("userscore", "desc")
      .limit(10)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          topScores2DArray.push([doc.data().playerName, doc.data().userscore]);
        });
        return topScores2DArray;
      });
  }

  var gameState = false
  document.getElementById("gameAssets").style.visibility = "hidden"
  function checkGameState(){
    if (gameState == true){
      document.getElementById("gameAssets").style.visibility = "visible"
      document.getElementById("enter").style.visibility = "hidden"
      gameOn()
      clearInterval(gameCheck)
    }
  }
  var gameCheck = setInterval(checkGameState, 1)
  var enterTemp = false
  document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      if (enterTemp != true) {
        gameState = true;
        enterTemp = true
      }
    }
  })

  function gameOn(){
    var score = 0
    var score2 = 0
    var speed = 1500
    document.getElementById("scoreSpan").innerHTML = " " + score
    var curWord = wordList[Math.floor(Math.random()*wordList.length)]
    var wordCount = []
    var grid = document.getElementById("grid")
    var board = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ]

    function createBoard() {
      var temp = 0
        for (i = 0; i < board.length; i++){
            for (u = 0; u < board[i].length; u++){
                var block = document.createElement('div')
                block.classList.add('block')
                block.setAttribute("id", "block" + temp)
                temp++
                grid.appendChild(block);
            }
        }
    }

    // Current tetromino
    let staticWord = [[1, 1, 1, 1, 1, 1, 1, 1]];
    let currentPosition = [0, 0];

    function drawWordBlock() {
        for (let i = 0; i < staticWord.length; i++) {
          for (let j = 0; j < staticWord[i].length; j++) {
            if (staticWord[i][j]) {
              board[currentPosition[0] + i][currentPosition[1] + j] = 1;
            }
          }
        }
      }
    
    var test = 0;
    function moveWord(direction) {
        for (let i = 0; i < staticWord.length; i++) {
            for (let j = 0; j < staticWord[i].length; j++) {
              if (staticWord[i][j] && test > 0) {
                  board[currentPosition[0] + i][currentPosition[1] + j] = 0;
                }
            }
        }
        if (test == 0){
          drawWordBlock();
          test++
        } else if (direction === 'down') {
            currentPosition[0]++;
            test++
        } 

        drawWordBlock();
    }

    function updateBoard() {
        const block = document.querySelectorAll('.block');
        let index = 0;
        let temp1 = 0
        for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                block[index].classList.add('filled');
                document.getElementById("block" + temp1).innerHTML = curWord[j]
            } else if (board[i][j] === 2) {
              document.getElementById("block" + temp1).innerHTML = wordCount[0][j]
              block[index].classList.add('bottom1');
            } else if (board[i][j] === 3) {
              document.getElementById("block" + temp1).innerHTML = wordCount[1][j]
              block[index].classList.add('bottom2');
            } else if (board[i][j] === 4) {
              document.getElementById("block" + temp1).innerHTML = wordCount[2][j]
              block[index].classList.add('bottom3');
            } else if (board[i][j] === 5) {
              document.getElementById("block" + temp1).innerHTML = wordCount[3][j]
              block[index].classList.add('bottom4');
            } else if (board[i][j] === 6) {
              document.getElementById("block" + temp1).innerHTML = wordCount[4][j]
              block[index].classList.add('bottom5');
            } else if (board[i][j] === 7) {
              document.getElementById("block" + temp1).innerHTML = wordCount[5][j]
              block[index].classList.add('bottom6');
            } 
            else {
                block[index].classList.remove('filled');
                document.getElementById("block" + temp1).innerHTML = ""
            }
            temp1++
            index++;
          }
        }
      }
    
    // Function to check for collisions
    var bottomED = 0
    function checkCollision(direction) {
      for (let i = 0; i < staticWord.length; i++) {
        for (let j = 0; j < staticWord[i].length; j++) {
          if (staticWord[i][j]) {
            // Check for collisions with the bottom of the board
            if (direction === 'down' && currentPosition[0] + i + 1 === board.length - bottomED) {
              return true;
            }
          }
        }
      }
      return false;
    }

    // Function to update the game
    var position = 0;
    var where = -1
    function update() {
      if (!checkCollision('down')) {
        moveWord('down');
        where++
        for (var i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            if (document.getElementById(("block" + ((i*8)+j))).classList.contains("filledGreen")){
              document.getElementById("block" + ((i*8)+j)).classList.remove("filledGreen")
              document.getElementById("block" + ((where*8)+j)).classList.add("filledGreen")
              updateBoard()              
            }
            if (position == 0){
              document.getElementById("block" + ((i*8)+j)).classList.remove("filledGreen")
              updateBoard()   
            }
          }
        }

      } else {
        for (var i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            if (document.getElementById(("block" + ((i*8)+j))).classList.contains("filledGreen")){
              document.getElementById("block" + ((i*8)+j)).classList.remove("filledGreen")
              updateBoard()              
            }
          }
        }
        where = 0
        currentPosition = [0, 0];
        var temp2 = 0
        wordCount.push(curWord)
        while (temp2 < 8){
          board[5-bottomED][temp2] = (bottomED + 2)
          temp2++
        }
        curWord = wordList[Math.floor(Math.random()*wordList.length)]
        bottomED++
        drawWordBlock();
      }
    }

    
    var ifWrong = false;
    document.addEventListener("keypress", function(e) {
      if (e.key === curWord[position].toLowerCase()) {
        document.getElementById("block" + (((where)*8)+position)).classList.remove("filled")
        document.getElementById("block" + (((where)*8)+position)).classList.add("filledGreen")
        position++
        temp2 = 0
        if (position == 8){
          for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
              document.getElementById("block" + ((i*8)+j)).classList.remove("filledGreen")
              document.getElementById("block" + ((i*8)+j)).classList.add("block")
            }
          }
          var temp3 = 0
          while (temp3 < 8){
            document.getElementById("block" + ((where*8)+temp3)).classList.remove("filled")
            document.getElementById("block" + ((where*8)+temp3)).classList.add("block")
            document.getElementById("block" + ((where*8)+temp3)).innerHTML = ""
            temp3++
          }
          score = score + (5 - where)
          score2 = score2 + (5 - where)

          increaseSpeed(interval2)
          console.log(5 - where)
          position = 0
          board[where] = [0,0,0,0,0,0,0,0]
          console.log(board)
          where = 0
          currentPosition = [0, 0];
          curWord = wordList[Math.floor(Math.random()*wordList.length)]
          document.getElementById("scoreSpan").innerHTML = " " + score
          drawWordBlock()
        }
      } else {
        ifWrong = true;
        var temp3 = 0
        while (temp3 < 8){
          document.getElementById("block" + ((where*8)+temp3)).classList.remove("filled")
          document.getElementById("block" + ((where*8)+temp3)).classList.add("block")
          document.getElementById("block" + ((where*8)+temp3)).innerHTML = ""
          temp3++
        }
        for (var i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            if (document.getElementById(("block" + ((i*8)+j))).classList.contains("filledGreen")){
              document.getElementById("block" + ((i*8)+j)).classList.remove("filledGreen")
              updateBoard()              
            }
          }
        }
        position = 0
        board[where] = [0,0,0,0,0,0,0,0]
        where = 0
      }
    });

    function fullSubmit(){
      var username = document.getElementById("username")
      submitScore(username.value, score);
    }

    function createLeaderBoard(tableData) {
      var table = document.getElementById('leaderBoard');
      var tableBody = document.createElement('tbody');
      var info = document.createElement("tr")
      info.innerHTML = "Rank"
      info.style.backgroundColor = "#1e1e1e"
      info.style.color = "#faf8e6"
      var leaderName = document.createElement("td")
      leaderName.innerHTML = "Username"
      var leaderScore = document.createElement("td")
      leaderScore.innerHTML = "Score"
      info.appendChild(leaderName)
      info.appendChild(leaderScore)

      tableBody.appendChild(info)
      
      temp4 = 1
      tableData.forEach(function(rowData) {
        var row = document.createElement('tr');
        if (temp4 < 4){
          row.id = "row" + temp4
          row.innerHTML = temp4 + "."
          temp4++
        } else {
          row.id = "row"
          row.innerHTML = temp4 + "."
          if (temp4 % 2 == 0){
            row.classList.add("rowdif")
          }
          row.classList.add("row")
          temp4++
        }
        
        rowData.forEach(function(cellData) {
          var cell = document.createElement('td');
          cell.appendChild(document.createTextNode(cellData));
          row.appendChild(cell);
        });
    
        tableBody.appendChild(row);
      });
    
      table.appendChild(tableBody);
      document.body.appendChild(table);
    }

    function checkCorrect() {
      if (ifWrong){
        oldCurPos = currentPosition
        currentPosition = [5-bottomED, 0]
        update()
        ifWrong = false
      }
      if (bottomED >= 6){
        clearInterval(interval1)
        clearInterval(interval2)
        clearInterval(interval3)
        clearInterval(interval4)
        document.getElementById("gameAssets").style = ("animation: fadeOut 2s 1 forwards linear;")
        setTimeout(function () {
          document.getElementById("gameOver").style = ("animation: fadeIn .5s 1 forwards linear;")
          document.getElementById("gameOverMenu").style = ("animation: fadeIn .7s 1 forwards linear;")
          document.getElementById("submitScrBel").style = ("animation: fadeIn .7s 1 forwards linear;")
          document.getElementById("displayScore").textContent = "Score: " + score
          document.getElementById("submitButton").onclick = function(){
            fullSubmit();
            document.getElementById("username").value = "Done!"
            getTopScores().then(function(topScores) {
              console.log(topScores);
            });
            document.getElementById("submitButton").style.display = "none"
            document.getElementById("leaderButton").style.visibility = "visible"
          }
          document.getElementById("leaderButton").onclick = function(){
            document.getElementById("afterGame").style.animation = "fadeOut 1s ease-out"
            document.getElementById("afterGame").style.animationFillMode = "forwards"
            document.getElementById("leaderButton").style.animation = "fadeOut 1s ease-out"
            document.getElementById("leaderButton").style.animationFillMode = "forwards"
            createLeaderBoard(topScores2DArray)

            setTimeout(function(){
              document.getElementById("LeaderBoard1").style.animation = "slideUp1 1s ease-out"
              document.getElementById("LeaderBoard1").style.animationFillMode = "forwards"
              document.getElementById("leaderBoard").style.animation = "slideUp2 1.1s ease-out"
              document.getElementById("leaderBoard").style.animationFillMode = "forwards"
              document.getElementById("restart2").style.animation = "slideUp3 1.1s ease-out"
              document.getElementById("restart2").style.animationFillMode = "forwards"
            },500)
          }
          
          document.getElementById("restart").onclick = function(){
            window.location.reload()        
          }
          document.getElementById("restart2").onclick = function(){
            window.location.reload()        
          }
        },2500)
      }
    }

    var sec = 0
    var min = 0
    function time() {
      sec++
      if (sec == 60){
        min++
        sec = 0
      }
      if (min == 0 && sec < 10){
        document.getElementById("timeSpan").innerHTML = " 00:0" + sec
      } else if (min == 0) {
        document.getElementById("timeSpan").innerHTML = " 00:" + sec
      } else if (min < 10 & sec < 10) {
        document.getElementById("timeSpan").innerHTML = " 0" + min + ":0" + sec
      } else if (min < 10) {
        document.getElementById("timeSpan").innerHTML = " 0" + min + ":" + sec
      } else {
        document.getElementById("timeSpan").innerHTML = " " + min + ":" + sec
      }
    }

    function increaseSpeed(intervalId) {
      if (score2 >= 30 && speed >= 500) {
        speed -= 25;
        clearInterval(intervalId);
        intervalId = setInterval(update, speed);
        score2 = 0
      }
    }

    createBoard()
    var interval1 = setInterval(checkCorrect, 1);
    var interval2 = setInterval(update, speed)
    var interval3 = setInterval(updateBoard, 100);
    var interval4 = setInterval(time, 1000)
  }
});
