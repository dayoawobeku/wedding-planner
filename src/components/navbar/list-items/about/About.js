import React from "react";
import FullImage from "../../../full-image/FullImage";
import Layout from "../../../Layout";
import FullText from "../../../full-text/FullText";
import "./About.css";
import whoWeAre from "../../../../assets/who-we-are.jpg";
import mission from "../../../../assets/mission.jpg";
import team from "../../../../assets/team.jpg";
import imageOne from "../../../../assets/who-we-are/image-one.jpg";
import imageTwo from "../../../../assets/who-we-are/image-two.jpg";
import imageThree from "../../../../assets/who-we-are/image-three.jpg";
import ourMission from "../../../../assets/mission-and-vision/our-mission.jpg";
import ourVision from "../../../../assets/mission-and-vision/our-vision.jpg";
import theTeam from "../../../../assets/team/the-team.jpg";

const About = () => {
  return (
    <Layout>
      <section className="about">
        <div className="about-container">
          <div className="who-we-are">
            <FullImage src={whoWeAre} alt="wedding-table" text="Who we are" />
            <FullText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deleniti reprehenderit, maiores illum ipsum assumenda velit, nemo quisquam accusantium harum eius ducimus officiis? Omnis veniam mollitia nesciunt velit voluptas. Vel voluptatum sapiente possimus dicta neque est adipisci qui non error eaque! Sint nulla libero quae nesciunt deleniti obcaecati earum optio? Corporis omnis repellat mollitia labore sed, est architecto repudiandae vel tempore eligendi nobis deserunt quasi explicabo beatae quaerat, in unde saepe optio laboriosam magnam, facere vero adipisci qui. Veniam voluptatibus voluptatem ipsum, omnis tempora possimus sint tempore veritatis, minus cupiditate nostrum quaerat fuga. Atque dolores earum nihil at consectetur perspiciatis." />
            <div className="images-container">
              <img src={imageOne} alt="wedding car" />
              <img src={imageTwo} alt="wedding cake" />
              <img src={imageThree} alt="couple touching hands" />
            </div>
          </div>

          <div className="mission">
            <FullImage src={mission} alt="bouquet" text="Mission & vision" />
            <div className="color">
              <div className="mission-vision-container">
                <div className="left">
                  <img src={ourMission} alt="" />
                  <h3>OUR MISSION</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quis accusamus quo nam eligendi officiis, obcaecati aliquam
                    consequatur aliquid perspiciatis dolores, rerum eaque amet
                    quae dolorum consequuntur autem, excepturi possimus vitae.
                  </p>
                </div>
                <div className="right">
                  <img src={ourVision} alt="" />
                  <h3>OUR VISION</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti necessitatibus neque, quod repudiandae, voluptatem
                    eius natus molestiae autem quam ex rem. Sunt nesciunt
                    tempore voluptate aliquam temporibus et eveniet nostrum.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="team">
            <FullImage
              src={team}
              alt="bouquet"
              text="the wedding planner team"
            />

            <div className="color">
              <div className="mission-vision-container">
                <div className="left">
                  <h3>OLUWAFARABALESISEIYANUREDAADALAYEMI</h3>
                  <h4>CEO, Wedding Planner</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae, facere aspernatur sunt dolor explicabo dolore, ipsum
                    perferendis mollitia doloribus, nostrum illum. Nemo ea, vero
                    veniam corrupti fugiat aliquam praesentium eveniet libero
                    deserunt quidem nobis! Suscipit quas error veniam beatae
                    commodi?
                  </p>
                </div>
                <div className="right">
                  <img
                    src={theTeam}
                    alt="portrait of Mrs OLUWAFARABALESISEIYANUREDAADALAYEMI"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
