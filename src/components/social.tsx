import { FaBrandsLinkedin } from 'solid-icons/fa'
import { SiDiscord } from 'solid-icons/si'
import Bubble from "./bubble";

export default function Social(props: {type: string, link: string}) {
    return (
        <Bubble style='p-2 pl-5 pr-5 rounded w-18 h-10'>
            <a href={props.link} target='_blank'>
                {props.type == "discord" && <SiDiscord size={"100%"}/>}
                {props.type == "linkedin" && <FaBrandsLinkedin size={"100%"}/>}
            </a>
        </Bubble>
    )
}