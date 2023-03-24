import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Menu from "./page/Menu";
import GlobalStyle from "./style/GlobalStyle";
import FirstChapter from "./page/FirstChapter";
import All from "./page/All";
import SecondChapter from "./page/SecondChapter";
import ThirdChapter from "./page/ThirdChapter";
import FourthChapter from "./page/FourthChapter";
import Layout from "./page/Layout";
import Result from "./page/Result";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route element={<Layout/>}>
                  <Route path="/" element={<Menu/>}/>
                  <Route path="/all" element={<All/>}/>
                  <Route path="/firstChapter" element={<FirstChapter/>}/>
                  <Route path="/secondChapter" element={<SecondChapter/>}/>
                  <Route path="/thirdChapter" element={<ThirdChapter/>}/>
                  <Route path="/FourthChapter" element={<FourthChapter/>}/>
                  <Route path="/result" element={<Result/>}/>
              </Route>
          </Routes>
          <GlobalStyle />
      </BrowserRouter>
  );
}

export default App;
