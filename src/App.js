import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./User";
import User1 from "./User1";
import User2 from "./User2";
import User3 from "./User3";
import User4 from "./User4";
import User5 from "./User5";
import User6 from "./User6";
import User7 from "./User7";
import User8 from "./User8";
import User9 from "./User9";
import User10 from "./User10";
import User11 from "./User11";
import User12 from "./User12";
import User13 from "./User13";
import User14 from "./User14";
import User15 from "./User15";
import User16 from "./User16";
import User17A from "./User17A";
import User18 from "./User18";
import User19A from "./User19A";
import User20 from "./User20";
import User21 from "./User21";
import User22 from "./User22";
import User23 from "./User23";
import User24 from "./User24";
import User25 from "./User25";
import User26 from "./User26";
import User27 from "./User27";
import User28 from "./User28";
import User29 from "./User29";
import Navbar from "./1 Params/Navbar";
import Params from "./1 Params/Params";
import About from "./1 Params/About";
import Filter from "./1 Params/Filter";
import GetMethode from "./API/GetMethode";
import Nesting from "./2 NestedRouting/Nesting";
import Nest1 from "./2 NestedRouting/Nest1";
import Nest2 from "./2 NestedRouting/Nest2";

function App() {
  function setData() {
    alert("function pass in props");
  }
  return (
    <div className="App">
      <p>Hellow React</p>
      <h1>Learning </h1>
      <hr></hr>
      <User />
      <User1 />
      <User2 />
      <User3 />
      <User4
        name={"Gyan Praksh"}
        email={"gyanprakash@gp.com"}
        other={{ address: "delhi", no: 8192984141 }}
      />
      <User5 />
      <User6 />
      <User7 />
      <User8 />
      <User9 />
      <User10 data={setData} />
      <User11 />
      <User12 />
      <User13 />
      <User14 />
      <User15 />
      <User16 />
      <User17A />
      <User18 />
      <User19A />
      <User20 />
      <User21 />
      <User22 />
      <User23 />
      <User24 />
      <User25 />
      <User26 />
      <User27 />
      <User28 />
      <User29 />
      <BrowserRouter>
        <Params />
        <Routes>
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path="/about/:namee" element={<About />}></Route>
          <Route path="/filter" element={<Filter />}></Route>
          <Route path="/nest1/" element={<Nest1 />}></Route>{" "}
          <Route path="/nest2" element={<Nest2 />}></Route>
        </Routes>
        <Nesting />
      </BrowserRouter>
      <GetMethode />
    </div>
  );
}
export default App;
