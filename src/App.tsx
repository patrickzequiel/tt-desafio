import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import Header from "./components/Header";
import {RequestModal} from "./components/RequestModal";
import { GlobalStyle } from "./styles/global";

const App = (): JSX.Element => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
    <Dashboard />


    <RequestModal
    isOpen={isNewTransactionModalOpen}
    onRequestClose={handleCloseNewTransactionModal}
     />

    <GlobalStyle />
      </>
  );
}

export default App;