import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: rgba(255, 133, 155, 0.05);

  border: none;
  border-radius: 10px;

  padding: 32px;

  margin-bottom: 16px;
  text-align: left;

  > h1 {
    flex: 1;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    color: #999591;
    font-weight: 400;
    font-size: 16px;
    margin-top: 15px;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 26px;
  }
`;