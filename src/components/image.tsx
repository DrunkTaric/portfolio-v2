import clsx from "clsx"
import { createSignal } from "solid-js"

export default function Image(props: { src: string, class?: string }) {
    const [Loading, setLoading] = createSignal<boolean>(true)
    return (
        <div>
            { Loading() && <h1 class={clsx("text-white", props.class)}>Loading..</h1> }
            <img class={clsx(props.class, Loading()? "hidden": null)} src={props.src} onLoad={() => setLoading(false)}></img>
        </div>
    )
}