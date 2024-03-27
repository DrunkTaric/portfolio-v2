import { FaSolidVolumeHigh, FaSolidVolumeXmark } from 'solid-icons/fa';
import { createSignal, createEffect } from "solid-js";
import { makeAudio } from '@solid-primitives/audio';
import song from "../assets/song.mp3"

export default function Audio() {
  
  let interval: number | null;
  const [Muted, setMuted] = createSignal(true)
  const audio = makeAudio(song);

  function Sound() {
    setMuted(!Muted())

    if (audio.paused) {
      audio.play()
      const ball = document.getElementById("ball")
      interval = setInterval(() => {
        const precentage_time = (audio.currentTime / audio.duration) * 100
        const bar_length = (299.083 * precentage_time) / 100;
        (ball as HTMLDivElement).style.height = `${bar_length}px`
      }, 100)
    }

    audio.muted = Muted();
  }
  
  return (
    <div class="flex flex-col space-y-5 w-full h-full">
      <button onclick={() => {Sound()}}>
        { Muted() && <FaSolidVolumeXmark class="ml-auto mr-auto w-12 h-12"/> }
        { !Muted() && <FaSolidVolumeHigh class="ml-auto mr-auto w-12 h-12"/> }
      </button>
      <div id="bar" class="flex ml-auto mr-auto bg-gray-300 bg-opacity-10 rounded-full h-[100%] w-4 overflow-visible">
        <div id="ball" class="bg-white w-4 h-0 mb-0 mt-auto rounded-full">
        </div>
      </div>
    </div>
  )
}
