import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import tgIcon from "@/assets/img/tg-send--img.png"
import css from "./Home.module.scss"

type Props = {}

const Home = (props: Props) => {
  const { t } = useTranslation()
  const [clicked, setClicked] = useState<boolean>(false)
  const [showBtnText, setShowBtnText] = useState<boolean>(false)

  const inputs = [
    { label: t("name"), type: "text", for: "name", area: "name" },
    { label: t("email"), type: "email", for: "email", area: "email" },
    { label: t("comment"), type: "text", for: "comment", area: "comment" },
  ]

  const __submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setClicked(true)
    setTimeout(() => setShowBtnText(true), 2000)
    console.log("sended")
  }

  return (
    <section className={css.home}>
      <div className="container">
        <h1 className={css.title}>{t("title")}</h1>
        <p className={css.description}>
          {t("description")} <a href="mailto:info@site.com">info@site.com</a>
        </p>
        <form className={css.form} onSubmit={__submitHandler}>
          <div className={css.leftSide}>
            {/* --- start --- */}
            {inputs.map((input) => (
              <div
                className={[css.inputItem, css[input.area]].join(" ")}
                key={input.area}
              >
                <input
                  className={css.input}
                  id={input.for}
                  type={input.type}
                  placeholder={input.label}
                  required
                  autoComplete="off"
                />
                <label className={css.label} htmlFor={input.for}>
                  {input.label} <span>*</span>
                </label>
              </div>
            ))}
            {/* --- end --- */}
            <div className={css.radioBlock}>
              <input
                className={css.radioInput}
                type="checkbox"
                required
                defaultChecked
                name="agree"
                id="agree"
              />
              <label className={css.radioLabel} htmlFor="agree">
                {t("agree")}
                {"  "}
                <a
                  className={css.agreeLink}
                  href="http://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("agree_privacy_policy")}
                </a>
              </label>
            </div>
          </div>
          <div className={css.btnSide}>
            <button
              className={`${css.btn} ${clicked ? css.clicked : ""}`}
              type="submit"
              disabled={clicked}
            >
              <img className={css.btnTgIcon} src={tgIcon} alt="telegram icon" />
              <b className={css.btnText}>
                {showBtnText ? t("sended") : t("send")}
              </b>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Home
