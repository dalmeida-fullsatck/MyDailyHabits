

const BemVindo = ({nomeUsuario = "TURMA ITEAM", totalHabitos}) =>{
  const nomeFormatado = nomeUsuario.toUpperCase();
  const mensagem = totalHabitos > 0 
    // ? `Você tem ${totalHabitos} hábito(s) cadastrado(s)`
    // : `Nenhum hábito cadastrado ainda, que tal começar?`
    return(
    <div>
      <h2> OLÁ {nomeFormatado}!</h2>
      <p>{mensagem}</p>
      <p> média diária: {(totalHabitos*30).toFixed(0)} atividades por mês</p>
    </div>
  )   
}
export default BemVindo