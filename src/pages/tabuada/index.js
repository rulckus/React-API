import { useState } from "react";

import axios from "axios";



 export default function Tabuada(){
     const[num, setNum] = useState(0)
     const[resposta, setResposta] = useState([])


     async function CalcularClick(){
         const resp = await axios.get('http://localhost:5000/tabuada?a=' + num)

         setResposta(resp.data.tabuada)
     }

     return(
         <div>
             <div>

                <h1 className="titulo"> Programa Tabuada</h1>

                Numero: &nbsp;
                <input type='text' value={num} onChange={e => setNum(e.target.value)} />

                <button onClick={CalcularClick}> Verificar</button>

                <div>
                    Tabuada: {resposta.map(item => <div> {item} </div>)}

                </div>
                

             </div>

         </div>
     )
 }