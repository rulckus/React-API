import { useState } from "react";
import axios from "axios";



 export default function PaginaDobro(){
     const[n, setN] = useState(0)
     const[resposta, setResposta] = useState(0)


     async function CalcularClick(){
         const resp = await axios.get('http://localhost:5000/dobro/' + n)

        setResposta(resp.data.dobro)
     }

     return(
         <div>
             <div>

                <h1 className="titulo"> Programa Dobro</h1>

                Numero: &nbsp;
                <input type='text' value={n} onChange={e => setN(Number(e.target.value))} />

                <button onClick={CalcularClick}> Calcular</button>

                <div>
                    o dobro é: {resposta}

                </div>

             </div>

         </div>
     )
 }