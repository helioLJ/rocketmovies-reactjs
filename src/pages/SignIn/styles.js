import styled from "styled-components";
import backgroundImg from '../../assets/something-magical-SdjA-_Xzuxg-unsplash-1.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: #CAC4CF;
  }

  > a {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    align-self: center;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: linear-gradient(0deg, rgba(28, 27, 30, 0.7), rgba(28, 27, 30, 0.7)), url(${backgroundImg}) no-repeat center/cover;
`;
