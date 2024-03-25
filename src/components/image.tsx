import clsx from "clsx"
import Bubble from "./bubble"
import { createSignal } from "solid-js"

export default function Image(props: { src: string, class?: string }) {
    const [Loading, setLoading] = createSignal<boolean>(true)
    return (
        <div class={clsx(props.class)}>
            { Loading() && <Bubble style={clsx("text-white", props.class, "animate-pulse")}></Bubble> }
            <img class={Loading()? "hidden": "bg-cover rounded-xl"} src={props.src} onLoad={() => setLoading(false)}></img>
        </div>
    )
}
