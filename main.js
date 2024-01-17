// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// let carX = 50;
// let carY = 50;
// let carAngle = 0;
// let carMoving = false;

// function drawCar() {
//   ctx.save();
//   ctx.translate(carX, carY);
//   ctx.rotate(carAngle);
//   ctx.fillStyle = 'red';
//   ctx.fillRect(-20, -20, 40, 20);
//   ctx.restore();
// }

// function clearCanvas() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

// function moveCar() {
//   const speed = 1;
//   if (carMoving) {
//     const newX = carX + Math.cos(carAngle) * speed;
//     const newY = carY + Math.sin(carAngle) * speed;
//     if (newX > 30 && newX < canvas.width - 30 && newY > 30 && newY < canvas.height - 30) {
//       carX = newX;
//       carY = newY;
//     } else {
//       carMoving = false;
//     }
//   }
// }

// function turnRight() {
//   carAngle += Math.PI / 18;
// }

// function turnLeft() {
//   carAngle -= Math.PI / 18;
// }

// function toggleMove() {
//   carMoving = !carMoving;
// }

// document.getElementById('turn-right-btn').addEventListener('click', turnRight);
// document.getElementById('turn-left-btn').addEventListener('click', turnLeft);
// document.getElementById('move-btn').addEventListener('click', toggleMove);

// function gameLoop() {
//   clearCanvas();
//   drawCar();
//   moveCar();
//   requestAnimationFrame(gameLoop);
// }

// gameLoop();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let carX = 50;
let carY = 50;
let carAngle = 0;
let carMoving = false;
let turningRight = false;
let turningLeft = false;

function drawCar() {
  ctx.save();
  ctx.translate(carX, carY);
  ctx.rotate(carAngle);
  ctx.fillStyle = 'red';
  ctx.fillRect(-20, -20, 40, 20);
  ctx.restore();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moveCar() {
  const speed = 0.7;
  if (carMoving) {
    const newX = carX + Math.cos(carAngle) * speed;
    const newY = carY + Math.sin(carAngle) * speed;
    if (newX > 30 && newX < canvas.width - 30 && newY > 30 && newY < canvas.height - 30) {
      carX = newX;
      carY = newY;
    } else {
      carMoving = false;
    }
  }
  if (turningRight) {
    carAngle += Math.PI / 180;
  } else if (turningLeft) {
    carAngle -= Math.PI / 180;
  }
}

function toggleMove() {
  carMoving = !carMoving;
}

function startTurnRight() {
  turningRight = true;
}

function stopTurnRight() {
  turningRight = false;
}

function startTurnLeft() {
  turningLeft = true;
}

function stopTurnLeft() {
  turningLeft = false;
}

document.getElementById('move-btn').addEventListener('click', toggleMove);
document.getElementById('turn-right-btn').addEventListener('mousedown', startTurnRight);
document.getElementById('turn-right-btn').addEventListener('mouseup', stopTurnRight);
document.getElementById('turn-right-btn').addEventListener('mouseleave', stopTurnRight);
document.getElementById('turn-left-btn').addEventListener('mousedown', startTurnLeft);
document.getElementById('turn-left-btn').addEventListener('mouseup', stopTurnLeft);
document.getElementById('turn-left-btn').addEventListener('mouseleave', stopTurnLeft);

function gameLoop() {
  clearCanvas();
  drawCar();
  moveCar();
  requestAnimationFrame(gameLoop);
}

gameLoop();

