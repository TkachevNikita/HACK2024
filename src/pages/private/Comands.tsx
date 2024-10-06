import Command from "@components/common/Command";
import Questions from "@components/common/Questions";
import HintTextPage from "@components/ui/HintTextPage";
import PageTitle from "@components/ui/PageTitle";
import { Box } from "@mui/material";
import withAuth from "@shared/hoc/withAuth";
import { getCommands } from "@shared/services/command";
import { commandsState, selectedCommandState } from "@store/command";
import React from "react";
import { useRecoilState } from "recoil";

export type StatusCommand = 'Ожидают' | "Выступают" | 'Не оценено' | "Оценено"

export interface ICommand {
    "id": number,
    "Name": string,
    "status": StatusCommand,
    "case": {
        "id": number,
        "name": string,
        "description": string
      }
}

const Comands = () => {
    const [commands, setCommands] = useRecoilState(commandsState)
    const [selected, setSelected] = useRecoilState(selectedCommandState)
    React.useEffect(() => {
        getCommands().then((data) => {
            setCommands(data)
        })
    }, [])
  return (
    <Box sx={{height: '100%', display: 'flex',}}>
        <div style={{width: '30%', boxShadow: '0 4px 5px -5px rgba(0, 0, 0, 0.233)', zIndex: 1, minHeight: '100%', padding: 40, maxHeight: 1, overflow: 'auto', backgroundColor: '#ffffff', marginTop: 2}}>
            <PageTitle>Хакатон “ИТЫ Герой”</PageTitle>
            <HintTextPage>Выберите команду для оценивания</HintTextPage>
            <div style={{display: 'flex', flexDirection: 'column', rowGap: '20px', marginTop: 32, }}>
                {commands?.map((i: ICommand, idx: number) => <Command {...i} idx={idx} selected={selected} setSelected={setSelected}/>)}
            </div>
            <div>
                {commands?.length === 0 && <p style={{textAlign: 'center'}}>Ничего не найдено!</p>}
            </div>
        </div>
        <div style={{display: 'flex', width: '100%', justifyContent: 'center', padding: '16px', }}>
           <Questions/>
        </div>
    </Box>
  )
}

export default withAuth(Comands);