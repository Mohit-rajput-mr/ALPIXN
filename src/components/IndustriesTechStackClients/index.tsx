'use client';

import { useState, useEffect } from 'react';
import { 
  FaHeartbeat, FaGraduationCap, FaMoneyBillWave, FaBuilding, 
  FaShoppingBag, FaTruck, FaWifi, FaCar, FaShieldAlt, 
  FaPlane, FaVideo, FaReact, FaNodeJs, FaVuejs, FaAngular,
  FaPython, FaJava, FaPhp, FaDocker, FaAws, FaLaravel
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiCplusplus, SiGo, SiRuby, SiSwift,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiOracle,
  SiNextdotjs, SiExpress, SiDjango, SiFlutter, SiKubernetes,
  SiDotnet
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import styles from './IndustriesTechStackClients.module.css';

interface Industry {
  icon: React.ReactNode;
  name: string;
}

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface Testimonial {
  content: string;
  author: string;
  title: string;
  avatar: string;
}

const IndustriesTechStackClients = () => {
  const [activeTab, setActiveTab] = useState('languages');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const industries: Industry[] = [
    { icon: <FaHeartbeat />, name: 'HealthTech' },
    { icon: <FaGraduationCap />, name: 'EdTech' },
    { icon: <FaMoneyBillWave />, name: 'FinTech' },
    { icon: <FaBuilding />, name: 'PropTech' },
    { icon: <FaShoppingBag />, name: 'Retail' },
    { icon: <FaTruck />, name: 'Transport' },
    { icon: <FaWifi />, name: 'Telecom' },
    { icon: <FaCar />, name: 'Automotive' },
    { icon: <FaShieldAlt />, name: 'InsurTech' },
    { icon: <FaPlane />, name: 'Travel & Hospitality' },
    { icon: <FaBuilding />, name: 'Facility Management' },
    { icon: <FaVideo />, name: 'Media & Entertainment' },
  ];

  const languages: TechItem[] = [
    { name: '.Net', icon: <SiDotnet /> },
    { name: 'C#', icon: <TbBrandCSharp /> },
    { name: 'Golang', icon: <SiGo /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'RoR', icon: <SiRuby /> },
    { name: 'Swift', icon: <SiSwift /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
  ];

  const databases: TechItem[] = [
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'Oracle', icon: <SiOracle /> },
  ];

  const frameworks: TechItem[] = [
    { name: 'Angular', icon: <FaAngular /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Django', icon: <SiDjango /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Flutter', icon: <SiFlutter /> },
    { name: 'Laravel', icon: <FaLaravel /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Vue.js', icon: <FaVuejs /> },
  ];

  const getCurrentTechItems = () => {
    switch (activeTab) {
      case 'languages':
        return languages;
      case 'databases':
        return databases;
      case 'framework':
        return frameworks;
      default:
        return languages;
    }
  };

  const testimonials: Testimonial[] = [
    {
      content: '"The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency."',
      author: 'James Anderson',
      title: 'Co-Founder, Shootzu',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      content: '"The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency."',
      author: 'Sarah Mitchell',
      title: 'CTO, TechCorp',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      content: '"The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency."',
      author: 'Michael Chen',
      title: 'Product Manager, InnovateLabs',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
    {
      content: '"The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency."',
      author: 'Emily Rodriguez',
      title: 'CEO, StartupHub',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ];

  return (
    <>
      {/* Industries Section */}
      <section id="industries" className={styles.container}>
        <div className={`${styles.sectionHeader} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.sectionTitle}>Industries We Serve</h2>
          <p className={styles.sectionSubtitle}>
            We serve a diverse client base across finance, healthcare, technology, logistics, and beyond—delivering custom software development solutions that address industry-specific requirements and meet enterprise-grade expectations. Our focus: tailored outcomes, proven execution, and sustainable impact.
          </p>
        </div>

        <div className={styles.industriesGrid}>
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`${styles.industryItem} ${isVisible ? styles.fadeIn : ''} ${styles[`delay${Math.min(Math.floor(index / 3) + 1, 3)}`]}`}
            >
              <div className={styles.industryIcon}>{industry.icon}</div>
              <span className={styles.industryName}>{industry.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className={styles.container}>
        <div className={`${styles.sectionHeader} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.sectionTitle}>Our Tech Stack</h2>
          <p className={styles.sectionSubtitle}>
            We employ a modern, scalable technology stack—encompassing programming languages, frameworks, databases, cloud services, and DevOps—to deliver safe, high-performance software solutions tailored to your business requirements, ensuring flexibility, speed, and enduring value.
          </p>
        </div>

        <div className={styles.techTabs}>
          <div
            className={`${styles.techTab} ${activeTab === 'languages' ? styles.active : ''}`}
            onClick={() => setActiveTab('languages')}
          >
            Languages
          </div>
          <div
            className={`${styles.techTab} ${activeTab === 'databases' ? styles.active : ''}`}
            onClick={() => setActiveTab('databases')}
          >
            Databases
          </div>
          <div
            className={`${styles.techTab} ${activeTab === 'framework' ? styles.active : ''}`}
            onClick={() => setActiveTab('framework')}
          >
            Framework
          </div>
        </div>

        <div className={styles.techGrid} key={activeTab}>
          {getCurrentTechItems().map((tech, index) => (
            <div key={index} className={`${styles.techItem} ${styles.fadeIn}`}>
              <div className={styles.techIconWrapper}>
                {tech.icon}
              </div>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={styles.container}>
        <div className={`${styles.sectionHeader} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.sectionTitle}>See What Our Clients Have To Say</h2>
          <p className={styles.sectionSubtitle}>
            Our clients' success stories speak louder than words. From AI-powered innovations to enterprise workflow automation, businesses trust Alpixn Technologies to deliver with excellence, agility, and enduring strategic value.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${styles.testimonialCard} ${isVisible ? styles.fadeIn : ''} ${styles[`delay${Math.min(index + 1, 3)}`]}`}
            >
              <div className={styles.quoteIcon}>❝</div>
              <p className={styles.testimonialContent}>{testimonial.content}</p>
              <div className={styles.testimonialAuthor}>
                <img src={testimonial.avatar} alt={testimonial.author} className={styles.authorAvatar} />
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{testimonial.author}</span>
                  <span className={styles.authorTitle}>{testimonial.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default IndustriesTechStackClients;
