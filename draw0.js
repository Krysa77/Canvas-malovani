// Získání reference k HTML canvas elementu s id 'myCanvas'
let canvas = document.getElementById("myCanvas");

// Získání 2D vykreslovacího kontextu pro canvas
let ctx = canvas.getContext("2d");

// Nastavení barvy výplně na šedou
ctx.fillStyle = "#FFFFFF";

// Vykreslení obdélníka, který pokryje celý canvas touto šedou barvou
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Přidání posluchače událostí k celému dokumentu pro detekci stisku klávesy
document.addEventListener("keydown", function (event) {
  console.log(event);
  // Kontroluje, zda byla stisknuta klávesa Escape
  if (event.code === "Escape") {
    // Pokud ano, znovu vykreslí celý canvas šedou barvou
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return; // Ukončení funkce
  }

  switch (event.code) {
    case "KeyQ":
      // Generuje náhodné souřadnice x a y uvnitř plátna
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      // Generuje náhodnou velikost obdélníka mezi 50 a 150
      let size = Math.random() * 100 + 50;
      // Generuje náhodnou barvu
      let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255
        })`;
      // Vykreslí obdélník s náhodnými parametry
      drawRectangle(x, y, size, size, col);
      break;
    case "KeyW":
      randomEllipse();
      break;
    case "KeyE":
      randomTriangle();
      break;
    case "KeyR":
      randomPentagon();
      break;
    case "KeyT":
      randomTarget();
      break;
  }
});

function randomEllipse() {
  let w = Math.random() * 100 + 50;
  let h = Math.random() * 100 + 50;
  let x = Math.random() * (canvas.width - w) + w / 2;
  let y = Math.random() * (canvas.height - h) + h / 2;
  let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255
    })`;
  drawEllipse(x, y, w, h, c);
}

// Funkce pro vykreslení obdélníka na plátno s danými parametry
function drawRectangle(x, y, w, h, col) {
  // Nastavení barvy výplně pro obdélník
  ctx.fillStyle = col;
  ctx.strokeStyle = col;
  ctx.lineWidth = 5;
  // Vykreslení obdélníka na plátno s danými souřadnicemi (x, y),
  // šířkou (w) a výškou (h)
  // ctx.fillRect(x, y, w, h);
  ctx.strokeRect(x, y, w, h);
}

// Funkce pro vykreslení elipsy na plátno s danými parametry
function drawEllipse(x, y, w, h, col) {
  // Nastavení barvy výplně pro elipsu
  ctx.fillStyle = col;
  // Začátek nové cesty (to je důležité pro kreslení tvarů jako jsou kruhy, elipsy atd.)
  ctx.beginPath();
  // Vykreslení elipsy s centrem v bodě (x, y), s horizontálním poloměrem (w / 2),
  // vertikálním poloměrem (h / 2) a úhlem od 0 do 2π (což je celý kruh)
  ctx.ellipse(x, y, w / 2, h / 2, 0, 0, 2 * Math.PI);
  // Vyplnění elipsy nastavenou barvou
  ctx.fill();
}

// Funkce pro vykreslení kruhu na plátno s danými parametry
function drawCircle(x, y, r, col) {
  // Nastavení barvy výplně pro kruh
  ctx.fillStyle = col;
  // Začátek nové cesty (to je důležité pro kreslení tvarů jako jsou kruhy, elipsy atd.)
  ctx.beginPath();
  // Vykreslení kruhu s centrem v bodě (x, y), poloměrem (r) a úhlem od 0 do 2π
  // (což je celý kruh)
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  // Vyplnění kruhu nastavenou barvou
  ctx.fill();
}

// Funkce pro vykreslení čtverce na plátno s danými parametry
function drawSquare(x, y, s, col) {
  // Nastavení barvy výplně pro čtverec
  ctx.fillStyle = col;
  // Vykreslení čtverce na plátno s danými souřadnicemi (x, y) a rozměry (s x s)
  ctx.fillRect(x, y, s, s);
}

function randomTriangle() {
  let size = Math.random() * 100 + 50;
  let x1 = Math.random() * (canvas.width - size); // x1 je náhodné místo uvnitř canvasu
  let y1 = Math.random() * (canvas.height - size); // y1 je náhodné místo uvnitř canvasu
  let x2 = x1 + size;
  let y2 = y1;
  let x3 = x1 + size / 2;
  let y3 = y1 - (Math.sqrt(3) * size) / 2;
  let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  drawTriangle(x1, y1, x2, y2, x3, y3, c);
}

function drawTriangle(x1, y1, x2, y2, x3, y3, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.fill();
}

function randomPentagon() {
  let size = Math.random() * 100 + 50;
  let x = Math.random() * (canvas.width - size);
  let y = Math.random() * (canvas.height - size);
  let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  drawPentagon(x, y, size, c);
}

function drawPentagon(x, y, size, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    ctx.lineTo(x + size * Math.cos((2 * Math.PI * i) / 5), y + size * Math.sin((2 * Math.PI * i) / 5));
  }
  ctx.closePath();
  ctx.fill();
}

function drawTarget(x, y, size, col) {
  ctx.lineWidth = 2;
  ctx.strokeStyle = col;

  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(x, y, size - i * 20, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

function randomTarget() {
  let size = Math.random() * 50 + 50; // Náhodná velikost mezi 50 a 100
  let x = Math.random() * (canvas.width - size * 2) + size; // Náhodná pozice x s ohledem na velikost terče
  let y = Math.random() * (canvas.height - size * 2) + size; // Náhodná pozice y s ohledem na velikost terče
  let c = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  drawTarget(x, y, size, c);
}