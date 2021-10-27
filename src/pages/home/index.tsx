import React, { useState } from 'react';
import {
  Container,
  Main,
  Image,
  LeftContainer,
  RightContainer,
  Input,
  TopText,
  BotText,
  TextField
} from './styled'



const Home: React.FC = () => {

  const [topText,setTopText] = useState('')
  const [botText,setBotText] = useState('')

  return (
    <Container>

      <Main>
        <LeftContainer>
          <TopText>
            {topText}
          </TopText>
          <Image src='http://i.imgflip.com/1bij.jpg' alt='Qualquer coisa' />
          <BotText>
            {botText}
          </BotText>

        </LeftContainer>
        <RightContainer>

          <TextField>
            <label>Top</label>
            <Input type='text'
              value={topText}
              onChange={(e)=>setTopText(e.target.value.toUpperCase())}
              maxLength={50}
            />
          </TextField>

          <TextField>
            <label>Bottom</label>
            <Input
              type='text'
              value={botText}
              onChange={(e)=>setBotText(e.target.value.toUpperCase())}
              maxLength={50}
            />
          </TextField>

        </RightContainer>
      </Main>

    </Container>
  );
}

export default Home;
