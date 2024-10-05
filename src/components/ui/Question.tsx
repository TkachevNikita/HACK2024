import { IQuestion } from '@components/common/Questions'

import React from 'react'

type Grade = 1 | 2 | 3 | 4 | 5 | null

const grade: Grade[] = [1, 2, 3, 4, 5]

const Question: React.FC<{question: IQuestion, serialNumber: number}> = ({question, serialNumber}) => {
    const [selected, setSelected] = React.useState<Grade>(null)
    
  return (
    <div>
        <p><span style={{color: '#EBEBEB'}}>{serialNumber}</span> {question?.text}</p>
        <div style={{display: 'flex', columnGap: 16, padding: '0 16px', marginTop: 18, }}>
            {grade.map((i, id) => <button onClick={() => setSelected(i)} style={{all: 'unset', padding: '6px 10px', borderRadius: '50%', border: '1px solid #C5C5C5', color: '#C5C5C5', fontSize: 10, cursor: 'pointer', backgroundColor: selected === id + 1 ? '#1437F6' : 'transparent'}}>{i}</button>)}
        </div>
           
    </div>
  )
}

export default Question