'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './BenefitsOfChoosing.module.css';

interface Benefit {
  number: string;
  title: string;
  description: string;
}

const BenefitsOfChoosing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeBenefit, setActiveBenefit] = useState<number>(0);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = benefitRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveBenefit(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    benefitRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const benefits: Benefit[] = [
    {
      number: '01',
      title: 'Streamlined Operations & Workflow',
      description: 'Our custom software development services streamline enterprise operations through intelligent task automation, augmenting productivity, enhancing project visibility, and facilitating resource optimization for sustained growth across departments and teams.',
    },
    {
      number: '02',
      title: 'Improved Customer Experience',
      description: 'With our custom software solutions, businesses deliver personalized user experiences, data-driven marketing, and responsive platforms that enhance satisfaction, drive engagement, and foster deeper customer loyalty at every interaction.',
    },
    {
      number: '03',
      title: 'Accurate Data Analysis',
      description: 'Our team delivers accurate, real-time insights using AI-powered custom software development services, facilitating informed decision-making, refining strategies, and helping businesses uncover valuable trends via advanced analytics and reporting.',
    },
    {
      number: '04',
      title: 'Scalability & Adaptability',
      description: 'Built with scalable architecture, our custom software development solutions adapt to your evolving business needs, facilitating expansion, quick pivots, and ongoing enhancement in the dynamic market landscape.',
    },
    {
      number: '05',
      title: 'Enhanced Security',
      description: 'We emphasize data security via encryption, access control, and secure coding methodologies. Our bespoke software development services ensure proactive monitoring, cyber threat identification, and full compliance with global security standards.',
    },
    {
      number: '06',
      title: 'Increased Productivity',
      description: 'By automating workflows and repetitive tasks, our custom software development services boost team efficiency, reduce manual workload, and enable faster project delivery with seamless collaboration across distributed teams.',
    },
    {
      number: '07',
      title: 'Business-Tailored Architecture',
      description: 'Our customized software solutions are built around your unique goals, guaranteeing seamless scalability, system compatibility, and performance enhancement to promote operational excellence and sustained commercial value.',
    },
    {
      number: '08',
      title: 'Cost-Effective Solutions',
      description: 'We offer cost-effective software development services that don\'t compromise on quality, enabling you to lower operational costs, enhance ROI, and accomplish more within budget with innovative, scalable software solutions.',
    },
    {
      number: '09',
      title: 'World-Class UX/UI Design',
      description: 'Our custom software application development company delivers visually appealing, intuitive interfaces that emphasize usability, accessibility, and brand coherence, resulting in exceptional and seamless user experiences that enhance product adoption and loyalty.',
    },
  ];

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1>Benefits of Choosing Our Custom Software Development Company</h1>
          <p className={styles.subtitle}>
            Our custom software development solutions are tailored to align with your unique business processes, objectives, and growth strategy. From increased efficiency to better scalability and faster time-to-market, discover how our customized approach adds substantial value to your digital transformation journey.
          </p>
        </div>
        <a href="#" className={styles.ctaButton}>
          Get Expert Guidance →
        </a>
      </div>

      <div className={styles.benefitsContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.animationWrapper}>
            {/* Dotted Progress Line */}
            <div className={styles.progressLine}>
              <div 
                className={styles.progressFill}
                style={{ 
                  height: `${((activeBenefit + 1) / benefits.length) * 100}%` 
                }}
              ></div>
            </div>
            
            {/* Circle Indicators - Aligned with benefit numbers */}
            <div className={styles.circleIndicators}>
              {benefits.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.circleIndicator} ${
                    index === activeBenefit ? styles.activeCircle : ''
                  } ${index <= activeBenefit ? styles.completedCircle : ''}`}
                >
                  <div className={styles.circleOuter}>
                    <div className={styles.circleInner}></div>
                  </div>
                  {index === activeBenefit && (
                    <>
                      <div className={styles.pulseRing}></div>
                      <div className={styles.pulseRing} style={{ animationDelay: '0.5s' }}></div>
                    </>
                  )}
                </div>
              ))}
            </div>
            
            {/* Abstract Floating Shape */}
            <div className={styles.abstractShape}>
              <div className={styles.shapeGradient}></div>
            </div>
          </div>
        </div>

        <div className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => {
                benefitRefs.current[index] = el;
              }}
              className={`${styles.benefitItem} ${
                index === activeBenefit ? styles.activeBenefit : ''
              }`}
            >
              <div className={styles.benefitHeader}>
                <span className={styles.benefitNumber}>{benefit.number}</span>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              </div>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfChoosing;
