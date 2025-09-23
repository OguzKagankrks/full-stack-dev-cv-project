import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

function App() {
  const test = () => toast('Başarılı bir şekilde giriş yaptınız!')

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900/15 gap-6 p-8">
      
      <h1 className="text-4xl font-bold text-blue-600">Full Stack Dev-CV</h1>
      
      <button 
        onClick={test}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg duration-300 transform hover:scale-105"
      >
        Test Button
      </button>

      <p className="text-lg text-gray-700">Çalışıyor</p>
    </div>
  )
}

export default App