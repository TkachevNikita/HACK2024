import Command from "@components/common/Command";
import HintTextPage from "@components/ui/HintTextPage";
import PageTitle from "@components/ui/PageTitle";
import { Box } from "@mui/material";
import withAuth from "@shared/hoc/withAuth";
import { getCommands } from "@shared/services/command";
import React from "react";

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

const comms = [
    {
      "id": 1,
      "Name": "Жопа",
      "case": {
        "id": 1,
        "name": "test",
        "description": "test"
      }
    },
    {
        "id": 2,
        "Name": "Говно насрало",
        "case": {
          "id": 1,
          "name": "test",
          "description": "test"
        }
      }
]

const Comands = () => {
    const [commands, setCommands] = React.useState<ICommand[]>([])
    React.useEffect(() => {
        getCommands().then((data) => {
            setCommands(data)
        })
    }, [])
  return (
    <Box sx={{height: '100%'}}>
        <div style={{width: '30%', boxShadow: '0 4px 5px -5px rgba(0, 0, 0, 0.233)', zIndex: 1, minHeight: '100%', padding: 40, maxHeight: 1, overflow: 'auto'}}>
            <PageTitle>Хакатон “ИТЫ Герой”</PageTitle>
            <HintTextPage>Выберите команду для оценивания</HintTextPage>
            <div style={{display: 'flex', flexDirection: 'column', rowGap: '20px', marginTop: 32, }}>
                {commands.map((i: ICommand) => <Command {...i}/>)}
            </div>
        </div>
    </Box>
  )
}

export default withAuth(Comands);