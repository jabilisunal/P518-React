import React from 'react'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t("about")}</h1>
    </div>
  )
}

export default About
