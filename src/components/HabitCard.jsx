function HabitCard({nome, descricao = '', categoria,  meta, ativo=true, diasFeitos  , onRemover, }){

    const metaAtingida = diasFeitos >= meta
    const mensagemMeta=metaAtingida

    // ? `Meta da semana atingida!`
    // : `${diasFeitos} de ${meta} dias concluidos` 


    return(
        <div className="habit-card">
            <h3>{nome}</h3>
            <p>{mensagemMeta}</p>
            {descricao && <p>Descrição: {descricao}</p>}
            {categoria && <p>Categoria: {categoria}</p>}
            {diasFeitos && <p>{diasFeitos}</p>}
            {meta && <p>Meta {meta}</p>}
            <span> {ativo ? ' ATIVO ' : ' PAUSADO ' }</span>
            {metaAtingida &&<p> Parabéns! Meta da Semana atingida </p>}
            {onRemover &&(
                <button type="button" onClick={onRemover}> Remover </button>
            )} 

        </div>
    )
}




export default HabitCard;