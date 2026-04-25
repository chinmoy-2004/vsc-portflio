'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Chinmoy Dutta</h1>
              <p className={styles.role}>Student at NIT Silchar</p>
            </div>
          </div>

          <div className={styles.headerActions}>
            <a
              href="https://github.com/chinmoy-2004"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.sectionBody}>
                <p className={styles.paragraph}>
                  I&apos;m a B.Tech student and developer who loves building real-world products
                  that solve actual problems, not just classroom assignments. I enjoy turning
                  ideas into scalable applications—from AI-powered platforms to full-stack web products.
                </p>

                <p className={styles.paragraph}>
                  I primarily work with React, Node.js, Express, MongoDB, and WebSockets, with a
                  strong interest in backend systems, real-time architectures, AI integrations,
                  and startup-focused problem solving. Hackathons, late-night debugging, and
                  building things people genuinely use are my comfort zone.
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Currently</span>
                </div>

                <h3 className={styles.expRole}>B.Tech Student</h3>
                <p className={styles.expCompany}>Still Collecting Experience Points 🎮</p>

                <ul className={styles.expList}>
                  <li>Building real-world projects instead of just completing assignments</li>
                  <li>Won hackathons, shipped products, and survived semester exams somehow</li>
                  <li>Working with React, Node.js, FastAPI, MongoDB, and late-night debugging sessions</li>
                  <li>Learning fast, adapting faster, and pretending Stack Overflow is not my mentor</li>
                  <li>Looking for the company brave enough to convert potential into experience :)</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Future Goal</span>
                </div>

                <h3 className={styles.expRole}>Your Next Great Hire?</h3>
                <p className={styles.expDesc}>
                  Technically, I’m still a student. Practically, I’ve already spent enough
                  nights fixing production bugs in personal projects to qualify for emotional
                  seniority.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Languages</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>C</span>
                    <span className={styles.skillTag}>C++</span>
                    <span className={styles.skillTag}>JavaScript</span>
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>TypeScript</span>
                    <span className={styles.skillTag}>HTML/CSS</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Frontend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>Tailwind CSS</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Backend</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>Express</span>
                    <span className={styles.skillTag}>MongoDB</span>
                    <span className={styles.skillTag}>WebSockets</span>
                    <span className={styles.skillTag}>Redis</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>CS Fundamentals</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Data Structures</span>
                    <span className={styles.skillTag}>Algorithms</span>
                    <span className={styles.skillTag}>OOPs</span>
                    <span className={styles.skillTag}>DBMS</span>
                    <span className={styles.skillTag}>Operating Systems</span>
                    <span className={styles.skillTag}>Computer Networks</span>
                    <span className={styles.skillTag}>System Design Basics</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Tools</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Git</span>
                    <span className={styles.skillTag}>GitHub</span>
                    <span className={styles.skillTag}>VS Code</span>
                    <span className={styles.skillTag}>Postman</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
         
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
