// @refresh reload
import Image from "./components/image";
import Projects from "./components/projects"
import Audio from "./components/audio";
import Bubble from "./components/bubble";
import Wrapper from "./components/wrapper";
import Progress from "./components/progress";
import { SiNeovim, SiGit, SiNodedotjs, SiLinux, SiSpotify, SiDiscord, SiGithub } from 'solid-icons/si';
import Contact from "./components/contact";
import Social from "./components/social";
import { ImLinkedin2 } from 'solid-icons/im'
import { createEffect, createSignal } from "solid-js";
import "./app.css";

export default function App() {
  const [Pos, setPos] = createSignal({x: 0, y: 0})

  createEffect(() => {
    document.addEventListener("mousemove", function(event) {
      if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
      }
      
      var cursor = document.getElementById("cursor")

      cursor.animate({
            left: `${event.pageX - 120}px`,
            top: `${event.pageY - 120}px`
      }, {duration: 1000, fill: "forwards"});
    })
  }, 0)

  return (
    <main class="flex flex-col w-screen h-screen justify-center items-center">
      <div id="cursor" class="w-[15rem] h-[15rem] bg-purple-800/50 blur-2xl absolute rounded-full -z-50"></div>
      <h1 class="text-7xl text-white p-5 font-bold">DrunkTaric</h1>
      <section class="w-[85%] h-[55%] grid grid-cols-12 grid-rows-5 gap-5">
        <Image src="profile-pic.jpg" class="col-span-4 row-span-5 select-none"/>

        <Bubble style="row-span-2 col-span-6 text-xl" border>
          Passionate developer with 7 years of coding experience, driven by a love for programming, technology, and AI. Actively seeking new professional opportunities. Dedicated to quality, with a strong focus on problem-solving. Enjoys coding, reading, and consistently seeks to enhance skills within the tech industry.
        </Bubble>

        <Bubble style="row-span-5 grid grid-rows-5" border>
          <SiLinux class="w-full h-full m-auto" />
          <SiSpotify class="w-full h-full m-auto" />
          <SiGit class="w-full h-full m-auto" />
          <SiNeovim class="w-full h-full m-auto" />
          <SiNodedotjs class="w-full h-full m-auto" />
        </Bubble>

        <Bubble style="flex flex-col space-y-4 row-span-5" border>
          <Audio/>
        </Bubble>

        <Bubble style="flex col-span-2 rounded-[1.5rem]">
          <ImLinkedin2 class="w-12 h-12 m-auto"/>
        </Bubble>

        <Bubble style="flex col-span-2 rounded-[1.5rem]">
          <SiGithub class="w-12 h-12 m-auto"/>
        </Bubble>

        <Bubble style="flex col-span-2 rounded-[1.5rem]">
          <SiDiscord class="w-14 h-14 m-auto"/>
        </Bubble>

        <Bubble style="space-y-3 row-span-2 col-span-6" border>
          <Progress precentage={100} name={"Lua"} size="md" />
          <Progress precentage={95} name={"Javascript"} size="md" />
          <Progress precentage={80} name={"Python"} size="md" />
          <Progress precentage={70} name={"C#"} size="md" />
        </Bubble>
      </section>
      <h1 class="text-5xl text-white p-5 font-bold">Projects</h1>
      <Projects/>
      <h1 class="text-5xl text-white p-5 font-bold">Roadmap</h1>
    </main>
  );
}
