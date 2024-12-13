import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Links from './components/Links/Links'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Projects />
        <Links />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}

export default App