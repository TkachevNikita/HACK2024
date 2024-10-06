import { Link, useNavigate } from "react-router-dom"
import '@styles/ui/DefaultLink.css'
import '@styles/pages/Registration.css'

import { signUp } from "@shared/services/auth" 

import DefaultTextField from "@components/ui/DefaultInputField"
import PrimaryTitle from "@components/ui/PrimaryTitle"
import HintText from "@components/ui/HintText"
import DefaultButton from "@components/ui/DefaultButton"
import React from "react"
import ErrorText from "@components/ui/ErrorText"
import CenteringBox from "@components/ui/CenteringBox"
import DefaultLoader from "@components/ui/DefaultLoader"

const Registration = () => {
  const [email, setEmail] = React.useState('')
  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [repeatPassword, setRepeatPassword] = React.useState('')
  const [isError, setError] = React.useState(false)
  const [isLoading, setLoading] = React.useState(false);

  const navigate = useNavigate()

  const isFulledFields = email && login && password && repeatPassword

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setLoading(true)
    if (isFulledFields) {
      signUp({username: login, email, password}).then((data) => {
        if (data.email) {navigate('/HACK2024/sign-in'); setError(false)} 
      }).catch(() => {
        setError(true)
      }).finally(() => setLoading(false))
    } 
  }

  if (isLoading)
    return (
      <CenteringBox>
        <DefaultLoader/>
      </CenteringBox>
    );
  else
  return (
    <CenteringBox className="registration">
      <PrimaryTitle>СЦЕНА</PrimaryTitle>
      <HintText>Для регистрации введите ваше ФИО и придумайте пароль</HintText>
      <DefaultTextField value={email} onChange={(e) => setEmail(e.target.value)} sx={{mt: '24px'}} placeholder="E-mail"/>
      <DefaultTextField value={login} onChange={(e) => setLogin(e.target.value)} sx={{mt: '12px'}} placeholder="ФИО"/>
      <DefaultTextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{mt: '12px'}} placeholder="Пароль"/>
      <DefaultTextField type='password' value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} sx={{mt: '12px'}} placeholder="Повторите пароль"/>
      <DefaultButton className={isFulledFields ? 'hack2024-button-default active' : 'hack2024-button-default'} onClick={handleSubmit} sx={{mt: '16px'}}>Зарегистрироваться</DefaultButton>
      {isError && <ErrorText sx={{mt: '14px'}}>Ошибка регистрации. Пожалуйста попробуйте позже!</ErrorText>}
      <HintText sx={{mt: '14px'}}>Уже есть аккаунт?</HintText>
      <Link className="hack2024-default-link" to='/HACK2024/sign-in'>Войти</Link>
    </CenteringBox>
  )
}

export default Registration