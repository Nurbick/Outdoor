import React from 'react'
import Start from '../Start/Start'
import Arrivals from '../Arrivals/Arrivals'
import ZipOff from '../ZipOff/ZipOff'
import Trail from '../Trail/Trail'


const Main = () => {
    return (
        <main className='main'>
            <Start/>
            <Arrivals/>
            <ZipOff/>
            <Trail/>
        </main>
    )
}

export default Main