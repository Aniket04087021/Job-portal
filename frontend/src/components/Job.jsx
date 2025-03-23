import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    
    
    
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src='https://imgs.search.brave.com/affntHrA4MtAGpTX4AK_geALfA24tOgUMODU6_-dKok/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDUvMDExMDQ3MzMv/NTEwMy03Njh4NTkx/LnBuZw'/>
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg text-gray-500'>Company Name</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi rem fugiat voluptatem deserunt illum aliquam, commodi voluptates minus quaerat nisi?</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-[#7D1C4A] font-bold'} variant="ghost">Positions</Badge>
                <Badge className={'text-[#56021F] font-bold'} variant="ghost">Part-Time</Badge>
                <Badge className={'text-[#D17D98] font-bold'} variant="ghost">24LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant="outline">Details</Button>
                <Button className="bg-[#56021F]">Save For Later</Button>
            </div>
        </div>
    )
}

export default Job