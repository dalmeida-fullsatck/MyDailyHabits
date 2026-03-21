import './App.css'
import BemVindo from './components/BemVindo'
import Footer from './components/Footer.jsx'
import SecaoHabitos from './components/SecaoHabitos.jsx'
import HabitList from './components/HabitList.jsx'
import { HabitsProvider } from './contexts/HabitsContext.jsx'

// ------------------------
 function App() {
  return (
    <HabitsProvider>
      <div>
        <Header titulo = 'My Daily Habits' descricao="Construindo uma rotina melhor."/>
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
