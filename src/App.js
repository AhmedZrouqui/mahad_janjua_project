import "./assets/global.css";

import DataContainer from "./components/DataContainer";
import DataContainerHandler from "./components/DataContainerHandler";

import { HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  var isFirstLoad = localStorage.getItem("isFirstLoad");

  if (!isFirstLoad || window.location.hash === "") {
    window.location.hash = "#tags=red,blue,purple";
    localStorage.setItem("isFirstLoad", "true");
  }

  const query = window.location.hash;

  const parsingQuery = query.split("&").reduce(function (res, item) {
    var parts = item.split("=");
    res[parts[0].substring(1)] = parts[1];
    return res;
  }, {});
  const [hash, setHash] = useState(parsingQuery.tags.split(","));

  useEffect(() => {
    window.location.hash = "#tags=";
    hash.map((item, index) =>
      index === hash.length - 1
        ? (window.location.hash += `${item}`)
        : (window.location.hash += `${item},`)
    );
  }, [hash]);

  return (
    <HashRouter hashType="noslash">
      <div className="App">
        <div class="container">
          <DataContainerHandler hash={hash} setHash={setHash} />
          <DataContainer hash={hash} setHash={setHash} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
