import React, { useState }  from 'react'
import styled from 'styled-components';
import { theme } from '../../theme/theme';
import { ThemeColorContext } from '../../context/context';

const Layout = ({children}) => {

    const [mode,setMode] = useState(theme.blueTheme);

    const handleMode = (e) => {
        const value = e.target.value;
        if (value === 'blue') 
            setMode(theme.blueTheme);
        if (value === 'pink') 
            setMode(theme.pinkTheme);
        if (value === 'green') 
            setMode(theme.greenTheme);
    }
  return (
    <ThemeColorContext.Provider value={mode}>
        <PageWrapper>
            <Header accent={mode.main}>
                <Logo accent={mode.main}>LikeLion</Logo>
            </Header>
            <ThemeGroup>
                {['blue', 'pink', 'green'].map((c) => (
                    <ThemeBtn
                        key={c}
                        value={c}
                        onClick={handleMode}
                        $color={theme[`${c}Theme`].main}
                        $active={mode.color === c}
                    />
                ))}
            </ThemeGroup>
            <Main>{children}</Main>
            <Footer accent={mode.main}>2026 LIKELION</Footer>
        </PageWrapper>
    </ThemeColorContext.Provider>
  )
}

export default Layout

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  height: 52px;
  background: #fff;
  border-bottom: 1px solid #e4e4e7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

const Logo = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${(p) => p.accent};
  transition: color 0.2s;
`;

const ThemeGroup = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const ThemeBtn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${(p) => p.$active ? p.$color : '#e4e4e7'};
  background: ${(p) => p.$color};
  cursor: pointer;
  transition: border-color 0.15s;
  outline: ${(p) => p.$active ? `2px solid ${p.$color}` : 'none'};
  outline-offset: 2px;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 36px 20px;
`;

const Footer = styled.footer`
  height: 40px;
  background: #fff;
  border-top: 1px solid #e4e4e7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  color: ${(p) => p.accent};
  transition: color 0.2s;
`;
