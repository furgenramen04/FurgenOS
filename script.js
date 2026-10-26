

var randomSites = ['https://theuselessweb.com/',
  'https://neal.fun/',
  'https://pointerpointer.com/',
  'https://eelslap.com/',
  'https://cat-bounce.com/',
  'https://zoomquilt.org/',
  'https://patatap.com/',
  'https://radio.garden/',
  'https://trypap.com/',
  'https://papertoilet.com/',
  'https://endless.horse/',
  'https://window-swap.com/',
  'https://mapcrunch.com/',
  'https://wikiroulette.co/',
  'https://hackertyper.com/',
  'https://www.fallingfalling.com/',
  'https://www.koalastothemax.com/',
  'https://zombo.com/',
  'https://www.windows93.net/',
  'https://www.thispersondoesnotexist.com/',
  'https://boredbutton.com/',
  'https://www.donothingfor2minutes.com/',
  'https://crouton.net/',
  'https://pixelthoughts.co/',
  'https://www.bouncingdvdlogo.com/',
  'https://scp-wiki.wikidot.com/',
  'https://www.spacejam.com/1996/',
  'https://csszengarden.com/']

function updateTime() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = currentTime;
      }
    
      setInterval(updateTime, 1000);

// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("todo"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
   
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event; 
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
var welcomeScreen = document.querySelector("#welcome");

function closeWindow(element) {
  element.style.display = "none";
}


var welcomeScreenClose = document.querySelector("#welcomeclose");

var welcomeScreenOpen = document.querySelector("#welcomeopen");



welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  var randomIndex = Math.floor(Math.random() * randomSites.length);
  var chosenSite = randomSites[randomIndex];
  window.open(chosenSite);
});

var selectedIcon = undefined

function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
}

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
}

function handleIconTap(element, targetWindow) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(targetWindow)
  } else {
    selectIcon(element)
  }
}

var todoScreen = document.querySelector("#todo")

var todoScreenClose = document.querySelector("#todoclose")

var todoScreenOpen = document.querySelector("#todoopen")

todoScreenClose.addEventListener("click", function() {
  closeWindow(todoScreen);
});

todoScreenOpen.addEventListener("click", function() {
  openWindow(todoScreen);
})

var biggestIndex = 1;

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", function() {
    handleWindowTap(element)
  })
}

addWindowTapHandling(welcomeScreen);
addWindowTapHandling(todoScreen);

function handleWindowTap(element) {
  biggestIndex++;
  element.style.zIndex = biggestIndex;
}

var topBar = document.querySelector("#top")

function openWindow(element) {
  element.style.display = "flex";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function initializeWindow(elementName) {
  var screen = document.querySelector("#" + elementName)
  addWindowTapHandling(screen)
  dragElement(screen)
}

// ---- Ronaldo Quotes App ----

var quotes = [
  {
    title: "Calma",
    date: "2016",
    content: `<p>"Calma, calma."</p><p style="font-size:12px; opacity:0.8;">Said after scoring in the Euro 2016 final, telling everyone to stay calm.</p>`
  },
  {
    title: "SIUUU",
    date: "Every match ever",
    content: `<p>"SIUUUUUUU!"</p><p style="font-size:12px; opacity:0.8;">A timeless celebration that made its way everywhere. From the pitch to the streets, it's the most recognizable gesture in football.</p>`
  },
  {
    title: "On Hard Work",
    date: "2014",
    content: `<p>"Talent without working hard is nothing."</p>`
  },
  {
    title: "On Being The Best",
    date: "2018",
    content: `<p>"I don't have to prove anything to anyone, I only have to prove things to myself."</p>`
  },
  {
    title: "Ronaldo Mentality",
    date: "November 2015",
    content: `<p>"In my mind, I am always the best."</p> <p style="font-size:12px; opacity:0.8;">Gotta be one of the most iconic Ronaldo quotes.</p>`
  },
  { 
    title:"On Criticism",
    date:"August 23, 2015",
    content: `</p>"Your love makes me stronger, your hate makes me unstoppable."</p>`


  }
]


function setQuoteContent(index) {
  var quoteContent = document.querySelector("#quoteContent");
  quoteContent.innerHTML = quotes[index].content;
}

function addToQuoteSidebar(index) {
  var sidebar = document.querySelector("#quoteSidebar");
  var quote = quotes[index];

  var newDiv = document.createElement("div");
  newDiv.className = "quoteEntry";
  newDiv.innerHTML = `
    <p>${quote.title}</p>
    <p class="quoteDate">${quote.date}</p>
  `;

  newDiv.addEventListener("click", function() {
    setQuoteContent(index);
  });

  sidebar.appendChild(newDiv);
}

for (let i = 0; i < quotes.length; i++) {
  addToQuoteSidebar(i);
}

setQuoteContent(0);

const wallpaperbutton = document.getElementById("changewallpaper");
const wallpaperinput = document.getElementById("wallpaperinput");


const savedwallpaper = localStorage.getItem("furgenwallpaper");

if (savedwallpaper) {
    document.body.style.backgroundImage = `url("${savedwallpaper}")`;
}


if (wallpaperbutton && wallpaperinput) {
    wallpaperbutton.addEventListener("click", () => {
        wallpaperinput.click();
    });

    wallpaperinput.addEventListener("change", () => {
        const file = wallpaperinput.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select an image.");
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            const image = new Image();

            image.onload = () => {
                const canvas = document.createElement("canvas");
                const maxWidth = 1920;
                const maxHeight = 1080;

                const scale = Math.min(
                    1,
                    maxWidth / image.width,
                    maxHeight / image.height
                );

                canvas.width = Math.round(image.width * scale);
                canvas.height = Math.round(image.height * scale);

                const context = canvas.getContext("2d");

                context.drawImage(
                    image,
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );

                const wallpaper = canvas.toDataURL("image/jpeg", 0.85);

                try {
                    localStorage.setItem("furgenwallpaper", wallpaper);
                    document.body.style.backgroundImage =
                        `url("${wallpaper}")`;
                } catch (error) {
                    alert("The wallpaper could not be saved. Try a smaller image.");
                }
            };

            image.onerror = () => {
                alert("This image could not be loaded.");
            };

            image.src = reader.result;
        };

        reader.onerror = () => {
            alert("The image file could not be read.");
        };

        reader.readAsDataURL(file);
    });
}
const bootScreen = document.getElementById("bootScreen");
const bootSound = document.getElementById("bootSound");
const bootProgressBar = document.getElementById("bootProgressBar");
const bootPercent = document.getElementById("bootPercent");
const bootStatus = document.getElementById("bootStatus");

const messages = [
    "Initializing FurgenOS...",
    "Loading desktop...",
    "Starting applications...",
    "Preparing your workspace...",
    "Welcome to FurgenOS!"
];

bootSound.currentTime = 0;
bootSound.play().catch(error => {
    console.log("Boot sound could not play:", error);
});


const duration = 1000;
const startTime = Date.now();

const bootTimer = setInterval(() => {
    const progress = Math.min(
        (Date.now() - startTime) / duration,
        1
    );

    const percent = Math.round(progress * 100);

    bootProgressBar.style.width = percent + "%";
    bootPercent.textContent = percent + "%";

    const messageIndex = Math.min(
        messages.length - 1,
        Math.floor(progress * messages.length)
    );

    bootStatus.textContent = messages[messageIndex];

    if (progress >= 1) {
        clearInterval(bootTimer);

        bootScreen.classList.add("bootFinished");

        const welcome = document.getElementById("welcome");

        if (welcome) {
            welcome.style.display = "flex";
        }
    }
}, 10);


/* ---- FurgenOS Pong ---- */

const pongWindow = document.getElementById("pongWindow");
const pongOpen = document.getElementById("pongopen");
const pongClose = document.getElementById("pongClose");
const pongCanvas = document.getElementById("pongCanvas");
const pongCtx = pongCanvas.getContext("2d");
const pongStart = document.getElementById("pongStart");

const pongPlayerScore = document.getElementById("pongPlayerScore");
const pongCpuScore = document.getElementById("pongCpuScore");
const pongStatus = document.getElementById("pongStatus");

const PW = pongCanvas.width;
const PH = pongCanvas.height;

const paddleWidth = 10;
const paddleHeight = 75;
const ballSize = 10;

let playerY = (PH - paddleHeight) / 2;
let cpuY = (PH - paddleHeight) / 2;

let ballX = PW / 2;
let ballY = PH / 2;
let ballVX = 4;
let ballVY = 2;

let playerScore = 0;
let cpuScore = 0;
let pongRunning = false;
let pongGameOver = false;

const pongKeys = {};

function resetPongBall(direction = 1) {
    ballX = PW / 2;
    ballY = PH / 2;

    ballVX = 4 * direction;
    ballVY = (Math.random() * 4) - 2;

    if (Math.abs(ballVY) < 1) {
        ballVY = ballVY < 0 ? -1 : 1;
    }
}

function startPong() {
    playerScore = 0;
    cpuScore = 0;

    pongPlayerScore.textContent = "0";
    pongCpuScore.textContent = "0";

    playerY = (PH - paddleHeight) / 2;
    cpuY = (PH - paddleHeight) / 2;

    pongGameOver = false;
    pongRunning = true;

    pongStatus.textContent = "Playing";
    pongStart.textContent = "Restart Game";

    resetPongBall(Math.random() < 0.5 ? -1 : 1);
}

pongOpen.addEventListener("click", function () {
    openWindow(pongWindow);
});

pongClose.addEventListener("click", function () {
    closeWindow(pongWindow);
});

pongStart.addEventListener("click", startPong);

// Make the Pong window draggable and bring it to the front.
addWindowTapHandling(pongWindow);
dragElement(pongWindow);

document.addEventListener("keydown", function (e) {
    if (pongWindow.style.display === "none") return;

    if (["ArrowUp", "ArrowDown", "w", "W", "s", "S"].includes(e.key)) {
        e.preventDefault();
        pongKeys[e.key.toLowerCase()] = true;
    }
});

document.addEventListener("keyup", function (e) {
    pongKeys[e.key.toLowerCase()] = false;
});

function drawPong() {
    pongCtx.clearRect(0, 0, PW, PH);

    // Background
    pongCtx.fillStyle = "#080d16";
    pongCtx.fillRect(0, 0, PW, PH);

    // Centre line
    pongCtx.strokeStyle = "#35465c";
    pongCtx.setLineDash([8, 10]);
    pongCtx.beginPath();
    pongCtx.moveTo(PW / 2, 0);
    pongCtx.lineTo(PW / 2, PH);
    pongCtx.stroke();
    pongCtx.setLineDash([]);

    // Paddles and ball
    pongCtx.fillStyle = "#8dbce3";

    pongCtx.fillRect(
        20,
        playerY,
        paddleWidth,
        paddleHeight
    );

    pongCtx.fillRect(
        PW - 20 - paddleWidth,
        cpuY,
        paddleWidth,
        paddleHeight
    );

    pongCtx.fillStyle = "#ffffff";
    pongCtx.fillRect(ballX, ballY, ballSize, ballSize);
}

function updatePong() {
    if (pongRunning && pongWindow.style.display !== "none") {

        // Player movement
        if (pongKeys["w"] || pongKeys["arrowup"]) {
            playerY -= 6;
        }

        if (pongKeys["s"] || pongKeys["arrowdown"]) {
            playerY += 6;
        }

        playerY = Math.max(
            0,
            Math.min(PH - paddleHeight, playerY)
        );

        // Computer opponent follows the ball.
        const cpuCentre = cpuY + paddleHeight / 2;
        const ballCentre = ballY + ballSize / 2;

        if (cpuCentre < ballCentre - 8) {
            cpuY += 3.5;
        } else if (cpuCentre > ballCentre + 8) {
            cpuY -= 3.5;
        }

        cpuY = Math.max(
            0,
            Math.min(PH - paddleHeight, cpuY)
        );

        // Move ball
        ballX += ballVX;
        ballY += ballVY;

        // Top and bottom collisions
        if (ballY <= 0 || ballY + ballSize >= PH) {
            ballVY *= -1;
        }

        // Player paddle collision
        if (
            ballVX < 0 &&
            ballX <= 30 &&
            ballX + ballSize >= 20 &&
            ballY + ballSize >= playerY &&
            ballY <= playerY + paddleHeight
        ) {
            ballVX = Math.abs(ballVX) + 0.2;

            const hitPosition =
                (ballY + ballSize / 2 - (playerY + paddleHeight / 2))
                / (paddleHeight / 2);

            ballVY = hitPosition * 5;
            ballX = 30;
        }

        // CPU paddle collision
        if (
            ballVX > 0 &&
            ballX + ballSize >= PW - 30 &&
            ballX <= PW - 20 &&
            ballY + ballSize >= cpuY &&
            ballY <= cpuY + paddleHeight
        ) {
            ballVX = -(Math.abs(ballVX) + 0.2);

            const hitPosition =
                (ballY + ballSize / 2 - (cpuY + paddleHeight / 2))
                / (paddleHeight / 2);

            ballVY = hitPosition * 5;
            ballX = PW - 30 - ballSize;
        }

        // Scoring
        if (ballX + ballSize < 0) {
            cpuScore++;
            pongCpuScore.textContent = cpuScore;

            if (cpuScore >= 5) {
                finishPong("Computer wins!");
            } else {
                resetPongBall(-1);
            }
        }

        if (ballX > PW) {
            playerScore++;
            pongPlayerScore.textContent = playerScore;

            if (playerScore >= 5) {
                finishPong("You win!");
            } else {
                resetPongBall(1);
            }
        }
    }

    drawPong();
    requestAnimationFrame(updatePong);
}

function finishPong(message) {
    pongRunning = false;
    pongGameOver = true;

    pongStatus.textContent = message;
    pongStart.textContent = "Play Again";
}

updatePong();
