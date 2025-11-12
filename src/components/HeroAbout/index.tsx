'use client';

import { useState, useEffect } from 'react';
import { FaArrowRight, FaCode, FaRocket, FaShieldAlt, FaCogs, FaCloud, FaChartLine } from 'react-icons/fa';
import styles from './HeroAbout.module.css';

interface Stat {
  number: string;
  text: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HeroAbout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats: Stat[] = [
    { number: '14+', text: 'Years in Experience' },
    { number: '150+', text: 'Full-Time Experts' },
    { number: '98%', text: 'On-Time Projects Delivered' },
    { number: '4.9/5', text: 'Customer Ratings' },
  ];

  const services: Service[] = [
    {
      icon: <FaCode />,
      title: 'Custom Software Development Services',
      description: 'As a leading custom software development company, we build secure, scalable, and future-ready solutions tailored to your unique business workflows, customer goals, and operational needs—from scratch to deployment.',
    },
    {
      icon: <FaCogs />,
      title: 'Custom Enterprise Software Development Services',
      description: 'Our custom enterprise software development services empower large organizations with robust, integrated systems that enhance productivity, improve data visibility, and support growth through scalable, secure architecture and automation.',
    },
    {
      icon: <FaRocket />,
      title: 'Software Product Development Services',
      description: 'We offer end-to-end software product development services, from idea validation and UX/UI design to development and launch, creating market-ready, innovative digital products that solve real-world problems and deliver business value.',
    },
    {
      icon: <FaChartLine />,
      title: 'Software Consulting & Digital Strategy Services',
      description: 'Our software consulting services help businesses assess their current systems, define future needs, and implement technology strategies that reduce risk, maximize ROI, and accelerate digital transformation through expert guidance.',
    },
    {
      icon: <FaCloud />,
      title: 'Offshore Software Development Services',
      description: 'Our offshore software development services connect you with top global talent to deliver high-quality, scalable solutions at reduced costs. We ensure faster time-to-market, seamless collaboration, and complete transparency to align perfectly with your project goals.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'End-to-End Software Integration Services',
      description: 'Through expert software integration services, we connect APIs, applications, and legacy systems, ensuring a seamless flow of real-time data, unified operations, and a cohesive technology ecosystem that enhances decision-making and efficiency.',
    },
  ];

  const clientLogos = [
    'LOGOIPSUM',
    'LOGOIPSUM',
    'LOGOIPSUM',
    'LOGOIPSUM',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gridOverlay}></div>
          <div className={styles.gradientOverlay}></div>
        </div>
        
        <div className={styles.heroContainer}>
          <div className={`${styles.heroContent} ${isVisible ? styles.animate : ''}`}>
            <h1 className={styles.heroTitle}>
              Custom Software Development Services
            </h1>
            <p className={styles.heroDescription}>
              Alpixn Technologies Private Limited, a custom software development agency, builds user-centric, high-performance software products for global businesses. From startups to enterprises, we offer end-to-end custom software development and consulting services that drive stability, agility, and sustained growth.
            </p>
            <a href="#" className={styles.ctaBtn}>
              Book a Free Consultation <FaArrowRight className={styles.ctaIcon} />
            </a>
            <div className={styles.clients}>
              {clientLogos.map((logo, i) => (
                <div key={i} className={styles.clientLogo}>
                  <span>{logo}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`${styles.heroImageContainer} ${isVisible ? styles.animate : ''} ${styles.delay2}`}>
            <div className={styles.laptopFrame}>
              <div className={styles.laptopScreen}>
                <div className={styles.codeEditor}>
                  <div className={styles.editorHeader}>
                    <div className={styles.editorButtons}>
                      <span className={styles.editorBtn}></span>
                      <span className={styles.editorBtn}></span>
                      <span className={styles.editorBtn}></span>
                    </div>
                  </div>
                  <div className={styles.editorContent}>
                    <div className={styles.codeLine}>
                      <span className={styles.lineNumber}>1</span>
                      <span className={styles.codeKeyword}>import</span>
                      <span className={styles.codeText}> React from </span>
                      <span className={styles.codeString}>'react'</span>
                    </div>
                    <div className={styles.codeLine}>
                      <span className={styles.lineNumber}>2</span>
                      <span className={styles.codeText}></span>
                    </div>
                    <div className={styles.codeLine}>
                      <span className={styles.lineNumber}>3</span>
                      <span className={styles.codeKeyword}>const</span>
                      <span className={styles.codeFunction}> App</span>
                      <span className={styles.codeText}> = () =&gt; {'{'}</span>
                    </div>
                    <div className={styles.codeLine}>
                      <span className={styles.lineNumber}>4</span>
                      <span className={styles.codeText}>  </span>
                      <span className={styles.codeKeyword}>return</span>
                      <span className={styles.codeText}> (</span>
                    </div>
                    <div className={styles.codeLine}>
                      <span className={styles.lineNumber}>5</span>
                      <span className={styles.codeText}>    &lt;</span>
                      <span className={styles.codeTag}>div</span>
                      <span className={styles.codeText}>&gt;</span>
                    </div>
                    <div className={styles.codeLine}>
                      <span className={styles.lineNumber}>6</span>
                      <span className={styles.codeText}>      &lt;</span>
                      <span className={styles.codeTag}>h1</span>
                      <span className={styles.codeText}>&gt;Hello&lt;/</span>
                      <span className={styles.codeTag}>h1</span>
                      <span className={styles.codeText}>&gt;</span>
                    </div>
                    <div className={styles.codeLine}>
                      <span className={styles.lineNumber}>7</span>
                      <span className={styles.codeText}>    &lt;/</span>
                      <span className={styles.codeTag}>div</span>
                      <span className={styles.codeText}>&gt;</span>
                    </div>
                    <div className={styles.codeLine}>
                      <span className={styles.lineNumber}>8</span>
                      <span className={styles.codeText}>  )</span>
                    </div>
                    <div className={styles.codeLine}>
                      <span className={styles.lineNumber}>9</span>
                      <span className={styles.codeText}>{'}'}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.laptopBase}></div>
            </div>
            
            {/* Floating Icons */}
            <div className={styles.floatingIcon} style={{ top: '10%', right: '10%' }}>
              <FaCode />
            </div>
            <div className={styles.floatingIcon} style={{ top: '60%', right: '5%', animationDelay: '1s' }}>
              <FaRocket />
            </div>
            <div className={styles.floatingIcon} style={{ top: '30%', left: '-10%', animationDelay: '2s' }}>
              <FaShieldAlt />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={`${styles.stat} ${isVisible ? styles.animate : ''} ${styles[`delay${index + 1}`]}`}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statText}>{stat.text}</div>
              <div className={styles.statLine}></div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <h2 className={`${styles.sectionTitle} ${isVisible ? styles.animate : ''}`}>
            Bespoke Software Development Service Tailored to Your Vision
          </h2>
          <p className={`${styles.sectionSubtitle} ${isVisible ? styles.animate : ''} ${styles.delay1}`}>
            As a trusted custom software development company, we deliver purpose-built, scalable, tailored solutions, from bespoke services to enterprise platforms, that solve complex challenges and create lasting impact.
          </p>

          <div className={styles.services}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`${styles.serviceCard} ${isVisible ? styles.animate : ''} ${index > 0 ? styles[`delay${Math.min(index, 3)}`] : ''}`}
              >
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className={styles.serviceHover}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAbout;
