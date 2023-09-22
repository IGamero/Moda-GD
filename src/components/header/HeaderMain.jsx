import { useState } from "react";

import styled from "@emotion/styled";

import HeaderContact from "./HeaderContact";
import HeaderLogo from "./HeaderLogo";
import HeaderRightMenu from "./HeaderRightMenu";
import HeaderNavBar from "./HeaderNavBar";
import HeaderDropdown from "./HeaderDropdown";

function HeaderMain({ setBlur }) {
    const [toggleDropDown, setToggleDropDown] = useState(false);
    const [currentNavSelection, setCurrentNavSelection] = useState(0);

    const HeaderContainer = styled.header`
        z-index: 99999;
        position: fixed;
        width: 100%;
    `;

    const HeaderTop = styled.div`
        background-color: var(--white-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 25px;
    `;

    const HeaderBottom = styled.div``;
    return (
        <>
            <HeaderContainer>
                <HeaderTop>
                    {/* Botones izquierda header */}
                    <HeaderContact />
                    {/* Logo header */}
                    <HeaderLogo />
                    {/* Botones derecha header */}
                    <HeaderRightMenu />
                </HeaderTop>
                <HeaderBottom>
                    <HeaderNavBar
                        setToggleDropDown={setToggleDropDown}
                        setCurrentNavSelection={setCurrentNavSelection}
                        setBlur={setBlur}
                        // setBtnHover={setBtnHover}
                    />
                </HeaderBottom>
                {toggleDropDown && (
                    <HeaderDropdown
                        setToggleDropDown={setToggleDropDown}
                        currentNavSelection={currentNavSelection}
                        setBlur={setBlur}
                    />
                )}
            </HeaderContainer>
        </>
    );
}

export default HeaderMain;
