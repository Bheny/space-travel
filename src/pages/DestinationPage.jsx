import bg from '../assets/destination/background-destination-desktop.jpg'

import data from '../data.json'

import { useState } from 'react'

export default function DestinationPage() {

    // logic for this component goes here 

    //load all the destinations into this state 
    const [destinations, setDestinations] = useState(data.destinations)

    // setDestinations(data.destinations)

    // listens and waits for the selected destination to change
    const [selectedDestination, setSelectedDestination] = useState(destinations[0])

    const handleDestination = (destination) => {
        if (destination === "moon") {
            setSelectedDestination(destinations[0])
        } else if (destination === "Mars") {
            setSelectedDestination(destinations[1])
        } else if (destination === "Europa") {
            setSelectedDestination(destinations[2])
        } else if (destination === "Titan") {
            setSelectedDestination(destinations[3])
        }

        
    }


    return (
        <>
            <div class=" w-full bg-cover bg-center">
                 <div className='absolute -z-10 inset-0'>
                    <img src={bg} className='object-cover h-full w-full' />
                 </div>

                 <div className='w-full pt-40 px-32'>
                    <h2><span className='text-gray-700 font-semibold pr-4'>01</span> PICK YOUR DESTINATION</h2>
                 </div>

                 <div className='w-full  flex justify-between  px-32 mt-5'>
                    <div className='w-1/2'>
                        <img src={selectedDestination.images.png} alt="image of moon" className='w-2/3' />
                    </div>

                    <div className='w-1/2 px-12'>
                        <div className='flex-row justify-center items-center w-1/2 '>
                            <ul className='text-center flex gap-10 text-gray-400 uppercase'>
                                <li onClick={()=>handleDestination('moon')} className='hover:border-b-white py-2 hover:border-b-2'>Moon</li>
                                <li onClick={()=>handleDestination('Mars')} className='hover:border-b-white py-2 hover:border-b-2'>Mars</li>
                                <li onClick={()=>handleDestination('Europa')} className='hover:border-b-white py-2 hover:border-b-2'>Europa</li>
                                <li onClick={()=>handleDestination('Titan')}  className='hover:border-b-white py-2 hover:border-b-2'>Titan</li>
                            </ul>
                        </div>
                        <h1 className='text-6xl font-serif font-light mb-3 py-2 text-white uppercase'>

                            {selectedDestination.name}
                            
                            </h1>
                        <p className='text-gray-400'>
                            {selectedDestination.description}
                         </p>
                        <hr className='mt-10'/>
                        <div className='flex justify-between gap-4  py-1'>
                            <div className=''>
                                <h2 className='text-sm font-serif font-light    text-gray-300'>AVG. DISTANCE</h2>
                                <h2 className='text-2xl font-serif font-light  text-gray-300'>384,400 km</h2>
                            </div>
                            <div>
                                <h2 className='text-sm font-serif font-light   text-gray-300'>Est. travel time</h2>
                                <h2 className='text-2xl font-serif font-light   text-gray-300'>3 days</h2>
                            </div>
                        </div>  
                    </div>

                </div>

            
                        
                        
            </div>
        </>
    )
}