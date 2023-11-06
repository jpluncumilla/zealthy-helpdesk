"use client"
import { useState } from 'react'
import { Button, MenuItem, Select, Typography } from "@mui/material"

interface DropdownProps {
    id: string
    status: string
}

export default function Dropdown({ id, status }: DropdownProps) {
    const [statusUpdate, setStatusUpdate] = useState(status)
    const [newStatus, setNewStatus] = useState(status)

  const handleSubmit = async (id: string, update: string) => {
    const data = {
        status: update
    }
    try {
      const response = await fetch(`http://localhost:3001/helpdesk/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      setNewStatus(update)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
        <Typography variant="body2" color="textSecondary">
            Progress status: {newStatus as string}
        </Typography>
        <Select
            value={statusUpdate as string}
            onChange={(event) => {
            setStatusUpdate(event.target.value as string)
        }}
        >
            <MenuItem value="New">New</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
        </Select>
        <Button variant="contained" onClick={() => handleSubmit(id as string, statusUpdate as string)} sx={{ marginLeft: 2 }}>Update status</Button>
    </>
  )
}