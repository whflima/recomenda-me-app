import { useEffect } from 'react';
import { LocalStorageItems, Modes } from '../constant';

const element = document.documentElement;
const darkQuery = window.matchMedia('prefers-color-scheme: dark');

function onWindowMatch(theme) {
  if (
    localStorage.theme === Modes.DARK ||
    (!(theme in localStorage) && darkQuery.matches)
  ) {
    element.classList.add(Modes.DARK);
  } else {
    element.classList.remove(Modes.DARK);
  }
}

function useEffectFunction(theme) {
  useEffect(() => {
    switch (theme) {
      case Modes.DARK:
        element.classList.add(Modes.DARK);
        localStorage.setItem(LocalStorageItems.THEME, Modes.DARK);
        break;
      case Modes.LIGHT:
        element.classList.remove(Modes.DARK);
        localStorage.setItem(LocalStorageItems.THEME, Modes.LIGHT);
        break;
      default:
        localStorage.removeItem(LocalStorageItems.THEME);
        break;
    }
  }, [theme]);
}

function darkQueryEventListener() {
  darkQuery.addEventListener('change', (event) => {
    if (event.matches) {
      element.classList.add(Modes.DARK);
    } else {
      element.classList.remove(Modes.DARK);
    }
  });
}

function darkModeSetup(theme) {
  useEffectFunction(theme);
  darkQueryEventListener();
}

export default darkModeSetup;
