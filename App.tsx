import UserContextProvider from './src/context/userContext';
import StackViews from './src/views/Stack';

export default function App() {
  return (
    <UserContextProvider>
      <StackViews />
    </UserContextProvider>
  );
}