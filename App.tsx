import SitesContextProvider from './src/context/siteContext';
import UserContextProvider from './src/context/userContext';
import StackViews from './src/views/Stack';

export default function App() {
  return (
    <UserContextProvider>
      <SitesContextProvider>
          <StackViews />
      </SitesContextProvider>
    </UserContextProvider>
  );
}