import { useState } from 'react'

function App() {

  const [message, setMessage] = useState('')

  async function loadMessage() {

    const response = await fetch(
      'http://webhosttryout-backend-gghjgea0c6csehae.centralus-01.azurewebsites.net/api/hello'
    )

    const data = await response.json()

    setMessage(data.message)
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>Hello Frontend</h1>

      <button onClick={loadMessage}>
        Load Message
      </button>

      <p>{message}</p>
    </div>
  )
}

export default App
