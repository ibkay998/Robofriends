import { Box } from "@chakra-ui/react"

const Scroll=(props)=>{
   
    return (
        <div style={{height:'400px',overflow:'scroll'}}>
            {props.children}
        </div>
    )
}

export default Scroll