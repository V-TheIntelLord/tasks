import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [username, setUsername] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="set-edit-mode"
                label="Edit Mode:"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode ?
                <div>
                    <Form.Control value={username} onChange={updateUsername} />
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Is a student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                </div>
            :   <div> </div>}
            <div>
                {username} is {isStudent ? " " : " not "} a student.
            </div>
        </div>
    );
}
