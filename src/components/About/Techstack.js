import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaC } from "react-icons/fa6";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import { SiNextdotjs, SiHexo, SiBurpsuite } from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <FaC />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHexo />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiBurpsuite />
            </Col>
        </Row>
    );
}

export default Techstack;
