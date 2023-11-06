//import React from 'react';
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
// import {MdMenu} from "react-icons/md";
// import { useSidebarContext } from '../context/sidebar_context';
import {Link} from 'react-router-dom';
//import { useCartContext } from './context/cart_context';
//import SearchBar from '../SearchBar';
//import '../components/Test.css';
import '../Test.css';
// import Nav from 'react-bootstrap/Nav';
//import { Stack } from "react-bootstrap";
import UserDropdown from "./UserDropdown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NavbarUser = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    navigate(`/user/${searchQuery}`);
  };
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }
  return (
    <>
      
      <NavbarWrapper className = "bg-white flex" direction="horizontal" gap={6}>
        
      <div className='container'>
        <div className='brand-and-toggler flex flex-between w-100'>
          <div className="p-2">
            <ul>
            <Link to = "/" className='navbar-brand text-uppercase ls-1 fw-8'>
              <span className="topic">A</span>rtquack 
            </Link>

            {localStorage.getItem("accessToken") && JSON.parse(localStorage.getItem("accessToken")).role === 'learner' ? (
                <>
                  <li>
                    <Link to='/user/mycourse'>My Course</Link>
                  </li>
                )}
               
                <li>
                  <div className="searchContainer">
                    <div className="searchBar">
                      <label htmlFor="searchInput" className="searchLabel">
                        Search:
                      </label>
                      <div className="inputContainer">
                        <input
                          id="searchInput"
                          type="text"
                          className="inputContainer"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyPress={handleKeyPress}
                        />
                        <button onClick={handleSearch}>
                          <FaSearch />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              )}
              <li className="drop-down-inf">

              
              <UserDropdown/>
              </li>
              </ul>
            </div>
            <div className="user-info">
                  <UserDropdown />
                </div>
          </div>
         
         
        </div>
      </div>
    </NavbarWrapper>
    </>
    
  )
}

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand{
    font-size: 30px;
    span{
      color: var(--clr-orange);
    }
  }
  .cart-btn{
    margin-right: 18px;
    font-size: 23px;
    position: relative;
    .item-count-badge{
      background-color: var(--clr-orange);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .sidebar-open-btn{
    transition: all 300ms ease-in-out;
    &:hover{
      opacity: 0.7;
    }
  }
  .SearchBar{
    width: 20%;
    height: 100px;
  }

`;

export default NavbarUser;