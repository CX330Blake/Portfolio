import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";
import { PiAsterisk } from "react-icons/pi";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hello world, I'm <span className="purple">CX330 </span>,
                        or <span className="purple">Blake Chen </span>
                        from <span className="purple"> Taiwan</span>, a student
                        at <span className="purple">NCKU CSIE. </span>
                        I'm now learning to become an{" "}
                        <span className="purple">all-round hacker</span> just
                        out of{" "}
                        <span className="purple">curiosity and fun. </span>
                        Apart from <span className="purple">hacking</span>, I
                        also love:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <PiAsterisk /> &nbsp;&nbsp;Drinking coffee
                        </li>
                        <li className="about-activity">
                            <PiAsterisk /> &nbsp;&nbsp;Photography
                        </li>
                        <li className="about-activity">
                            <PiAsterisk /> &nbsp;&nbsp;The ocean
                        </li>
                        <li className="about-activity">
                            <PiAsterisk /> &nbsp;&nbsp;My fantastic life
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Being the one is just like being in love. No one needs
                        to tell you you are in love, you just know it, through
                        and through."{" "}
                    </p>
                    <footer className="blockquote-footer">The Matrix</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
