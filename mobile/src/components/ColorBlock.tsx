import { Button, IButtonProps } from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";

export interface ColorBlockProps extends IButtonProps {
    color: ColorType,
    pressedColor: ColorType,
    id: number,
    choice?: number,
}

export function ColorBlock({ color, pressedColor, id, choice, ...rest }:ColorBlockProps) {
    let pressed = false;

    if (id == choice) {
        pressed = true;
    }

    return (
        <Button
            width={100} height={95}
            borderColor={pressed ? "white" : "none"}
            rounded="lg"
            shadow={pressed ? 3 : 1}
            backgroundColor={ pressed ? pressedColor : color }
            _pressed={{
                backgroundColor: pressedColor
            }}
            { ...rest }
        />
    )
}