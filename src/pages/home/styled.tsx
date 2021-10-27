import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display:flex;
  align-items: center;
  justify-content: center;

`;

export const Main = styled.div`
  display: flex;
  min-width: 300px;
  width: 60%;


`;


export const LeftContainer = styled.div`
  display: flex;
  position: relative;
  flex:1;
  align-items: center;
  justify-content: center;

`;

export const Image = styled.img`

`;

export const TopText = styled.p`

  position: absolute;
  top: 0.4rem;
  width: 99%;
  height: 10px;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${props=>props.theme.white};


`;

export const BotText = styled.p`
  position: absolute;
  bottom: 2rem;
  width: 100%;
  height: 10px;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${props=>props.theme.white};
  margin-bottom: 10px;


`;



export const RightContainer = styled.div`

  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  border-style: solid;
  border-width: 2px;
  border-color: ${props=>props.theme.black};
  border-radius: 15px;
  margin-left: 15px;
`;

export const Input = styled.input`
  min-width: 300px;
  width: 80%;
  height: 30px;
  border-radius: 1.5rem;
  padding: 0 15px;
  font-size: 0.9rem;
  border-style: solid;
  border-width: 1px;
  border-color: ${props=>props.theme.primary};


`;

export const TextField = styled.div`
  margin: 10px 0;

  label{
    padding-left: 15px;
    font-size: 20px;
    font-weight: bold;
  }
`
