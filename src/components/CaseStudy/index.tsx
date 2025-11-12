'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './CaseStudy.module.css';

interface CaseStudyData {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const CaseStudy = () => {
  const [activeTab, setActiveTab] = useState('InsurTech');

  const caseStudies: Record<string, CaseStudyData> = {
    InsurTech: {
      title: 'Alpixn Technologies Private Limited Powers Patra\'s Insurance Platform with Scalable API Integration Capabilities',
      description: 'Alpixn Technologies Private Limited collaborated with Patra Corporation to build a configuration-based API integration system, enabling seamless connectivity with major insurers. The solution improved data accuracy, speed, and user experience while supporting scalable growth.',
      features: [
        'Smart API Connectivity',
        'Automated Underwriting Flow',
        'Faster Insurance Quotes',
        'Streamlined Customer Journey',
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    },
    'Facility Management': {
      title: 'Smart Facility Management Solution for Enterprise Operations',
      description: 'A comprehensive facility management platform that streamlines operations, improves efficiency, and provides real-time monitoring capabilities for large-scale enterprise facilities.',
      features: [
        'Real-time Monitoring',
        'Automated Workflows',
        'Resource Optimization',
        'Performance Analytics',
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    },
    'IT & SaaS': {
      title: 'Enterprise SaaS Platform for Digital Transformation',
      description: 'A scalable SaaS solution that transforms business operations with cloud-based services, enabling seamless collaboration and enhanced productivity across distributed teams.',
      features: [
        'Cloud Infrastructure',
        'Scalable Architecture',
        'API Integration',
        'Security & Compliance',
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    },
    'Travel & Hospitality': {
      title: 'Next-Generation Travel Booking Platform',
      description: 'An innovative travel platform that enhances customer experience and booking efficiency with real-time availability, multi-channel booking, and integrated payment processing.',
      features: [
        'Multi-channel Booking',
        'Real-time Availability',
        'Payment Processing',
        'Customer Management',
      ],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    },
  };

  const tabs = ['InsurTech', 'Facility Management', 'IT & SaaS', 'Travel & Hospitality'];
  const currentCase = caseStudies[activeTab];

  return (
    <section className={styles.caseStudiesContainer}>
      <div className={styles.caseStudiesHeader}>
        <h1 className={styles.caseStudiesTitle}>Case Studies: From Concept to End-to-End Success</h1>
        <p className={styles.caseStudiesSubtitle}>
          Discover how we partner with businesses of all sizes to transform ideas into user-centric software solutions, showcasing a proven track record of driving stability, agility, and sustained growth.
        </p>
      </div>

      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className={styles.caseStudy} key={activeTab}>
          <div className={styles.caseContent}>
            <h2 className={styles.caseTitle}>{currentCase.title}</h2>
            <p className={styles.caseDescription}>{currentCase.description}</p>

            <div className={styles.features}>
              {currentCase.features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <FaCheckCircle />
                  </div>
                  <span className={styles.featureText}>{feature}</span>
                </div>
              ))}
            </div>

            <div className={styles.caseButtons}>
              <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>
                Read Story
              </a>
              <a href="#" className={`${styles.btn} ${styles.btnSecondary}`}>
                Explore {activeTab} Services
              </a>
            </div>
          </div>

          <div className={styles.caseImage}>
            <Image 
              src={currentCase.image} 
              alt={activeTab} 
              className={styles.caseImg}
              width={800}
              height={500}
              unoptimized
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
