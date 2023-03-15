import { RiSearch2Line } from 'react-icons/ri'
import { Container, Profile } from "./styles";

import { Input } from '../Input'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" icon={RiSearch2Line} />

      <Profile to="/profile">
        <div>
          <strong>Hélio Lúcio</strong>
          <span>sair</span>
        </div>

        <img src="https://github.com/helioLJ.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  )
}