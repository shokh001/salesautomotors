import { Link, NavLink, useLocation } from 'react-router-dom'
import { sidebar } from 'utils/data'
import './sidebar.scss'
import { BsThreeDots } from 'react-icons/bs';

const Sidebar = () => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div className='sidebar'>
            <Link to={'/'} className="sidebar-logo">P</Link>
            <ul className='sidebar-lists'>
                {
                    sidebar.map(({ id, title, path, icon }) => <li key={id}>
                        <NavLink className={pathname === path ? 'active' : null} to={path}>
                            {icon}
                        </NavLink>
                        <span>{title}</span>
                    </li>)
                }
            </ul>
            <div className="sidebar-more"><BsThreeDots /></div>
        </div>
    )
}

export default Sidebar