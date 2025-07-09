import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Import images using native ES module syntax. This replaces the legacy
// CommonJS `require` pattern that Docusaurus v2 no longer recommends inside
// source files. Each import resolves to the processed image URL string
// at build-time via Webpack's file-loader configuration provided by
// the Docusaurus preset.
import crmImg from '@site/static/img/crm_with_integrations.png';
import inboxImg from '@site/static/img/inbox_message_hub.png';
import aiImg from '@site/static/img/ai_assisted_lead_capture.png';

type FeatureItem = {
  title: string;
  /**
   * Processed image URL returned by Webpack at build-time. Using a lower-case
   * property name avoids confusing this string for a React component, which
   * conventionally uses PascalCase.
   */
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'CRM with integrations',
    imgSrc: crmImg,
    description: (
      <>
        Centralize your business’s data and streamline workflows from many different systems by integrating them with Business App’s CRM and automations.
      </>
    ),
  },
  {
    title: 'Inbox Messaging Hub',
    imgSrc: inboxImg,
    description: (
      <>
        All communication in one place – instead of isolated on personal employee phones.
      </>
    ),
  },
  {
    title: 'AI-Assisted Lead Capture',
    imgSrc: aiImg,
    description: (
      <>
        Never miss a lead again. Website visitors get an instant response by your helpful AI assistant, answering questions about your business and encouraging them to leave their contact info.
      </>
    ),
  },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
