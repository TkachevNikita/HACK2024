import { Link } from "react-router-dom";
import "@styles/pages/Login.css";

import DefaultTextField from "@components/ui/DefaultInputField";
import PrimaryTitle from "@components/ui/PrimaryTitle";
import HintText from "@components/ui/HintText";
import DefaultButton from "@components/ui/DefaultButton";
import { signIn } from "@shared/services/auth";
import { useNavigate } from "react-router-dom";
import React from "react";
import ErrorText from "@components/ui/ErrorText";
import CenteringBox from "@components/ui/CenteringBox";
import DefaultLoader from "@components/ui/DefaultLoader";

const Login = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isError, setError] = React.useState(false);

  const [isLoading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const isFulledFields = login && password;

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);
    if (isFulledFields) {
      signIn({ username: login, password })
        .then((data) => {
          if (data.access_token) {
            navigate("/HACK2024");
            setError(false);
          }
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => setLoading(false));
    }
  };

  if (isLoading)
    return (
      <CenteringBox className="login">
        <DefaultLoader/>
      </CenteringBox>
    );
  else
    return (
      <CenteringBox className="login">
        <PrimaryTitle>СЦЕНА</PrimaryTitle>
        <HintText sx={{textAlign: 'center'}}>Для авторизации введите ваше ФИО и пароль </HintText>
        <DefaultTextField
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          sx={{ mt: "24px" }}
          placeholder="ФИО"
        />
        <DefaultTextField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mt: "12px" }}
          placeholder="Пароль"
        />
        <DefaultButton
          className={
            isFulledFields
              ? "hack2024-button-default active"
              : "hack2024-button-default"
          }
          onClick={handleSubmit}
          sx={{ mt: "16px" }}
        >
          Войти
        </DefaultButton>
        {isError && (
          <ErrorText sx={{ mt: "14px" }}>
            Ошибка авторизации. Пожалуйста попробуйте позже!
          </ErrorText>
        )}
        <HintText sx={{ mt: "14px" }}>Нет аккаунта?</HintText>
        <Link className="hack2024-default-link" to="/HACK2024/sign-up">
          Зарегистрироваться
        </Link>
      </CenteringBox>
    );
};

export default Login;
