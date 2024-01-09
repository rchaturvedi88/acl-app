import React from 'react';
import {Link} from "react-router-dom";

function navListMenuItems() {
  {pages.map((page) => (
    <Link to={page.link} key={page.name}> 
     <MenuItem  onClick={handleCloseNavMenu}>
         <Typography textAlign="center">
           {page.name}
         </Typography>
      </MenuItem>
     </Link>
   ))}
  return (
    <div>
      <Link className="px-4" smooth to="/Careers">
        Careers
      </Link>
    

    </div>
  )
}

export default navListMenuItems

