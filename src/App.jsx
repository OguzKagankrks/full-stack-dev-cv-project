import './App.css'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header.jsx';
import ProjectComp from './components/ProjectComp'
import SkillsComp from './components/SkillsComp.jsx';
import { AppProvider, useApp } from './store/AppContext'
import Hero from './components/Hero.jsx';
import ProfileComp from './components/profileComp.jsx';
import Footer from './components/Footer.jsx';


import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function AppToasts() {
  const { state } = useApp()
  return (
    <ToastContainer
      position="top-right"
      theme={state.theme === 'dark' ? 'dark' : 'light'}
      autoClose={2000}
      closeOnClick
      pauseOnHover
    />
  )
}


 function App() {
  

  return (

<AppProvider>
  
  <div className="min-h-dvh bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-200">

      <Header />  
    
  <main >
   
      <Hero />

      <SkillsComp />

      <ProfileComp />

      <ProjectComp />
  
     
  </main>

   <Footer />

   <AppToasts />

 </div>

</AppProvider>

  )
}

export default App