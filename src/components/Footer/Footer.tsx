// import React from "react"
import { useTranslation } from "react-i18next"

import downloadIcon from "@/assets/icons/download--icon.svg"
import whIcon from "@/assets/icons/wh-link--icon.svg"
import tgIcon from "@/assets/icons/tg-link--icon.svg"
import css from "./Footer.module.scss"

interface Props {}

const Footer = (props: Props) => {
  const { t } = useTranslation()

  const medias = [
    {
      area: "first",
      title: t("services"),
      socials: false,
      links: [
        { url: "#", text: t("suppNDev") },
        { url: "#", text: t("prodDesign") },
        { url: "#", text: t("pwa") },
      ],
    },
    {
      area: "second",
      title: t("company"),
      socials: false,
      links: [
        { url: "#", text: t("about_company") },
        { url: "#", text: t("projects") },
        { url: "#", text: t("contacts") },
      ],
    },
    {
      area: "third",
      title: t("contacts"),
      socials: true,
      links: [
        { url: "#", text: t("downTPresent"), present: true },
        {
          url: "tel:+7 (499) 999-99-99",
          text: "+7 (499) 999-99-99",
          phone: true,
        },
        { url: "mailto:info@site.com", text: "info@site.com" },
      ],
    },
  ]

  const socials = [
    { url: "http://web.telegram.org/", icon: tgIcon },
    { url: "https://web.whatsapp.com/", icon: whIcon },
  ]

  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.content}>
          <a className={css.logo} href="#">
            <h1 className={css.logoText}>logo</h1>
          </a>
          {medias.map((block) => (
            <div
              className={[css.mediaBlock, css[block.area]].join(" ")}
              key={block.title}
            >
              <h2 className={css.mediaTitle}>{block.title}</h2>
              <ul className={css.media}>
                {block.links.map((item) => (
                  <li className={css.linkItem} key={item.text}>
                    <a
                      className={`${css.links} ${item.phone ? css.phone : ""}`}
                      href={item.url}
                    >
                      {item.text}
                    </a>
                    {item.present && (
                      <img
                        className={css.downloadIcon}
                        src={downloadIcon}
                        alt="download icon"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={css.socialsBlock}>
            {socials.map((social) => (
              <a
                className={css.social}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={social.url}
              >
                <img src={social.icon} alt="telegram icon" />
              </a>
            ))}
          </div>
        </div>
        <div className={css.policyBlock}>
          <span>© {t("rightsReserved")}</span>
          <a
            className={css.links}
            href="http://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("privacy_policy")}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
