import React from "react"
import containerStyles from "./container.module.css"

export default ({ children }) => (
    <div>
        <div className={containerStyles.container}>{children}</div>
    </div>
)
