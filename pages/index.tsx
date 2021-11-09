import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import ExperienceCard from "../components/ExperienceCard";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nikhil Shisode | Software developer</title>
        <meta name="description" content="Full-stack developer portfolio" />
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/279/man-technologist_1f468-200d-1f4bb.png"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <b className={styles.description}>Hello 👋</b>
          <h1 className={styles.title}>
            I&apos;m Nikhil Shisode, a Fullstack Developer 👨‍💻
          </h1>
          <p className={styles.description}>
            Software Engineering professional with a B.E focused in Computer
            Science from Dr. D. Y. Patil Institute of Engineering & Technology,
            Pune.
          </p>
        </div>
        <div className={styles.grid}>
          <Card
            title="Development Ability"
            list={["Frontend", "Backend API", "Cross Platform Mobile App"]}
          />
          <Card
            title="Technologies"
            list={[
              "React",
              "Python",
              "Redux",
              "React Native",
              "Nodejs",
              "Expressjs",
              "Nestjs",
            ]}
          />
          <Card
            title="Databases"
            list={["MongoDB", "DynamoDB", "PostgreSQL", "MySQL"]}
          />
          <div>
            <h2>Experience</h2>
            <div className={styles.grid}>
              <ExperienceCard
                job="Fullstack Developer"
                organisation="Center for Computational Technologies"
                positionList={[
                  {
                    position: "Senior Member Of Technical Staff",
                    duration: "Nov 2021 - Present",
                  },
                  {
                    position: "Member Of Technical Staff",
                    duration: "Oct 2020 - Oct 2021",
                    Description: [
                      <p key="position-desc-2">
                        Development, Deployment and Maintenance of
                      </p>,
                      <ul key="position-list-2">
                        <li>
                          Frontend web applications made with react, threejs.
                        </li>
                        <li>
                          Backend API on AWS cloud made with python, docker, js,
                          lambda, dynamodb, appsync.
                        </li>
                      </ul>,
                    ],
                  },
                ]}
              />
              <ExperienceCard
                job="(Freelance) Backend Developer"
                organisation="CraftVeda Technology"
                positionList={[
                  {
                    position: "Backend Developer",
                    duration: "May 2020 - July 2020, Kolkata (remote)",
                    Description: [
                      <p key="position-desc-1">Design, Development of</p>,
                      <ul key="position-list-1">
                        <li>
                          Backend API using nodejs, AWS, lambda, dynamodb, s3
                          and serverless framework.
                        </li>
                      </ul>,
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>Nikhil Shisode</footer>
    </div>
  );
};

export default Home;
