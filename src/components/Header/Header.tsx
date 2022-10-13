import { useState } from "react"
import { useTranslation } from "react-i18next"

import css from "./Header.module.scss"
import arrowRight from "@/assets/icons/arrow-right--icon.svg"
import dots from "@/assets/img/dots--img.png"

const Header = () => {
  const { t, i18n } = useTranslation()
  const [activeNav, setActiveNav] = useState<number>(2)
  const [language, setLanguage] = useState<string>("RU")

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang.toLowerCase())
    setLanguage(lang)
  }

  const navItems = [
    { id: 0, url: "#", text: t("projects") },
    { id: 1, url: "#", text: t("about_company") },
    { id: 2, url: "#", text: t("contacts") },
  ]
  const languages = [{ text: "RU" }, { text: "EN" }]

  return (
    <header className={css.header}>
      <a href="#">
        <h1 className={css.logo}>logo</h1>
      </a>
      <nav>
        <ul className={css.navBar}>
          {navItems.map((nav) => (
            <li key={nav.id} onClick={() => setActiveNav(nav.id)}>
              <a
                className={
                  activeNav !== nav.id
                    ? css.navLinks
                    : [css.navLinks, css.activeDot].join(" ")
                }
                href={nav.url}
              >
                {nav.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={css.startBlock}>
        <ul className={css.languageBlock}>
          {languages.map((lang) => (
            <li
              onClick={() => changeLanguage(lang.text)}
              key={lang.text}
              className={
                language !== lang.text
                  ? css.languages
                  : [css.languages, css.activeDot].join(" ")
              }
            >
              {lang.text}
            </li>
          ))}
        </ul>
        <button className={css.startBtn}>
          <span className={css.startText}>{t("start_project")}</span>
          <img src={arrowRight} alt="arrow icon" className="arrow" />
        </button>
      </div>

      <div className={css.dotsBlock}>
        <img src={dots} alt="dots" />
      </div>
    </header>
  )
}

export default Header
