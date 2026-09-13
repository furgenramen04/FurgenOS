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

function openWindow(element) {
  element.style.display = "flex";
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