import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
* Business App docs sidebar (July 9 2025)
* --------------------------------------------------
*
*  - “Getting Started” is the only section that is *expanded* by default.
*  - Every main navigation item (Inbox, CRM, AI, …) appears as a **section
*    header** by using `{link: {type: 'none'}}`. Those headers are always
*    visible but not clickable.
*  - Sub-categories inside a section default to `collapsed: true` so the
*    sidebar stays tidy until the reader chooses to drill in.
*
*  ⚠️  Important: This file purposefully lists only the *primary* docs that
*  exist today. Writers can add more pages later by editing this array.
*/

const docsSidebar = [
  /* --------------------------------------------------------------------- */
  /*  Getting Started (always expanded)                                    */
  /* --------------------------------------------------------------------- */
  {
    type: 'category',
    label: 'Getting Started',
    collapsed: false,
    items: [
      // Introductory guides – stub pages may be added later.
      'getting_started_with_business_app',
      'quickstart',
    ],
  },

  /* --------------------------------------------------------------------- */
  /*  Inbox                                                                */
  /* --------------------------------------------------------------------- */
  {
    type: 'category',
    label: 'Inbox',
    link: {type: 'none'}, // render as a non-clickable section header
    collapsed: true,
    items: [
      {
        type: 'category',
        label: 'Setup Guides',
        collapsed: true,
        items: [
          'inbox/inbox_overview',
          'inbox/getting_started_with_inbox',
          'inbox/inbox_send_receive_emails',
          'inbox/inbox_send_receive_sms',
          'inbox/inbox_setup_instagram',
          'inbox/inbox_ai_web_chat_overview',
          'inbox/inbox_whatsapp_overview',
        ],
      },
    ],
  },

  /* --------------------------------------------------------------------- */
  /*  CRM                                                                  */
  /* --------------------------------------------------------------------- */
  {
    type: 'category',
    label: 'CRM',
    link: {type: 'none'},
    collapsed: true,
    items: [
      {
        type: 'category',
        label: 'Contacts',
        collapsed: true,
        items: [
          'crm/index', // CRM Overview
          'crm/forms',
        ],
      },
    ],
  },

  /* --------------------------------------------------------------------- */
  /*  AI                                                                   */
  /* --------------------------------------------------------------------- */
  {
    type: 'category',
    label: 'AI',
    link: {type: 'none'},
    collapsed: true,
    items: [
      {
        type: 'category',
        label: 'Workforce',
        collapsed: true,
        items: [
          'ai/ai_overview',
          'ai/ai-workforce/ai_workforce_overview',
          'ai/ai-workforce/ai_receptionist',
          'ai-employees/empower-your-ai-employee-custom-capabilities',
        ],
      },
    ],
  },

  /* --------------------------------------------------------------------- */
  /*  Executive Report                                                     */
  /* --------------------------------------------------------------------- */
  {
    type: 'category',
    label: 'Executive Report',
    link: {type: 'none'},
    collapsed: true,
    items: [
      'executivereport/executive_report_overview',
      'executivereport/executive_report_lead_analytics',
    ],
  },

  /* --------------------------------------------------------------------- */
  /*  Campaigns                                                            */
  /* --------------------------------------------------------------------- */
  {
    type: 'category',
    label: 'Campaigns',
    link: {type: 'none'},
    collapsed: true,
    items: [
      'campaigns/index',
    ],
  },

  /* --------------------------------------------------------------------- */
  /*  Store                                                                */
  /* --------------------------------------------------------------------- */
  {
    type: 'category',
    label: 'Store',
    link: {type: 'none'},
    collapsed: true,
    items: [
      'store/index',
    ],
  },

  /* --------------------------------------------------------------------- */
  /*  Automations                                                          */
  /* --------------------------------------------------------------------- */
  {
    type: 'category',
    label: 'Automations',
    link: {type: 'none'},
    collapsed: true,
    items: [
      'automations/index',
    ],
  },

  /* --------------------------------------------------------------------- */
  /*  Administration                                                       */
  /* --------------------------------------------------------------------- */
  {
    type: 'category',
    label: 'Administration',
    link: {type: 'none'},
    collapsed: true,
    items: [
      {
        type: 'category',
        label: 'Settings',
        collapsed: true,
        items: [
          'administration/administration_overview',
          'administration/business_profile',
          'administration/communication_settings',
          'administration/app-settings/app_settings',
        ],
      },
    ],
  },
] as const;

// -------------------------------------------------------------------------
// The Docusaurus plugin expects an object where *each* key maps to a sidebar
// definition. We publish the same structure under both `docs` **and** the
// legacy `tutorialSidebar` key so existing navbar references keep working.
// -------------------------------------------------------------------------

const sidebars: SidebarsConfig = {
  docs: docsSidebar,
  tutorialSidebar: docsSidebar,
};

export default sidebars;
