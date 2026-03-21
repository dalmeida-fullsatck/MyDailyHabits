function SecaoHabitos({nomeFormatado, children}){
    return(
        <section>
            <h2>{nomeFormatado}</h2>
            <div className="lista-de-habitos">
                {children}
            </div>
        </section>
    )
}
export default SecaoHabitos