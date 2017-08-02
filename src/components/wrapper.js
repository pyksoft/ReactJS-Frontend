import React from "react";
import Header from "./Header/header";
import Main from "./Main/main";
import Footer from "./Footer/footer";

class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">

        <Header />

        <Main />

        <Footer />

      </div>
    );
  }
}

export default Wrapper;
