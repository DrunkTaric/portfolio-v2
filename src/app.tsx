// @refresh reload
import { Motion } from "solid-motionone";
import Bubble from "./components/bubble";
import "./app.css";
import Wrapper from "./components/wrapper";

export default function App() {
  return (
    <main class="w-full h-full">
      <Motion.div class="fixed flex bottom-24 w-full z-10" animate={{ opacity: 1, bottom: "6rem" }} initial={{ opacity: 0, bottom: 0 }} transition={{ duration: 1 }}>
        <Wrapper>
          <Bubble>
          <Bubble border style="col-span-3 space-y-2">
            <Progress size="md" precentage={100} name="Lua"></Progress>
            <Progress size="md" precentage={100} name="Javascript"></Progress>
            <Progress size="md" precentage={85} name="Python"></Progress>
            <Progress size="md" precentage={75} name="C#"></Progress>
          </Bubble>
          </Bubble>
        </Wrapper>
      </Motion.div>
    </main>
  );
}
