import { clsx } from "clsx";

export default function Bubble(props: { children?: any, style?: string }) {
    return (
        <div 
            class={clsx("w-auto h-auto p-3 pl-5 pr-5 lg:p-5 lg:pl-7 lg:pr-7 rounded-xl bg-white/10", props.style)}
        >{ props.children }</div>
    );
}