import "../styles/globals.css"
import { ReactNode } from "react"
import Head from "next/head"

export const metadata = {
  title: "Metaversus",
  description: "Metaversus App",
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
