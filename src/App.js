import React from "react";
import "./styles/App.scss";
import Header from "./Header_Module";
import InfoSection from "./Info_section_Module";
import HighlightSection from "./Highlight_Module";
import Slide from "./Slide_Module";
import Reservation from "./Reservation_Module";
import Footer from "./Footer_Module";

function App() {
  return (
    <div className='App'>
      <Header
        title='Exquisite dining since 1989'
        text='Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.'
        home
      />
      <InfoSection />
      <HighlightSection />
      <Slide />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
