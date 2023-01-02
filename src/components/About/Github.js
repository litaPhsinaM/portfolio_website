import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I Code
      </h1>
      <footer>Sorry just started using Github this fall 🥶</footer>
      <p></p>
      <GitHubCalendar
        username="litaPhsinaM"
        blockSize={12}
        blockMargin={12}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
