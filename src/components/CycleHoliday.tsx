import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🎂" | "🎃" | "🎄" | "🎆" | "🦃";

const ALPHA_HOLIDAYS: Record<Holiday, Holiday> = {
    "🦃": "🎂",
    "🎂": "🎄",
    "🎄": "🎃",
    "🎃": "🎆",
    "🎆": "🦃",
};

const ORDERED_HOLIDAYS: Record<Holiday, Holiday> = {
    "🎄": "🎂",
    "🎂": "🎆",
    "🎆": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎆");
    function cycleAlpha(): void {
        const newHoliday = ALPHA_HOLIDAYS[holiday];
        setHoliday(newHoliday);
    }
    function cycleOrder(): void {
        const newHoliday2 = ORDERED_HOLIDAYS[holiday];
        setHoliday(newHoliday2);
    }
    return (
        <span>
            <div>
                <Button onClick={cycleAlpha}>Advance by Alphabet</Button>
            </div>
            <div>
                <Button onClick={cycleOrder}>Advance by Year</Button>
            </div>
            <div>Holiday: {holiday}</div>
        </span>
    );
}
