import styled from 'styled-components'

import {FaBars, FaTimes} from 'react-icons/fa'

export const SearchNav = styled.div `
    width: 60%;
    padding: 20px;
    @media screen and (max-width: 768px){
        width: 75%;
    }
    @media screen and (max-width: 490px){
        display: block;
        width: 65%;
        position: absolute;
        top: 0%;
        left: 0%;
        z-index: 5;
        background: linear-gradient(45deg, #598193, #e18366);
        transition: 0.3s ease-in-out;
        transform-origin: left;
        ${({isNavbarOpend}) => {
            if(isNavbarOpend){
                return `
                    transform: scaleX(100%);
                `;
            }
            else {
                return `
                    transform: scaleX(0%);
                `;
            }
        }}
    }
    
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 5px;
    border: 1px solid yellow;
    border-radius: 5px;
    margin-bottom: 15px;
`;

export const SearchResult = styled.section`
    max-height: 500px;
    border: 1px solid #ddd;
    overflow-y: auto;
    @media screen and (max-width: 490px) {
        max-height: 90vh;
    }
    & ul {
        padding: 0;
        & a {
            display: block;
            padding: 10px 20px;
            text-decoration: none;
            color: black;
            @media screen and (max-width: 490px) {
                color: white;
            }
            &:hover {
                background-color: #eff;
                cursor: pointer;
                @media screen and (max-width: 490px){
                    color: black;
                }
            }
        }
    }
    
`;

export const BarIcon = styled(FaBars)`
    display: none;
    z-index: 10;
    font-size: 20px;
    cursor: pointer;
    @media screen and (max-width: 490px){
        width: 20px;
        position: absolute;
        top: 0;
        left: 0;
        ${(props) =>
        props.isNavbarOpend ? "display: none;" : "display: block;"
    }
    }
    
    
`;
export const TimesIcon = styled(FaTimes)`
    display: none;
    z-index: 10;
    cursor: pointer;
    @media screen and (max-width: 490px){
        width: 20px;
        position: absolute;
        top: 0;
        right: 0;
        border: 1px solid #ddd;
        border-radius: 50%;
        padding: 2px;
        background-color: #cdbabab3;
        color: #8f8b8b;
        font-size: 16px;
        font-weight: 400;
        ${(props) =>
        props.isNavbarOpend ? "display: block;" : "display: none;"
        }
    }
    
    
`;