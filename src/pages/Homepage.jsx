import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pictures from "../components/Pictures";
import data from "../helper/data";

const Homepage = () => {
  return (
    <div>
      <h1 className="text-center text-danger">Albums</h1>
      <Container className="rounded-4 p-3">
        <Row className="justify-content-center g-3">
          {data.map((item) => (
            <Col md={6} lg={4} xl={3}>
              <Pictures {...item} key={item.photographer} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
