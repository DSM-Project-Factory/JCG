import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Main from './page/Main'
import Chapter from './page/Chapter'
import All from './page/All'
import Layout from './page/Layout'
import Result from './page/Result'
import English from 'page/english/English'
import EnglishDetail from 'page/english/EnglishDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout footer header />}>
          <Route path="/" element={<Main />} />
          <Route path="/english">
            <Route path="" element={<English />} />
          </Route>
          <Route path="/all" element={<All />} />
          <Route path="/firstChapter" element={<Chapter />} />
          <Route path="/secondChapter" element={<Chapter />} />
          <Route path="/thirdChapter" element={<Chapter />} />
          <Route path="/FourthChapter" element={<Chapter />} />
          <Route path="/result" element={<Result />} />
        </Route>
        <Route path="/english" element={<Layout />}>
          <Route path=":grade/:id" element={<EnglishDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
