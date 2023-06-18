import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/coder.png" />
      </Head>
      <div className={styles.body}>
        <main className={styles.main}>
          <div className={styles.heroSection}>
            <div className={styles.aboveTitle}>
              <b className={styles.description}>Hello 👋</b>
              {/* <button className={styles.button} onClick={onResumeClick}>
                Resume
              </button> */}
            </div>
            <h1 className={styles.title}>
              I&apos;m Nikhil Shisode, a
              <span className={styles.accent}> Senior Software Engineer</span>{" "}
              <Image width={35} height={35} alt="coder" src="/coder.png" />
            </h1>
            <p className={styles.description}>
              Experienced software engineer with a background of building
              scalable systems in the data analytics and AEC industries.
            </p>
          </div>
          <div className={styles.subTopic}>
            <h2>Skills</h2>
          </div>
          <div className={styles.grid}>
            <Card
              title="Coding language"
              list={["Java", "Python", "Javascript", "Typescript"]}
            />
            <Card title="Cloud" list={["AWS", "Azure"]} />
            <Card title="Database" list={["MySQL", "AWS DynamoDB"]} />
            <Card
              title="Front-end development"
              list={["Angular", "ReactJS", "Redux", "Webpack", "Material UI"]}
            />
            <Card
              title="Back-end development"
              list={["Spring Boot", "NodeJS", "ExpressJS", "Docker"]}
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
