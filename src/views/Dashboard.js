/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components

function Dashboard({ studentNumber, studentName, imageSrc }) {
  return (
    <>
        <Col lg="4" md="6" sm="6">
      <Card className="card-stats">
        <CardBody >
          <Row>
            <Col md="4" xs="5">
              <div className="icon-big text-center icon-warning">
                <i className="nc-icon nc-globe text-warning" />
              </div>
            </Col>
            <Col md="8" xs="7">
              <div className="numbers">
                <p className="card-category">ALUMNO {studentNumber}</p>
                <CardTitle tag="p">{studentName}</CardTitle>
                <p />
              </div>
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <hr />
          <div className="stats"></div>
          <a href="/" className="simple-text logo-mini">
            <div className="logo-img" style={{textAlign: "center"}}>
              <img src={imageSrc} alt="student-logo" style={{maxHeight: "300px"}} />
            </div>
          </a>
        </CardFooter>
      </Card>
    </Col>

         {/* <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 2</p>
                      <CardTitle tag="p">SANDRA LÓPEZ</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>           */}
    </>
  );
}

export default Dashboard;
