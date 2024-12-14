import { createContext, useState } from 'react';
import { LocalStorageItems, Modes } from '../constant';

// eslint-disable-next-line react-refresh/only-export-components
export const ProviderContext = createContext<IProviderContext>(
  {} as IProviderContext
);

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const Provider = (props: React.PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState(
    localStorage.getItem(LocalStorageItems.THEME) || Modes.SYSTEM
  );

  return (
    <ProviderContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ProviderContext.Provider>
  );
};

export default Provider;
