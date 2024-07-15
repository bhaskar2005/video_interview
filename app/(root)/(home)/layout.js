import React from 'react'
import Navbar from '../../../components/navbar'

const layout = ({ children }) => {
  return (
    <main className=' relative'>
      <Navbar />
        <section className=' flex flex-1 flex-col px-6 sm:px-14'>
            <div className=' w-full'>
                {children}
            </div>
            
        </section>
        
    </main>
  )
}

export default layout