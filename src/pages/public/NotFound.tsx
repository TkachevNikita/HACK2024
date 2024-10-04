import PageTitle from '@components/ui/PageTitle'
import { Box } from '@mui/material'

export const NotFound = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '15%'}}>
           <PageTitle>Упс :( Страница не найдена!</PageTitle>
    </Box>
  )
}
