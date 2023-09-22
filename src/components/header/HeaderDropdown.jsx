import styled from "@emotion/styled";

import Content0 from "./dropdown/Content0";

function HeaderDropdown({ setToggleDropDown, currentNavSelection, setBlur }) {
    const HeaderDropdownContainer = styled.div`
        position: fixed;
        top: 90px;
        width: 100%;
        background-color: var(--white-color);
    `;

    const Container = styled.div`
        width: 100%;
    `;

    const BreakDropDropDown = styled.div`
        width: 100%;
        height: 20px;
        /* background-color: red; */
    `;

    return (
        <HeaderDropdownContainer
        // onMouseOut={() => {
        //     setToggleDropDown(true);
        //     console.log("fuera");
        //     {
        //         /* RECUPERAR FUNCIONALIDAD poner "false" */
        //     }
        //     setBlur(false);
        // }}
        >
            <Container>
                <Content0 />
            </Container>
            <BreakDropDropDown
                onMouseEnter={() => {
                    setToggleDropDown(false);
                    setBlur(false);
                }}
            />
        </HeaderDropdownContainer>
    );
}

export default HeaderDropdown;
