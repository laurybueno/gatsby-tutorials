import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
    <div style={{ color: `purple` }}>
        <Link to="/contact/">Contact</Link>
        <Header headerText="My site" />
        <p>
            But, frontenders have gone too far.
        </p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
)
