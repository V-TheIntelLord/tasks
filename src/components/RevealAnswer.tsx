import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    //Left: variable you need at any time
    //Right: the way you set a variable in React
    const [isVisible, setIsVisible] = useState<boolean>(false);
    return (
        <span>
            <Button
                onClick={() => {
                    setIsVisible(!isVisible);
                }}
            >
                Reveal Answer
            </Button>
            <div>{isVisible ? 42 : <></>}</div>
        </span>
    );
}
