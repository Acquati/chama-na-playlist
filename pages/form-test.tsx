import { useState } from 'react'
import MainLayout from '../components/MainLayout'

const FormTest = () => {
  const [result, setResult] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    alert('A name was submitted: ' + result)
  }

  const handleChange = event => setResult(event.target.value)

  return (
    <MainLayout siteTitle="Home">
      <form onSubmit={handleSubmit}>
        Name:
        <input type="text" value={result} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </MainLayout>
  )
}

export default FormTest
