'use client'
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useTabSync(key: string,defaultTab: string ) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(() => {
  return searchParams.get(key) || defaultTab;
});

  // Sync UI when URL changes 
  useEffect(() => {
    const tabFromURL = searchParams.get(key);
    if (tabFromURL && tabFromURL !== activeTab) {
      setActiveTab(tabFromURL);
    }
  }, [searchParams, activeTab, key]);

  // On tab change: update state + URL
  const changeTab = (tab: string) => {
    if (tab === activeTab) return;
    const params = new URLSearchParams(window.location.search);
    params.set(key, tab);
      router.replace(`${window.location.pathname}?${params.toString()}`, { scroll: false });
    setActiveTab(tab);

  };

  return { activeTab, changeTab };
}
