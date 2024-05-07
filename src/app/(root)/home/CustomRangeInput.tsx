import React, { useState } from "react";

const CustomRangeInput: React.FC = () => {
    const [value, setValue] = useState<number>(50);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value));
    };

    // Define the threshold to change dot color
    const threshold = 75;

    return (
        <div className="relative w-full">
            {/* Track */}
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
                className="appearance-none w-full h-2 bg-gray-200 rounded-full outline-none"
            />
            {/* Dots on track */}
            <div className="absolute top-0 left-0 h-2 w-full">
                <div className="h-full w-full bg-gray-300 absolute top-0 left-0">
                    {[...Array(101)].map((_, i) => (
                        <div
                            key={i}
                            className={`h-full w-px bg-transparent absolute top-0 left-${i}% ${i > threshold ? "bg-red-500" : ""
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomRangeInput;
