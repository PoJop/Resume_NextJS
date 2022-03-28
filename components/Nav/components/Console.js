import React from 'react'

export const Console = () => {

    const [consoleMessage, setConsoleMessage] = React.useState([])
    const [currentConsoleMessage, setCurrentConsoleMessage] = React.useState({})


    const handleAddMessage = (type, message) => {
        let id = consoleMessage.length + "fdsfs"
        setConsoleMessage([{
            id: id,
            type: type,
            message: message,
        }, ...consoleMessage])
    }


    React.useEffect(() => {
        for (let i = 0; i < consoleMessage.length; i++) {
            setTimeout(() => {
                setCurrentConsoleMessage(consoleMessage[i])
                console.log(consoleMessage[i])
            }, 1000)
        }
    }, [consoleMessage])

    return (
        <>
            <article className="console">
                <button type="button" onClick={() => { handleAddMessage("ew", "ew") }}> d</button>

                {!currentConsoleMessage.length <= 0 && <div>
                    {currentConsoleMessage.message}
                </div>}
            </article>
        </>
    )
}