import useClickOutside from '@/utilities/useClickOutsidee';
import React, { FC, useCallback, useRef, useState } from 'react'
import { HexColorPicker } from "react-colorful";

interface Props {
    color: any
    setColor: any
    styles: any
}

const ColorPicker: FC<Props> = ({ color, setColor, styles }) => {
    const popover = useRef();
    const close = useCallback(() => setDisplayColorPicker(false), []);
    useClickOutside(popover, close);

    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker)
    };

    const handleChange = (color: any) => {
        setColor(color)
    };

    const [displayColorPicker, setDisplayColorPicker] = useState(false)


    return (
        <div>
            <div style={styles.swatch} onClick={handleClick}>
                <div style={styles.color} />
            </div>
            {displayColorPicker ?
                <div className="popover" ref={popover} style={styles.popover as any}>

                    <HexColorPicker color={color} onChange={handleChange} />

                </div> : null}
        </div>
    )
}
export default ColorPicker