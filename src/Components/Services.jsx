import react from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h1>Services Page</h1>

      <Row className="services">
        <Col>
          <Link to="./Services/Sales/Service-details">Sales</Link>
          <p className="para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          </p>
        </Col>
        <Col>
          <Link to="./Services/Servicing/Service-details">Servicing</Link>
          <p className="para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          </p>
        </Col>
        <Col>
          <Link to="./Services/Insurance/Service-details">Insurance</Link>
          <p className="para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
