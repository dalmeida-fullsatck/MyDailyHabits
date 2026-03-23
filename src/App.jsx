import './App.css'
import BemVindo from './components/BemVindo'
import Footer from './components/Footer.jsx'
import SecaoHabitos from './components/SecaoHabitos.jsx'
import HabitList from './components/HabitList.jsx'
import { HabitsProvider } from './contexts/HabitsProvider'

// ------------------------
 function App() {
  return (
    <HabitsProvider>
      <div>
        {/* <Header titulo = 'My Daily Habits' descricao="Construindo uma rotina melhor."/>    tive que tirar pra funionar  */}
        <BemVindo nomeUsuario="USER" totalHabitos={0}/>
        <SecaoHabitos titulo= 'Meus Hábitos'>
        <HabitList/>
        </SecaoHabitos>
        <Footer/>  
      </div>
    </HabitsProvider>
  );
}

export default App
