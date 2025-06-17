import { Routes, Route } from 'react-router-dom'
import Registration from './components/registration/Registration'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/contact'
import './App.css'
import Layout from './components/layout/Layout'
import ForgotPassword from './components/password/ForgotPassword'
import ResetPassword from './components/password/ResetPassword'
import Blogs from './pages/blog/Blogs'
import Page from './pages/page/Page'
import MegaMenu from './pages/megamenu/MegaMenu'

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/pages" element={<Page />} />
          <Route path="/mega-menu" element={<MegaMenu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App