import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100px;
  padding: 25px;
  float:left;
  top:0;
  position:absolute;
  left:35px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const BrandDiv = styled.div` 
    max-width: 220px;
    float: left;
    width: 84%;
    text-align: center;
`

export const Thumb = styled.img`
        max-width: 50px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        position: absolute;
        right: 10px;
        top: 35px;
`

export const Welcome = styled.div`
    margin-left: 20px;
    color: #4285f4;
    position: absolute;
    left: 125px;
    top: 90px;
`