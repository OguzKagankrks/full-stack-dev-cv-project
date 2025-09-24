import DarkModeToggle from './darkmode';

export default function Header() {
  return (
    <header className="w-full p-4 bg-white-600 text-purple text-center">
        <button className="bg-blue-500 w-32 h-32 rounded-lg" darkmode={DarkModeToggle}>DARK MODE</button>
      <h1 className="text-3xl font-bold">My Application Header</h1>
    </header>
  )
}