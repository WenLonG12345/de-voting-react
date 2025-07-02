import React from 'react'
import { Puck } from '@measured/puck'
import { puckConfig } from '../../../puck.config'

const PuckEditor = () => {
  return <Puck config={puckConfig} data={{}} onPublish={async () => {}} />
}

export default PuckEditor
