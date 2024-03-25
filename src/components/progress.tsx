import clsx from "clsx"
import { Motion } from "solid-motionone"

export default function Progress(props: { precentage: number, name: string, size: "sm" | "md" | "lg" }) {

    const styles = {
        "sm": "h-[10px] text-md font-bold",
        "md": "h-[25px] text-lg font-bold",
        "lg": "h-[35px] text-lg font-bold"
    }

    return (
        <div class={clsx("flex mt-auto mb-auto", styles[props.size])}>
            <h1 class="mt-auto mb-auto w-32">{ props.name }</h1>
            <div class={clsx("w-full h-full rounded-3xl bg-gray-500 bg-opacity-35")}>
                <Motion.div class="h-full bg-purple-800 rounded-3xl" initial={{width: "0%"}} animate={{width: `${props.precentage}%`}} transition={{duration: 2}}>
                </Motion.div>
            </div>
        </div>
    )
}
