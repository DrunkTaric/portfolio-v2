// @refresh reload
import Bubble from "./components/bubble";
import Wrapper from "./components/wrapper";
import Progress from "./components/progress";
import { SiNeovim, SiNodedotjs, SiLinux, SiSpotify } from 'solid-icons/si';
import "./app.css";
import Image from "./components/image";

export default function App() {
  return (
    <main class="w-screen h-screen">
      <div class="w-full h-full flex flex-col p-32 pl-24 pr-24 z-10">
        <h1 class="p-2 font-bold text-6xl">Drunk Taric</h1>
        <Wrapper>
          <Bubble>
          <Bubble style="w-full h-full col-span-3 row-span-3 max-h-[500px] rounded-2xl">
            <Image src="/Optimized-profile-pic.jpg" class={"rounded-xl"}></Image>
          </Bubble>
          <Bubble border style="col-span-3 text-gray-100 text-opacity-75">
          Passionate developer with 7 years of coding experience, driven by a love for programming, technology, and AI. Actively seeking new professional opportunities. Dedicated to quality, with a strong focus on problem-solving. Enjoys coding, reading, and consistently seeks to enhance skills within the tech industry.
          </Bubble>
          <Bubble border style="grid grid-rows-4 col-span-3">
            <Progress size="md" precentage={100} name="Lua"></Progress>
            <Progress size="md" precentage={100} name="Javascript"></Progress>
            <Progress size="md" precentage={85} name="Python"></Progress>
            <Progress size="md" precentage={75} name="C#"></Progress>
          </Bubble>
          <Bubble border style="grid row-span-3 space-y-2">
            <SiLinux class="m-auto" size={"100%"}/>
            <SiSpotify class="m-auto" size={"100%"}/>
            <SiNeovim class="m-auto" size={"100%"}/>
            <SiNodedotjs class="m-auto" size={"100%"}/>
          </Bubble>
          </Bubble>
        </Wrapper>
      </div>
    </main>
  );
}
