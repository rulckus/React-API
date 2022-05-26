import axios from "axios";
import { useState } from "react";

export default function Index() {
    const [texto, setTexto] = useState('');
    const [caracter, setCaracter] = useState('');
    const [resposta, setResposta] = useState('');

    async function verificarFreq() {
        const resp = await axios.get(`http://localhost:5000/dia2/caracter/${texto}/${caracter}`)
        setResposta(resp.data.caracter); 
    }

    return (
        <main>
            <h1> Frequência </h1>
            <div>
                Texto: <input type='text' value={texto} onChange={e => setTexto(e.target.value)}/>
            </div>
            <div>
                Caractere: <input type='text' value={caracter} onChange={e => setCaracter(e.target.value)}/>
            </div>
            <div>
                <button onClick={verificarFreq}> Verificar a Frequência </button>
            </div>
            <div>
                Frequência: { resposta }
            </div>
        </main>
    )
}