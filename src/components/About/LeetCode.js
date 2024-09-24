import React from "react";
import { Row, Col } from "react-bootstrap";

function LeetCode() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Me on <strong className="purple">LeetCode</strong>
            </h1>
            <Col
                xs={12}
                md={8}
                lg={6}
                style={{ display: "flex", justifyContent: "center" }}
            >
                <img
                    style={{ width: "100%", height: "auto" }}
                    alt="LeetCode Stats"
                    src="https://leetcard.jacoblin.cool/CX330Blake?theme=unicorn&font=Fira%20Code&ext=activity"
                />
            </Col>
        </Row>
    );
}

export default LeetCode;
