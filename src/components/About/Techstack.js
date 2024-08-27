import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaC, FaHtml5, FaNodeJs } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { DiReact, DiPython, DiGit, DiJava } from "react-icons/di";
import { SiNextdotjs, SiHexo } from "react-icons/si";

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
                <IoLogoJavascript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <IoLogoCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaNodeJs />
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
        </Row>
    );
}

export default Techstack;
