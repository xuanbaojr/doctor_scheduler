import React from 'react'
import { Link, Redirect, Stack, } from 'expo-router'

const HomePage = () => {
  return (
    <>
    <Redirect  href={"/(tabs)/home"}/>
    </>
  )
}

export default HomePage