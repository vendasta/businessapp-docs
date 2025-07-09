import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
* Business App documentation sidebar
* ──────────────────────────────────
*
*  Goals for this revision (July 9 2025)
*  -------------------------------------
*  • Every logical section appears exactly **once**.
*  • Labels are unique and unambiguous (no more generic “Overview”).
*  • The hierarchy never exceeds two levels: **Category → Doc**.
*  • Order mirrors the in-product navigation that most users see.
*
*  If a directory is omitted from this file its pages are still routable but
*  they will not clutter the left-hand navigation – perfect for stubs or
*  legacy content that writers are migrating.
*/

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    // ---------------------------------------------------------------------
    // 1. Home
    // ---------------------------------------------------------------------
    {
      type: 'doc',
      id: 'overview/index',
      label: 'Home',
    },

    // ---------------------------------------------------------------------
    // 2. Inbox
    // ---------------------------------------------------------------------
    {
      type: 'category',
      label: 'Inbox',
      collapsed: false,
      items: [
        {type: 'doc', id: 'inbox/inbox_overview', label: 'Inbox Overview'},
        {
          type: 'doc',
          id: 'inbox/inbox_ai_web_chat_overview',
          label: 'AI Chat Widget',
        },
        {type: 'doc', id: 'inbox/inbox_send_receive_emails', label: 'Send/Receive Emails'},
        {type: 'doc', id: 'inbox/inbox_send_receive_sms', label: 'Send/Receive SMS'},
        {type: 'doc', id: 'inbox/inbox_setup_instagram', label: 'Send/Receive Instagram'},
        {type: 'doc', id: 'inbox/inbox_whatsapp_overview', label: 'Send/Receive WhatsApp'},
      ],
    },

    // ---------------------------------------------------------------------
    // 3. CRM
    // ---------------------------------------------------------------------
    {
      type: 'category',
      label: 'CRM',
      items: [
        {type: 'doc', id: 'crm/index', label: 'CRM Overview'},
        {type: 'doc', id: 'crm/forms', label: 'Forms'},
      ],
    },

    // ---------------------------------------------------------------------
    // 4. AI
    // ---------------------------------------------------------------------
    {
      type: 'category',
      label: 'AI',
      items: [
        {type: 'doc', id: 'ai/ai_overview', label: 'AI Overview'},
        {
          type: 'doc',
          id: 'ai/ai-workforce/ai_workforce_overview',
          label: 'Workforce',
        },
        {
          type: 'doc',
          id: 'ai-employees/empower-your-ai-employee-custom-capabilities',
          label: 'Custom Capabilities',
        },
      ],
    },

    // ---------------------------------------------------------------------
    // 5. Executive Report
    // ---------------------------------------------------------------------
    {
      type: 'doc',
      id: 'executivereport/executive_report_overview',
      label: 'Executive Report',
    },

    // ---------------------------------------------------------------------
    // 6. Campaigns
    // ---------------------------------------------------------------------
    {type: 'doc', id: 'campaigns/index', label: 'Campaigns'},

    // ---------------------------------------------------------------------
    // 7. Store
    // ---------------------------------------------------------------------
    {type: 'doc', id: 'store/index', label: 'Store'},

    // ---------------------------------------------------------------------
    // 8. Automations
    // ---------------------------------------------------------------------
    {type: 'doc', id: 'automations/index', label: 'Automations'},

    // ---------------------------------------------------------------------
    // 9. Administration
    // ---------------------------------------------------------------------
    {
      type: 'category',
      label: 'Administration',
      items: [
        {type: 'doc', id: 'administration/administration_overview', label: 'Administration Overview'},
        {type: 'doc', id: 'administration/business_profile', label: 'Business Profile'},
        {type: 'doc', id: 'administration/communication_settings', label: 'Communication Settings'},
        {
          type: 'doc',
          id: 'administration/app-settings/app_settings',
          label: 'App Settings Overview',
        },
      ],
    },
  ],
};

export default sidebars;
