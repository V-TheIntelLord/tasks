import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");

    const numAttemptsRequested = parseInt(attemptsRequested) || 0;

    return (
        <div>
            <h3>Give Attempts</h3>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={attemptsLeft === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft + numAttemptsRequested);
                }}
            >
                gain
            </Button>
            <Form.Group>
                <Form.Control
                    type="number"
                    value={numAttemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAttemptsRequested(event.target.value);
                    }}
                />
            </Form.Group>
            <div>Attempts left: {attemptsLeft}</div>
        </div>
    );
}
