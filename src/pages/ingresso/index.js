
import { useState } from "react"

import axios from "axios"


export default function Index() {
    const [int, setInt] =useState(0);
    const [meia, setMeia] =useState(0);
    const [dia, setDia] =useState('');
    const [nac, setNac] =useState('');
    const [resp,setTotal] =useState(0);

    async function calcular() {
        const resp = await axios.post('http://localhost:5000/dia2/ingressocinema',{
            int: int,
            meia: meia,
            dia: dia,
            nac: nac

        })

        setTotal(resp.data.total);
    }



    return (
        <main>
            <h1> Ingresso </h1>

            <div>
                Qtd.Inteiras: <input type='text' value={int} onChange={e =>setInt(Number(e.target.value))} />
            </div>
            <div>
                Qtd.Meias: <input type='text' value={meia} onChange={ e =>setMeia(Number(e.target.value))}/>
            </div>

            <div>
                Dia da Semana: <input type='text' value={dia} onChange={e =>setDia(e.target.value)}/>
            </div>
            <div>
                Nacionalidade: <input type='text' value={nac} onChange={e => setNac(e.target.value)} />
            </div>
            <div>
                <button onClick = {calcular} >Calcular</button>
            </div>
            <div>
                O total é R$ {resp}
            </div>

        </main>
    )
}