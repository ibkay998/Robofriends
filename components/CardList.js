import styles from '../styles/tacyons.module.css'
import Card from '../components/Card'
import { Box } from "@chakra-ui/react"


const CardList = ({robots})=>{
    const cardcomponent = robots.map((user,i)=>{
        return(
            <Card key={i} id = {robots[i].id} name={robots[i].name} email={robots[i].email} />
        )
    }   
        )
        return(
            <Box maxW="1260px" ml={['4%','10%',null,null,null,null]} mr={['4%','4%',null,null,null,null]}>{cardcomponent}</Box>
        )
   }

export default CardList