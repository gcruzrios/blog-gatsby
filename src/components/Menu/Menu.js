import React from 'react'
import { Link } from "gatsby";
import "./Menu.scss";
import SocialMedia from '../SocialMedia/SocialMedia';
import Courses from '../Courses/Courses';

export default function Menu() {
    return (
        <div className="menu">
           <Link to="/">
               <h2>Blog developer</h2>
           </Link>
           <p>
               Blog sobre desarrollo web, programación JavaScript, React, Node, Electron, NExt, Gatsby, Angular...
           </p>
           
           <SocialMedia/>
           <Courses/>
           
        </div>
    )
}
