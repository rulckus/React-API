import { useState } from "react"
import { axios } from "axios"

export default function Index() {
    const[numeros, setNumeros] = useState([]);
    const[numero, setNumero] = useState(0);
    const[resposta, setResposta] = useState('');

    function adicionar() {
        setNumeros([...numero, numero])
        setNumero('');
    }

     async function verificarmaior() {
        const resp = await axios.post('http://localhost:5000/dia2/MaiorNumero', numeros)
        setResposta(resp.data.maior);
    }

    return(
        <main>
            <h1>Maior Número</h1>

            <div>
                Número:<input type='text' value={numero} onChange={e => setNumero(Number(e.target.value))}/>
                <button onClick={adicionar}>Adicionar numero</button>
            </div>

            <div>
                {numeros.map(item =>
                    <div> {item} </div>
                )}
            </div>

            <div>
                <button onClick={verificarmaior}> Verificar</button>Maior numero é: {resposta}
            </div>
        </main>
    )
}