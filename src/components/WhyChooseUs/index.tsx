'use client';

import { useState, useEffect } from 'react';
import styles from './WhyChooseUs.module.css';

interface Feature {
  title: string;
  description: string;
}

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: Feature[] = [
    {
      title: 'Diverse Experience',
      description: 'As a seasoned software development agency, we offer cross-functional expertise and extensive technological proficiency, enabling us to create intelligent solutions for various sectors with accuracy, business alignment, and quantifiable results',
    },
    {
      title: 'Flexible Engagement Models',
      description: 'We offer flexible engagement models that align with your operational rhythm and budget strategy, establishing us as an innovative software development services company dedicated to agility and sustained collaboration.',
    },
    {
      title: 'Certified & Skilled Professionals',
      description: 'Our team comprises internationally certified engineers and consultants. As a premier custom software development company, we implement industry best practices to create resilient, future-oriented solutions customized to your unique business requirements.',
    },
    {
      title: 'Guaranteed On-Time Delivery',
      description: 'As a trusted custom software product development company, we maintain stringent project discipline and agile execution to ensure timely delivery, empowering our clients to achieve their strategic objectives with confidence.',
    },
    {
      title: 'Transparent Communication',
      description: 'We emphasize transparency, cooperation, and visibility at each phase. Our bespoke software development consulting methodology ensures that you remain informed and in control, fostering mutual trust through systematic communication and accountability.',
    },
    {
      title: 'Strict quality control processes',
      description: 'Our mature QA frameworks guarantee software stability, security, and compliance. As a certified bespoke software development company, we implement quality controls throughout the lifecycle, mitigating risks before production.',
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={`${isVisible ? styles.animate : ''}`}>
          Why Choose Us as Your Custom Software Development Agency?
        </h1>
        <p className={`${styles.subtitle} ${isVisible ? styles.animate : ''} ${styles.delay1}`}>
          As a trusted business software development company, we address intricate difficulties using agile methodologies, domain-driven design, and comprehensive custom programming services, delivering measurable outcomes through intelligent, user-centric software architecture.
        </p>
      </div>

      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${styles.featureCard} ${isVisible ? styles.animate : ''} ${styles[`delay${index + 2}`]}`}
          >
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

