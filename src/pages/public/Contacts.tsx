import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "@styles/pages/Contacts.css";
import DefaultButton from "@components/ui/DefaultButton.tsx";
import { TextField } from "@mui/material";

const Contacts: React.FC = () => {
  return (
    <div
      className="contacts"
      style={{ maxWidth: 1320, marginRight: "auto", marginLeft: "auto" }}
    >
      <div className="contacts__container">
        <h2 className="contacts__title">Контакты</h2>
        <p>Оставьте заявку и мы обязательно с вами свяжемся!</p>
        <div className="contacts__content">
          <div className="contacts__list">
            <div className="contacts__item">
              <LocationOnOutlinedIcon sx={{ fontSize: 42 }} />
              <div className="contacts__item--desc">
                <h4 className="contacts__item--title">Наш адрес</h4>
                <div className="contacts__item--text">
                  ул. Пушкина, дом Колотушкина
                </div>
              </div>
            </div>
            <div className="contacts__item">
              <EmailOutlinedIcon sx={{ fontSize: 42 }} />
              <div className="contacts__item--desc">
                <h4 className="contacts__item--title">Наш email</h4>
                <div className="contacts__item--text">mbI/|O@mail.ru</div>
              </div>
            </div>
          </div>
          <form className="contacts__form">
            <h3 className="contacts__form--title">Обратная связь</h3>
            <TextField label="ФИО" variant="outlined" />
            <TextField label="E-mail" variant="outlined" />
            <TextField label="Текст обращения" variant="outlined" />
            <DefaultButton sx={{ width: "100% !important" }}>
              Отправить
            </DefaultButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
