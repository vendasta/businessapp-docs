import React from 'react';
import { MdNotifications, MdSettings, MdAutoAwesome, MdContacts } from 'react-icons/md';

export const NotificationsIcon = () => (
  <MdNotifications size="1em" style={{ verticalAlign: 'text-bottom' }} aria-label="Notifications icon" />
);

export const SettingsIcon = () => (
  <MdSettings size="1em" style={{ verticalAlign: 'text-bottom' }} aria-label="Settings icon" />
);

export const AISparkleIcon = () => (
  <MdAutoAwesome size="1em" style={{ verticalAlign: 'text-bottom' }} aria-label="AI Sparkle icon" />
);

export const CRMIcon = () => (
  <MdContacts size="1em" style={{ verticalAlign: 'text-bottom' }} aria-label="CRM icon" />
);