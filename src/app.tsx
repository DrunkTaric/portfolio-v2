// @refresh reload
import Image from "./components/image";
import Audio from "./components/audio";
import Cursor from "./components/cursor";
import Bubble from "./components/bubble";
import { ImLinkedin2 } from 'solid-icons/im'
import Progress from "./components/progress";
import Projects from "./components/projects";
import { isMobile } from 'mobile-device-detect';
import ProfilePic from "./assets/Optimized-profile-pic.jpg";
import { SiNeovim, SiGit, SiNodedotjs, SiLinux, SiSpotify, SiDiscord, SiGithub } from 'solid-icons/si';
export default function App() {

  return (
    <main class="flex flex-col w-screen h-fit">

      {!isMobile && <Cursor/>}

      <h1 class="text-7xl text-center text-white p-5 font-bold">DrunkTaric</h1>

      <section class="m-auto w-[90%] h-[40rem] grid grid-rows-12 auto-rows-fr p-5 sm:p-10 xl:grid-cols-12 xl:grid-rows-5 gap-5">
        <Image alt="DrunkTaric Profile Pic" src={ProfilePic} class="h-full w-full row-span-6 xl:col-span-4 xl:row-span-5 select-none"/>

        <Bubble style="xl:row-span-2 xl:col-span-6 text-2xl" border>
          Passionate developer with 6.5 years of coding experience, driven by a love for programming, technology, and AI. Actively seeking new professional opportunities. Dedicated to quality, with a strong focus on problem-solving. Enjoys coding, reading, and consistently seeks to enhance skills within the tech industry.
        </Bubble>

        <Bubble style="xl:row-span-5 grid grid-rows-5" border>
          <SiLinux class="w-full h-full m-auto" />
          <SiSpotify class="w-full h-full m-auto" />
          <SiGit class="w-full h-full m-auto" />
          <SiNeovim class="w-full h-full m-auto" />
          <SiNodedotjs class="w-full h-full m-auto" />
        </Bubble>

        <Bubble style="flex flex-col space-y-4 xl:row-span-5" border>
          <Audio/>
        </Bubble>

        <Bubble style="flex xl:col-span-2 rounded-[1.5rem]">
          <a href="https://www.linkedin.com/in/comborush/" aria-label="Linkedin Profile" target="_blank" class="m-auto">
            <ImLinkedin2 class="w-12 h-12"/>
          </a>
        </Bubble>

        <Bubble style="flex xl:col-span-2 rounded-[1.5rem]">
          <a href="https://github.com/DrunkTaric" aria-label="Github Profile" target="_blank" class="m-auto">
            <SiGithub class="w-12 h-12"/>
          </a>
        </Bubble>

        <Bubble style="flex xl:col-span-2 rounded-[1.5rem]">
          <a href="https://discordapp.com/users/921584553640992810" aria-label="Discord Profile" target="_blank" class="m-auto">
            <SiDiscord class="w-14 h-14"/>
          </a>
        </Bubble>

        <Bubble style="grid grid-rows-4 xl:row-span-2 xl:col-span-6" border>
          <Progress precentage={100} name={"Lua"} size="md" />
          <Progress precentage={95} name={"Javascript"} size="md" />
          <Progress precentage={80} name={"Python"} size="md" />
          <Progress precentage={70} name={"C#"} size="md" />
        </Bubble>
      </section>

      {false && <h1 class="text-5xl text-white p-5 font-bold">Projects</h1>}
      {false && <Projects/> }
      {false && <h1 class="text-5xl text-white p-5 font-bold">Roadmap</h1> }

    </main>
  );
}
