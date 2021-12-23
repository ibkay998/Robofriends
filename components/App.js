import React,{Components} from 'react'
import CardList from '../components/CardList'
import {robots} from '../public/robots'
import SearchBox from '../components/SearchBox'
import styles from '../styles/global.module.css'
import { Box,Text } from "@chakra-ui/react"
import Scroll from '../components/CardList'


class App extends React.Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').
        then(response=>{
            return response.json();
        }).then(users =>{
            this.setState({robots: users})
        })
        
    }

    onSearchChange =(event)=>{
        this.setState({searchfield: event.target.value})
    }

    render(){
    const filteredRobots = this.state.robots.filter( robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return(
        <Box >
            <Text className={styles.head1} fontSize='20px' fontFamily='SEGA LOGO FONT' color=' lightgreen' fontWeight='bold' textAlign="center" margin="auto">ROBOFRIENDS
            <style jsx>{`
                @font-face {
                    font-family: 'SEGA LOGO FONT';
                    font-style: normal;
                    font-weight: normal;
                    src: local('SEGA LOGO FONT'), url('./SEGA.woff') format('woff');
                    }

                p{
                    font-family:SEGA LOGO FONT;
                }
      `}</style>
      </Text>
            
                <SearchBox searchChange={this.onSearchChange} searchfield={this.state.searchfield}/>
            
                <Box overflow='scroll' h='800px'>
                    <CardList  robots={filteredRobots}/>
                </Box>
                
          
            
        </Box>
            
        
    )
}}

export default App;