import * as React from 'react';
import OriginalDocSidebar from '@theme-original/DocSidebar';
import type {Props} from '@theme/DocSidebar';
import {useLocation} from '@docusaurus/router';

function SidebarProductSwitcher(): React.ReactElement {
  const location = useLocation();
  const isPartner = location.pathname.startsWith('/partner-center');

  const onChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const value = e.target.value;
    window.location.href = value === 'partner' ? '/partner-center' : '/';
  };

  return (
    <div style={{padding: '0 16px 12px'}}>
      <label htmlFor="product-switcher" style={{display: 'block', fontSize: 12, opacity: 0.7, marginBottom: 4}}>Select product</label>
      <select id="product-switcher" onChange={onChange} value={isPartner ? 'partner' : 'business'} style={{width: '100%'}}>
        <option value="business">Business App</option>
        <option value="partner">Partner Center</option>
      </select>
    </div>
  );
}

export default function DocSidebarWrapper(props: Props): React.ReactElement {
  return (
    <>
      <SidebarProductSwitcher />
      <OriginalDocSidebar {...props} />
    </>
  );
}


