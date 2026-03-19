import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, changeAttempt] = useState<number>(4);
    const [inProgress, changeProgress] = useState<boolean>(false);
    return (
        <span>
            <h3>Start Attempt</h3>
            <Button
                onClick={() => {
                    changeProgress(true);
                    changeAttempt(attempts - 1);
                }}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    changeProgress(false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    changeAttempt(1 + attempts);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            <div>{attempts}</div>
        </span>
    );
}
