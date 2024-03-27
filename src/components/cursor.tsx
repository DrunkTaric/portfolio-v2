import { createEffect } from "solid-js";

export default function Cursor() {
    createEffect(() => {
        document.addEventListener("mousemove", function(event) {
          if (event.pageX == null && event.clientX != null) {
            let eventDoc = (event.target && (event.target as any).ownerDocument) || document;
            let doc = eventDoc.documentElement;
            let body = eventDoc.body;
    
            (event as any).pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
              (event as any).pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
          }
          
          var cursor = document.getElementById("cursor")
    
          cursor?.animate({
            left: `${event.pageX - 120}px`,
            top: `${event.pageY - 120}px`
          }, {duration: 1000, fill: "forwards"});
        })
    }, 0)

    return (
        <div id="cursor" class="w-[15rem] h-[15rem] bg-purple-800/50 blur-2xl absolute rounded-full -z-50"></div>
    )
}