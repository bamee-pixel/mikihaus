import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import mikihausLogo from '../images/mikihaus-icon.jpg'
import styled from 'styled-components';


const HeaderWrapper = styled.div`
  background: #F0CFC0;
  marginBottom: '1.45rem';
  img {
    margin-bottom: 0;
  }
`;

const HeaderContainer = styled.div`
        margin: 0 auto;
        maxWidth: 960;
        padding: 0.5rem;
`;



const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer

    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img
            style={{
              width: '50px',
            }}
            src={mikihausLogo}
            alt="mikihaus LoGO"
          />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
