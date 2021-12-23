import { Input,InputGroup,InputLeftElement } from '@chakra-ui/react'
import { SearchIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'





export default function SearchBox({searchfield,searchChange}){
    return (
   
        <InputGroup size="lg" w='300px' mx='auto'>
            <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' />}
            />
            <Input type='search' placeholder='search robots' onChange={searchChange} ></Input>
        </InputGroup>
    
    )
}