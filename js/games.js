// ── MINI GAMES ──────────────────────────────────────────────────

// ── SNAKE GAME ──────────────────────────────────────────────────
let snakeRAF, snakeScore, snakeDir, snakeNextDir, snake, food, snakeSpeed, snakeTimer
const SNAKE_GRID = 20, SNAKE_COLS = 20, SNAKE_ROWS = 15

function startSnake() {
  document.getElementById('snake-overlay').classList.add('hidden')
  const canvas = document.getElementById('snake-canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = 400; canvas.height = 300

  snake = [{x:10,y:7},{x:9,y:7},{x:8,y:7}]
  snakeDir = {x:1,y:0}; snakeNextDir = {x:1,y:0}
  snakeScore = 0; snakeSpeed = 120; snakeTimer = 0
  placeFood()
  updateSnakeScore()

  if (snakeRAF) cancelAnimationFrame(snakeRAF)
  let lastTime = 0

  function loop(time) {
    snakeRAF = requestAnimationFrame(loop)
    const dt = time - lastTime
    if (dt < snakeSpeed) return
    lastTime = time

    snakeDir = snakeNextDir
    const head = {x: snake[0].x + snakeDir.x, y: snake[0].y + snakeDir.y}

    if (head.x < 0 || head.x >= SNAKE_COLS || head.y < 0 || head.y >= SNAKE_ROWS ||
        snake.some(s => s.x === head.x && s.y === head.y)) {
      cancelAnimationFrame(snakeRAF)
      gameOverSnake(ctx)
      return
    }

    snake.unshift(head)
    if (head.x === food.x && head.y === food.y) {
      snakeScore += 10
      snakeSpeed = Math.max(60, snakeSpeed - 2)
      updateSnakeScore()
      placeFood()
    } else {
      snake.pop()
    }

    drawSnake(ctx)
  }

  snakeRAF = requestAnimationFrame(loop)

  document.onkeydown = e => {
    const map = {ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}}
    const d = map[e.key]
    if (d && (d.x + snakeDir.x !== 0 || d.y + snakeDir.y !== 0)) {
      snakeNextDir = d
      e.preventDefault()
    }
  }

  // Touch support
  let touchStart = null
  canvas.ontouchstart = e => { touchStart = {x:e.touches[0].clientX, y:e.touches[0].clientY}; e.preventDefault() }
  canvas.ontouchmove = e => {
    if (!touchStart) return
    const dx = e.touches[0].clientX - touchStart.x
    const dy = e.touches[0].clientY - touchStart.y
    if (Math.abs(dx) > Math.abs(dy)) {
      const d = dx > 0 ? {x:1,y:0} : {x:-1,y:0}
      if (d.x + snakeDir.x !== 0 || d.y + snakeDir.y !== 0) snakeNextDir = d
    } else {
      const d = dy > 0 ? {x:0,y:1} : {x:0,y:-1}
      if (d.x + snakeDir.x !== 0 || d.y + snakeDir.y !== 0) snakeNextDir = d
    }
    touchStart = {x:e.touches[0].clientX, y:e.touches[0].clientY}
    e.preventDefault()
  }
}

function placeFood() {
  do { food = {x: Math.floor(Math.random()*SNAKE_COLS), y: Math.floor(Math.random()*SNAKE_ROWS)} }
  while (snake.some(s => s.x === food.x && s.y === food.y))
}

function drawSnake(ctx) {
  ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,400,300)
  // Grid
  ctx.strokeStyle = '#ffffff08'; ctx.lineWidth = 0.5
  for (let x=0;x<=400;x+=SNAKE_GRID){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,300);ctx.stroke()}
  for (let y=0;y<=300;y+=SNAKE_GRID){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(400,y);ctx.stroke()}
  // Food
  ctx.fillStyle = '#EF4444'
  ctx.beginPath()
  ctx.arc(food.x*SNAKE_GRID+SNAKE_GRID/2, food.y*SNAKE_GRID+SNAKE_GRID/2, SNAKE_GRID/2-2, 0, Math.PI*2)
  ctx.fill()
  // Snake
  snake.forEach((s,i) => {
    ctx.fillStyle = i===0 ? '#16a34a' : '#22C55E'
    ctx.beginPath()
    ctx.roundRect(s.x*SNAKE_GRID+1, s.y*SNAKE_GRID+1, SNAKE_GRID-2, SNAKE_GRID-2, 4)
    ctx.fill()
  })
}

function gameOverSnake(ctx) {
  ctx.fillStyle = '#000000aa'; ctx.fillRect(0,0,400,300)
  ctx.fillStyle = '#fff'; ctx.font = 'bold 28px sans-serif'; ctx.textAlign = 'center'
  ctx.fillText('Game Over!', 200, 130)
  ctx.font = '18px sans-serif'
  ctx.fillText(`Score: ${snakeScore}`, 200, 165)
  ctx.font = '14px sans-serif'; ctx.fillStyle = '#aaa'
  ctx.fillText('Click to restart', 200, 200)
  document.getElementById('snake-canvas').onclick = () => startSnake()
}

function updateSnakeScore() {
  const label = (typeof LANG !== 'undefined' && LANG[lang]) ? LANG[lang].game_score : 'Score'
  document.getElementById('snake-score').innerHTML = `🏆 <span>${label}</span>: ${snakeScore}`
}

// ── BREAKOUT GAME ───────────────────────────────────────────────
let breakRAF, breakScore, breakLives, paddle, ball, bricks, breakLevel

function startBreakout() {
  document.getElementById('breakout-overlay').classList.add('hidden')
  const canvas = document.getElementById('breakout-canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = 400; canvas.height = 300

  breakScore = 0; breakLives = 3; breakLevel = 1
  paddle = {x:160, w:80, h:12, y:280}
  ball = {x:200, y:268, dx:3, dy:-3, r:6, launched:false}
  initBricks()
  updateBreakScore()

  if (breakRAF) cancelAnimationFrame(breakRAF)

  function loop() {
    breakRAF = requestAnimationFrame(loop)
    updateBreakout()
    drawBreakout(ctx)
  }
  breakRAF = requestAnimationFrame(loop)

  document.onkeydown = e => {
    if (e.key === 'ArrowLeft') paddle.x = Math.max(0, paddle.x - 20)
    if (e.key === 'ArrowRight') paddle.x = Math.min(400-paddle.w, paddle.x + 20)
    if (e.key === ' ' && !ball.launched) { ball.launched = true; e.preventDefault() }
  }

  canvas.onmousemove = e => {
    const rect = canvas.getBoundingClientRect()
    const scaleX = 400 / rect.width
    paddle.x = Math.max(0, Math.min(400-paddle.w, (e.clientX - rect.left) * scaleX - paddle.w/2))
  }
  canvas.onclick = () => { if (!ball.launched) ball.launched = true }

  canvas.ontouchmove = e => {
    const rect = canvas.getBoundingClientRect()
    const scaleX = 400 / rect.width
    paddle.x = Math.max(0, Math.min(400-paddle.w, (e.touches[0].clientX - rect.left) * scaleX - paddle.w/2))
    e.preventDefault()
  }
  canvas.ontouchstart = e => { if (!ball.launched) ball.launched = true; e.preventDefault() }
}

function initBricks() {
  const colors = ['#EF4444','#F59E0B','#22C55E','#3B5BDB','#7048E8']
  bricks = []
  for (let r=0;r<5;r++) for (let c=0;c<8;c++) {
    bricks.push({x:c*48+8, y:r*20+30, w:44, h:16, color:colors[r], points:(5-r)*10, alive:true})
  }
}

function updateBreakout() {
  if (!ball.launched) {
    ball.x = paddle.x + paddle.w/2; ball.y = paddle.y - ball.r
    return
  }
  ball.x += ball.dx; ball.y += ball.dy

  if (ball.x-ball.r < 0 || ball.x+ball.r > 400) ball.dx *= -1
  if (ball.y-ball.r < 0) ball.dy *= -1

  if (ball.y+ball.r >= paddle.y && ball.y+ball.r <= paddle.y+paddle.h &&
      ball.x >= paddle.x && ball.x <= paddle.x+paddle.w) {
    ball.dy = -Math.abs(ball.dy)
    const hitPos = (ball.x - paddle.x) / paddle.w - 0.5
    ball.dx = hitPos * 8
  }

  if (ball.y > 310) {
    breakLives--
    if (breakLives <= 0) {
      cancelAnimationFrame(breakRAF)
      gameOverBreakout()
      return
    }
    ball.launched = false; ball.dx = 3; ball.dy = -3
    updateBreakScore()
  }

  bricks.forEach(b => {
    if (!b.alive) return
    if (ball.x+ball.r > b.x && ball.x-ball.r < b.x+b.w && ball.y+ball.r > b.y && ball.y-ball.r < b.y+b.h) {
      b.alive = false; ball.dy *= -1
      breakScore += b.points
      updateBreakScore()
    }
  })

  if (bricks.every(b => !b.alive)) {
    breakLevel++
    initBricks()
    ball.launched = false
    ball.dx = 3 + breakLevel * 0.5
    ball.dy = -(3 + breakLevel * 0.5)
  }
}

function drawBreakout(ctx) {
  ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,400,300)
  // Bricks
  bricks.forEach(b => {
    if (!b.alive) return
    ctx.fillStyle = b.color
    ctx.beginPath(); ctx.roundRect(b.x, b.y, b.w, b.h, 3); ctx.fill()
  })
  // Paddle
  ctx.fillStyle = '#fff'
  ctx.beginPath(); ctx.roundRect(paddle.x, paddle.y, paddle.w, paddle.h, 6); ctx.fill()
  // Ball
  ctx.fillStyle = '#fff'
  ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2); ctx.fill()
  // Lives
  ctx.fillStyle = '#EF4444'; ctx.font = '14px sans-serif'; ctx.textAlign = 'left'
  ctx.fillText('❤️'.repeat(breakLives), 8, 20)
  // Level
  ctx.fillStyle = '#aaa'; ctx.font = '12px sans-serif'; ctx.textAlign = 'right'
  ctx.fillText(`Lv.${breakLevel}`, 392, 20)
}

function gameOverBreakout() {
  const ctx = document.getElementById('breakout-canvas').getContext('2d')
  ctx.fillStyle = '#000000aa'; ctx.fillRect(0,0,400,300)
  ctx.fillStyle = '#fff'; ctx.font = 'bold 28px sans-serif'; ctx.textAlign = 'center'
  ctx.fillText('Game Over!', 200, 130)
  ctx.font = '18px sans-serif'
  ctx.fillText(`Score: ${breakScore}`, 200, 165)
  ctx.font = '14px sans-serif'; ctx.fillStyle = '#aaa'
  ctx.fillText('Click to restart', 200, 200)
  document.getElementById('breakout-canvas').onclick = () => startBreakout()
}

function updateBreakScore() {
  const label = (typeof LANG !== 'undefined' && LANG[lang]) ? LANG[lang].game_score : 'Score'
  document.getElementById('breakout-score').innerHTML = `🏆 <span>${label}</span>: ${breakScore}`
}

// ── FLAPPY BIRD GAME ────────────────────────────────────────────
let flappyRAF, flappyScore, bird, pipes, flappyStarted, flappyGameOver

function startFlappy() {
  document.getElementById('flappy-overlay').classList.add('hidden')
  const canvas = document.getElementById('flappy-canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = 400; canvas.height = 300

  bird = {x:80, y:150, vy:0, r:14}
  pipes = []; flappyScore = 0; flappyStarted = false; flappyGameOver = false
  let pipeTimer = 0, lastTime = 0
  updateFlappyScore()

  if (flappyRAF) cancelAnimationFrame(flappyRAF)

  function flap() {
    if (flappyGameOver) { startFlappy(); return }
    if (!flappyStarted) flappyStarted = true
    bird.vy = -6
  }

  function loop(time) {
    flappyRAF = requestAnimationFrame(loop)
    const dt = Math.min((time - lastTime) / 16.67, 3)
    lastTime = time

    if (flappyStarted && !flappyGameOver) {
      bird.vy += 0.35 * dt
      bird.y += bird.vy * dt

      pipeTimer += dt
      if (pipeTimer > 90) {
        const gap = 90
        const gapY = 60 + Math.random() * 140
        pipes.push({x:420, gapY, gap, scored:false})
        pipeTimer = 0
      }

      pipes.forEach(p => { p.x -= 2.5 * dt })
      pipes = pipes.filter(p => p.x > -60)

      pipes.forEach(p => {
        const pW = 52
        if (bird.x+bird.r > p.x && bird.x-bird.r < p.x+pW) {
          if (bird.y-bird.r < p.gapY || bird.y+bird.r > p.gapY+p.gap) {
            flappyGameOver = true
          }
        }
        if (!p.scored && p.x + pW < bird.x) {
          p.scored = true; flappyScore++
          updateFlappyScore()
        }
      })

      if (bird.y+bird.r > 280 || bird.y-bird.r < 0) flappyGameOver = true
    }

    drawFlappy(ctx)
    if (flappyGameOver) drawFlappyGameOver(ctx)
  }

  flappyRAF = requestAnimationFrame(loop)

  canvas.onclick = flap
  canvas.ontouchstart = e => { flap(); e.preventDefault() }
  document.onkeydown = e => { if (e.key === ' ') { flap(); e.preventDefault() } }
}

function drawFlappy(ctx) {
  // Sky gradient
  const grad = ctx.createLinearGradient(0,0,0,300)
  grad.addColorStop(0, '#1a1a2e'); grad.addColorStop(1, '#2a2a4e')
  ctx.fillStyle = grad; ctx.fillRect(0,0,400,300)

  // Ground
  ctx.fillStyle = '#22C55E44'; ctx.fillRect(0,280,400,20)

  // Pipes
  ctx.fillStyle = '#22C55E'
  pipes.forEach(p => {
    ctx.beginPath(); ctx.roundRect(p.x, 0, 52, p.gapY, [0,0,6,6]); ctx.fill()
    ctx.beginPath(); ctx.roundRect(p.x, p.gapY+p.gap, 52, 300-p.gapY-p.gap, [6,6,0,0]); ctx.fill()
    // Pipe caps
    ctx.fillStyle = '#16a34a'
    ctx.fillRect(p.x-3, p.gapY-20, 58, 20)
    ctx.fillRect(p.x-3, p.gapY+p.gap, 58, 20)
    ctx.fillStyle = '#22C55E'
  })

  // Bird
  ctx.fillStyle = '#F59E0B'
  ctx.beginPath(); ctx.arc(bird.x, bird.y, bird.r, 0, Math.PI*2); ctx.fill()
  // Eye
  ctx.fillStyle = '#fff'
  ctx.beginPath(); ctx.arc(bird.x+5, bird.y-4, 5, 0, Math.PI*2); ctx.fill()
  ctx.fillStyle = '#1a1a2e'
  ctx.beginPath(); ctx.arc(bird.x+7, bird.y-4, 2.5, 0, Math.PI*2); ctx.fill()
  // Beak
  ctx.fillStyle = '#EF4444'
  ctx.beginPath(); ctx.moveTo(bird.x+12, bird.y); ctx.lineTo(bird.x+22, bird.y+3); ctx.lineTo(bird.x+12, bird.y+6); ctx.fill()

  // Score display on canvas
  if (flappyStarted) {
    ctx.fillStyle = '#fff'; ctx.font = 'bold 32px sans-serif'; ctx.textAlign = 'center'
    ctx.fillText(flappyScore, 200, 50)
  }

  if (!flappyStarted) {
    ctx.fillStyle = '#fff'; ctx.font = '16px sans-serif'; ctx.textAlign = 'center'
    ctx.fillText('Tap or Space to start', 200, 250)
  }
}

function drawFlappyGameOver(ctx) {
  ctx.fillStyle = '#000000aa'; ctx.fillRect(0,0,400,300)
  ctx.fillStyle = '#fff'; ctx.font = 'bold 28px sans-serif'; ctx.textAlign = 'center'
  ctx.fillText('Game Over!', 200, 120)
  ctx.font = '20px sans-serif'
  ctx.fillText(`Score: ${flappyScore}`, 200, 155)
  ctx.font = '14px sans-serif'; ctx.fillStyle = '#aaa'
  ctx.fillText('Click to restart', 200, 195)
  cancelAnimationFrame(flappyRAF)
}

function updateFlappyScore() {
  const label = (typeof LANG !== 'undefined' && LANG[lang]) ? LANG[lang].game_score : 'Score'
  document.getElementById('flappy-score').innerHTML = `🏆 <span>${label}</span>: ${flappyScore}`
}
