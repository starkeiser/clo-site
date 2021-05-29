import React from "react"
import { navigate } from "gatsby-link"

export default function Home() {
  return <div><button onClick={() => navigate('test')}>Test</button></div>
}
