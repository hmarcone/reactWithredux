import './index.css'
import ReactDOM from 'react-dom'
import React from 'react' //JSX

import Primeiro from './components/basicos/Primeiro'

const el = document.getElementById('root')
const tag = <strong>Olá React!!!</strong>

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
    </div>, 
    el
)

// ReactDOM.render(
//     <div>
//         <Primeiro></Primeiro>
//         { tag }
//     </div>, 
//     el
// )
