import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Skill from "../components/Skill";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Link from "next/link";
import PageTransition from "@/components/animation/PageTransition";

function Home() {
  const [key, setKey] = useState("home");

  return (
    <>
      <div
        className="d-flex justify-content-between mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        <h1
          style={{ textShadow: "2px 2px 2px black" }}
          className="m-1 display-3 text-shadow-sm"
        >
          Luka Minđek
        </h1>
        <div className="m-1 d-flex align-items-center">
          <a href="https://instagram.com/mindekluka?igshid=MzNlNGNkZWQ4Mg==">
            <img
              src="../socialsIcons/instagram-icon.png"
              width="20px"
              alt="instagram"
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100034365320366">
            <img
              src="../socialsIcons/facebook-icon.jpg"
              width="20px"
              className="m-1"
              alt="facebook"
            />
          </a>
          <a href="https://www.linkedin.com/in/luka-min%C4%91ek-a46012262/">
            <img
              src="../socialsIcons/linkedin-icon.png"
              width="20px"
              alt="linkedin"
            />
          </a>
          <a href="https://twitter.com/LuksuzWL">
            <img
              src="../socialsIcons/twitter-icon.png"
              width="22px"
              className="m-1"
              alt="twitter"
            />
          </a>
          <a href="https://github.com/Luksuz">
            <img
              src="../socialsIcons/github.png"
              width="20px"
              className=""
              alt="github"
            />
          </a>
          <a href="mailto:lukamindjek@gmail.com">
            <img
              src="../socialsIcons/mail.png"
              width="20px"
              className="ms-1"
              alt="mail"
            />
          </a>
        </div>
      </div>
      <div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="display-flex align-items-end justify-content-start"
        >
          <Tab eventKey="home" title="Home" color="black">
            <PageTransition>
              <div className="container d-flex flex-column gap-3">
                <div
                  className="row justify-content-center align-items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1.5 }}
                >
                  <div className="col-12 p-3">
                    <p>
                      <span className="display-6">H</span>ello! I'm Luka, a
                      self-taught full-stack developer with a passion for coding
                      and problem-solving. I recently completed a Python
                      developer qualification course at Algebra University,
                      where I honed my skills and knowledge in programming. One
                      of my proudest achievements is the creation of an
                      <a
                        style={{ textDecoration: "none", color: "#4477CE" }}
                        href="http://ai-stories-frontend.s3-website-us-east-1.amazonaws.com/"
                        target="_blank"
                      >
                        {" "}
                        AI stories generator app
                      </a>
                      , which includes captivating images to bring stories to
                      life. Alongside this major project, I've worked on various
                      mini projects that showcase my versatility and creativity.
                    </p>
                  </div>
                </div>
                <div
                  className="row justify-content-center align-items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 1.5 }}
                >
                  <hr></hr>
                  <div className="col-8 ">
                    <img
                      className="border border-3 shadow-lg"
                      src="/Luka.webp"
                      alt="Luka"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
              <div className="container d-flex justify-content-center align-items-center">
                <div className="row my-5 justify-content-center align-items-center">
                  <h1>Skills</h1>
                  <hr />
                  <Skill
                    skillName="Javascript"
                    skillGrade={4}
                    imgURL="/skillsIcons/js.png"
                    size="40px"
                  />
                  <Skill
                    skillName="HTML"
                    skillGrade={5}
                    imgURL="/skillsIcons/html.png"
                    size="40px"
                  />
                  <Skill
                    skillName="CSS"
                    skillGrade={4}
                    imgURL="/skillsIcons/css-3.png"
                    size="40px"
                  />
                  <Skill
                    skillName="React"
                    skillGrade={4}
                    imgURL="/skillsIcons/react.png"
                    size="40px"
                  />
                  <Skill
                    skillName="Node.js"
                    skillGrade={3}
                    imgURL="/skillsIcons/nodejs.png"
                    size="40px"
                  />
                  <Skill
                    skillName="Next.js"
                    skillGrade={3}
                    imgURL="/skillsIcons/nextjs.webp"
                    size="50px"
                  />
                  <Skill
                    skillName="Bootstrap"
                    skillGrade={5}
                    imgURL="/skillsIcons/bootstrap.png"
                    size="40px"
                  />
                  <Skill
                    skillName="Tailwind"
                    skillGrade={2}
                    imgURL="/skillsIcons/tailwind.png"
                    size="40px"
                  />
                  <Skill
                    skillName="Python"
                    skillGrade={5}
                    imgURL="/skillsIcons/python.png"
                    size="40px"
                  />
                  <Skill
                    skillName="flask"
                    skillGrade={4}
                    imgURL="/skillsIcons/flask.png"
                    size="40px"
                  />
                  <Skill
                    skillName="MongoDB"
                    skillGrade={3}
                    imgURL="/skillsIcons/mongodb.png"
                    size="40px"
                  />
                  <Skill
                    skillName="SQLite"
                    skillGrade={3}
                    imgURL="/skillsIcons/sqlite.png"
                    size="50px"
                  />
                </div>
              </div>
            </PageTransition>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <PageTransition>
              <div className="container mt-5">
                <div className="row d-flex">
                  <div className="col-lg-5 d-none d-lg-block">
                    <img
                      className="img-fluid mb-3 shadow-lg"
                      src="/Luka-childhood.webp"
                      alt="Luka's childhood photo"
                      width="100%"
                    />
                  </div>
                  <div className="col-12 col-lg-7">
                    <h1 className="mb-4">Early life and Background</h1>
                    <div className="col-12 d-lg-none">
                      <img
                        className="img-fluid mb-3 shadow-lg"
                        src="/Luka-childhood.webp"
                        alt="Luka's childhood photo"
                        width="100%"
                      />
                    </div>
                    <p className="pt-4">
                      Born and raised in the picturesque town of Sveti Ilija,
                      near Varaždin, Croatia, my early life was marked by
                      resilience and a determination to overcome challenges.
                      While some may associate hard childhood stories with
                      building strong-minded individuals, my experience was
                      different. Despite growing up without a father for almost
                      half of my childhood, I don't consider myself part of that
                      narrative. Instead, I believe that every life journey has
                      its unique lessons to offer. Growing up in Croatia
                      instilled in me a deep appreciation for my roots and a
                      sense of community. The vibrant culture and rich history
                      of my homeland continue to inspire me as I venture into
                      the world. Though I may have longed for a more arduous
                      childhood to foster an even greater strength of character,
                      I am grateful for the experiences that have shaped who I
                      am today. One figure who has consistently motivated me is
                      Elon Musk, an entrepreneur and visionary whose relentless
                      pursuit of innovation and passion for creating a better
                      future resonate deeply with me. While I don't believe that
                      a role model is necessary for greatness, Elon's inspiring
                      journey has left a lasting impression on my aspirations.
                      In this section, you'll uncover the foundations of my life
                      in Croatia, the lessons learned from challenges faced, and
                      the influence of remarkable individuals like Elon Musk on
                      my drive to accomplish something meaningful and impactful.
                      Join me as I share the story of my early years and the
                      values that continue to shape my path forward.
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-12">
                    <h1>Professional Journey and Accomplishments</h1>
                    <div className="col-12 pt-5">
                      <img
                        src="/technical-drawing.webp"
                        alt="Technical drawing"
                        width="100%"
                        className="img-fluid shadow-lg"
                      />
                    </div>
                    <p className="pt-4">
                      My professional journey has been a testament to the power
                      of determination and self-initiative. While my formal
                      school education may not be considered exceptional, it
                      served as a stepping stone for what would become an
                      inspiring transformation. After completing a 3-year CNC
                      machinist middle school, I began working at Kostwein
                      Machinenbau for 6 years, where I honed my skills in the
                      manufacturing industry. However, it was during this time
                      that a pivotal moment occurred—a moment that would change
                      the course of my life. A spark lit, and I realized my
                      passion for technology and programming, particularly
                      Python. Motivated by this newfound interest, I decided to
                      take action and pursue a career in the tech world. I
                      enrolled in a Python developer course at Algebra
                      University, investing six months of dedicated effort to
                      earn my degree. Encouraged by this early success, I
                      resolved to expand my skill set further. My thirst for
                      knowledge led me to explore a diverse array of
                      technologies that could bolster my expertise and enhance
                      my employability. This journey has not only shaped my
                      professional path but also solidified my belief that
                      passion, resilience, and a commitment to self-improvement
                      can lead to remarkable achievements. In this section, I
                      invite you to delve into my professional evolution, from
                      the early days in the manufacturing sector to my decision
                      to pursue a career in Python development.
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-12 col-lg-5">
                    <h1>Values and Vision</h1>
                    <p className="pt-4">
                      In both my personal and professional life, I adhere to
                      core values that shape my journey and future vision. My
                      values include having a clear and ambitious vision, which
                      serves as a compass to guide me; discipline, which ensures
                      consistency and progress; and continuous learning, which
                      fosters adaptability and innovation. Family support also
                      plays a vital role, providing emotional strength and
                      encouragement. My future vision is centered on
                      contributing to humanity through technology research,
                      particularly in artificial intelligence (AI). I am
                      passionate about exploring AI's potential to solve
                      real-world problems and improve lives. My aspiration is to
                      be a catalyst for positive change, creating innovative
                      solutions that benefit society and foster a brighter
                      future.{" "}
                    </p>
                  </div>
                  <div className="col-12 col-lg-7 pt-5">
                    <img src="/ElonMusk.webp" alt="Elon Musk" width="100%" />
                  </div>
                </div>
              </div>
            </PageTransition>
          </Tab>
          <Tab eventKey="portfolio" title="Portfolio">
            <PageTransition>
              <div className="container mt-5">
                <div className="row">
                  <div className="col-12">
                    <h1>Projects</h1>
                    <p>
                      Here are some of the projects I've worked on. Click on the
                      image to view the project.
                    </p>
                  </div>
                </div>

                <hr></hr>

                <div className="row">
                   <div className="col-12">
                    <h1>Book reviews app</h1>
                    <p>
                      This app is a book review platform that allows users to
                      search for books, read and post book reviews.
                    </p>
                   </div>
                  <Link href="http://book-reviews.s3-website-us-east-1.amazonaws.com">
                    <img
                    src="./book-reviews.png"
                    alt="GetActive-ai app image"
                    width="100%"
                    className="rounded rounded-5"
                    />
                    
                    </Link>
                </div>

                <hr></hr>

                <div className="row">
                  <div className="col-12">
                    <h1>GetActive-ai</h1>
                    <p>
                      GetActive-ai is a web application that allows users to
                      generate a personalized workout plan based on their
                      fitness goals and preferences. The app uses a gpt model to
                      calculate the optimal workout plan for the user, based on
                      their conversation with their virtual trainer.
                    </p>
                  </div>
                  <Link href="https://getactive-ai.netlify.app">
                    <img
                      src="./getactive-ai.webp"
                      alt="GetActive-ai app image"
                      width="100%"
                      className="rounded rounded-5"
                    />
                  </Link>
                </div>

                <hr></hr>

                <div className="row">
                  <div className="col-12">
                    <h1>Ai stories generator app</h1>
                    <p>
                      This app is an interactive storytelling platform that
                      allows users to create segmented stories. By providing an
                      initial prompt, users can generate subsequent parts of the
                      story, each accompanied by corresponding images. Features
                      include the ability to influence the story's direction,
                      add random events, and reset the story. The app offers a
                      unique blend of automated generation and user control,
                      creating an engaging and personalized storytelling
                      experience.
                    </p>
                  </div>
                  <Link href="http://ai-stories-frontend.s3-website-us-east-1.amazonaws.com/">
                    <img
                      src="./ai-stories.png"
                      alt="AI-stories image"
                      width="100%"
                      className="rounded rounded-5"
                    />
                  </Link>
                </div>

                <hr></hr>

                <div className="row">
                  <div className="col-12">
                    <h1>Blackjack desktop app</h1>
                    <p>
                      This app is a blackjack game that allows users to play
                      against the computer. The app includes a simple user
                      interface and a score counter.
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                    <iframe src="https://giphy.com/embed/APeJNsdVKWA0MsmzWV" width="306" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/APeJNsdVKWA0MsmzWV"></a></p>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-12">
                    <h1>A quizz app</h1>
                    <p>
                      A beginner quizz project; test your knowledge in this 10
                      random OpenTriviaDatabase questions!
                    </p>
                  </div>

                  <Link href="/quiz-app/">
                    <img
                      src="./quizz-app.webp"
                      alt="Quizz app image"
                      width="100%"
                      className="rounded rounded-5"
                    />
                  </Link>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-12">
                    <h1>A game deal finder app</h1>
                    <p>
                      This one is for all of my fellow gamers out there! Find
                      the best game deals across 12 different game stores!
                    </p>
                    <Link href="/game-finder-app">
                      <img
                        src="./game-search.webp"
                        alt="game search app image"
                        width="100%"
                        className="rounded rounded-5"
                      />
                    </Link>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-12">
                    <h1>A contacts app</h1>
                    <p>
                      You somehow dont have contacts on your phone? Thats where
                      i got you covered! Enjoy your own simple contacts app!
                    </p>
                    <Link href="https://luxury-contacts.netlify.app">
                      <img
                        src="./contacts-app.png"
                        alt="contacts app image"
                        width="100%"
                        className="rounded rounded-5"
                      />
                    </Link>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-12">
                    <h1>A weather app</h1>
                    <p>
                      Often wonder what the weather is like in a specific city
                      anywhere in the world? Yeah, me neither, but here's a
                      weather app anyway!
                    </p>
                    <Link href="/weather-app/">
                      <img
                        src="./weather-app.webp"
                        alt="a weather app image"
                        width="100%"
                        className="rounded rounded-5"
                      />
                    </Link>
                  </div>
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-12">
                    <h1>A shopping cart app</h1>
                    <p>*Scrolling through the viber family chat*</p>
                    <p>
                      "Hey, Jenna do you remember what mom said we are supposed
                      to get in the supermarket?"
                    </p>
                    <p>
                      "No, I don't, but I think she said something about milk?";
                      "Yeah, I think so too, but I'm not sure, wish there was an
                      app that we all have so we could track it easier".
                    </p>
                    <Link href="https://shopping-cart-to-buy.netlify.app">
                      <img
                        src="./shopping-cart-app.webp"
                        alt="Shopping cart app image"
                        width="100%"
                        className="rounded rounded-5 border border-3"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </PageTransition>
          </Tab>
          <Tab eventKey="book" title="My book">
            <PageTransition>
              <div className="container d-flex flex-column">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-10 col-lg-8 mt-3">
                    <h1>Coming soon...</h1>
                    <p>
                      Currently, I am in the process of crafting a captivating
                      autobiography, intending to share intriguing chapters of
                      my life's journey with you. While this project is still a
                      work in progress, I encourage you to explore my blog page,
                      where I regularly share compelling thoughts and noteworthy
                      events on a weekly basis.
                    </p>
                    <p style={{ color: "gray" }} className="mt-5">
                      Click on the image to view the blog
                    </p>
                    <Link href="https://luka-blog.netlify.app" target="_blank">
                      <img
                        className="shadow-lg"
                        src="/luka-blog.webp"
                        width="100%"
                        alt="blog"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </PageTransition>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Home;
