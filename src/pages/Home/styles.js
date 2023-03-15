import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};
`;

export const Content = styled.div`
  grid-area: content;

  padding: 0 123px;
  overflow: hidden;

  .notes {
    height: 100%;
    overflow-y: auto;
    padding-bottom: 135px;
    padding-right: 8px;

    &::-webkit-scrollbar {
      width: 8px;
    }
  
    &::-webkit-scrollbar-thumb {
      background: #FF859B;
      border-radius: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0 37px;

    h2 {
      font-size: 32px;
      font-weight: 400;
    }

    button {
      margin: 0;
      height: 48px;
      width: 200px;
    }
  }
`;
