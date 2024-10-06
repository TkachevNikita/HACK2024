import React from 'react'

import type { StatusCommand as StatusCommandProps } from '@pages/private/Comands'

import Error from '@assets/images/icons/error.svg'
import Panding from '@assets/images/icons/panding.svg'
import Success from '@assets/images/icons/success.svg'
import Work from '@assets/images/icons/work.svg'

import '@styles/common/StatusCommand.css'

const StatusCommand: React.FC<{status: StatusCommandProps}> = ({ status }) => {
  switch(status) {
    case 'Ожидают':
        return <div style={{display: 'flex', alignItems: 'center', columnGap: 8, fontSize: 14, 
            color: '#F2A818'}}>{status} <img style={{width: 24, height: 24}} src={Panding} alt="" /></div> 
    case 'Выступают':
        return <div style={{display: 'flex', alignItems: 'center', columnGap: 8, fontSize: 14, 
            color: '#1437F6'}}>{status} <img style={{width: 24, height: 24}} src={Work} alt="" /></div> 
    case 'Не оценено':
        return<div style={{display: 'flex', alignItems: 'center', columnGap: 8, fontSize: 14, color: 'red'}}>{status} <img style={{width: 24, height: 24}} src={Error} alt="" /></div> 
    case 'Оценено':
        return <div style={{display: 'flex', alignItems: 'center', columnGap: 8, fontSize: 14, 
            color: '#09D31D'}}>{status} <img style={{width: 24, height: 24}} src={Success} alt="" /></div> 
    default:
        return <></>
  }
}

export default StatusCommand