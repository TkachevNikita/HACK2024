import { Link } from "react-router-dom"
import '@styles/ui/DefaultLink.css'

import { signUp } from "@shared/services/auth" 

import DefaultTextField from "@components/ui/DefaultInputField"
import PrimaryTitle from "@components/ui/PrimaryTitle"
import HintText from "@components/ui/HintText"
import DefaultButton from "@components/ui/DefaultButton"
import { Box } from "@mui/material"
import React from "react"

const Registration = () => {
  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [repeatPassword, setRepeatPassword] = React.useState('')

  const isFulledFields = login && password && repeatPassword

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (isFulledFields) signUp({login, password})
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10%'}}>
      <PrimaryTitle>СЦЕНА</PrimaryTitle>
      <HintText>Для авторизации введите ваше ФИО и пароль </HintText>
      <DefaultTextField value={login} onChange={(e) => setLogin(e.target.value)} sx={{mt: '24px'}} placeholder="ФИО"/>
      <DefaultTextField value={password} onChange={(e) => setPassword(e.target.value)} sx={{mt: '12px'}} placeholder="Пароль"/>
      <DefaultTextField value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} sx={{mt: '12px'}} placeholder="Повторите пароль"/>
      <DefaultButton className={isFulledFields ? 'hack2024-button-default active' : 'hack2024-button-default'} onClick={handleSubmit} sx={{mt: '16px'}}>Зарегистрироваться</DefaultButton>
      <HintText sx={{mt: '14px'}}>Уже есть аккаунт?</HintText>
      <Link className="hack2024-default-link" to='/HACK2024/sign-in'>Войти</Link>
    </Box>
  )
}

export default Registration