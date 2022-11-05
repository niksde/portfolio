import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import ExperienceCard from "../components/ExperienceCard";

const Home: NextPage = () => {
  const onResumeClick = () => {
    window.open(process.env.RESUME_URL, '_blank')?.focus();
  }

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
      <div className={styles.body}>
        <main className={styles.main}>
          <div className={styles.heroSection}>
            <div className={styles.aboveTitle}>
              <b className={styles.description}>Hello 👋</b>
              <button className={styles.button} onClick={onResumeClick}>Resume </button>
            </div>
            <h1 className={styles.title}>
              I&apos;m Nikhil Shisode, a
              <span className={styles.accent}> Fullstack Developer</span> 👨‍💻
            </h1>
            <p className={styles.description}>
              Software Engineering professional with a B.E focused in Computer
              Science from Dr. D. Y. Patil Institute of Engineering &
              Technology, Pune.
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
            <div className={styles.mainExpSection}>
              <h2>Experience</h2>
              <div className={styles.grid}>
                <ExperienceCard
                  job="Fullstack Developer"
                  organisation="Center for Computational Technologies"
                  positionList={[
                    {
                      position: "Team Lead",
                      duration: "Apr 2022 - Present",
                    },
                    {
                      position: "Senior Member Of Technical Staff",
                      duration: "Nov 2021 - Apr 2022",
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
                            Backend API on AWS cloud made with python, docker,
                            js, lambda, dynamodb, appsync.
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
    </div>
  );
};

export default Home;
