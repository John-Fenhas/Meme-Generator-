import { createRoot } from 'react-dom/client'
import Header from '../components/header'
import MainContent from '../components/main-content'
import Footer from '../components/footer'


export default function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}