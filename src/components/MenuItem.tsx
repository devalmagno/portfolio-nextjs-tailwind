import React from 'react'
import { IconType } from 'react-icons';

interface Props {
    address: string;
    Icon: IconType;
}

export default function MenuItem({ Icon, address }: Props) {
  return (
    <a href={address} target='_blank' className='no-underline'>
        <Icon className='size-6 fill-title-200 hover:fill-title-100 hover:scale-110 transition duration-300' />
    </a>
  )
}
