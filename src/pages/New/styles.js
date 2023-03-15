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
    overflow-y: hidden;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  overflow: hidden;
`;

export const Form = styled.form`
  margin: 38px 123px;
  padding-right: 20px;
  padding-bottom: 80px;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #FF859B;
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-track {
    margin-bottom: 400px;
    background: transparent;
  }

  > button {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 24px;

    color: #FF859B;
  }

  .input-wrapper {
    margin: 40px 0;
 
    display: flex;
    gap: 40px;
  }

  section {
    margin-top: 40px;

    h2 {
      font-size: 20px;
      line-height: 26px;
      color: #999591;

      margin-bottom: 24px;
    }

    > div {
      display: flex;
      background-color: #0D0C0F;
      border-radius: 8px;
      gap: 16px;
      padding: 16px;
      flex-wrap: wrap;

      div {
        margin: 0;
      }
    }

  }

  .buttons {
    margin-top: 40px;
    display: flex;
    gap: 40px;

    button:first-child {
      color: #FF859B;
      background-color: #0D0C0F;
    }
  }
`;