import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation to help local businesses get the most out of Business App: messaging, CRM, automations, AI, and more.">
      <header className="hero hero--primary">
        <div className="container">
          <Heading as="h1" className="hero__title">
            Business App Documentation
          </Heading>
          <p className="hero__subtitle">
            Learn how to capture leads, message customers, and manage your online presence.
          </p>
        </div>
      </header>

      <main>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--4">
              <Link className="card-link" to="/docs/getting_started_with_business_app">
                <div className="card">
                  <div className="card__header">
                    <h3>Getting Started</h3>
                  </div>
                  <div className="card__body">
                    <p>Set up your account, invite your team, and learn the basics.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col col--4">
              <Link className="card-link" to="/docs/conversations/conversations_overview">
                <div className="card">
                  <div className="card__header">
                    <h3>Conversations</h3>
                  </div>
                  <div className="card__body">
                    <p>Connect SMS, email, Instagram, Facebook, and web chat—manage every message in one inbox.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col col--4">
              <Link className="card-link" to="/docs/crm/index">
                <div className="card">
                  <div className="card__header">
                    <h3>CRM</h3>
                  </div>
                  <div className="card__body">
                    <p>Capture and organize customer info and website leads with forms.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col col--4">
              <Link className="card-link" to="/docs/ai/ai-workforce/ai_workforce_overview">
                <div className="card">
                  <div className="card__header">
                    <h3>AI Workforce</h3>
                  </div>
                  <div className="card__body">
                    <p>Use AI to greet visitors, answer questions, and book more jobs.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col col--4">
              <Link className="card-link" to="/docs/automations/index">
                <div className="card">
                  <div className="card__header">
                    <h3>Automations</h3>
                  </div>
                  <div className="card__body">
                    <p>Build workflows that send messages, create tasks, and keep work moving.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col col--4">
              <Link className="card-link" to="/docs/administration/administration_overview">
                <div className="card">
                  <div className="card__header">
                    <h3>Administration</h3>
                  </div>
                  <div className="card__body">
                    <p>Manage app settings, connections, and email configuration.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col col--4">
              <Link className="card-link" to="/docs/executivereport/executive_report_overview">
                <div className="card">
                  <div className="card__header">
                    <h3>Executive Report</h3>
                  </div>
                  <div className="card__body">
                    <p>See the impact of your marketing—calls, messages, traffic, and more.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col col--4">
              <Link className="card-link" to="/docs/store/index">
                <div className="card">
                  <div className="card__header">
                    <h3>Store</h3>
                  </div>
                  <div className="card__body">
                    <p>Discover add-ons and services you can enable for your business.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
