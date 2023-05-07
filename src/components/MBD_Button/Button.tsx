import React, {FC, HTMLAttributes} from 'react';
import clsx from "clsx"
import "./button.scss"

type ButtonColor  = 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'dark'
    | 'muted'
    | 'white'
    | 'info'
    | 'none'
    | 'link'
    | 'theme'
    | undefined
    | 'tertiary';


interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    color?: ButtonColor
    block?: boolean,
    rounded?: boolean;
    outline?: boolean;
    text?: boolean;
    size?: 'sm' | 'lg';
    tag?: React.ComponentProps<any>;
    href?: string;
    floating?: boolean
    type?: "submit" | "button" | "reset"
}


const Button: FC<ButtonProps> = (props) => {
    const {
        color,
        block,
        rounded = false,
        outline = false,
        size = "sm",
        tag = "button",
        floating = false,
        href,
        text,
        className,
        children,
        type = "button",
        ...attr
    }  = props

   // const [isActive, setActive] = useState(active ? active : false);

    let btnColor;
    if (color !== 'none' || !color) {
        if (outline) {
            if (color) {
                btnColor = `btn-outline-${color}`;
            } else {
                btnColor = 'btn-outline-primary';
            }
        } else if (color) {
            btnColor = `btn-${color}`;
        } else{
            btnColor = 'btn-primary';
        }
    } else {
        btnColor = '';
    }

    if(text) {
        btnColor = 'btn-text';
    }
    if(href) {
        btnColor = 'btn-link';
    }

    const classes = clsx(
        "mdb-btn",
        btnColor,
        rounded && 'btn-rounded',
        floating && 'btn-floating',
        size && `btn-${size}`,
        block && 'btn-block',
        className
    )

    let Tag = tag

    if (href && Tag !== 'a') {
        Tag = 'a';
    }


    return (
        <Tag className={classes} type={type} {...attr}>
            {children}
        </Tag>
    );
};

export default Button;