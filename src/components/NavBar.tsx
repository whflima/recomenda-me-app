import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import darkModeSetup from '../utils/darkModeSetup';
import { ProviderContext } from './providerContext';
import { Modes } from '../constant';
import { SideBar } from './sideBar';

export default function NavBar() {
  const { theme, setTheme } = useContext(ProviderContext) as IProviderContext;
  darkModeSetup(theme);

  return (
    <Navbar fluid>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/react.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
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
            <img src="/moon.svg" className="w-5 h-5" alt="Moon Icon" />
          ) : (
            <img src="/sun.svg" className="w-5 h-5" alt="Sun Icon" />
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
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
