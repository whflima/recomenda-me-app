import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { useContext, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import { MdWbSunny } from 'react-icons/md';
import { Modes } from '../constant';
import darkModeSetup from '../utils/darkModeSetup';
import { ProviderContext } from './ProviderContext';
import { IoNotifications } from 'react-icons/io5';

export default function NavBar({
  isSidebarVisible,
  setSidebarVisible,
}: INavBarProps) {
  const { theme, setTheme } = useContext(ProviderContext) as IProviderContext;
  darkModeSetup(theme);

  const handleClick = () => {
    setSidebarVisible(!isSidebarVisible);
  };

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
        <Navbar.Brand>
          <button
            aria-expanded="true"
            aria-controls="sidebar"
            onClick={() => handleClick()}
            className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
          </button>
          <img
            src="react.svg"
            className="h-8 mr-3"
            alt="Flowbite React Logo"
          />
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
            RecomendaMe
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div className="hidden sm:block">
            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <span className="sr-only">View notifications</span>
              <IoNotifications
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
              />
            </button>

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
          </div>
          <div className="flex items-center ml-3">
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
        </div>
      </Navbar>
    </>
  );
}
