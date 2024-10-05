import React from 'react'
import MiniCardIndicator from '@components/ui/MiniCardIndicator'
import { useRecoilState } from 'recoil'
import { currentCaseIdState } from '@store/questions'
import StatusCommand from '@components/ui/StatusCommand'
import { StatusCommand as StatusCommandProps } from '@pages/private/Comands'

const Command: React.FC<{case: {id: number, name: string, description: string}, Name: string, idx: number, selected: number, status: StatusCommandProps, setSelected: (value: number) => void}> = (props) => {
    const [_, setCurrentCaseId] = useRecoilState(currentCaseIdState)

    const handleClick = () => {
        props.setSelected(props.idx)
        setCurrentCaseId(props?.case.id)
          
    }

  return (
    <div onClick={handleClick} style={{padding: '12px 16px', boxShadow: '0px 0px 8px 0px rgba(34, 60, 80, 0.2)', borderRadius: 16, borderLeft: props.selected === props.idx ? '4px solid #1437F6' : '',
        borderTopLeftRadius: props.selected === props.idx ? 0 : 16,  borderBottomLeftRadius: props.selected === props.idx ? 0 : 16, 
    }}>
        <div style={{borderBottom: '2px solid #f7f7f7', padding: '0 0 10px 0', }}>
            <p>{props?.Name}</p>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 13}}>
            <MiniCardIndicator>
               Кейс {props?.case.id}
            </MiniCardIndicator>
            <StatusCommand status={props?.status}/>
        </div>
    </div>
  )
}

export default Command