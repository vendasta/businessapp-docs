"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var docsSidebar = [
    /* --------------------------------------------------------------------- */
    /*  Getting Started (always expanded)                                    */
    /* --------------------------------------------------------------------- */
    {
        type: 'category',
        label: 'Getting Started',
        collapsible: false, // render as a static section header (no caret or toggle)
        className: 'sidebar-section-header',
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
        collapsible: true, // header now has caret and can toggle
        collapsed: true, // collapsed by default on load
        items: [
            {
                type: 'category',
                label: 'Setup Guides',
                collapsed: true,
                items: [
                    'inbox/inbox_overview',
                    'inbox/inbox-send-receive-emails',
                    'inbox/inbox-send-receive-sms',
                    'inbox/inbox-setup-instagram',
                    'inbox/inbox-ai-web-chat-overview',
                    'inbox/inbox-whatsapp-overview',
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
        collapsible: true,
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
        collapsible: true,
        collapsed: true,
        items: [
            {
                type: 'category',
                label: 'Workforce',
                link: {
                    type: 'doc',
                    id: 'ai/ai-workforce/ai_workforce_overview',
                },
                collapsed: true,
                items: [
                    'ai/ai-workforce/ai-receptionist',
                    'ai/ai-workforce/empower-your-ai-employee-custom-capabilities',
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
        collapsible: true,
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
        collapsible: true,
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
        collapsible: true,
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
        collapsible: true,
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
        collapsible: true,
        collapsed: true,
        items: [
            {
                type: 'category',
                label: 'Settings',
                collapsed: true,
                items: [
                    'administration/administration_overview',
                    'administration/business_profile',
                    'administration/inbox-settings',
                    'administration/app-settings/app_settings',
                ],
            },
        ],
    },
];
// -------------------------------------------------------------------------
// The Docusaurus plugin expects an object where *each* key maps to a sidebar
// definition. We publish the same structure under both `docs` **and** the
// legacy `tutorialSidebar` key so existing navbar references keep working.
// -------------------------------------------------------------------------
var sidebars = {
    docs: docsSidebar,
    tutorialSidebar: docsSidebar,
};
exports.default = sidebars;
