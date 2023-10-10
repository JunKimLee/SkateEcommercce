import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { Ghost } from 'phosphor-react';
import { TShirt } from 'phosphor-react';
import {MdSkateboarding} from "react-icons/md";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
      <Link to="/clothes">
          <TShirt size={50} />
        </Link>
        <Link to="/">
          <Ghost size={50} />
        </Link>
        <Link to="/board">
          <MdSkateboarding size={50} />
        </Link>
        <Link to="/cart">
        <ShoppingCart size={50} />
        </Link>
      </div>
    </div>
  );
}

