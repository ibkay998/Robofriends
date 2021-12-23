import Head from 'next/head'
import App from '../components/App'
import { Box } from "@chakra-ui/react"




export default function Home() {
  return (
    <Box >
      <App />
        <style global jsx>{`
          body {
            background: linear-gradient(to left,rgba(7,27,82,1) 0%,rgba(0,128,128,1) 100%);
            font-family: sans-serif;
          }

        `}</style>
    </Box>
  )
}


