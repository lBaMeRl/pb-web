import { useState } from 'react'
import { Terminal } from './components/layout/Terminal'
import { BootSequence } from './components/boot/BootSequence'
import { Header } from './components/layout/Header'
import { Navigation } from './components/layout/Navigation'
import { EmployeeScreen } from './components/screens/EmployeeScreen'
import { SocialsScreen } from './components/screens/SocialsScreen'

type Screen = 'employee' | 'socials'

function App() {
  const [booted, setBooted] = useState(false)
  const [currentScreen, setCurrentScreen] = useState<Screen>('employee')

  const handleBootComplete = () => {
    setBooted(true)
  }

  return (
    <Terminal>
      {!booted ? (
        <BootSequence onComplete={handleBootComplete} />
      ) : (
        <div className="flex flex-col h-full fade-in">
          <Header />
          <Navigation
            currentScreen={currentScreen}
            onNavigate={setCurrentScreen}
          />
          <main className="flex-1 overflow-auto p-4 crt-scrollbar">
            {currentScreen === 'employee' && <EmployeeScreen />}
            {currentScreen === 'socials' && <SocialsScreen />}
          </main>
          <footer className="shrink-0 px-4 pt-2 pb-1 border-t border-phosphor-dark bg-crt-black">
            <span className="text-phosphor-dim text-sm">
              {currentScreen === 'employee' && `RECORD LAST UPDATED: ${new Date().toLocaleDateString('en-GB')}`}
              {currentScreen === 'socials' && 'WARNING: External links leave the Pb.OS environment'}
            </span>
          </footer>
        </div>
      )}
    </Terminal>
  )
}

export default App
