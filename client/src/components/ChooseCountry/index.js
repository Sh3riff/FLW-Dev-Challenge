import React from "react";
import style from "styled-components";
import { PageTemplate, InfoCardSlim } from '../../styles/components'


const FlagBox = style(InfoCardSlim)`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    color: ${props => props.theme.color.secondary};
  }
  h3{
    color: ${props => props.theme.color.light};
  }
  div{
    padding: 15px;
    width: 250px;
    display: grid;
    grid-template-columns: 100px 100px;
    grid-row: auto auto;
    grid-gap: 20px;
    span{
      padding: 5px;
      height: max-content;
      cursor: pointer;
      img{
        height: 50px;
        width: 75px;
      }
    }
  }
`;

const ChooseCountry = ({ setCountry }) => {

  return(
      <PageTemplate>
        <FlagBox>
          <h1>Welcome to Jumga</h1>
          <h3>Choose your country</h3>
          <div>
            <span>
              <img alt="Nigeria" onClick={ () => setCountry("NG")} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/NG.svg"/>
              <p>Nigeria</p>
            </span>
            <span>
              <img alt="United Kingdom" onClick={ () => setCountry("UK")} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"/>
              <p>United Kingdom</p>
            </span>
            <span>
              <img alt="Ghana" onClick={ () => setCountry("GH")} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GH.svg"/>
              <p>Ghana</p>
            </span>
            <span>
              <img alt="Kenya" onClick={ () => setCountry("KE")} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/KE.svg"/>
              <p>Kenya</p>
            </span>
          </div>
        </FlagBox>
      </PageTemplate>
  )
}

export default ChooseCountry