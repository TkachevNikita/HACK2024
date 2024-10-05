import HintTextPage from '@components/ui/HintTextPage'
import PageTitle from '@components/ui/PageTitle'
import Question from '@components/ui/Question'
import { getQuestions } from '@shared/services/question'
import React from 'react'

export interface IQuestion {
    "id": number,
    "case_id": number,
    "text": string
}

const Questions = () => {
    const [questions, setQuestions] = React.useState<IQuestion[]>([])

    React.useEffect(() => {
        getQuestions(1).then(data => setQuestions(data)).catch((e) => console.log(e))
    }, [])
  return (
        <div style={{backgroundColor: '#ffffff', width: '90%', borderRadius: 16, padding: '24px 32px'}}>
            <PageTitle sx={{textAlign: 'center'}}>NAME</PageTitle>
            <HintTextPage sx={{textAlign: 'center'}}>Кейс №3</HintTextPage>
            <div style={{display: 'flex', rowGap: 32, flexDirection: 'column'}}>
                {questions?.map((i, id) => <Question question={i} serialNumber={id + 1}/>)}
            </div>
        </div>
  )
}

export default Questions