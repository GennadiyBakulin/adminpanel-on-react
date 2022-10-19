import React from "react";
import styles from "./Button.module.css";
import { Icon } from "../Icon/Icon";
import classnames from "classnames";


export const Button = ({className, themeBlue, themeRed, themeBlueTransparent, themeBlackTransparent, sizeMedium, sizeSmall, sizeLarge, iconOnly, children, ...props}) => {
  const blockClass = classnames({
    [styles.button]: true,
    [styles["button_theme-blue"]]: !!themeBlue,
    [styles["button_theme-red"]]: !!themeRed,
    [styles["button_theme-blue-transparent"]]: !!themeBlueTransparent,
    [styles["button_theme-black-transparent"]]: !!themeBlackTransparent,
    [styles["button_size_medium"]]: !!sizeMedium,
    [styles["button_size_small"]]: !!sizeSmall,
    [styles["button_large"]]: !!sizeLarge,
    [styles["button_icon-only"]]: !!iconOnly,
    className: !!className ? className : '',
  })

  return (
    <>
      <button className={ blockClass }  {...props}>
          {children}
      </button>
    </>
  )
}

export const Buttons = () => {
  return (
    <>
      <Button themeBlue sizeMedium>
        <Icon className="icon" name="x_medium" />
        Text here
      </Button>
      <Button themeBlueTransparent sizeMedium>
        <Icon className="icon" name="x_medium" />
        Text here
      </Button>
      <Button themeBlackTransparent sizeMedium>
        <Icon className="icon" name="x_medium" />
        Text here
      </Button>

      <Button themeBlue sizeMedium>
        Text here
      </Button>
      <Button themeBlueTransparent sizeMedium>
        Text here
      </Button>
      <Button themeBlackTransparent sizeMedium>
        Text here
      </Button>

      <Button themeBlue sizeMedium iconOnly>
        <Icon className="icon" name="x_medium" />
      </Button>
      <Button themeBlueTransparent sizeMedium iconOnly>
        <Icon className="icon" name="x_medium" />
      </Button>
      <Button themeBlackTransparent sizeMedium iconOnly>
        <Icon className="icon" name="x_medium" />
      </Button>

      <Button themeBlue sizeSmall>
        <Icon className="icon" name="x_medium" />
        Text here
      </Button>
      <Button themeBlueTransparent sizeSmall>
        <Icon className="icon" name="x_medium" />
        Text here
      </Button>

      <Button themeBlue sizeSmall>
        Text here
      </Button>
      <Button themeBlueTransparent sizeSmall>
        Text here
      </Button>

      <Button themeBlue sizeSmall iconOnly>
        <Icon className="icon" name="x_medium" />
      </Button>
      <Button themeBlueTransparent sizeSmall iconOnly>
        <Icon className="icon" name="x_medium" />
      </Button>
    </>
  );
};
