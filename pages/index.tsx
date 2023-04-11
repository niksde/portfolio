import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import ExperienceCard from "../components/ExperienceCard";
import List from "../components/List";

const Home: NextPage = () => {
  const onResumeClick = () => {
    window.open(process.env.NEXT_PUBLIC_RESUME_URL, "_blank")?.focus();
  };

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
              <button className={styles.button} onClick={onResumeClick}>
                Resume
              </button>
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
          <h2>
            Skills
          </h2>
          <div className={styles.grid}>
            <Card
              title="Front-end development"
              list={["ReactJS",
              "Redux",
              "Webpack",
              "HTML5",
              "CSS3",
              "Material UI"
              ]}
            />
            <Card
              title="Back-end development"
              list={[
                "NodeJS",
                "ExpressJS",
                "Python",
                "Java",
                "AWS DynamoDB",
                "SQL",
                "AWS",
                "Docker"
              ]}
            />
            <div className={styles.mainExpSection}>
              <h2>
                Experience - <span className={styles.accent}>2.5+ years</span>
              </h2>
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
                      duration: "Oct 2021 - Mar 2022",
                    },
                    {
                      position: "Member Of Technical Staff",
                      duration: "Oct 2020 - Sep 2021",
                      Description: [
                        <p key="position-desc-2">
                          Development, Deployment and Maintenance of
                        </p>,
                        <List
                          key="position-list-2"
                          items={[
                            "Frontend web applications made with ReactJS, ReduxJS, ThreeJS.",
                            "Backend API on AWS cloud made with Python, Docker, Javascript, Lambda, Dynamodb, Appsync.",
                          ]}
                          renderChild={(item) => item}
                          isSecondaryBullet
                        />,
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
