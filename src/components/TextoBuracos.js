import React from 'react'
import useBuracos from './hooks/useBuracos'


function TextoBuracos() {
    const {text, setText, valor, setValor, countBuracos} = useBuracos()
    function handleChange(e) {
        if(e.target.value)
            setText(e.target.value)
    }
    React.useEffect(() => {
        console.log(text)
        setValor(countBuracos(text))
    }, [text])
  return (
    <>
        <form>
            <textarea name="textoBuracos" onChange={handleChange}></textarea>
        </form>
        <div>total de buracos no texto = {valor ? valor : 0}</div>
    </>

  )
}

export default TextoBuracos