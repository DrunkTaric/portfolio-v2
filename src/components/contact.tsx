import { AiTwotoneMail, AiTwotonePhone, AiTwotoneHome } from 'solid-icons/ai';

export default function Contact(props: {type: string, value: string}) {
    const icon_styling = 'mt-auto mb-auto mr-2 w-7 h-7'
    return (
        <div class="flex w-full h-7">
            {props.type == "mail" && <AiTwotoneMail class={icon_styling}/>}
            {props.type == "phone" && <AiTwotonePhone class={icon_styling}/>}
            {props.type == "place" && <AiTwotoneHome class={icon_styling}/>}
            <h1 class='mt-auto mb-auto'>{props.value}</h1>
        </div>
    )
}