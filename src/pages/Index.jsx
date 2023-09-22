import styled from "@emotion/styled";

function Index() {
    const Main = styled.div`
        min-height: 100px;
        height: 100vh;
        background-image: url("https://www.zimmermann.com/media/wysiwyg/7__Luminosity_Check_Bodice_Skirt__8442TF231_8240SF231.OLCH.Olive-Check.jpg");
    `;
    return (
        <Main>
            <div>Index</div>
        </Main>
    );
}

export default Index;
