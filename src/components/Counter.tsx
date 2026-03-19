import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <h3>Counter</h3>
            <Button
                onClick={() => {
                    setValue(1 + value);
                }}
            >
                Add One
            </Button>
            <div>to {value}</div>
        </span>
    );
}
