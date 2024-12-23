import React from "react";
import { Row, Col } from "react-bootstrap";

function TryHackMe() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                My <strong className="purple">TryHackMe</strong> Stats
            </h1>
            <Col
                xs={12}
                md={8}
                lg={6}
                style={{ display: "flex", justifyContent: "center" }}
            >
                <iframe
                    title="TryHackMe"
                    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1815045"
                    style={{ border: "none" }}
                ></iframe>
            </Col>
        </Row>
    );
}

export default TryHackMe;
