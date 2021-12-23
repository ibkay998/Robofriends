import styles from '../styles/tacyons.module.css'
import { Box } from "@chakra-ui/react"


export default function Card(props) {
    return (
        <Box className={styles.ibk}  w='275' h='330' backgroundColor='lightgreen' m='2px' p='1px' float='left'>
            <img alt="robots" src={`https://robohash.org/${props.id}`}/>
            {props.name}
        </Box>
          
    )}

