// @refresh reload
import Image from "./components/image";
import Bubble from "./components/bubble";
import Wrapper from "./components/wrapper";
import Progress from "./components/progress";
import { SiNeovim, SiNodedotjs, SiLinux, SiSpotify } from 'solid-icons/si';
import Contact from "./components/contact";
import Social from "./components/social";
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
      </section>
    </main>
  );
}
