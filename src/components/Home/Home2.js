import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    // AiOutlineTwitter,
    AiFillInstagram,
    // AiFillFacebook,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span>{" "}
                            MYSELF
                        </h1>
                        <p className="home-about-body">
                            I fell in love with hacking and I hope one day I can
                            be a powerful hacker. 💻
                            <br />
                            <br />I am fluent in classics like
                            <i>
                                <b className="purple">
                                    {" "}
                                    Python, JavaScript, C, etc.{" "}
                                </b>
                            </i>
                            <br />
                            <br />I am striving to become an{" "}
                            <b className="purple">all-round hacker</b>,
                            specializing in &nbsp;
                            <i>
                                <b className="purple">
                                    Web, Crypto, Pwn, Reverse{" "}
                                </b>{" "}
                                and <b className="purple">Forensics.</b>
                            </i>
                            <br />
                            <br />
                            By the way, I recommend you to check out my{" "}
                            <b className="purple">
                                <a
                                    href="https://blog.cx330.tw"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        color: "inherit",
                                        // textDecoration: "none",
                                    }}
                                >
                                    personal blog.
                                </a>
                            </b>{" "}
                            There are some{" "}
                            <b className="purple">writeups of the CTF</b>{" "}
                            competitions, <b className="purple">bug-bounty</b>{" "}
                            reports, and other stuffs about{" "}
                            <b className="purple">hacking.</b>
                            {/* <i>
                                <b className="purple">
                                    {" "}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js and Next.js</b>
                            </i> */}
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to{" "}
                            <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/cx330blake"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.facebook.com/profile.php?id=100011698690769"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaFacebook />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/soumyajit4419/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/cx330blake"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                    onClick={() => {
                                        alert(
                                            "My instagram is now deactivated"
                                        );
                                    }}
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
