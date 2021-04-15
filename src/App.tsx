import { Dashboard } from "./components/Dashboard";
import Header from "./components/Header/indes";
import { GlobalStyle } from "./styles/global";

const App = (): JSX.Element => {
  return (
    <>
    <Header />
    <Dashboard />
    <GlobalStyle />
      </>
  );
}

export default App;