import {useState, useEffect} from 'react'
import { HabitsContext } from './HabitsContext'
export function HabitsProvider({children}) {

    const [habits, setHabits] = useState (() => {
    
        const stored = localStorage.getItem('my-daily-habits')
            if (!stored) return [
                { id: 1, nome: 'Programar',  descricao: 'Treino de mente',   categoria: 'Pensamento',  meta: 7, ativo: true,  diasFeitos: 5 },
                { id: 2, nome: 'Leitura',    descricao: 'Livro ou artigo',   categoria: 'Estudo', meta: 7, ativo: true,  diasFeitos: 3 },
                { id: 3, nome: 'Meditação',  descricao: 'Respiração e foco', categoria: 'Saúde',  meta: 7, ativo: false, diasFeitos: 0 },
                { id: 4, nome: 'Hidratação', descricao: 'Beber 2L de água',  categoria: 'Saúde',  meta: 7, ativo: true,  diasFeitos: 6 },
                ]
                try { return JSON.parse(stored) } catch { return [] }

    })


    useEffect(() => {
        localStorage.setItem('my-daily-habits', JSON.stringify(habits))
    }, [habits])

    const adicionarHabit = (novoHabit) => {
        setHabits(prev=>[...prev, novoHabit])
    }  

    const removeHabit = (id) =>{
        setHabits(prev => prev.filter(h => h.id !==id ))
    }

    return (
        <HabitsContext.Provider value = {{habits, adicionarHabit, removeHabit}}>
            {children}
        </HabitsContext.Provider>
    )
}
export default HabitsProvider
         

