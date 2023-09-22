import styled from "@emotion/styled";
import "font-awesome/css/font-awesome.min.css";

function HeaderContact() {
    const ContactContainer = styled.div`
        width: 33%;
        display: flex;
        justify-content: flex-start;
    `;
    const MarginIco = styled.div`
        margin-left: 25px;
    `;

    return (
        <ContactContainer>
            <div>
                <i className="fa-solid fa-location-dot"></i>
            </div>
            <MarginIco>
                <i className="fa-solid fa-phone"></i>
            </MarginIco>
            <MarginIco>
                <i className="fa-regular fa-envelope"></i>
            </MarginIco>
        </ContactContainer>
    );
}

export default HeaderContact;
