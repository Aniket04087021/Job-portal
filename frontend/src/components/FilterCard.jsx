import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
const filterData = [
  {
    filterType:'Location',
    array:['Mumbai','Pune','Banglore','Hyderabad','Delhi']
  },
  {
    filterType:'Industry',
    array : ['Frontend Developer','Backend Developer','FullStack Developer']
  },
  {
    filterType:'Salary',
    array:['0-40k','42k-1Lakh','1Lakh-5Lakh']
  },
]

const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3 '/>
      <RadioGroup>
        {
          filterData.map((data, index)=> (
            <div>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item,index)=>{
                 return (
                  <div className='flex items-center space-x-2 my-2'>
                   <RadioGroupItem value={item}/> 
                   <label >{item}</label>
                  </div>
                 ) 
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
