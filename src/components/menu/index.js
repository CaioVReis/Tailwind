import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";



const Menus = () =>{

   
       
      
        return (
          <Menu>
            <MenuHandler>
            <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <a href="#" className="flex items-center">
              Categorias
            </a>
          </Typography>
            </MenuHandler>
            <MenuList>
              <MenuItem><Link to="#" >Iphone </Link></MenuItem>
            
              <MenuItem>Xiaomi</MenuItem>
              <MenuItem>Motorola</MenuItem>
              <MenuItem>Sansung</MenuItem>
            </MenuList>
          </Menu>
        );
      }


export  default Menus