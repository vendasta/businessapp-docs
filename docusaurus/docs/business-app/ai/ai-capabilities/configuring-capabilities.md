---
title: How to configure AI capabilities
sidebar_label: Configuring capabilities
sidebar_position: 2
description: Learn how to enable and configure built-in capabilities for your AI Employees to handle business tasks.
brand: business-app
product: ai-workforce
audience: smb
---

This guide walks you through enabling and configuring built-in capabilities for your AI Employees. Follow these steps to set up capabilities that handle common business tasks like lead capture and appointment booking.

## Prerequisites

Before you begin:
- You have an AI Employee created in Business App
- You have appropriate permissions to configure AI settings
- You understand which capabilities align with your business needs

## Step 1: Access AI Employee configuration

1. Navigate to `AI` > `AI Workforce` in your Business App dashboard.
2. Locate the AI Employee you want to configure.
3. Click the `Configure` button next to the employee's name.

:::tip
If you don't see the `Configure` button, verify you have the necessary permissions to modify AI Employee settings.
:::

## Step 2: Open the capabilities section

1. In the AI Employee configuration panel, scroll down to the `Capabilities` section.
2. You'll see a grid of capability cards showing the capabilities currently assigned to this AI Employee.

## Step 3: Add or remove capabilities

To add a capability:

1. Click the `Add Capability` button at the bottom of the `Capabilities` section.
2. Select the capability you want from the dialog that appears.
3. **Review the capability description** to understand what it does.
4. **Customize the capability's instructions** (optional) to tailor how it behaves for your business.

To remove a capability:

1. Click the `three-dot menu` (⋮) on the capability card.
2. Select `Remove` from the menu.

### Common capability configurations

#### Lead capture
- **What it does**: Automatically collects contact information from potential customers
- **Recommended instructions**: 
  ```
  Always ask for name, email, and phone number. 
  Qualify leads by asking about budget and timeline.
  Be friendly but persistent in gathering complete information.
  ```

#### Appointment booking
- **What it does**: Schedules meetings using your connected calendar
- **Prerequisites**: Ensure your calendar is connected in Business App settings
- **Recommended instructions**:
  ```
  Check availability for the next 2 weeks.
  Confirm all details before booking: date, time, service type, duration.
  Send confirmation details to the customer.
  ```

#### Multi-service booking
- **What it does**: Books multiple services in one booking session when the services are in the same `Service Menu/Group`
- **Prerequisites**: Enable `Book appointments` and choose a booking link or event type for scheduling
- **Recommended instructions**:
  ```
  Confirm all requested services before booking.
  Offer back-to-back times that fit the full session.
  If no combined slot is available, offer another time or split the booking.
  Collect all required contact and intake details once before confirmation.
  ```

#### Communication style
- **What it does**: Maintains consistent tone and brand voice
- **Recommended instructions**:
  ```
  Use a professional but friendly tone.
  Always end responses with "How else can I help you today?"
  Refer to our company as "we" and "our team."
  ```

## Step 4: Add goals and instructions (optional)

For more precise control over capability behavior:

1. **Click a capability card** to expand its configuration.
2. **Write clear, specific instructions** in the prompt field that define:
   - When to use the capability
   - What information to collect
   - How to respond in different scenarios
   - What to do if something goes wrong

### Writing effective instructions

**Good example:**
```
Lead Capture: Only collect contact information after the customer shows interest in our services. Always ask for name, email, and phone. If they're hesitant to share information, explain that it helps us provide better service.
```

**Poor example:**
```
Get contact info when needed.
```

:::tip Best Practices for Instructions
- Be specific about trigger conditions
- Include error handling guidance
- Use clear, actionable language
- Test different phrasings to see what works best
:::

#### Write instructions as directives, not descriptions

Write every instruction as an order addressed to the AI Employee. An instruction phrased as a description of what the employee does reads as background information, and the AI may not connect the described behavior to itself.

| Avoid | Use instead |
|-------|-------------|
| `The receptionist says "I'll text you a booking link."` | `Respond with "I'll text you a booking link."` |
| `The assistant will offer to take a message.` | `Offer to take a message.` |
| `Bookings are handled by the call center.` | `Tell the caller that bookings are handled by the call center.` |

This applies anywhere you write instructions: capability prompts, goals, and the instructions attached to individual capabilities.

:::tip Back up a prompt before you rewrite it
Capability prompts have no version history. Before making substantial edits, copy the existing prompt into a separate document so you can restore it. Experimenting is otherwise safe: you can adjust a prompt and re-test as many times as you need, and un-assign a capability from the AI Employee if it is not behaving the way you want.
:::

### Tailor a capability to specific channels

Your AI Employee knows which channel it's responding on, so a capability's instructions can reference the channel by name. This is useful when a task should behave differently depending on where the customer reaches out — for example, collecting fewer details for lead capture over SMS than by email:

```
When capturing a lead on SMS, ask for name and phone number only, one question at a time, and keep each message short.
When capturing a lead by email, you can ask for name, email, phone, and preferred appointment time in a single reply.
```

For guidance on channel-specific behavior across the whole AI Employee, see [Adjust responses by channel](../ai-workforce/ai_workforce_overview.md#adjust-responses-by-channel).

## Step 5: Save and test your configuration

1. Click `Save Changes` at the bottom of the configuration panel.
2. **Test the capabilities** by starting a conversation with your AI Employee.
3. **Try different scenarios** to ensure capabilities activate correctly:
   - Ask questions that should trigger knowledge base access
   - Express interest in services to test lead capture
   - Request an appointment to test booking functionality

### Testing checklist

- [ ] Capabilities activate at appropriate times
- [ ] Required information is collected before proceeding
- [ ] AI follows your custom instructions
- [ ] Error scenarios are handled gracefully
- [ ] Customer experience feels natural and helpful

## Step 6: Monitor and refine

After initial setup:

1. **Review conversation logs** to see how capabilities perform in real interactions.
2. **Collect customer feedback** about their experience.
3. **Adjust instructions** based on what you learn.
4. **Add or remove capabilities** as your business needs evolve.

## Troubleshooting common issues

### Capability not activating
- **Check trigger conditions**: Ensure customer requests match capability parameters
- **Review instructions**: Make sure activation criteria are clear
- **Test with different phrasings**: Try various ways customers might make requests

### Information not being collected
- **Verify required fields**: Ensure the capability knows what information to gather
- **Check instruction clarity**: Make collection requirements explicit
- **Test conversation flow**: Walk through the process as a customer would

### Capabilities conflicting
- **Review capability priorities**: Some capabilities may override others
- **Clarify instructions**: Make trigger conditions more specific
- **Remove conflicting capabilities**: Temporarily remove capabilities that interfere

### The AI has the information but never acts on it

Knowledge and capabilities do different jobs. A Knowledge Base entry is reference material the AI retrieves when it judges a lookup would help. It does not guarantee the AI takes a particular action or uses particular wording. When a question should trigger the same process every time, that content belongs in a capability rather than in knowledge.

To turn a knowledge entry into a capability:

1. Open the knowledge entry and copy its content.
2. Go to the `Capabilities` section and click `+ Add Capability`.
3. Name the capability after the task it performs, such as `Booking workflow`.
4. Paste the content into the prompt and restructure it as a workflow, using `##` for each instruction and `###` for the steps beneath it.
5. Rewrite any descriptive lines as directives. See [Write instructions as directives, not descriptions](#write-instructions-as-directives-not-descriptions).
6. Save, then test with the phrasings a customer would actually use.

Leave the original knowledge entry in place. Knowledge continues to answer open-ended questions; the capability governs the process.

## Advanced configuration tips

### Capability layering
Enable multiple complementary capabilities that work together:
- Lead Capture + Appointment Booking for service businesses
- Knowledge Base + Communication Style for support scenarios
- Product Lookup + Lead Capture for sales interactions

### Gradual rollout
Start with essential capabilities and add more over time:
1. **Week 1**: Enable basic communication style and knowledge base
2. **Week 2**: Add lead capture once AI is responding well
3. **Week 3**: Include appointment booking after testing lead flow
4. **Week 4+**: Add custom capabilities for specialized needs

### Performance monitoring
Track key metrics to measure capability effectiveness:
- Activation rate (how often capabilities trigger)
- Completion rate (successful information collection)
- Customer satisfaction scores
- Conversion rates for lead capture

## Next steps

- **Create Custom Capabilities**: [Learn how to build custom capabilities](creating-custom-capabilities.md) for specialized business needs
- **Advanced Prompting**: Explore prompt engineering techniques for better capability performance
- **Integration Setup**: Connect external systems to enhance capability functionality

Need help with specific capability configurations? Check our [troubleshooting guide](#troubleshooting-common-issues) or contact support for personalized assistance.


