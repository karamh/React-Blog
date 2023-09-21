import { ReactDOM } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import ArticlesList from './components/ArticlesList'
import ArticleEditor from './components/ArticleEditor'
import ArticleDetails from './components/ArticleDetails'
import Layout from './components/layout'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<ArticlesList />} />

          <Route path='edit' element={<ArticleEditor />} />

          <Route path='edit/:id' element={<ArticleEditor />} />

          <Route path='article/:id' element={<ArticleDetails />} />

        </Route>
      </Routes>  
    </BrowserRouter>
    // <>
    //   <ArticleEditor />
    //   <ArticlesList />
    // </>
  )
}

export default App
