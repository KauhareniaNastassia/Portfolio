import React from 'react';
import {Link} from "react-scroll";
import style from "./NavMenuItem.module.scss";


export const NavMenuItem = (props) => {
    return (
        <Link activeClass={`${style.active} ${style.item}`}
              to={props.path}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={props.onClick}
        > {props.title}
        </Link>
    );
};

