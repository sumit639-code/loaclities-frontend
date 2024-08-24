"use client"
import React, { useEffect, useState } from 'react'
import Landing from './components/Landing'
import Loading from './components/loading'

const page = () => {
  const [ loading,setLoading] = useState(true)
  useEffect(() =>{
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[] );

  return (
    <>
      {loading? (<Loading/>):(<Landing/>)}
    </>
  )
}

export default page