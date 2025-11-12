'use client';

import React, { useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import styles from './ReadyToGetStarted.module.css';

interface EngagementModel {
  title: string;
  description: string;
  features: string[];
}

const ReadyToGetStarted = () => {
  const [activeGuideTab, setActiveGuideTab] = useState('types');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const guideTabs = [
    { id: 'types', label: 'Types of Software' },
    { id: 'importance', label: 'Importance of Software Development for Businesses' },
    { id: 'trends', label: 'Trends & Technologies in Software Development' },
    { id: 'lifecycle', label: 'Software Development Life Cycle (SDLC)' },
    { id: 'outsourcing', label: 'Software Development Outsourcing: Aspects to Consider' },
  ];

  const guideContent: Record<string, React.ReactNode> = {
    types: (
      <>
        <h3 className={styles.guideContentTitle}>Types of Software</h3>
        <p className={styles.guideContentText}>
          Software can be broadly categorized into three main types. System software, like operating systems, manages hardware and provides a foundation for other programs. Application software, such as word processors and web browsers, serves specific user tasks. Meanwhile, programming software helps developers create and maintain other software, offering a diverse ecosystem of tools. These categories encompass the software that powers our digital world.
        </p>
        <p className={styles.guideContentText}>Following are some of the major types of software:</p>
        <ul className={styles.guideList}>
          <li className={styles.guideListItem}>Learning management software: Empower education with innovative learning management software, offering a comprehensive platform for seamless teaching and learning experiences.</li>
          <li className={styles.guideListItem}>Content management software: Simplify the organization and publication of digital content with content management software, streamlining workflows and enhancing collaboration for efficient content creation and dissemination.</li>
          <li className={styles.guideListItem}>Enterprise resource management software: Maximize productivity and streamline workflows with enterprise resource management software, offering integrated solutions for efficient resource planning, management, and optimization.</li>
          <li className={styles.guideListItem}>Project management software: Enhance efficiency and organization with intuitive project management software, streamlining tasks and facilitating team collaboration for successful project completion.</li>
          <li className={styles.guideListItem}>CRM management software: Elevate customer relationships effortlessly with our intuitive CRM management software, streamlining operations and boosting productivity for seamless customer interactions and efficient business management.</li>
          <li className={styles.guideListItem}>Asset management software: Efficiently manage and monitor assets with user-friendly software, ensuring comprehensive tracking and organization, empowering your business workflow.</li>
          <li className={styles.guideListItem}>Fleet management software: Optimize operations seamlessly with fleet management software, streamlining logistics and enhancing efficiency for business effortlessly.</li>
        </ul>
      </>
    ),
    importance: (
      <>
        <h3 className={styles.guideContentTitle}>Importance of Software Development for Businesses</h3>
        <p className={styles.guideContentText}>
          In today's digital landscape, software development is a cornerstone of business success, driving innovation, efficiency, and competitive advantage across industries. Custom software solutions address specific organizational challenges that off-the-shelf products cannot meet, creating strategic assets that evolve with your business needs.
        </p>
        <p className={styles.guideContentText}>Key benefits of investing in custom software development:</p>
        <ul className={styles.guideList}>
          <li className={styles.guideListItem}><strong>Streamlined operations:</strong> Automate repetitive tasks, optimize workflows, and eliminate inefficiencies through tailored software solutions designed specifically for your business processes.</li>
          <li className={styles.guideListItem}><strong>Enhanced customer experience:</strong> Create seamless, personalized interactions across all touchpoints, building stronger customer relationships and brand loyalty.</li>
          <li className={styles.guideListItem}><strong>Data-driven decision making:</strong> Leverage custom analytics and reporting tools that transform raw data into actionable insights, enabling informed strategic decisions.</li>
          <li className={styles.guideListItem}><strong>Scalability and adaptability:</strong> Implement software architectures that grow with your business, accommodating increasing volumes and evolving requirements without performance degradation.</li>
        </ul>
      </>
    ),
    trends: (
      <>
        <h3 className={styles.guideContentTitle}>Trends & Technologies in Software Development</h3>
        <p className={styles.guideContentText}>
          The software development landscape constantly evolves, with emerging technologies reshaping how businesses operate and compete. Staying current with these trends is essential for organizations seeking to leverage digital innovation for strategic advantage.
        </p>
        <p className={styles.guideContentText}>Key trends transforming software development:</p>
        <ul className={styles.guideList}>
          <li className={styles.guideListItem}><strong>Artificial Intelligence & Machine Learning:</strong> From predictive analytics to natural language processing and computer vision, AI capabilities are being integrated into applications across all industries.</li>
          <li className={styles.guideListItem}><strong>Low-Code/No-Code Development:</strong> These platforms democratize software creation, allowing business users to build applications with minimal technical expertise.</li>
          <li className={styles.guideListItem}><strong>DevOps & CI/CD:</strong> The integration of development and operations with continuous integration/continuous delivery pipelines enables faster, more reliable software releases.</li>
        </ul>
      </>
    ),
    lifecycle: (
      <>
        <h3 className={styles.guideContentTitle}>Software Development Life Cycle (SDLC)</h3>
        <p className={styles.guideContentText}>
          The Software Development Life Cycle (SDLC) provides a structured approach to creating high-quality software solutions efficiently. This systematic process guides projects from inception to deployment and maintenance, ensuring alignment with business requirements and user expectations.
        </p>
        <p className={styles.guideContentText}>Key phases of the SDLC:</p>
        <ul className={styles.guideList}>
          <li className={styles.guideListItem}><strong>Requirements Analysis:</strong> Gathering and documenting detailed business requirements, user needs, and system specifications.</li>
          <li className={styles.guideListItem}><strong>Planning:</strong> Establishing project scope, resource allocation, timeframes, and cost estimations.</li>
          <li className={styles.guideListItem}><strong>Design:</strong> Creating architectural blueprints and detailed specifications for the software solution.</li>
          <li className={styles.guideListItem}><strong>Implementation:</strong> Transforming designs into functional code according to established guidelines.</li>
        </ul>
      </>
    ),
    outsourcing: (
      <>
        <h3 className={styles.guideContentTitle}>Software Development Outsourcing: Aspects to Consider</h3>
        <p className={styles.guideContentText}>
          Software development outsourcing offers organizations access to specialized expertise, cost efficiencies, and accelerated time-to-market. However, successful outsourcing requires careful consideration of various factors to select the right partner and engagement model.
        </p>
        <p className={styles.guideContentText}>Key considerations for outsourcing software development:</p>
        <ul className={styles.guideList}>
          <li className={styles.guideListItem}><strong>Strategic alignment:</strong> Ensure outsourcing partners understand your business goals and long-term vision.</li>
          <li className={styles.guideListItem}><strong>Technical expertise:</strong> Evaluate potential partners' proficiency in relevant technologies and methodologies.</li>
          <li className={styles.guideListItem}><strong>Communication protocols:</strong> Establish clear channels and methods of communication to maintain transparency.</li>
        </ul>
      </>
    ),
  };

  const engagementModels: EngagementModel[] = [
    {
      title: 'Offshore Dedicated Team',
      description: 'Our offshore dedicated team model functions as a Software Development Center. This exclusive team works on client projects, ensuring scalability, efficiency, cost-effectiveness, optimized delivery, and consistently high-quality results.',
      features: [
        'Client-Centric Approach',
        'Direct Reporting and Transparency',
        'Scalability and Flexibility',
        'Quality and Efficiency',
      ],
    },
    {
      title: 'Staff Augmentation',
      description: 'Through this, we integrates software development experts into client teams. This model accelerates delivery, reduces risks, optimizes resources, ensures measurable efficiency, productivity, and successful outcomes across lifecycles.',
      features: [
        'Tailored Expertise',
        'Seamless Integration',
        'Cost-Effective Solution',
        'Transparent Communication',
      ],
    },
    {
      title: 'Project-Based',
      description: 'Our project-based software development model ensures structured execution for defined projects. With fixed scope, budget, and timeline, it guarantees predictable delivery, optimized resources, risk mitigation, and successful outcomes.',
      features: [
        'Fixed Budget',
        'Milestones and Deliverables',
        'Resource Allocation',
        'Risk Mitigation',
      ],
    },
  ];

  return (
    <>
      {/* Ready to Get Started Section */}
      <section id="cta" className={styles.container}>
        <div className={`${styles.ctaSection} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.ctaTitle}>Ready to Get Started With Our Software Development Services?</h2>
          <p className={styles.ctaSubtitle}>
            Ready to launch your vision? Our custom software development team is geared up to bring your ideas to life. Let's embark on your unique project journey together, creating tailored solutions for your business needs.
          </p>
          <a href="#" className={styles.ctaBtn}>
            <span>Get a Quote for Your Project</span>
            <FaChevronRight className={styles.ctaBtnIcon} />
          </a>
        </div>
      </section>

      {/* Essential Guide Section */}
      <section id="essential-guide" className={styles.container}>
        <div className={`${styles.sectionHeader} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.sectionTitle}>An Essential Guide to Custom Software Development Services</h2>
          <p className={styles.sectionSubtitle}>
            This guide walks you through the essentials of software development, helping you create robust, scalable, and innovative solutions that power the digital world.
          </p>
        </div>

        <div className={`${styles.guideContainer} ${isVisible ? styles.fadeIn : ''} ${styles.delay1}`}>
          <div className={styles.guideTabs}>
            {guideTabs.map((tab) => (
              <div
                key={tab.id}
                className={`${styles.guideTab} ${activeGuideTab === tab.id ? styles.active : ''}`}
                onClick={() => setActiveGuideTab(tab.id)}
              >
                {tab.label}
              </div>
            ))}
          </div>

          <div className={styles.guideContent} id="guide-content-area">
            {guideContent[activeGuideTab]}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section id="engagement-models" className={styles.container}>
        <div className={`${styles.sectionHeader} ${isVisible ? styles.fadeIn : ''}`}>
          <h2 className={styles.sectionTitle}>Engagement Models</h2>
          <p className={styles.sectionSubtitle}>
            As a trusted software development agency, Jellyfish Technologies offers flexible engagement models tailored to meet specific customer objectives, ensuring effective collaboration, cost management, and value-oriented execution at every stage.
          </p>
        </div>

        <div className={styles.modelsGrid}>
          {engagementModels.map((model, index) => (
            <div
              key={index}
              className={`${styles.modelCard} ${isVisible ? styles.fadeIn : ''} ${styles[`delay${index + 1}`]}`}
            >
              <h3 className={styles.modelTitle}>{model.title}</h3>
              <p className={styles.modelDescription}>{model.description}</p>
              <ul className={styles.featureList}>
                {model.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.featureIcon}>»</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ReadyToGetStarted;

