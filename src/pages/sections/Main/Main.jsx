import React from 'react'
import Start from '../Start/Start'
import Arrivals from '../Arrivals/Arrivals'
import ZipOff from '../ZipOff/ZipOff'
import Trail from '../Trail/Trail'
import GetOutside from '../GetOutside/GetOutside'
import Shop from '../Shop/Shop'
import Story from '../Story/Story'
import Last from '../Last/Last'


const Main = () => {
    return (
        <main className='main'>
            <Start/>
            <Arrivals/>
            <ZipOff/>
            <Trail/>
            <GetOutside/>
            <Shop/>
            <Story/>
            <Last/>
        </main>
    )
}

export default Main