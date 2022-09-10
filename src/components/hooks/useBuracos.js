import dict from "../utils/dict"
import React from 'react'

function useBuracos(
){

    const [ text, setText] = React.useState("")
    const [ valor, setValor ] = React.useState(0)
    function countBuracos(text) {
        let arrayText = text.split("");
        let valor = 0;
        console.log(arrayText)
    
        arrayText.map((value, index) => {
            if (value in dict)
                valor = valor + dict[value]
        })
        console.log(valor)
        return valor
    }

    return { countBuracos, text, setText, valor, setValor }

}

export default useBuracos