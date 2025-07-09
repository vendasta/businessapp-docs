"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomepageFeatures;
var clsx_1 = require("clsx");
var Heading_1 = require("@theme/Heading");
var styles_module_css_1 = require("./styles.module.css");
// Import images using native ES module syntax. This replaces the legacy
// CommonJS `require` pattern that Docusaurus v2 no longer recommends inside
// source files. Each import resolves to the processed image URL string
// at build-time via Webpack's file-loader configuration provided by
// the Docusaurus preset.
var crm_with_integrations_png_1 = require("@site/static/img/crm_with_integrations.png");
var inbox_message_hub_png_1 = require("@site/static/img/inbox_message_hub.png");
var ai_assisted_lead_capture_png_1 = require("@site/static/img/ai_assisted_lead_capture.png");
var FeatureList = [
    {
        title: 'CRM with integrations',
        imgSrc: crm_with_integrations_png_1.default,
        description: (<>
        Centralize your business’s data and streamline workflows from many different systems by integrating them with Business App’s CRM and automations.
      </>),
    },
    {
        title: 'Inbox Messaging Hub',
        imgSrc: inbox_message_hub_png_1.default,
        description: (<>
        All communication in one place – instead of isolated on personal employee phones.
      </>),
    },
    {
        title: 'AI-Assisted Lead Capture',
        imgSrc: ai_assisted_lead_capture_png_1.default,
        description: (<>
        Never miss a lead again. Website visitors get an instant response by your helpful AI assistant, answering questions about your business and encouraging them to leave their contact info.
      </>),
    },
];
function Feature(_a) {
    var title = _a.title, imgSrc = _a.imgSrc, description = _a.description;
    return (<div className={(0, clsx_1.default)('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles_module_css_1.default.featureImage} alt={title}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading_1.default as="h3">{title}</Heading_1.default>
        <p>{description}</p>
      </div>
    </div>);
}
function HomepageFeatures() {
    return (<section className={styles_module_css_1.default.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map(function (props, idx) { return (<Feature key={idx} {...props}/>); })}
        </div>
      </div>
    </section>);
}
