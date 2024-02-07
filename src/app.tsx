// @refresh reload
import Bubble from "./components/bubble";
import Wrapper from "./components/wrapper";
import Progress from "./components/progress";
import { SiNeovim, SiNodedotjs, SiLinux, SiSpotify } from 'solid-icons/si';
import "./app.css";

export default function App() {
  return (
    <main class="w-full h-full">
        <Wrapper>
          <Bubble>
          <Bubble style="w-full h-full col-span-3 row-span-3 max-h-[500px] rounded-2xl">
            <img class="flex w-full h-full rounded-2xl" src="/Optimized-profile-pic.jpg"></img>
          </Bubble>
          </Bubble>
          <Bubble border style="col-span-3 space-y-2">
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
    </main>
  );
}
