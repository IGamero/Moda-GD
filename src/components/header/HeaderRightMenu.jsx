import styled from "@emotion/styled";
import "font-awesome/css/font-awesome.min.css";

function HeaderRightMenu() {
    const RightMenuContainer = styled.div`
        width: 33%;
        display: flex;
        justify-content: flex-end;
    `;

    const MarginIco = styled.div`
        margin-left: 25px;
    `;
    return (
        <RightMenuContainer>
            <MarginIco>
                <i className="fa-regular fa-user"></i>
            </MarginIco>
            <MarginIco>
                <i className="fa-regular fa-star"></i>
            </MarginIco>
            <MarginIco>
                <i className="fa-solid fa-bag-shopping"></i>
            </MarginIco>
            <MarginIco>
                <i className="fa-solid fa-magnifying-glass"></i>
            </MarginIco>
        </RightMenuContainer>
    );
}

export default HeaderRightMenu;
