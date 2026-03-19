import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "white",
        "gray",
        "black",
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "blue",
        "purple",
        "magenta",
        "pink",
        "brown",
    ];
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                <div>
                    {colors.map((color) => (
                        <Form.Check
                            inline
                            key={color}
                            type="radio"
                            name="color-group"
                            onChange={updateColor}
                            id="change-color"
                            label={color}
                            value={color}
                            checked={selectedColor === color}
                        />
                    ))}
                </div>
                <div
                    data-testid="colored-box"
                    style={{
                        backgroundColor: selectedColor,
                        padding: "16px",
                        marginTop: "12px",
                        borderRadius: "4px",
                        display: "inline-block",
                    }}
                >
                    {selectedColor}
                </div>
            </Form.Group>
        </div>
    );
}
