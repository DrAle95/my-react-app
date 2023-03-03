import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {


  return (

  <section id="projects">
  <div className="wrapper">
  <h1>Projects</h1>
  <div className="cols">
      <div className="col" ontouchstart="this.classList.toggle('hover');">
        <div className="container">
          <div className="front-gift">

            <div className="inner">

              <h1>GiftIt</h1>



            </div>
          </div>


          <div className="back-gift">
            <div className="inner">
              <p><a href="http://www.giftit.one/">GiftIt</a> is an app to simplify the process of buying gifts as a group. With GiftIt, you can manage
              the entire process in one application.</p>
              <span><a href="https://github.com/tielass/giftit">Github Repo</a></span>
            </div>
          </div>
        </div>
      </div>
      <div className="col" ontouchstart="this.classList.toggle('hover');">
        <div className="container">
          <div className="front-fans">
            <div className="inner">
              <h1>Lonely Fans</h1>

            </div>
          </div>
          <div className="back-fans">
            <div className="inner">
              <p><a href="http://www.lonelyfans.fun/">Lonely Fans</a> will help you to find a fellow to accompany the soccer championship.</p>
              <span><a href="https://github.com/tielass/-lonelyfans">Github Repo</a></span>
            </div>
          </div>
        </div>
      </div>
      <div className="col" ontouchstart="this.classList.toggle('hover');">
        <div className="container">
          <div className="front-task">
            <div className="inner">
              <h1>Watch list</h1>

            </div>
          </div>
          <div className="back-task">
            <div className="inner">
              <p><a href="https://rails-watch-list-drle.herokuapp.com/">Watch list.</a> will help you to bookmark your favourite movies and create a list.</p>
              <span><a href="https://github.com/DrAle95/rails-watch-list">Github Repo</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  )
}
