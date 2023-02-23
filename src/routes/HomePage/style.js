import styled from "styled-components";

export const ZeroState = styled.p`
  margin: 32px auto;
  text-align: center;
  color: #818181;

  & a {
    color: inherit;
  }

  & a:hover {
    color: #121212;
  }

  &:before {
    content: "";
    display: block;
    background-image: url("@/src/assets/assets/images/Studio_Ghibli.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    width: 100%;
    height: 100px;
    margin-bottom: 8px;
  }
`;
