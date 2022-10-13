// import React from "react"
import { useTranslation } from "react-i18next"
import css from "./BreadCrumbs.module.scss"
type Props = {}

const BreadCrumbs = (props: Props) => {
  const { t } = useTranslation()
  return (
    <div className={css.breadCrumbs}>
      <div className="container">{t("breadCrumbs")}</div>
    </div>
  )
}

export default BreadCrumbs
