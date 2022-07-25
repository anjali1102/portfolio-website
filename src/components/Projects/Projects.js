import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import poochon from "../../Assets/Projects/poochon.png";
import cli from "../../Assets/Projects/cli.png";
import lily from "../../Assets/Projects/lily.png";
import hogwartsSupplies from "../../Assets/Projects/hogwarts-supplies.png";
import rapidUI from "../../Assets/Projects/rapid.png";
import leviosaStreams from "../../Assets/Projects/leviosaStreams.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hogwartsSupplies}
              isBlog={false}
              title="Hogwarts Supplies"
              description="Hogwarts Supplies is an online store for harry potter fans.It has wide range of categories. Features: filter on basis of rating, categories, price, add to wishlist, add to cart. Home page,
              Product listing page,
              Filter and sort products,
              Individual product page,
              Cart Managment,
              Wishlist managment,
              Authentication,
              Fully Responsive,
              Built with -
              React JS,
              React Context API + useReducer,
              React Router v6,
              Vanilla CSS integrated with Rapid UI Component Library"
              ghLink="https://github.com/anjali1102/Hogwarts-Supplies-v2"
              demoLink="https://hogwarts-supplies.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rapidUI}
              isBlog={false}
              title="Rapid UI"
              description="Rapid UI is an open source, light-weight styling framework that enables developers to apply the best styles and components by using the pre-defined classnames. It assists you in constructing your ideal projects instantly by putting a strong emphasis on functionality, as we take care of your designs."
              ghLink="https://github.com/anjali1102/rapidui"
              demoLink="https://rapidui.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lily}
              isBlog={false}
              title="Lily"
              description="Replace your boring new tab with a soothing wallpaper and increase your productivity by adding countdown, focus and todos for the day.Greets you according to the time of the day.
              Auto-detects your location.
              Displays current time, city, temperature and weather in sync
              Add your main Focus of the day, you can edit it.
              Wallpaper changes on every refresh
              Quote changes on every refresh"
              ghLink="https://github.com/anjali102/lily"
              demoLink="https://lily-lo7c9dkha-anjali1102.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poochon}
              isBlog={false}
              title="Poochoon"
              description=""
              ghLink="https://github.com/anjali1102/poochoon"
              demoLink="https://quiz-anjali1102.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leviosaStreams}
              isBlog={false}
              title="Leviosa Streams"
              description="Video Listing Page with options of Watch Later, create new Playlist, add or remove the video from Playlist.
              Single Video Page- like video, add to watch Later, Add/Remove from Playlist. On playing the video, it will be added in watch history.
              Playlist Management Page, consists of all custom Playlists,browse in playlist, delete from playlist.
              Watch Later Page- delete the video from Watch Later.
              Watch History Page- delete the video from Watch History and can even Clear Watch History.
              Liked Videos Page- delete the video from Liked Videos.
              Alerts about success/failure operations."
              ghLink="https://github.com/anjali1102/leviosa-streams"
              demoLink="https://leviosa-streams.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cli}
              isBlog={false}
              title="CLI Quiz"
              description="Do you know Harry Potter? Here is CLI app built with nodeJS. You can send it to your friends. Let's play a quiz and see.

              tech Stack 🤖🤖
              Node.js
              Chalk"
              ghLink="https://github.com/anjali1102/Harry-Potter-Quiz"
              demoLink="https://replit.com/@AnjaliChauhan3/mark02-wizard-quiz?embed=true#index.js"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
