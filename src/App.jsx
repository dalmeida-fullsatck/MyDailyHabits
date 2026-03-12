import './App.css'
import Footer from './components/Footer.jsx'
import HabitCard from './components/HabitCard.jsx'
import HabitList from './components/HabitList.jsx'
import SecaoHabitos from './components/SecaoHabitos.jsx'

const BemVindo = ({nomeUsuario, totalHabitos}) =>{
  const nomeFormatado = nomeUsuario.toUpperCase();
  const mensagem = totalHabitos > 0 
    ? `Você tem ${totalHabitos} hábito(s) cadastrado(s)`
    : `Nenhum hábito cadastrado ainda, que tal começar?`
    return(
    <div>
      <h2>OLÁ {nomeFormatado}!</h2>
      <p>{mensagem}</p>
      <p> média diária: {(totalHabitos*30).toFixed(0)} atividades por mês</p>
    </div>


  )   
}
 function App(){
    const habits = [
      { id: 1, titulo: 'Exercício', meta: 5, ativo: true , diasFeitos: 5                          
    },
      {id: 2, titulo: 'Leitura', meta: 7 , ativo: true , diasFeitos:3                             
    },
      {id: 3, titulo: 'Meditação', meta: 7, ativo: false, diasFeitos:0                             
    },
      {id: 4, titulo: 'Hidratação', meta:7 , ativo:true , diasFeitos:6                             
    },
    ]
    return(
      <div className='conteiner'>

        <header/>  

        <BemVindo nomeUsuario ="Davi Almeida" totalHabitos={habits.length}/>
        <secaoHabitos titulo={"Título"}>
        <HabitList habits={habits} />
        </secaoHabitos>
        <Footer/>  

           </div>
    )
 }


export default App
