import { useEffect } from 'react';
import './App.css';
import Main from './Pages/Main/Main';
import { BrowserRouter } from 'react-router-dom'

const App = (props) => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "c3be8e6f-b1df-4b8f-8d43-433088c2d0c7";

    (function() {
      var d = document;
      var s = d.createElement("script");

      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, [])

  return(
    <BrowserRouter>
      <div className="main">
        <Main/>
      </div>
    </BrowserRouter>
  )
}


export default App;
