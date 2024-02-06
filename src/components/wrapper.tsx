export default function(props: { children: any }) {
    return (
        <div class="w-full h-full grid grid-cols-10 gap-5 auto-rows-max">
            { props.children }
        </div>
    )
}