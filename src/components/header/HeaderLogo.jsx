import styled from "@emotion/styled";

function HeaderLogo() {
    const LogoContainer = styled.div`
    padding: 16px 0;
    `
  return (
    <>
      <LogoContainer>
        <img
          src="https://www.zimmermann.com/static/version1692587267/frontend/tryzens/zimmermann/en_IE/images/icons/logo.svg"
          alt="logo"
        />
      </LogoContainer>
    </>
  );
}

export default HeaderLogo;
