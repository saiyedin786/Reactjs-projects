import React from 'react'
import './Studentcard.css'
export const Studentcard = ({data}) => {

    const {id,image,age,name} = data

  return (
   <>
   
        {
            data.map((d)=>{
                return(
                   <div style={{marginBottom:'15px'}}>
                     <div className='card'>
                        <div className='cardimagediv'>
                            <img className='cardimage' src={d.image} alt="" />
                        </div>
                        <div className='details'>
                            <h2>{d.name}</h2>
                            <h2>{d.age}</h2>
                            
                        </div>
                    </div>
                   </div>
                )
            })
        }
  
   </>
  )
}
