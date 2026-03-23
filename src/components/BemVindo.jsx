
import {useHabits} from '../contexts/UseHabits'
const BemVindo = ({nomeUsuario = ''}) =>{
  const { habits } = useHabits()
  const totalHabitos = habits.length
  const habitosAtivos = habits.filter(h=>h.ativo).length
  const nomeFormatado = nomeUsuario.toUpperCase();
  const mensagem = totalHabitos > 0 
     ? `Você tem ${totalHabitos} hábito(s) cadastrado(s)`
     : `Nenhum hábito cadastrado ainda, que tal começar?`
    return(
    <div>
      <h2> OLÁ {nomeFormatado}!</h2>
      <p>Você tem <strong>{mensagem}</strong> hábitos cadastrados</p>
      <p><strong>{habitosAtivos}</strong> ativos(s) no momento</p>
      <p> média diária: {(totalHabitos*30).toFixed(0)} atividades por mês</p>
    </div>
  )   
}
export default BemVindo