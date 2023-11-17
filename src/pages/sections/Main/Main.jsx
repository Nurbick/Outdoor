import React from 'react'
import Start from '../Start/Start'
import Arrivals from '../Arrivals/Arrivals'
import ZipOff from '../ZipOff/ZipOff'
import Trail from '../Trail/Trail'
import GetOutside from '../GetOutside/GetOutside'
import Shop from '../Shop/Shop'


const Main = () => {
    return (
        <main className='main'>
            <Start/>
            <Arrivals/>
            <ZipOff/>
            <Trail/>
            <GetOutside/>
            <Shop/>
        </main>
    )
}

export default Main