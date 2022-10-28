import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div>
            {/* social icons */}
            <SocialIcon 
                url="https://github.com/gold240sx" 
                fgColor='gray'
                bgColor='transparent'    
            
            />
            <SocialIcon 
                url="https://stackoverflow.com/users/16441693/michael-martell" 
fgColor='gray'
bgColor='transparent'
            />
        </div>
    </header>
  )
}