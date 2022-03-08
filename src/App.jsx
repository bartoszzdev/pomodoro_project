import { useState, useEffect } from 'react'
import Info from './Info/Info'
import './App.css'
import { buttons } from './buttons'
import { AiOutlineInfoCircle } from 'react-icons/ai'

function App() {
  const [timer, setTimer] = useState(25 * 60) // Total de segundos em um determinado periodo de tempo(25min x 60seg)
  const [isTimerOn, setIsTimerOn] = useState(false)
  const [message, setMessage] = useState('Time to focus!')
  const [totalOFSeconds, setTotalOfSeconds] = useState(timer)
  const [percent, setPercent] = useState({ value: 0, total: timer })
  let timeout
  let minutes = Math.floor(timer / 60)
  let seconds = timer % 60
  console.log(totalOFSeconds)

  useEffect(() => {
    if (isTimerOn) {
      timeout = setTimeout(() => {
        setTimer(prevState => prevState - 1)
        setPercent({ ...percent, value: percent.value += 1 / (percent.total / 100) })
      }, 1000)

      window.document.title = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} - ${message}`
    } else {
      window.document.title = `Pomodoro`
    }

    return () => clearTimeout(timeout)
  })

  const handleTimer = (id, message) => {
    clearTimeout(timeout)
    setIsTimerOn(false)

    if (id === 25) {
      setTimer(prevState => 25 * 60)
      setMessage(message)
      setPercent({ value: 0, total: 25 * 60 })
    } else if (id === 5) {
      setTimer(prevState => 5 * 60)
      setMessage(message)
      setPercent({ value: 0, total: 5 * 60 })
    } else if(id === 15) {
      setTimer(prevState => 15 * 60)
      setMessage(message)
      setPercent({ value: 0, total: 15 * 60 })
    }
  }

  return (
    <main className="container">
      <section className='main-section'>
        <div>
          <div className='btn-container'>
            {buttons.map(button => {
              const { id, title, message } = button
              
              return (
                <button 
                  type='button' 
                  className={`btn ${id * 60 === percent.total ? 'btn-active' : null}`} 
                  key={id} 
                  onClick={() => handleTimer(id, message)}
                >
                  {title}
                </button>
              )
            })}
          </div>

          <div style={{width: '100%', height: '1px', background: 'rgba(0, 0, 0, 0.1)', margin: '0 auto'}}>
            <div style={{width: `${percent.value}%`, maxWidth: '100%', height: '2px', background: '#fff'}}></div>
          </div>
        </div>

        <div className='pomodoro-timer'>
          <span>{minutes < 10 ? '0' + minutes : minutes}</span>
          <span>:</span>
          <span>{seconds < 10 ? '0' + seconds : seconds}</span>
        </div>

        <button 
          type='button' 
          className='start-btn' 
          onClick={() => setIsTimerOn(!isTimerOn)}
        >
          {isTimerOn ? 'stop' : 'start'}
        </button>
      </section>

      <button type='button' className='info-btn' style={{position: 'absolute', top: '0', right: '0'}}>
        <AiOutlineInfoCircle />
      </button>
    </main>
  )
}

export default App
