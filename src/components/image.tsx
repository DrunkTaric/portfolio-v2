import clsx from "clsx"
import Bubble from "./bubble"
import { createSignal } from "solid-js"

export default function Image(props: { src: string, class?: string, alt?: string }) {
    const [Loading, setLoading] = createSignal<boolean>(true)
    return (
        <div class={clsx(props.class)}>
            { Loading() && <Bubble style={clsx("text-white", props.class, "animate-pulse")} border></Bubble> }
            <img loading="eager" alt={props.alt} class={Loading()? "hidden": "w-full h-full rounded-xl bg-contain"} src={props.src} onLoad={() => setLoading(false)}></img>
        </div>
    )
}
