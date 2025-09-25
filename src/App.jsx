import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import Header from './components/Header.jsx';
import ProjectComp from './components/ProjectComp'
import SkillsComp from './components/SkillsComp.jsx';
import { AppProvider } from './store/AppContext'
import Hero from './components/Hero.jsx';
import ProfileComp from './components/profileComp.jsx';
import Footer from './components/Footer.jsx';


function App() {
  const test = () => toast('Başarılı bir şekilde giriş yaptınız!')

  return (

<AppProvider>
  
  <div className="min-h-dvh bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">

      <Header />  
    
  <main >
   
      <Hero />

      <SkillsComp />

      <ProfileComp />

      <ProjectComp />
  
     
  </main>
   <Footer />
 </div>
</AppProvider>
  )
}

export default App