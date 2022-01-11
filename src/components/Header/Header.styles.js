import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: hsl(var(--primary-color));
  height: 100px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: fixed;
  z-index: 1;
  @media (max-width: 720px) {
    min-height: 100px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1 {
    font-size: var(--fs-500);
  }
  @media (max-width: 720px) {
    flex-direction: column;
  }
  @media (min-width: 860px) {
    h1 {
      font-size: var(--fs-600);
    }
  }
  @media (min-width: 1000px) {
    h1 {
      font-size: var(--fs-700);
    }
  }
  .header_nav:hover {
    color: #dcdcdd;
  }
`;

export const Menu = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: var(--fs-300);
  @media (max-width: 720px) {
    margin-bottom: 1rem;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }
  @media (min-width: 860px) {
    font-size: var(--fs-500);
    font-weight: 800;
    gap: 1rem;
  }
  .header_nav:hover {
    color: #dcdcdd;
  }
  .line {
    width: 2px;
    background-color: #fff;
    height: 60%;
  }
`;
export const ProfileLink = styled.div`
  font-size: var(--fs-300);
  @media (min-width: 860px) {
    font-size: var(--fs-500);
  }
  :hover {
    color: #dcdcdd;
  }
  cursor: pointer;
`;
export const StyledLogout = styled.div`
  cursor: pointer;
  text-align: center;
  justify-content: center;
  :hover {
    color: #dcdcdd;
  }
`;

export const StyledForm = styled.form`
  font-size: var(--fs-300);
  @media (min-width: 860px) {
    font-size: var(--fs-500);
  }
  :button {
    font-size: var(--fs-500);
  }
  cursor: pointer;
`;
