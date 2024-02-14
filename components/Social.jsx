'use client'

import React from 'react'

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill
} from 'react-icons/ri'
import Link from 'next/link'

const icons =[
    {
      path:'https://www.linkedin.com/in/ankush786/',
      name:<RiLinkedinFill/>,
      },
      {
        path:'https://github.com/Anki33',
        name:<RiGithubFill/>,
        },

];
const Social = ({containerstyle, iconStyle}) => {
  return (
  <div className={`${containerstyle}`}>
    {icons.map((icon, index)=>{
      return(
          <Link href={icon.path} key={index}>
          <div className={`${iconStyle}`}> {icon.name}</div>
          </Link>
      );

    })}
  </div>);
};

export default Social