import { clsx } from "clsx";
import { Motion } from "solid-motionone";

export default function Bubble(props: { children?: any, style?: string , border?: boolean}) {
    return (
        <Motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            class={clsx(
                "w-auto h-auto bg-white/10", 
                props.style,
                props.border? "p-3 pl-5 pr-5 lg:p-5 lg:pl-7 lg:pr-7 rounded-xl" : null
            )}
        >{ props.children }</Motion.div>
    );
}