import React from "react";
import { Row, Col } from "react-bootstrap";
import Markdown from "react-markdown";

function LeetCode() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Me on <strong className="purple">LeetCode</strong>
            </h1>
            {/* <iframe
                src="https://leetcard.jacoblin.cool/CX330Blake?theme=unicorn&font=Fira%20Code&ext=activity"
                width={"100%"}
                height={"500px"}
                title="LeetCode Card"
            ></iframe> */}
            <Col xs={12} md={10} lg={8}>
                {/* 使用 Col 控制寬度 */}
                <Markdown>
                    {
                        "![LeetCode Stats](https://leetcard.jacoblin.cool/CX330Blake?theme=unicorn&font=Fira%20Code&ext=activity)"
                    }
                </Markdown>
            </Col>
        </Row>
    );
}

export default LeetCode;
