import React from "react";
import Banner from "./components/Banner";
import Custompayment from "./components/Custompayment";
import Prebuiltpayment from "./components/Prebuiltpayment";

function App(props) {
  return (
    <div>
      <Banner />
      <Custompayment />
      <Prebuiltpayment  />
    </div>
  );
}

export default App;
