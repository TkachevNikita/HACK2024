import HintTextPage from '@components/ui/HintTextPage'
import PageTitle from '@components/ui/PageTitle'
import Question from '@components/ui/Question'
import { getQuestions } from '@shared/services/question'
import { commandsState, selectedCommandState } from '@store/command'
import { currentCaseIdState } from '@store/questions'
import React from 'react'
import { useRecoilState } from 'recoil'

export interface IQuestion {
    "id": number,
    "case_id": number,
    "text": string
}

const Questions = () => {
    const [questions, setQuestions] = React.useState<IQuestion[]>([])
    const [currentCaseId] = useRecoilState(currentCaseIdState)
    const [commands] = useRecoilState(commandsState)
    const [selected] = useRecoilState(selectedCommandState)
    React.useEffect(() => {
        if (currentCaseId) 
        getQuestions(currentCaseId).then(data => setQuestions(data)).catch((e) => console.log(e))
    }, [currentCaseId])
  return (
        <div style={{backgroundColor: '#ffffff', width: '90%', borderRadius: 16, padding: '24px 32px'}}>
            <PageTitle sx={{textAlign: 'center'}}>{commands?.[selected]?.Name}</PageTitle>
            <HintTextPage sx={{textAlign: 'center'}}>Кейс №{currentCaseId}</HintTextPage>
            <div style={{display: 'flex', rowGap: 32, flexDirection: 'column'}}>
                {questions?.map((i, id) => <Question question={i} serialNumber={id + 1}/>)}
            </div>
            <div>
                {questions?.length === 0 && <p style={{textAlign: 'center', marginTop: 40}}>Ничего не найдено!</p>}
            </div>
        </div>
  )
}

export default Questions