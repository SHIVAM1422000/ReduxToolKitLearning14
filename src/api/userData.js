import Chance from "chance"
import React from 'react'

const chance=Chance()

export const fakeUserData = () => {
  return chance.name({middle:true})
}


