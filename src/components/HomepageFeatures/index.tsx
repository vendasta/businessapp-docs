import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'CRM with integrations',
    Img: require('@site/static/img/crm_with_integrations.png').default,
    description: (
      <>
        Centralize your business’s data and streamline workflows from many different systems by integrating them with Business App’s CRM and automations.
      </>
    ),
  },
  {
    title: 'Inbox Messaging Hub',
    Img: require('@site/static/img/inbox_message_hub.png').default,
    description: (
      <>
        All communication in one place – instead of isolated on personal employee phones.
      </>
    ),
  },
  {
    title: 'AI-Assisted Lead Capture',
    Img: require('@site/static/img/ai_assisted_lead_capture.png').default,
    description: (
      <>
        Never miss a lead again. Website visitors get an instant response by your helpful AI assistant, answering questions about your business and encouraging them to leave their contact info.
      </>
    ),
  },
];

function Feature({title, Img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureImage} alt={title} />
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
