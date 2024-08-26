import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    // AiOutlineTwitter,
    AiFillInstagram,
    // AiOutlineFacebook,
    AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>
                        <a
                            href="https://github.com/soumyajit4419/Portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            Portfolio template
                        </a>
                    </h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} CX330</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/cx330blake"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.facebook.com/profile.php?id=100011698690769"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillFacebook />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/%E5%AD%90%E9%9B%8B-%E9%99%B3-11087825b/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() =>
                                    alert("My instagram is now deactivated")
                                }
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
