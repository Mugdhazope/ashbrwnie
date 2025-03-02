// // src/components/Sidebar.tsx
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../styles/Sidebar.css';

// const Sidebar = () => {
//   const location = useLocation();
//   const currentPath = location.pathname;
  
//   return (
//     <div className="account-sidebar">
//       <div className="welcome-section">
//         <h2>Welcome, Mugdha Dileep.</h2>
//       </div>r
//       <ul className="sidebar-menu">
//         <li className={currentPath === '/dashboard' ? 'active' : ''}>
//           <Link to="/dashboard">
//             <i className="fa fa-home"></i> Dashboard
//           </Link>
//         </li>
//         <li className={currentPath === '/my-orders' ? 'active' : ''}>
//           <Link to="/my-orders">
//             <i className="fa fa-shopping-bag"></i> My Orders
//           </Link>
//         </li>
//         <li className={currentPath === '/personal-info' || currentPath.includes('profile') ? 'active' : ''}>
//           <Link to="/personal-info">
//             <i className="fa fa-user"></i> Profile
//           </Link>
//           <ul className="sub-menu">
//             <li className={currentPath === '/personal-info' ? 'active' : ''}>
//               <Link to="/personal-info">Personal Information</Link>
//             </li>
//             <li className={currentPath === '/address-book' ? 'active' : ''}>
//               <Link to="/address-book">Address Book</Link>
//             </li>
//             <li className={currentPath === '/change-password' ? 'active' : ''}>
//               <Link to="/change-password">Change Password</Link>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <Link to="/" onClick={() => localStorage.removeItem('isLoggedIn')}>
//             <i className="fa fa-sign-out"></i> Logout
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react'

const Sidebar = () => {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar