import { clsx } from "clsx";

export default function Bubble(props: { children?: any, style?: string , border?: boolean}) {
    return (
        <div 
            class={clsx(
                "w-auto h-auto bg-white/10", 
                props.style,
                props.border? "p-3 pl-5 pr-5 lg:p-5 lg:pl-7 lg:pr-7 rounded-xl" : null
            )}
        >{ props.children }</div>
    );
}