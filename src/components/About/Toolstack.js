import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiKalilinux,
    SiWireshark,
    SiTryhackme,
    SiHackthebox,
    SiHackerone,
    SiOwasp,
} from "react-icons/si";
import { GiHydra } from "react-icons/gi";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiKalilinux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWireshark />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTryhackme />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHackthebox />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHackerone />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiOwasp />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <GiHydra />
            </Col>
        </Row>
    );
}

export default Toolstack;
