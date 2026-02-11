import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is header text.</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            Vibav Tandel, Hello World
            <p>
                This is another line. You could expand this into a full
                paragraph and make multiple lines on the website. It is so easy
                that you can do whatever you want with it. It is just like
                Google Docs.
            </p>
            <ul>
                <li> First thing </li>
                <li> Second thing </li>
                <li> Third thing </li>
            </ul>
            <img
                style={{ height: "200px", width: "400px" }}
                src="https://cdn.modrinth.com/data/cached_images/962923103cdb2c75e8fc9b6f743ffb2a88cc7620.png"
                alt="Classic Minecraft cleric villager"
            ></img>
            <p>
                This is <span style={{ color: "red" }}>colored text</span>
            </p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First column.
                        <div
                            style={{
                                backgroundColor: "red",
                                height: "50px",
                                width: "100px",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second column.
                        <div
                            style={{
                                backgroundColor: "red",
                                height: "50px",
                                width: "100px",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p> </p>
            <p> </p>
            <p> </p>
        </div>
    );
}

export default App;
