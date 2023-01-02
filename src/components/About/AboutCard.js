import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello World 🙋🏻‍♂️.
            <br/>
            I am Manish Patil, pursuing Masters in Computer Science at California State University Dominguez Hills
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              ⚽ Soccer : I have played for district level tournament back in Mumbai
              📸​ Photography : you can look over some of my shots <a href="https://500px.com/p/ManishPatil1?view=photos"><strong className="purple">here </strong></a>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
