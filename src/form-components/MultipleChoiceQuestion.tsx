import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    function updateOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="question-options">
                <Form.Label>Select an answer:</Form.Label>
                <Form.Select value={selectedOption} onChange={updateOption}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {selectedOption === expectedAnswer ?
                    "Correct ✔️"
                :   "Incorrect ❌"}
            </div>
        </div>
    );
}
