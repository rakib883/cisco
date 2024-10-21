import React from 'react'
import ApexChart from '../UI/Chart'
import Circel from '../UI/Circel'


const AdminHome = () => {
  return (
    <div>
       <div className="content">
           <div className=" flex gap-1">
              <div className="sell-graph  w-[50%]">
                <ApexChart/>
              </div>
              <div className="income-graph  w-[50%] flex justify-center items-center">
                 <Circel/>
              </div>
           </div>
           <div className="item py-8">
             hrllo 
           </div>
       </div>
    </div>
  )
}

export default AdminHome