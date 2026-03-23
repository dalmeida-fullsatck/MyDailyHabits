import HabitCard from './HabitCard'
import {useRef, useState } from 'react'
import  {useHabits} from '../contexts/UseHabits'



function HabitList() {
    const {habits, adicionarHabit, removeHabit} = useHabits()

    const[form, setForm]  = useState({
            novoNome:'',
            novaDescricao:'',
            novoCategoria:'',
            novaMeta:'7', 
          })


          const[erroNome, setErroNome]= useState('')
          const nomeInputRef = useRef(null)

          const handleChange = (e) => {
          const {name, value } = e.target 
          setForm(prev =>  ({...prev , [name]: value}))
          if(name === 'novoNome'){
                if (value.lenght  > 0 && value.length < 3){
                setErroNome('O nome deve ter pelo menos 3 caracteres.')
                }else{
                setErroNome('')
            }
          }
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            if(!form.novoNome.trim() || erroNome){
                nomeInputRef.current?.focus()
                return
            }
            const novoHabit = {
                id: Date.now(),
                nome:form.novoNome,
                descricao: form.novaDescricao,
                meta: parseInt(form.novaMeta)|| 7, 
                ativo:true,
                diasFeitos: form.novosDiasFeitos,
                categoria: form.novaCategoria || 'Geral',
            }
            adicionarHabit(novoHabit)
            setForm({novoNome:'', novaDescricao:'', novaCategoria:'', novaMeta:7})
            setErroNome('')
            nomeInputRef.current?.focus()
            }
            if(!habits) return null
            return (
                <section>
                    <form onSubmit={handleSubmit} className= "habit-form">
                        <div>
                            <label> Nome do Hábito *
                                <input type='text' name="novoNome"
                                value={form.novoNome} onChange={handleChange} ref={nomeInputRef}/>
                            </label>
                        </div>
                        <div>
                        <label> Descrição
                                <input type='text' name="novaDescricao"
                                value={form.novaDescricao} onChange={handleChange} />
                            </label>
                        </div>
                        <div>
                            <label> Categoria *
                                <input type='text' name="novaCategoria"
                                value={form.novaCategoria} onChange={handleChange} />
                            </label>
                        </div>
                         <div>
                            <label>Meta (dias por semana)
                                <input type="number" name="novaMeta" min="1" max="7"
                                value={form.novaMeta} onChange={handleChange} />
                            </label>
                         </div>
                         <button type='submit'> Adicionar Hábito </button>
                    </form>
                    
                    {habits.length === 0 &&(
                         <p>Nenhum hábito cadastrado ainda, vamos cadastrar?</p>
                    )}


                    <ul>
                        {habits.map((habit) => (
                        <HabitCard
                            key={habit.id}
                    nome={habit.nome}
                    meta={habit.meta}
                    ativo={habit.ativo}
                    diasFeitos={habit.diasFeitos}
                    categoria={habit.categoria}
                    descricao = {habit.descricao}
                    onRemover={() => removeHabit(habit.id)}                        
                        />
                        ))}   
                    </ul>
                </section>
            )
        }

       
    export default HabitList