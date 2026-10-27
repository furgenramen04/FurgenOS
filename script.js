

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


/* ---- FurgenOS Football Pong ---- */

const pongWindow = document.getElementById("pongWindow");
const pongOpen = document.getElementById("pongopen");
const pongClose = document.getElementById("pongClose");
const pongCanvas = document.getElementById("pongCanvas");
const pongCtx = pongCanvas.getContext("2d");
const pongStart = document.getElementById("pongStart");
const pongMode = document.getElementById("pongMode");

const pongPlayerScore = document.getElementById("pongPlayerScore");
const pongCpuScore = document.getElementById("pongCpuScore");
const pongStatus = document.getElementById("pongStatus");

const PW = pongCanvas.width;
const PH = pongCanvas.height;

const playerSize = 22;
const ballRadius = 10;
const goalHeight = 130;
const goalTop = (PH - goalHeight) / 2;
const goalBottom = goalTop + goalHeight;
const goalDepth = 24;

const player = {
    x: 85,
    y: PH / 2,
    size: playerSize,
    speed: 4.5,
    color: "#ef4444"
};

const cpu = {
    x: PW - 85,
    y: PH / 2,
    size: playerSize,
    speed: 4.5,
    color: "#3b82f6"
};

const ball = {
    x: PW / 2,
    y: PH / 2,
    vx: 0,
    vy: 0,
    radius: ballRadius
};

let playerScore = 0;
let cpuScore = 0;
let pongRunning = false;
let pongGameOver = false;
let pongKeys = {};
let ballKicked = false;

function resetFootballBall() {
    ball.x = PW / 2;
    ball.y = PH / 2;
    ball.vx = 0;
    ball.vy = 0;
    ballKicked = false;

    pongStatus.textContent = "Kick-off: touch the ball!";
}

function resetFootballPlayers() {
    player.x = 85;
    player.y = PH / 2;

    cpu.x = PW - 85;
    cpu.y = PH / 2;
}

function startPong() {
    playerScore = 0;
    cpuScore = 0;

    pongPlayerScore.textContent = "0";
    pongCpuScore.textContent = "0";

    resetFootballPlayers();
    resetFootballBall();

    pongGameOver = false;
    pongRunning = true;

    pongStart.textContent = "Restart Match";
}

pongOpen.addEventListener("click", function () {
    openWindow(pongWindow);
});

pongClose.addEventListener("click", function () {
    closeWindow(pongWindow);
    pongKeys = {};
});

pongStart.addEventListener("click", startPong);

addWindowTapHandling(pongWindow);
dragElement(pongWindow);

document.addEventListener("keydown", function (e) {
    if (pongWindow.style.display === "none") return;

    const key = e.key.toLowerCase();

    if ([
        "arrowup", "arrowdown", "arrowleft", "arrowright",
        "w", "a", "s", "d"
    ].includes(key)) {
        e.preventDefault();
        pongKeys[key] = true;
    }
});

document.addEventListener("keyup", function (e) {
    pongKeys[e.key.toLowerCase()] = false;
});

function drawFootballPitch() {
    pongCtx.fillStyle = "#13783e";
    pongCtx.fillRect(0, 0, PW, PH);

    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            pongCtx.fillStyle = "rgba(255,255,255,0.045)";
            pongCtx.fillRect(i * PW / 10, 0, PW / 10, PH);
        }
    }

    pongCtx.strokeStyle = "rgba(255,255,255,0.85)";
    pongCtx.lineWidth = 2;
    pongCtx.strokeRect(12, 12, PW - 24, PH - 24);

    pongCtx.beginPath();
    pongCtx.moveTo(PW / 2, 12);
    pongCtx.lineTo(PW / 2, PH - 12);
    pongCtx.stroke();

    pongCtx.beginPath();
    pongCtx.arc(PW / 2, PH / 2, 55, 0, Math.PI * 2);
    pongCtx.stroke();

    pongCtx.beginPath();
    pongCtx.arc(PW / 2, PH / 2, 3, 0, Math.PI * 2);
    pongCtx.fillStyle = "white";
    pongCtx.fill();

    pongCtx.strokeRect(12, PH / 2 - 95, 75, 190);
    pongCtx.strokeRect(PW - 87, PH / 2 - 95, 75, 190);

    pongCtx.fillStyle = "rgba(255,255,255,0.15)";
    pongCtx.fillRect(0, goalTop, goalDepth, goalHeight);
    pongCtx.fillRect(PW - goalDepth, goalTop, goalDepth, goalHeight);

    pongCtx.strokeStyle = "#ffffff";
    pongCtx.lineWidth = 3;
    pongCtx.strokeRect(0, goalTop, goalDepth, goalHeight);
    pongCtx.strokeRect(PW - goalDepth, goalTop, goalDepth, goalHeight);
}

function drawFootballPlayer(p) {
    pongCtx.fillStyle = p.color;
    pongCtx.fillRect(
        p.x - p.size / 2,
        p.y - p.size / 2,
        p.size,
        p.size
    );

    pongCtx.strokeStyle = "rgba(255,255,255,0.9)";
    pongCtx.lineWidth = 2;
    pongCtx.strokeRect(
        p.x - p.size / 2,
        p.y - p.size / 2,
        p.size,
        p.size
    );
}

function drawFootballBall() {
    pongCtx.beginPath();
    pongCtx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    pongCtx.fillStyle = "#ffffff";
    pongCtx.fill();

    pongCtx.strokeStyle = "#d1d5db";
    pongCtx.lineWidth = 1.5;
    pongCtx.stroke();

    pongCtx.fillStyle = "#171717";
    pongCtx.beginPath();

    for (let i = 0; i < 5; i++) {
        const angle = -Math.PI / 2 + i * (Math.PI * 2 / 5);
        const px = ball.x + Math.cos(angle) * 4.2;
        const py = ball.y + Math.sin(angle) * 4.2;

        if (i === 0) pongCtx.moveTo(px, py);
        else pongCtx.lineTo(px, py);
    }

    pongCtx.closePath();
    pongCtx.fill();

    for (let i = 0; i < 5; i++) {
        const angle = i * (Math.PI * 2 / 5) + 0.2;

        pongCtx.beginPath();
        pongCtx.arc(
            ball.x + Math.cos(angle) * 7,
            ball.y + Math.sin(angle) * 7,
            1.4,
            0,
            Math.PI * 2
        );
        pongCtx.fill();
    }
}

function clampPlayer(p) {
    p.x = Math.max(
        p.size / 2 + 12,
        Math.min(PW - p.size / 2 - 12, p.x)
    );

    p.y = Math.max(
        p.size / 2 + 12,
        Math.min(PH - p.size / 2 - 12, p.y)
    );
}

function resolvePlayerCollision() {
    const dx = cpu.x - player.x;
    const dy = cpu.y - player.y;
    const distance = Math.hypot(dx, dy);
    const minDistance = player.size;

    if (distance < minDistance) {
        const nx = distance === 0 ? 1 : dx / distance;
        const ny = distance === 0 ? 0 : dy / distance;
        const overlap = minDistance - distance;

        // Push both players apart equally.
        player.x -= nx * overlap / 2;
        player.y -= ny * overlap / 2;
        cpu.x += nx * overlap / 2;
        cpu.y += ny * overlap / 2;

        clampPlayer(player);
        clampPlayer(cpu);
    }
}

function moveHumanPlayer(p, up, down, left, right) {
    let dx = 0;
    let dy = 0;

    if (pongKeys[up]) dy -= 1;
    if (pongKeys[down]) dy += 1;
    if (pongKeys[left]) dx -= 1;
    if (pongKeys[right]) dx += 1;

    if (dx !== 0 && dy !== 0) {
        dx *= Math.SQRT1_2;
        dy *= Math.SQRT1_2;
    }

    p.x += dx * p.speed;
    p.y += dy * p.speed;

    clampPlayer(p);
}

function moveCpu() {
    // Do not chase the ball until it has been kicked.
    if (!ballKicked) return;

    const dx = ball.x - cpu.x;
    const dy = ball.y - cpu.y;
    const distance = Math.hypot(dx, dy);

    if (distance > 4) {
        cpu.x += (dx / distance) * Math.min(cpu.speed, distance);
        cpu.y += (dy / distance) * Math.min(cpu.speed, distance);
    }

    clampPlayer(cpu);
}

function collideBallWithPlayer(p) {
    const left = p.x - p.size / 2;
    const right = p.x + p.size / 2;
    const top = p.y - p.size / 2;
    const bottom = p.y + p.size / 2;

    const closestX = Math.max(left, Math.min(ball.x, right));
    const closestY = Math.max(top, Math.min(ball.y, bottom));

    let dx = ball.x - closestX;
    let dy = ball.y - closestY;
    let distance = Math.hypot(dx, dy);

    if (distance >= ball.radius) return;

    let nx;
    let ny;

    if (distance > 0.001) {
        nx = dx / distance;
        ny = dy / distance;
    } else {
        // Ball is inside the player's rectangle.
        // Find the nearest edge and push it out through that edge.
        const distances = [
            { d: ball.x - left, nx: -1, ny: 0 },
            { d: right - ball.x, nx: 1, ny: 0 },
            { d: ball.y - top, nx: 0, ny: -1 },
            { d: bottom - ball.y, nx: 0, ny: 1 }
        ];

        distances.sort((a, b) => a.d - b.d);

        nx = distances[0].nx;
        ny = distances[0].ny;
        distance = -distances[0].d;
    }

    // Push the ball completely outside the player.
    const penetration = ball.radius - distance;
    ball.x += nx * penetration;
    ball.y += ny * penetration;

    if (!ballKicked) {
        ballKicked = true;

        const kickDirection = p === player ? 1 : -1;
        ball.vx = kickDirection * 1.4;
        ball.vy = ny * 1.4;

        pongStatus.textContent = "Play on!";
        return;
    }

    // Only change direction if the ball is moving into the player.
    const velocityIntoPlayer = ball.vx * nx + ball.vy * ny;

    if (velocityIntoPlayer < 0) {
        ball.vx -= 2 * velocityIntoPlayer * nx;
        ball.vy -= 2 * velocityIntoPlayer * ny;
    }

    // Keep the ball at or below half its previous maximum speed.
    const speed = Math.hypot(ball.vx, ball.vy);
    const maxSpeed = 2.8;

    if (speed > maxSpeed) {
        ball.vx = (ball.vx / speed) * maxSpeed;
        ball.vy = (ball.vy / speed) * maxSpeed;
    }
}

function scoreGoal(scorer) {
    if (scorer === "red") {
        playerScore++;
        pongPlayerScore.textContent = playerScore;
        pongStatus.textContent = "RED SCORES!";
    } else {
        cpuScore++;
        pongCpuScore.textContent = cpuScore;
        pongStatus.textContent = "BLUE SCORES!";
    }

    // Reset both players and stop the ball for the next kick-off.
    resetFootballPlayers();

    if (playerScore >= 5 || cpuScore >= 5) {
        pongRunning = false;
        pongGameOver = true;

        pongStatus.textContent =
            playerScore >= 5 ? "Red wins!" : "Blue wins!";

        pongStart.textContent = "Play Again";
        return;
    }

    resetFootballBall();
}

function updateFootballPong() {
    if (pongRunning && pongWindow.style.display !== "none") {
        // Red player: WASD
        moveHumanPlayer(
            player,
            "w", "s", "a", "d"
        );

        if (pongMode.value === "two") {
            // Blue player: arrow keys
            moveHumanPlayer(
                cpu,
                "arrowup", "arrowdown",
                "arrowleft", "arrowright"
            );

            resolvePlayerCollision();
        } else {
            // Single-player mode: computer controls blue.
            moveCpu();
        }

        if (ballKicked) {
            ball.x += ball.vx;
            ball.y += ball.vy;

            // Top and bottom touchlines
            if (ball.y - ball.radius <= 12) {
                ball.y = 12 + ball.radius;
                ball.vy = Math.abs(ball.vy);
            }

            if (ball.y + ball.radius >= PH - 12) {
                ball.y = PH - 12 - ball.radius;
                ball.vy = -Math.abs(ball.vy);
            }
        }

        // Check collisions even when the ball is stationary,
        // so either player can kick off.
        collideBallWithPlayer(player);
        collideBallWithPlayer(cpu);

        if (ballKicked) {
            // Left goal: blue scores
            if (ball.x - ball.radius <= 0) {
                if (ball.y >= goalTop && ball.y <= goalBottom) {
                    scoreGoal("blue");
                } else {
                    ball.x = ball.radius;
                    ball.vx = Math.abs(ball.vx);
                }
            }

            // Right goal: red scores
            if (ball.x + ball.radius >= PW) {
                if (ball.y >= goalTop && ball.y <= goalBottom) {
                    scoreGoal("red");
                } else {
                    ball.x = PW - ball.radius;
                    ball.vx = -Math.abs(ball.vx);
                }
            }
        }
    }

    drawFootballPitch();
    drawFootballPlayer(player);
    drawFootballPlayer(cpu);
    drawFootballBall();

    requestAnimationFrame(updateFootballPong);
}

updateFootballPong();


/* ---- FurgenOS Snake ---- */

const snakeWindow = document.getElementById("snakeWindow");
const snakeOpen = document.getElementById("snakeopen");
const snakeClose = document.getElementById("snakeClose");
const snakeCanvas = document.getElementById("snakeCanvas");
const snakeCtx = snakeCanvas.getContext("2d");
const snakeStart = document.getElementById("snakeStart");
const snakePause = document.getElementById("snakePause");
const snakeScoreDisplay = document.getElementById("snakeScore");
const snakeBestDisplay = document.getElementById("snakeBest");
const snakeStatus = document.getElementById("snakeStatus");

const snakeGrid = 20;
const snakeCells = snakeCanvas.width / snakeGrid;

let snake = [];
let snakeFood = {};
let snakeDirection = { x: 1, y: 0 };
let snakeNextDirection = { x: 1, y: 0 };
let snakeScore = 0;
let snakeBest = Number(localStorage.getItem("furgenSnakeBest")) || 0;
let snakeRunning = false;
let snakeGameOver = false;
let snakeTimer = null;

snakeBestDisplay.textContent = snakeBest;

function drawSnakeGame() {
    const size = snakeGrid;

    snakeCtx.fillStyle = "#071510";
    snakeCtx.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height);

    // Grid
    snakeCtx.strokeStyle = "rgba(120,219,169,0.07)";
    snakeCtx.lineWidth = 1;

    for (let i = 0; i <= snakeCanvas.width; i += size) {
        snakeCtx.beginPath();
        snakeCtx.moveTo(i, 0);
        snakeCtx.lineTo(i, snakeCanvas.height);
        snakeCtx.stroke();

        snakeCtx.beginPath();
        snakeCtx.moveTo(0, i);
        snakeCtx.lineTo(snakeCanvas.width, i);
        snakeCtx.stroke();
    }

    // Food
        snakeCtx.fillStyle = "#ff647c";
        snakeCtx.fillRect(
              snakeFood.x * snakeGrid + 2,
              snakeFood.y * snakeGrid + 2,
              snakeGrid - 4,
              snakeGrid - 4
);

    // Snake
    snake.forEach((part, index) => {
        snakeCtx.fillStyle = index === 0 ? "#b8ffcf" : "#48b77b";
        snakeCtx.fillRect(
            part.x * size + 1,
            part.y * size + 1,
            size - 2,
            size - 2
        );

        if (index === 0) {
            snakeCtx.fillStyle = "#071510";
            snakeCtx.fillRect(
                part.x * size + 5,
                part.y * size + 5,
                3,
                3
            );
            snakeCtx.fillRect(
                part.x * size + 12,
                part.y * size + 5,
                3,
                3
            );
        }
    });
}

function placeSnakeFood() {
    do {
        snakeFood = {
            x: Math.floor(Math.random() * snakeCells),
            y: Math.floor(Math.random() * snakeCells)
        };
    } while (
        snake.some(part =>
            part.x === snakeFood.x && part.y === snakeFood.y
        )
    );
}

function startSnakeGame() {
    clearInterval(snakeTimer);

    snake = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
    ];

    snakeDirection = { x: 1, y: 0 };
    snakeNextDirection = { x: 1, y: 0 };
    snakeScore = 0;
    snakeGameOver = false;
    snakeRunning = true;

    snakeScoreDisplay.textContent = "0";
    snakeStatus.textContent = "Collect the red food!";
    snakeStart.textContent = "Restart Game";
    snakePause.textContent = "Pause";

    placeSnakeFood();
    drawSnakeGame();
    snakeTimer = setInterval(updateSnakeGame, 110);
}

function updateSnakeGame() {
    if (!snakeRunning || snakeGameOver) return;

    snakeDirection = { ...snakeNextDirection };

    const head = {
        x: snake[0].x + snakeDirection.x,
        y: snake[0].y + snakeDirection.y
    };

    const eating = head.x === snakeFood.x && head.y === snakeFood.y;

    // Wall collision
    if (
        head.x < 0 || head.x >= snakeCells ||
        head.y < 0 || head.y >= snakeCells
    ) {
        endSnakeGame();
        return;
    }

    // Self collision. The tail can move away if not eating.
    const bodyToCheck = eating ? snake : snake.slice(0, -1);

    if (bodyToCheck.some(part => part.x === head.x && part.y === head.y)) {
        endSnakeGame();
        return;
    }

    snake.unshift(head);

    if (eating) {
        snakeScore += 1;
        snakeScoreDisplay.textContent = snakeScore;

        if (snakeScore > snakeBest) {
            snakeBest = snakeScore;
            snakeBestDisplay.textContent = snakeBest;
            localStorage.setItem("furgenSnakeBest", snakeBest);
        }

        placeSnakeFood();
    } else {
        snake.pop();
    }

    drawSnakeGame();
}

function endSnakeGame() {
    snakeRunning = false;
    snakeGameOver = true;
    clearInterval(snakeTimer);
    snakeStatus.textContent = `Game over! Score: ${snakeScore}`;
    snakeStart.textContent = "Play Again";
    drawSnakeGame();
}

function pauseSnakeGame() {
    if (snakeGameOver || snake.length === 0) return;

    snakeRunning = !snakeRunning;
    snakePause.textContent = snakeRunning ? "Pause" : "Resume";
    snakeStatus.textContent = snakeRunning ? "Collect the red food!" : "Game paused";
}

snakeOpen.addEventListener("click", () => {
    openWindow(snakeWindow);
});

snakeClose.addEventListener("click", () => {
    closeWindow(snakeWindow);
    snakeRunning = false;
    clearInterval(snakeTimer);
});

snakeStart.addEventListener("click", startSnakeGame);
snakePause.addEventListener("click", pauseSnakeGame);

addWindowTapHandling(snakeWindow);
dragElement(snakeWindow);

document.addEventListener("keydown", event => {
    if (snakeWindow.style.display === "none") return;

    const key = event.key.toLowerCase();
    const directions = {
        arrowup:    { x: 0, y: -1 },
        w:          { x: 0, y: -1 },
        arrowdown:  { x: 0, y: 1 },
        s:          { x: 0, y: 1 },
        arrowleft:  { x: -1, y: 0 },
        a:          { x: -1, y: 0 },
        arrowright: { x: 1, y: 0 },
        d:          { x: 1, y: 0 }
    };

    const next = directions[key];
    if (!next || !snakeRunning) return;

    event.preventDefault();

    // Prevent reversing directly into the snake.
    if (
        next.x === -snakeDirection.x &&
        next.y === -snakeDirection.y
    ) return;

    snakeNextDirection = next;
});

// Draw an initial game screen before the first round.
snake = [{ x: 10, y: 10 }];
snakeFood = { x: 15, y: 10 };
drawSnakeGame();
