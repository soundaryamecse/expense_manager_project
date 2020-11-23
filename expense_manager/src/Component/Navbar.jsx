// import React from "react";
// import { Link } from "react-router-dom";

// let links = [
//   {
//     to: "/",
//     title: "Home"
//   },
//   {
//     to: "/dashboard",
//     title: "Dashboard"
//   },
//   {
//     to: "/register",
//     title: "Register"
//   },
//   {
//     to: "/login",
//     title: "Login"
//   },
//   {
//     to: "/ledger",
//     title: "Ledger"
//   }
// ];

// function Navbar() {
//   return (
//     <>
//       <div
//         style={{
//             marginLeft: "0px",
//             display: "flex",
//             backgroundColor: "grey"
//         }}
//       >
//         {links.map(({ to, title }) => (
//           <Link key={to} style={{ marginTop: "16px", textDecoration: "none", marginLeft: "-45px",flex: 1,color:"white" }} to={to}>
//             <h4 style={{ fontSize: "18px" }}>{title}</h4>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Navbar;