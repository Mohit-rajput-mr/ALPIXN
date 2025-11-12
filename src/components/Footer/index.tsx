'use client';

import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from './Footer.module.css';

interface FAQItem {
  question: string;
  answer: JSX.Element;
}

const Footer = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(4);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs: FAQItem[] = [
    {
      question: 'How does node.js differ from other server-side programming languages?',
      answer: (
        <>
          <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing developers to use JavaScript for server-side scripting. Unlike traditional server-side languages like PHP or Ruby, Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, particularly for data-intensive real-time applications.</p>
          <p>Key differences include:</p>
          <ul>
            <li>Asynchronous and event-driven architecture</li>
            <li>Single-threaded but highly scalable</li>
            <li>Same language (JavaScript) for both frontend and backend development</li>
            <li>Rich ecosystem with NPM (Node Package Manager)</li>
            <li>Excellent for building fast, scalable network applications</li>
          </ul>
        </>
      ),
    },
    {
      question: 'Which companies use node.js for software development?',
      answer: (
        <>
          <p>Node.js has been adopted by numerous major companies across various industries due to its performance and scalability advantages. Some notable companies using Node.js include:</p>
          <ul>
            <li>Netflix - For their streaming platform's user interface</li>
            <li>PayPal - For payment processing applications</li>
            <li>LinkedIn - For their mobile app backend</li>
            <li>Uber - For their matching system between drivers and riders</li>
            <li>NASA - For data management of space suits</li>
            <li>Walmart - For their e-commerce platform</li>
            <li>Twitter - For parts of their user interface</li>
            <li>Medium - For their entire platform</li>
            <li>Trello - For server-side operations</li>
            <li>Spotify - For their desktop application</li>
          </ul>
          <p>These companies leverage Node.js for its ability to handle concurrent connections, real-time data processing, and seamless JavaScript integration across their technology stacks.</p>
        </>
      ),
    },
    {
      question: 'Why should you outsource node.js development?',
      answer: (
        <>
          <p>Outsourcing Node.js development offers several strategic advantages for businesses looking to build robust applications efficiently:</p>
          <ul>
            <li><strong>Access to specialized expertise:</strong> Work with developers who focus exclusively on Node.js and its ecosystem, bringing deep knowledge of best practices, performance optimization, and security.</li>
            <li><strong>Cost efficiency:</strong> Reduce overhead costs associated with hiring, training, and maintaining an in-house development team, particularly for project-based work.</li>
            <li><strong>Accelerated time-to-market:</strong> Leverage ready-to-deploy teams that can start immediately without the delays of recruitment processes.</li>
            <li><strong>Scalable resources:</strong> Easily scale your development team up or down based on project requirements and business cycles.</li>
            <li><strong>Focus on core business:</strong> Allow your internal team to concentrate on strategic initiatives while technical implementation is handled by specialists.</li>
            <li><strong>Access to global talent:</strong> Work with top Node.js developers regardless of geographical limitations.</li>
            <li><strong>Continuous technology updates:</strong> Benefit from development partners who stay current with the latest Node.js advancements, frameworks, and security practices.</li>
          </ul>
        </>
      ),
    },
    {
      question: 'What kind of applications can you build using node.js?',
      answer: (
        <>
          <p>Node.js's event-driven, non-blocking I/O model makes it ideal for building various types of applications:</p>
          <ul>
            <li><strong>Real-time applications:</strong> Chat applications, collaboration tools, live tracking systems, and gaming platforms that require instant data updates.</li>
            <li><strong>Streaming applications:</strong> Video/audio streaming services that handle data in chunks rather than as complete files.</li>
            <li><strong>API services:</strong> RESTful APIs and microservices architectures that serve data to frontend applications or third-party services.</li>
            <li><strong>Single-page applications:</strong> Modern web applications with dynamic content loading and minimal page refreshes.</li>
            <li><strong>E-commerce platforms:</strong> Scalable online stores with inventory management, payment processing, and user account systems.</li>
            <li><strong>IoT applications:</strong> Systems that process data from multiple IoT devices in real-time.</li>
            <li><strong>Enterprise applications:</strong> Complex business systems with heavy data processing requirements.</li>
            <li><strong>Social media platforms:</strong> Applications requiring real-time notifications and content updates.</li>
            <li><strong>Collaborative tools:</strong> Project management systems, document editors, and team communication platforms.</li>
          </ul>
          <p>Node.js particularly excels in scenarios requiring high concurrency, low latency, and efficient handling of simultaneous connections.</p>
        </>
      ),
    },
    {
      question: 'What is the cost of node.js development?',
      answer: (
        <p>The cost of Node.js development varies based on project complexity, scope, and developer rates. Factors like whether you hire a Node.js developer or engage a Node.js development company can influence costs. Consulting with Node.js experts can provide a more accurate estimate.</p>
      ),
    },
  ];

  const locations = [
    { flag: 'https://flagcdn.com/w40/in.png', name: 'India' },
    { flag: 'https://flagcdn.com/w40/us.png', name: 'New York, USA' },
    { flag: 'https://flagcdn.com/w40/au.png', name: 'Sydney, Australia' },
    { flag: 'https://flagcdn.com/w40/ae.png', name: 'Dubai, UAE' },
    { flag: 'https://flagcdn.com/w40/gb.png', name: 'London, UK' },
    { flag: 'https://flagcdn.com/w40/it.png', name: 'Milan, Italy' },
    { flag: 'https://flagcdn.com/w40/th.png', name: 'Thailand' },
    { flag: 'https://flagcdn.com/w40/za.png', name: 'South Africa' },
    { flag: 'https://flagcdn.com/w40/ca.png', name: 'Canada' },
  ];

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={`${styles.faqTitle} ${isVisible ? styles.fadeIn : ''}`}>
            We've Got the Answers You're Looking For
          </h2>

          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${activeFAQ === index ? styles.active : ''} ${isVisible ? styles.fadeIn : ''}`}
              >
                <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <FaChevronDown className={`${styles.faqIcon} ${activeFAQ === index ? styles.rotated : ''}`} />
                </div>
                <div className={styles.faqAnswer}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.newsletter}>
          <h3 className={styles.newsletterTitle}>Subscribe To Our Newsletter</h3>
          <form className={styles.newsletterForm}>
            <input type="email" className={styles.newsletterInput} placeholder="Email Address" required />
            <button type="submit" className={styles.newsletterBtn}>Subscribe</button>
          </form>
        </div>

        <div className={styles.footerContent}>
          <div className={styles.footerCol}>
            <h4 className={styles.footerTitle}>Company</h4>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>Home</a>
              <a href="#" className={styles.footerLink}>About</a>
              <a href="#" className={styles.footerLink}>Offshore Developers</a>
              <a href="#" className={styles.footerLink}>Products</a>
              <a href="#" className={styles.footerLink}>Our Expertise</a>
              <a href="#" className={styles.footerLink}>Technologies</a>
              <a href="#" className={styles.footerLink}>Contact</a>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.footerTitle}>Services</h4>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>Software Development</a>
              <a href="#" className={styles.footerLink}>Mobile App Development</a>
              <a href="#" className={styles.footerLink}>Application Modernization</a>
              <a href="#" className={styles.footerLink}>CRM Development Services</a>
              <a href="#" className={styles.footerLink}>ERP Software</a>
              <a href="#" className={styles.footerLink}>Data Analytics</a>
              <a href="#" className={styles.footerLink}>DevOps Services</a>
              <a href="#" className={styles.footerLink}>Cloud Consulting</a>
              <a href="#" className={styles.footerLink}>Staff Augmentation</a>
              <a href="#" className={styles.footerLink}>Hire Developers</a>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.footerTitle}>Industries</h4>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>FinTech</a>
              <a href="#" className={styles.footerLink}>Insurtech</a>
              <a href="#" className={styles.footerLink}>Proptech</a>
              <a href="#" className={styles.footerLink}>EdTech</a>
              <a href="#" className={styles.footerLink}>Media & Entertainment</a>
              <a href="#" className={styles.footerLink}>Healthcare</a>
              <a href="#" className={styles.footerLink}>Retail</a>
              <a href="#" className={styles.footerLink}>Facility Management</a>
              <a href="#" className={styles.footerLink}>Supply Chain & Logistics</a>
              <a href="#" className={styles.footerLink}>Telecom</a>
              <a href="#" className={styles.footerLink}>Travel & Hospitality</a>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.footerTitle}>Offshore Developers</h4>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>Hire Backend Developer</a>
              <a href="#" className={styles.footerLink}>Hire Frontend Developer</a>
              <a href="#" className={styles.footerLink}>Hire App Developer</a>
              <a href="#" className={styles.footerLink}>Hire DevOps Engineer</a>
              <a href="#" className={styles.footerLink}>Hire AI Engineer</a>
              <a href="#" className={styles.footerLink}>Hire Full Stack Developer</a>
              <a href="#" className={styles.footerLink}>Hire Salesforce Developer</a>
              <a href="#" className={styles.footerLink}>Hire PowerApps Developers</a>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.footerTitle}>Resources</h4>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>Portfolio</a>
              <a href="#" className={styles.footerLink}>Careers</a>
              <a href="#" className={styles.footerLink}>Blog</a>
              <a href="#" className={styles.footerLink}>Our Team</a>
              <a href="#" className={styles.footerLink}>Interns</a>
            </div>
          </div>
        </div>

        <div className={styles.locations}>
          {locations.map((location, index) => (
            <div key={index} className={styles.location}>
              <img src={location.flag} alt={`${location.name} Flag`} className={styles.locationFlag} />
              <span>{location.name}</span>
            </div>
          ))}
        </div>

        <div className={styles.socialBar}>
          <div className={styles.socialLinks}>
            <span>Follow Us : </span>
            <a href="#" className={styles.socialLink}>📷</a>
            <a href="#" className={styles.socialLink}>in</a>
            <a href="#" className={styles.socialLink}>f</a>
            <a href="#" className={styles.socialLink}>🐦</a>
            <a href="#" className={styles.socialLink}>▶️</a>
          </div>

          <div className={styles.copyright}>
            © 2016 - 2025 Alpixn Technologies Private Limited All Rights Reserved.
          </div>
        </div>
        
        <div className={styles.developedBy}>
          Developed with <span className={styles.heart}>❤️</span> By <span className={styles.developer}>Mohit Rajput</span>
        </div>

        <div className={styles.footerBottom}>
          <a href="#" className={styles.footerBottomLink}>PRIVACY POLICY</a>
          <a href="#" className={styles.footerBottomLink}>SITEMAP</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

