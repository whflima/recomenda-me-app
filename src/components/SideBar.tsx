'use client';

import { Dropdown, Sidebar, SidebarItems } from 'flowbite-react';
import { HiChartPie } from 'react-icons/hi';
import FlagIcon from './FlagIcon';
import { useTranslation } from 'react-i18next';

export function SideBar({ isSidebarVisible }: ISideBarProps) {
  const { t, i18n } = useTranslation();

  const handleClickLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const divDropdownClass =
    window.innerWidth < 1024
      ? 'absolute bottom-0 left-0 justify-center w-full flex '
      : 'bottom-0 left-0 justify-center w-full flex ';
  const asideClass =
    window.innerWidth < 1024
      ? 'fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transform-none'
      : 'top-0 left-0 z-40 w-64 h-screen transition-transform border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transform-none';

  return (
    <aside
      hidden={isSidebarVisible}
      className={asideClass}
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
              {t('side-bar-item-dashboard')}
            </Sidebar.Item>
            <Sidebar.Item href="/profile" icon={HiChartPie}>
              {t('side-bar-item-profile')}
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </SidebarItems>
        <div className={divDropdownClass}>
          <div className="p-4 space-x-4 bg-white dark:bg-gray-800">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <FlagIcon
                  className="h-5 w-5 rounded-full mt-0.5"
                  country=""
                  flagIcon={t('side-bar-dropdown-icon')}
                />
              }
            >
              <Dropdown.Item onClick={() => handleClickLanguageChange('us')}>
                <FlagIcon
                  className="h-3.5 w-3.5 rounded-full mr-2"
                  country="English (US)"
                  flagIcon="flag-icon-us.svg"
                />
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleClickLanguageChange('pt')}>
                <FlagIcon
                  className="h-3.5 w-3.5 rounded-full mr-2"
                  country="Português"
                  flagIcon="flag-icon-br.svg"
                />
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleClickLanguageChange('es')}>
                <FlagIcon
                  className="h-3.5 w-3.5 rounded-full mr-2"
                  country="Español"
                  flagIcon="flag-icon-es.svg"
                />
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </Sidebar>
    </aside>
  );
}
