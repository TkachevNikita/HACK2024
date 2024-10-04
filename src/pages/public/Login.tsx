import PageContainer from "@components/ui/PageContainer"
import DefaultTextField from "@components/ui/DefaultInputField"
import PrimaryTitle from "@components/ui/PrimaryTitle"
import HintText from "@components/ui/HintText"
import DefaultButton from "@components/ui/DefaultButton"

const Login = () => {
  return (
    <PageContainer sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <PrimaryTitle>СЦЕНА</PrimaryTitle>
      <HintText>Для авторизации введите ваше ФИО и пароль </HintText>
      <DefaultTextField sx={{mt: '24px'}} placeholder="ФИО"/>
      <DefaultTextField sx={{mt: '12px'}} placeholder="Пароль"/>
      <DefaultButton sx={{mt: '16px'}}>Войти</DefaultButton>
      <HintText sx={{mt: '16px'}}>Нет аккаунта?</HintText>
    </PageContainer>
  )
}

export default Login