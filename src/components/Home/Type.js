import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Wannabe Hacker",
                    "The Cyber Vampire",
                    "CTFer",
                    "Developer",
                    "Open Sourcer",
                    "Programmer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
