// console.log("aaa");
import React, { useState } from 'react'
import ReactDom from 'react-dom'

const App = () => {

    const abc = [1, 2]
    let [barv, hajox] = abc

    console.log(barv)
    console.log(hajox)
    const [name, setName] = useState('')
    const [showName, setShowName] = useState(true)
    console.log(name)
    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input type='checkbox' checked={showName} onChange={(e) => setShowName(e.target.checked)} />
            <br />
            {showName && (
                <div>My name is {name}</div>
            )}
        </>
    )

}

ReactDom.render(<App />, document.getElementById('root'))