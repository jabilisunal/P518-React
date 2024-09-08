import React from "react";
import { useTranslation } from "react-i18next";

const Card = () => {
  const { t, i18n } = useTranslation();
   

  return (
    <div>
   
      <h1>{t("title")}</h1>
    </div>
  );
};

export default Card;
