/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Tours and Travels",
      description: "Management System",
      imgUrl: projImg1,
    },
    {
      title: "Collage ERP",
      description: "Management System",
      imgUrl: projImg2,
    },
    {
      title: "Authetication API's",
      description: "OAuth 2.0 Rest API",
      imgUrl: projImg3,
    },
    {
      title: "Email AI Assistant",
      description: "AI Chatbot",
      imgUrl: projImg4,
    },
    {
      title: "Instatnt Messaging",
      description: "Chat Application",
      imgUrl: projImg5,
    },
    {
      title: "Voating Application",
      description: "Voting System",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"A collection of hands-on projects demonstrating my expertise as a Full-Stack Developer. These projects highlight my ability to build scalable backend systems with Java and Spring Boot, as well as dynamic and responsive user interfaces using React.js, Angular, and JavaScript. Each project reflects my focus on clean architecture, performance, and real-world problem solving."</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>"A collection of hands-on projects demonstrating my expertise as a Full-Stack Developer. These projects highlight my ability to build scalable backend systems with Java and Spring Boot, as well as dynamic and responsive user interfaces using React.js, Angular, and JavaScript. Each project reflects my focus on clean architecture, performance, and real-world problem solving."</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>"A collection of hands-on projects demonstrating my expertise as a Full-Stack Developer. These projects highlight my ability to build scalable backend systems with Java and Spring Boot, as well as dynamic and responsive user interfaces using React.js, Angular, and JavaScript. Each project reflects my focus on clean architecture, performance, and real-world problem solving."</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
