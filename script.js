/* Seção dos botões do timer */

let btnPlay = document.querySelector('.play')
let btnPause = document.querySelector('.pause')
let btnStop = document.querySelector('.stop')
let btnAdd = document.querySelector('.plusMinutes')
let btn = document.querySelector('.minusMinutes')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let timerTimeOut
let minutes = Number(minutesDisplay.textContent) 
let btnIncrease = document.querySelector('.plusMinute')
let btnDecrease = document.querySelector('.minusMinute')

function resetControls() {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countdown() {
    timerTimeOut = setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateTimerDisplay(minutes, 0)

        if (minutes <= 0 && seconds <= 0) {
            resetControls()
            resetTimer()
            new Audio("audios/timerEnd.mp3").play()
            return
        }

        if (seconds <= 0) {
            seconds = 59

            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1))

        countdown()
    }, 1000)
}

btnPlay.addEventListener('click', function() {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    countdown()
})

btnPause.addEventListener('click', function() {
    resetControls()
    clearTimeout(timerTimeOut)
})

btnStop.addEventListener('click', function() {
    resetControls()
    resetTimer()    
})

btnIncrease.addEventListener('click', function () {
    if (Number(minutesDisplay.textContent) >= 55) {
        minutesDisplay.textContent = 60
    } else {
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0')
    }
  })
  
  btnDecrease.addEventListener('click', function () {
    if (Number(minutesDisplay.textContent) <= 6) {
        minutesDisplay.textContent = '00'
        secondsDisplay.textContent = '00'
    } else {
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, '0')
    }
  })
  
  /* Seção dos botões de sons */

  const btnForest = document.querySelector('.forest')
  const btnRain = document.querySelector('.rain')
  const btnCoffeShop = document.querySelector('.coffeShop')
  const btnFireplace = document.querySelector('.fireplace')
  const forestAudio = new Audio('audios/forest.wav')
  const rainAudio = new Audio('audios/rain.wav')
  const coffeShopAudio = new Audio('audios/coffeshop.wav')
  const fireplaceAudio = new Audio('audios/fireplace.wav')

  function rainOff() {
    rainAudio.pause()
    btnRain.classList.remove('changeBgColorCards')
  }

  function forestOff() {
    forestAudio.pause()
    btnForest.classList.remove('changeBgColorCards')
  }

  function coffeShopOff() {
    coffeShopAudio.pause()
    btnCoffeShop.classList.remove('changeBgColorCards')
  }

  function fireplaceOff() {
    fireplaceAudio.pause()
    btnFireplace.classList.remove('changeBgColorCards')
  }

 btnForest.addEventListener('click', function() {
    if (!forestAudio.paused) {
        forestAudio.pause()
        btnForest.classList.remove('changeBgColorCards')
        forestAudio.currentTime = 0
    } else {
        btnForest.classList.add('changeBgColorCards')
        forestAudio.play()
        forestAudio.loop = true
        rainOff()
        coffeShopOff()
        fireplaceOff()
    }
 })

 btnRain.addEventListener('click', function() {
    if (!rainAudio.paused) {
        rainAudio.pause()
        btnRain.classList.remove('changeBgColorCards')
        rainAudio.currentTime = 0
    } else {
        btnRain.classList.add('changeBgColorCards')
        rainAudio.play()
        rainAudio.loop = true
        forestOff()
        coffeShopOff()
        fireplaceOff()
    }
 })

 btnCoffeShop.addEventListener('click', function() {
    if (!coffeShopAudio.paused) {
        coffeShopAudio.pause()
        btnCoffeShop.classList.remove('changeBgColorCards')
        coffeShopAudio.currentTime = 0
    } else {
        btnCoffeShop.classList.add('changeBgColorCards')
        coffeShopAudio.play()
        coffeShopAudio.loop = true
        forestOff()
        rainOff()
        fireplaceOff()
    }
 })

 btnFireplace.addEventListener('click', function() {
    if (!fireplaceAudio.paused) {
        fireplaceAudio.pause()
        btnFireplace.classList.remove('changeBgColorCards')
        fireplaceAudio.currentTime = 0
    } else {
        btnFireplace.classList.add('changeBgColorCards')
        fireplaceAudio.play()
        fireplaceAudio.loop = true
        forestOff()
        coffeShopOff()
        rainOff()
    }
 })