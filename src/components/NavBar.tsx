import { Navbar, Button, Dropdown, Avatar } from 'flowbite-react';
import { useState, useContext, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import { MdWbSunny } from 'react-icons/md';
import { RiNotification2Fill } from 'react-icons/ri';
import { Modes } from '../constant';
import darkModeSetup from '../utils/darkModeSetup';
import { ProviderContext } from './ProviderContext';
import { SideBar } from './SideBar';

export default function NavBar() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const { theme, setTheme } = useContext(ProviderContext) as IProviderContext;
  darkModeSetup(theme);

  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar className="border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div className="flex p-3">
          <Button
            onClick={() => setSidebarVisible(!isSidebarVisible)}
            className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <Navbar.Brand href="https://flowbite-react.com">
            <img
              src="/react.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              RecomendaMe
            </span>
          </Navbar.Brand>
        </div>
        <div className="flex items-center lg:order-2">
          <Button
            type="button"
            className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">View notifications</span>
            <RiNotification2Fill
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
            />
          </Button>

          <button
            id="theme-toggle"
            data-tooltip-target="tooltip-toggle"
            type="button"
            onClick={() =>
              setTheme(theme === Modes.DARK ? Modes.LIGHT : Modes.DARK)
            }
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            {theme === Modes.DARK ? (
              <FaMoon
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
              />
            ) : (
              <MdWbSunny
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
              />
            )}
          </button>

          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>

      {!isSidebarVisible && (
        <aside
          className="fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transform-none"
          aria-label="Sidenav"
          id="drawer-navigation"
          aria-modal="true"
          role="dialog"
        >
          <SideBar />
        </aside>
      )}
    </>
  );
}
