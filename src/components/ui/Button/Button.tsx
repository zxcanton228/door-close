import cn from 'clsx'
import {ButtonHTMLAttributes, FC, PropsWithChildren} from 'react'
import './Button.sass'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "blue" | "black"
  size?: "sm" | "lg"
}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,className,variant,size = "sm",...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(
        "btn",
        {
          "btn-blue": variant === "blue",
          "btn-black": variant === "black",
          "btn-sm": size === "sm",
          "btn-large": size === "lg",
        },
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
