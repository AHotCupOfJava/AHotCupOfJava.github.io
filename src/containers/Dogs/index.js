import React from 'react'
import { Link } from 'react-router-dom'

const Dogs = () => {
  return (
    <>
      <h1>Dogs are awesome!</h1>
      <Link to="/">Go Home</Link>
      <Link to="/cats">Cats are cool too!</Link>
    </>
  )
}

export default Dogs