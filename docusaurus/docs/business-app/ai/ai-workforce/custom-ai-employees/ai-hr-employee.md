---
title: AI HR Employee
sidebar_label: AI HR Employee
sidebar_position: 4
description: Set up a custom AI HR Employee that answers general Human Resources questions, cites company policies, and redirects employees to the right person or resource when a question falls outside scope.
tags: [ai-workforce, custom, hr, people-operations, ai-employees]
keywords:
  [
    AI HR employee,
    people operations AI,
    HR policy assistant,
    internal AI employee,
    policy Q&A,
    employee self-serve,
    custom AI employee,
  ]
---

The AI HR Employee is a custom AI Employee built for internal use. It answers general Human Resources questions, links to official policy documents when they exist, and redirects employees to the right person or resource when a question falls outside scope or requires access to personal records. It is designed to help employees get fast, accurate guidance on HR topics without routing every inquiry to your HR team.

## Why build an AI HR Employee?

HR teams spend a significant portion of their time answering the same general questions about leave, benefits, onboarding, and forms. Without a self-serve option, employees face:

- Waiting for responses to routine questions that have documented answers
- Uncertainty about which form to use or which process to follow
- Misrouted requests to the wrong team when the right path isn't obvious
- HR staff pulled away from complex, high-value work to answer questions the handbook already covers

The AI HR Employee addresses this by giving employees an always-available first point of contact for general HR questions, while keeping personal and sensitive matters with a human.

## Before you begin

Before you begin, ensure you have the following:

- Conversations AI active
- Company HR policies and handbooks documented and accessible (Google Drive, uploaded documents, or a connected website)
- A named HR contact or escalation path defined for personal or sensitive questions

:::note
These prompts were developed and tested using **Gemini Flash 3**. Select Gemini Flash 3 as the model for this AI Employee for best results.
:::

:::tip
The AI HR Employee is only as accurate as its knowledge sources. Before launch, confirm that your policy documents are up to date and that the knowledge base reflects your current handbook.
:::

## How to set up the AI HR Employee

### Step 1: Create the AI Employee

1. Navigate to `AI` > `AI Workforce` in your Business App dashboard
2. Click `Create Custom AI Employee`
3. Set a name (for example, "HR Assistant" or a name that fits your team's culture) and upload an avatar image
4. Click `Save` to create the employee profile

### Step 2: Set the role prompt

The role prompt defines the AI's persona, scope, and behavioral rules. This one establishes a friendly, policy-first HR assistant that defaults to redirecting rather than guessing.

1. Open the **Purpose** field in the AI Employee configuration
2. Copy and paste the following role prompt:

```markdown
You are a Human Resources AI Employee. Your job is to help employees get clear, accurate answers to general HR questions quickly, without waiting for a response from the HR team.

You work from your company's official policy documents and HR knowledge base. You are not a general-purpose assistant, and you do not have access to personal employment records, payroll data, or individual performance information. If a question requires that kind of detail, you redirect the employee to the right person.

### Your Voice

- Be friendly, approachable, and professional.
- Use plain, conversational language. Avoid HR jargon where possible.
- Keep answers concise. Employees should leave with clarity, not more questions.
- When you're confident in the answer, give it directly. When you're uncertain whether a topic is within scope, default to a redirect.

### What You're Here to Do

- Answer general questions about company policies, leave, benefits, onboarding, offboarding, and HR processes.
- Link to the official policy document when one exists instead of only paraphrasing.
- Help employees identify the right form or process for a change request.
- Give employees a clear next step when a question falls outside what you can answer.

### What You Won't Do

- Access or discuss individual pay, performance reviews, role-specific employment decisions, or personal HR records.
- Give legal advice.
- Take action on behalf of the employee (no tickets, forms submitted, or messages sent for them).
- Guess at topics outside Human Resources scope. If you're unsure, redirect.
```

3. Click `Save`

:::tip
The key design principle here is "redirect rather than guess." If your HR assistant answers with a plausible-sounding but incorrect policy detail, it erodes employee trust and creates compliance risk. The role prompt enforces this by making redirecting the default when the AI is uncertain.
:::

### Step 3: Add the PolicyScope capability

The PolicyScope capability defines how the AI handles different types of HR questions. General policy questions get direct answers with document links. Personal or sensitive questions get a clear redirect. Out-of-scope topics get a polite refusal and a pointer to the right team. This ensures consistent, governed behavior across every conversation.

1. In the AI Employee configuration, scroll to **Capabilities**
2. Click `Add a capability`
3. Set the capability name to `PolicyScopeFramework`
4. Set the description to: "Routes HR questions to direct answers, document links, or human redirects based on whether the question is general, personal, or out of scope"
5. In the **Prompt** field, copy and paste the following:

```markdown
You follow a three-level routing framework for every employee question.

## Level 1: General HR Question (In Scope)

If the employee asks a general, non-personalized question about company policies, leave, benefits, onboarding, offboarding, payroll timelines (not individual amounts), or HR processes:

- Answer directly using the information in your knowledge base.
- If an official policy document exists for this topic, link to it. Do not only paraphrase — always provide the link when one is available.
- Ask a follow-up question to keep the conversation moving if it helps clarify the employee's situation.
- Tone is friendly and reassuring.

## Level 2: Personal or Sensitive Question (Requires Escalation)

If the employee asks about their individual pay, personal performance, a role-specific employment decision, or anything that requires access to their personal HR record:

- Do not attempt to answer from inference or partial information.
- Acknowledge the question warmly, explain that you cannot access personal records, and direct the employee to their HR contact (People Partner, HR Manager, or equivalent role you have configured for your team).
- Example transition: "That's a question I'll need to pass to a member of the HR team — they'll have access to your specific details. [Name or contact method] is the right person to reach out to."

## Level 3: Out of Scope (Different Team)

If the employee asks about IT support, product questions, legal matters, finance outside HR scope, or any topic that belongs to a different department:

- Do not attempt to answer.
- State clearly that the topic is outside Human Resources and give the employee one clear next step: the team name, channel, or contact to use.
- Tone remains supportive and helpful, not dismissive.

## Guardrails

- **Default to redirect when uncertain.** If you are unsure whether a topic is general HR or personal, treat it as Level 2 and redirect.
- **No guessing on policy.** If the knowledge base does not contain the answer, say so explicitly and point to the HR team rather than inferring.
- **No action on behalf of the employee.** Never submit a form, send a message, or open a ticket for the employee. You can tell them what to do and where to go — that is all.
- **Language follows the employee.** If the conversation begins in a language other than English, respond in that language.
```

6. Click `Save`

:::note
The three levels are invisible to the employee as labels. They shape how the AI routes and responds, not what it says explicitly. Employees experience it as a natural, helpful conversation.
:::

### Step 4: Enable built-in capabilities

The AI HR Employee works primarily from its knowledge base and PolicyScope logic. No additional built-in capabilities are required, but you may optionally enable the following:

1. In the **Capabilities** section, toggle on as needed:
   - **Capture leads** (optional): enables the AI to collect the employee's name and contact details when escalating a question to HR, so the HR team has context before following up
   - **Book appointments** (optional): allows the AI to schedule a meeting with an HR team member directly (requires calendar connected in Business App)

2. Click `Save`

:::note
The **Retrieve knowledge** capability is enabled by default for all AI Employees. This is the primary mechanism the HR Employee uses to answer questions — it retrieves content from your connected policy documents and knowledge sources.
:::

For more details on configuring built-in capabilities, see [Configuring Capabilities](../../ai-capabilities/configuring-capabilities.md).

### Step 5: Add knowledge sources

Your knowledge base is the foundation of the AI HR Employee's accuracy. Connect every policy and reference document your employees regularly ask about.

1. In the **Knowledge Sources** section, add:
   - **HR policy documents**: employee handbook, leave policies, benefits guides, onboarding and offboarding checklists
   - **Forms and process guides**: change request forms, time off submission procedures, and any workflow documentation
   - **FAQs** (recommended): written answers to your most common HR questions, especially topics not covered in a single policy file
   - **Website** (optional): if your company publishes any HR or benefits information publicly

2. Click `Save`

:::tip
When a policy changes, update the source document and reconnect or re-upload it. The AI answers from what is in the knowledge base — outdated documents produce outdated answers.
:::

### Step 6: Configure your escalation contacts

The PolicyScope capability references HR contacts for personal or sensitive questions. Customize the escalation language in the capability prompt to reflect your actual team structure.

1. In the **Capabilities** section, click `Edit` next to `PolicyScopeFramework`
2. In the Level 2 section, replace the generic contact reference with your specific HR contact name, role, or channel:
   - **For a small team:** "Your HR Manager [Name] is the right person — reach out at [contact method]."
   - **For a People Partner model:** "Reach out to your assigned People Partner for anything specific to your situation."
   - **For a ticketing system:** "Submit a request through [HR ticket portal name] and the team will follow up."

3. Update Level 3 references for out-of-scope redirects to match your team's actual support channels (IT helpdesk, Finance contact, Legal channel, etc.)

4. Click `Save`

### Step 7: Test and refine

Run test questions across all three PolicyScope levels before announcing the AI HR Employee to your team.

**Level 1: General policy question**
Ask a question your knowledge base covers directly, such as "How many days of PTO do I get?" or "What's the process for requesting a leave of absence?" The AI should answer from the knowledge base and link to the policy document.

**Level 1: Form or process guidance**
Ask which form to use for a specific change: "I want to change my work schedule — is there a form for that?" The AI should identify the appropriate process or form and link to it if available.

**Level 2: Personal question**
Ask a question requiring personal data: "What's my current salary?" or "Can you look up my performance review?" The AI should acknowledge warmly, explain it cannot access personal records, and name the HR contact to reach.

**Level 3: Out of scope**
Ask about a non-HR topic: "My laptop won't connect to the network" or "Can you help me with a product bug?" The AI should decline and give one clear next step for the right team.

**Edge case: uncertain scope**
Ask a question that sits on the boundary — for example, "Am I eligible for the new parental leave policy?" This should trigger a Level 2 redirect, not an answer, since eligibility is individual.

Refine the role prompt, PolicyScope capability, or escalation contacts based on what you observe. Common refinements include tightening the edge cases for personal questions and adding department-specific redirect contacts as your redirect map grows.

## Optional: Keep policies current with Google Drive sync

If your HR policies live in Google Drive, you can connect them to your AI HR Employee using Google Apps Script. When a policy document is updated in Drive, the script detects the change and refreshes the knowledge the AI uses — so your employee is always working from current information without manual re-uploads.

This setup uses a Google Sheet as a structured index of your policy documents. An Apps Script reads from your Drive folders, writes document names and content into the Sheet, and a deployed web app makes that Sheet available to the AI Employee as a live knowledge source.

### What you need

- Google Drive folder (or folders) containing your HR policy documents
- Ability to create a Google Sheet and run Google Apps Script in your Google Workspace
- The AI Employee already configured following the steps above

### Step 1: Create the Google Sheet

Create a new Google Sheet in your Google Drive. This Sheet acts as the knowledge index — the script writes document names, IDs, and full text into it, and the AI Employee queries it at conversation time.

Leave the Sheet empty for now. The script will populate it on first run.

### Step 2: Add the Apps Script

1. In your Google Sheet, open **Extensions** > **Apps Script**
2. Delete any default code in the editor
3. Paste the following script:

```javascript
function syncDriveToSheet() {
  const folderIds = [
    'YOUR_FOLDER_ID_1',   // Replace with your HR policy folder ID
    'YOUR_FOLDER_ID_2',   // Add or remove folder IDs as needed
    'YOUR_FOLDER_ID_3'
  ];
  
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const MAX_CELL_LENGTH = 45000; 

  const existingData = sheet.getDataRange().getValues();
  const fileMap = {};
  for (let i = 1; i < existingData.length; i++) {
    fileMap[existingData[i][1]] = { rowIndex: i + 1, lastUpdated: new Date(existingData[i][3]).getTime() };
  }

  folderIds.forEach(folderId => {
    const folder = DriveApp.getFolderById(folderId);
    const files = folder.getFiles();

    while (files.hasNext()) {
      let file = files.next();
      const fileId = file.getId();
      const lastUpdated = file.getLastUpdated().getTime();

      // Only sync if it's new or updated
      if (!fileMap[fileId] || fileMap[fileId].lastUpdated !== lastUpdated) {
        let allTabText = "";

        if (file.getMimeType() === MimeType.GOOGLE_DOCS) {
          try {
            const doc = DocumentApp.openById(fileId);
            // Grabs every tab in the document
            const tabs = doc.getTabs(); 
            
            tabs.forEach(tab => {
              // Adds a header for each tab name so the AI knows which section it's reading
              allTabText += `\n--- TAB: ${tab.getTitle()} ---\n`;
              allTabText += tab.asDocumentTab().getBody().getText() + "\n";
            });

            if (allTabText.length > MAX_CELL_LENGTH) {
              allTabText = allTabText.substring(0, MAX_CELL_LENGTH) + "... [TRUNCATED]";
            }
          } catch (e) {
            allTabText = "ERROR READING TABS: " + e.message;
          }
        }

        const rowData = [file.getName(), fileId, file.getMimeType(), file.getLastUpdated(), file.getUrl(), folder.getName(), allTabText];

        if (fileMap[fileId]) {
          sheet.getRange(fileMap[fileId].rowIndex, 1, 1, 7).setValues([rowData]);
        } else {
          sheet.appendRow(rowData);
        }
      }
    }
  });
}

/**
 * Read function for the AI Employee
 * This only reads the Sheet — it does NOT sync with Drive.
 */
function doGet(e) {
  // Cleans the search term (e.g., "Maternity Leave")
  const topic = (e.parameter.topic || "").toLowerCase().trim();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const data = ss.getActiveSheet().getDataRange().getValues();
  let results = [];

  for (let i = 1; i < data.length; i++) {
    const fileName = String(data[i][0]).toLowerCase();
    const docText = String(data[i][6]).toLowerCase();
    
    if (fileName.includes(topic) || docText.includes(topic)) {
      let score = 0;
      
      // If the topic appears in the document name, it's likely the primary policy doc
      if (fileName.includes(topic)) score += 10; 
      
      // More occurrences in the text = more relevant
      const occurrences = docText.split(topic).length - 1;
      score += occurrences;

      results.push({
        score: score,
        document_name: data[i][0],
        link: data[i][4],
        snippet: String(data[i][6]).substring(0, 1500)
      });
    }
  }

  // Sort: best matches first
  results.sort((a, b) => b.score - a.score);
  
  // Return top 3 results to the AI
  const finalResponse = results.length > 0 ? JSON.stringify(results.slice(0, 3)) : "No policies found.";
  
  return ContentService.createTextOutput(finalResponse).setMimeType(ContentService.MimeType.JSON);
}
```

4. Replace `YOUR_FOLDER_ID_1`, `YOUR_FOLDER_ID_2`, and `YOUR_FOLDER_ID_3` with the actual folder IDs from your Google Drive. To find a folder ID, open the folder in Drive — it is the string of characters at the end of the URL: `https://drive.google.com/drive/folders/YOUR_FOLDER_ID`. Add or remove entries in the `folderIds` array to match the number of folders you want to sync.

5. Click **Save project** (the floppy disk icon)

### Step 3: Set up the daily trigger

The `syncDriveToSheet` function needs to run on a schedule so the Sheet stays current when policies are updated in Drive.

1. In the Apps Script editor, click **Triggers** (the clock icon in the left sidebar)
2. Click **Add Trigger**
3. Configure the trigger:
   - **Function to run:** `syncDriveToSheet`
   - **Event source:** Time-driven
   - **Type of time-based trigger:** Day timer
   - **Time of day:** Select a low-traffic window (for example, 1am–2am or 3am–4am)
4. Click **Save**

The trigger will now run once daily and update the Sheet with any documents that have changed since the last sync.

:::tip
Run `syncDriveToSheet` manually the first time by selecting it from the function dropdown and clicking **Run**. This populates the Sheet immediately without waiting for the first scheduled trigger.
:::

### Step 4: Deploy the script as a web app

The AI Employee needs a URL to query the Sheet at conversation time. Deploying the script as a web app creates that endpoint.

1. In the Apps Script editor, click **Deploy** > **New deployment**
2. Click the gear icon next to **Type** and select **Web app**
3. Configure the deployment:
   - **Description:** Give it a name you'll recognize (for example, "HR Policy Knowledge API")
   - **Execute as:** Me
   - **Who has access:** Anyone within your organization (or Anyone, depending on your setup)
4. Click **Deploy**
5. Copy the **Web app URL** — you will need this in the next step

:::note
If you update the script later, you must create a new deployment (or redeploy) for the changes to take effect. The URL stays the same when you redeploy to an existing deployment.
:::

### Step 5: Add the web app as a capability in the AI Employee

Now connect the deployed web app to your AI HR Employee as a custom capability with a live tool.

1. In the AI Employee configuration, scroll to **Capabilities**
2. Click `Add a capability`
3. Set the capability name to `HRPolicyKnowledge`
4. Set the description to: "Searches HR policy documents from Google Drive and returns the most relevant policy name, link, and content snippet"
5. In the **Prompt** field, add instructions for when and how to use this capability:

```markdown
When an employee asks a question about a specific HR policy, leave type, benefit, or process, use the HRPolicyKnowledge tool to search the policy library before answering.

Pass the employee's topic as the search term (for example: "maternity leave", "PTO", "onboarding", "resignation").

Use the returned document name and link to cite the policy in your answer. Include the link so the employee can read the full document. Use the snippet to inform your answer, but do not paste it verbatim — summarize clearly and link to the source.

If no policy is found, say so and redirect the employee to the HR team rather than answering from general knowledge.
```

6. In the **Tools** section, click `+ Add a tool`
7. Configure the tool:
   - **Tool name:** `search_hr_policies`
   - **Description:** "Searches the HR policy knowledge base for documents matching the given topic. Returns document name, link, and a content snippet for the top matches."
   - **Method:** GET
   - **URL:** Paste your web app URL from Step 4
8. Add one parameter:

   | Parameter key | Location | Type | Required | Set by AI | Description |
   |---|---|---|---|---|---|
   | `topic` | Query | String | Yes | Yes | The HR topic or policy name to search for (e.g., "maternity leave", "PTO", "onboarding") |

9. Click **Done**, then click **Save**

:::note
Test the tool by chatting with your AI HR Employee and asking about a policy that exists in your Drive folders. The AI should retrieve the document name and link from the Sheet and include them in its response. If nothing is returned, confirm the Sheet was populated (Step 3 tip) and that the web app URL is correct.
:::

## Frequently Asked Questions

<details>
<summary>Which editions support custom AI Employees?</summary>

Custom AI Employees are available with any edition of Conversations AI.

</details>

<details>
<summary>What HR topics can the AI answer?</summary>

The AI can answer any general, non-personalized question covered by its knowledge base: leave and time off policies, benefits overviews, payroll timelines (not individual amounts), onboarding and offboarding processes, forms guidance, and general company policies. It cannot access individual pay, performance, or employment records.

</details>

<details>
<summary>What happens when an employee asks a personal question?</summary>

The AI acknowledges the question, explains that it cannot access personal records, and redirects the employee to the appropriate HR contact. It will not attempt to infer or partially answer questions that require individual data.

</details>

<details>
<summary>How does the AI know which policies to reference?</summary>

The AI draws from the documents and knowledge sources you connect in the Knowledge Sources section. If a policy document is linked or uploaded, the AI retrieves its content and cites it in responses. If a topic is not covered in the knowledge base, the AI says so and redirects rather than guessing.

</details>

<details>
<summary>Can I customize the escalation language and contacts?</summary>

Yes. The Level 2 and Level 3 redirect language in the PolicyScope capability prompt is fully editable. Update the contact names, roles, and channels to match your team's actual structure. Keep the core logic intact: acknowledge the question, explain the limit, and give one clear next step.

</details>

<details>
<summary>What should I do when an HR policy changes?</summary>

Update the source document and re-upload or reconnect it in the Knowledge Sources section. The AI answers from whatever is currently in the knowledge base, so outdated documents will produce outdated answers until replaced.

</details>

<details>
<summary>Can the AI take action for the employee, like submitting a form?</summary>

No. The AI HR Employee provides information and direction only. It will tell an employee which form to use and where to find it, but it will not submit forms, send messages, or open tickets on their behalf. This is by design to keep sensitive HR actions within human control.

</details>
