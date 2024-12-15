'use client';

import { Sidebar, SidebarItems } from 'flowbite-react';
import { HiChartPie } from 'react-icons/hi';

export function SideBar({ isSidebarVisible }: ISideBarProps) {
  const isSmall =
    window.innerWidth < 1024
      ? 'fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transform-none'
      : 'top-0 left-0 z-40 w-64 h-screen transition-transform border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transform-none';

  return (
    <aside
      hidden={isSidebarVisible}
      className={isSmall}
      id="drawer-navigation"
      aria-modal="true"
      role="dialog"
    >
      <Sidebar
        aria-label="Sidebar with logo branding example"
        className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <SidebarItems className="pb-2 space-y-2">
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/profile" icon={HiChartPie}>
              Profile
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </SidebarItems>
      </Sidebar>
    </aside>
  );
}
