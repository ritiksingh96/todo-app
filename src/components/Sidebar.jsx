import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ListAltIcon from '@material-ui/icons/ListAlt';
import TodayIcon from '@material-ui/icons/Today';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='home_sidebar'>
            <ul>
                <li>
                    <NavLink exact={true} activeClassName="active_menu" to="/"><TodayIcon fontSize="small"/> My Day</NavLink>
                </li>
                <li>
                    <NavLink exact={true} activeClassName="active_menu" to="/favourites"><StarIcon fontSize="small" /> Favourite Tasks</NavLink>
                </li>
                <li>
                    <NavLink exact={true} activeClassName="active_menu" to="/add-task"><PostAddIcon fontSize="small" /> Add New Task</NavLink>
                </li>
                <li>
                    <NavLink exact={true} activeClassName="active_menu" to="/all-tasks"><ListAltIcon fontSize="small" /> View All Tasks</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
