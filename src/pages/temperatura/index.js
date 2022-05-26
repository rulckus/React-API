import { useState } from "react";
import axios from "axios";



 export default function PaginaFebre(){
     const[n, setN] = useState(0)
     const[resposta, setResposta] = useState(false)


     async function CalcularClick(){
         const resp = await axios.get('http://localhost:5000/temperatura?t=' + n)

         if(resp.data.febre === true)
         {
             setResposta("febre")
         }
         else
         {
             setResposta("Não esta com febre")
         }
     }

     return(
         <div>
             <div>


                <h1 className="titulo"> Programa Febre</h1>

                Temperatura: &nbsp;
                <input type='text' value={n} onChange={e => setN(Number(e.target.value))} />

                <button onClick={CalcularClick}> Calcular</button>

                <div>
                    Febre? {resposta }

                </div>

             </div>

         </div>
     )
 }