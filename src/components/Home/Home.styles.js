import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 5rem;
  text-align: center;
  margin-bottom: 10rem;
  h1 {
    font-weight: bold;
  }
  @media (max-width: 720px) {
    margin-bottom: 2rem;
    padding-top: 7rem;
    h1 {
      font-size: var(--fs-600);
    }
  }
`;
