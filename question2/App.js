import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Button from "./Button";
import Form from "./Form";

function App(){

  return(
    <div>

      <Header title="React Components Practice" />

      <Card
        title="Project 1"
        description="Reusable React Card Component"
      />

      <Button />

      <Form />

      <Footer />

    </div>
  );
}

export default App;
