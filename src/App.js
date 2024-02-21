import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'


function App() {

  const {tg,onClose,onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready();
  }, [tg]);



  return (
    <div className="App">
      тест
      <button onClick={onClose}>Закрыть</button>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
