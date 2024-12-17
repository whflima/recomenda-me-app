'use client';

import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { SideBar } from './SideBar';
import { Outlet } from 'react-router-dom';

export function Layout() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <NavBar
        isSidebarVisible={isSidebarVisible}
        setSidebarVisible={() => setSidebarVisible(!isSidebarVisible)}
      />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <SideBar isSidebarVisible={isSidebarVisible} />
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <main className="px-4 pt-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
