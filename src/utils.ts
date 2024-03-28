import clsx from "clsx";

type sizes = "default" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs";

type types = "text" | "background" | "border" | "grid" | "flex" | "padding" | "margin";

type subArg = { [key in types]?: string };

type Args =  { [key in sizes]?: string | subArg };

/**
 * Compiles the CSS based on the provided arguments.
 *
 * @param {Args} args - the arguments for compiling the CSS
 * @return {string} the compiled CSS
 */

export default function CompileCss(args: Args) {
    let css = "";
    for (let arg in args) {
        if (typeof (args[(arg as sizes)] as string | subArg) == "string") {
            (args[(arg as sizes)] as string).split(" ").forEach((element) => {
                if (arg == "default") {
                    css += ` ${element}`
                } else {
                    css += ` ${arg}:${element}`;
                }
            })
        } else {
            for (let subArg in (args[(arg as sizes)] as subArg)) {
                let temp_string = (args[(arg as sizes)] as subArg)[(subArg as types)] ?? "";
                temp_string.split(" ").forEach((element) => {
                    if (arg == "default") {
                        css += ` ${element}`
                    } else {
                        css += ` ${arg}:${element}`;
                    }
                })
            }
        }
    }
    return clsx(css);
}