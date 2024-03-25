import { FaSolidVolumeHigh, FaSolidVolumeXmark } from 'solid-icons/fa'
import { createSignal, createEffect } from "solid-js"

export default function Audio() {
  
  let interval;
  const [Muted, setMuted] = createSignal(true)

  function Sound() {
    setMuted(!Muted())
    const audio = document.getElementById("sound")
    audio.autoplay = true
    audio.muted = Muted()
    const ball = document.getElementById("ball")
    const bar = document.getElementById("bar")
    if (!interval) {
      interval = setInterval(() => {
        const audio = document.getElementById("sound") 
        const ball = document.getElementById("ball") 
        const precentage_time = (audio.currentTime/audio.duration) * 100
        const bar_length = (299.083 * precentage_time) / 100
        ball.style.height = `${bar_length}px`
      }, 100)
    }
  }
  
  return (
    <div class="flex flex-col space-y-5 w-full h-full">
      <button onclick={() => {Sound()}}>
        { Muted() && <FaSolidVolumeXmark class="ml-auto mr-auto w-12 h-12"/> }
        { !Muted() && <FaSolidVolumeHigh class="ml-auto mr-auto w-12 h-12"/> }
      </button>
      <div id="bar" class="flex ml-auto mr-auto bg-gray-300 bg-opacity-10 rounded-full h-[100%] w-4 overflow-visible">
        <div id="ball" class="bg-white w-4 h-0 mb-0 mt-auto rounded-full">
          <audio id="sound">
            <source src="song.mp3" type="audio/mpeg"/>
          </audio>   
        </div>
      </div>
    </div>
  )
}
