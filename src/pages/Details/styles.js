import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: "header"
                       "content";
  
  > main {
    grid-area: content;
    overflow: hidden;
    padding: 64px 0;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  margin-inline: 123px;
  padding-right: 10px;

  display: flex;
  flex-direction: column;
  overflow-y: auto;

  height: 100%;
  
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

  > button:first-child {
    display: flex;
    align-items: center;
    color: #FF859B;
    gap: 5px;
    align-self: flex-start;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }

  .tags {
    margin: 40px 0;

    span {
      background-color: #282124;    
    }
  }
`;

export const Infos = styled.header`
  margin-top: 24px;
  width: 332px;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    h1 {
      font-size: 32px;
    }
    
    svg {
      font-size: 20px;
    }
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      height: 20px;
      width: 20px;
      border-radius: 50%;
    }

    p:nth-child(2) {
      margin-right: 2px;
    }

    svg {
      color: #FF859B;
    }
  }
`;