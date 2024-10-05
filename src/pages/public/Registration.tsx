import { Link, useNavigate } from "react-router-dom"
import '@styles/ui/DefaultLink.css'

import { signUp } from "@shared/services/auth" 

import DefaultTextField from "@components/ui/DefaultInputField"
import PrimaryTitle from "@components/ui/PrimaryTitle"
import HintText from "@components/ui/HintText"
import DefaultButton from "@components/ui/DefaultButton"
import { Box } from "@mui/material"
import React from "react"
import ErrorText from "@components/ui/ErrorText"

const Registration = () => {
  const [email, setEmail] = React.useState('')
  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [repeatPassword, setRepeatPassword] = React.useState('')
  const [isError, setError] = React.useState(false)

  const navigate = useNavigate()

  const isFulledFields = login && password && repeatPassword

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (isFulledFields) {
      signUp({username: login, email, password}).then((data) => {
        if (data.email) {navigate('/HACK2024/sign-in'); setError(false)} 
      }).catch(() => {
        setError(true)
      })
    } 
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '6%'}}>
      <PrimaryTitle>СЦЕНА</PrimaryTitle>
      <HintText>Для авторизации введите ваше ФИО и пароль </HintText>
      <DefaultTextField value={email} onChange={(e) => setEmail(e.target.value)} sx={{mt: '24px'}} placeholder="E-mail"/>
      <DefaultTextField value={login} onChange={(e) => setLogin(e.target.value)} sx={{mt: '12px'}} placeholder="ФИО"/>
      <DefaultTextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{mt: '12px'}} placeholder="Пароль"/>
      <DefaultTextField type='password' value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} sx={{mt: '12px'}} placeholder="Повторите пароль"/>
      <DefaultButton className={isFulledFields ? 'hack2024-button-default active' : 'hack2024-button-default'} onClick={handleSubmit} sx={{mt: '16px'}}>Зарегистрироваться</DefaultButton>
      {isError && <ErrorText sx={{mt: '14px'}}>Ошибка регистрации. Пожалуйста попробуйте позже!</ErrorText>}
      <HintText sx={{mt: '14px'}}>Уже есть аккаунт?</HintText>
      <Link className="hack2024-default-link" to='/HACK2024/sign-in'>Войти</Link>
    </Box>
  )
}

export default Registration