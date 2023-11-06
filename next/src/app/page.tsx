"use client"
import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import './page.module.css'


export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async () => {
    const data = {
      name,
      email,
      description,
      status: 'New'
    }

    try {
      const response = await fetch('https://zealthy-helpdesk-server.vercel.app/helpdesk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.error('Error:', error)
    }
    setName('')
    setEmail('')
    setDescription('')
  }

  return (
    <div className="centered-container">
      <h2>Zealthy Help Desk</h2>
      <div>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
      </div>
      <div>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
      </div>
      <div>
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  )
}
