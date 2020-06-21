import React from 'react';
import './App.scss';
import routes from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      {routes}
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
