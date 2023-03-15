import { FiArrowLeft } from "react-icons/fi"

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <ButtonText title="Voltar" icon={FiArrowLeft} size={16} />
          <h1>Novo filme</h1>

          <div className="input-wrapper">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" type="number" />
          </div>
            <Textarea placeholder="Observações" />

          <section>
            <h2>Marcadores</h2>
            <div>
              <NoteItem value="https://rocketseat.com.br" />
              <NoteItem isNew placeholder="Novo link" />
              <NoteItem value="https://rocketseat.com.br" />
              <NoteItem isNew placeholder="Novo link" />
              <NoteItem value="https://rocketseat.com.br" />
              <NoteItem isNew placeholder="Novo link" />
              <NoteItem value="https://rocketseat.com.br" />
              <NoteItem isNew placeholder="Novo link" />
              <NoteItem value="https://rocketseat.com.br" />
              <NoteItem isNew placeholder="Novo link" />
              <NoteItem value="https://rocketseat.com.br" />
              <NoteItem isNew placeholder="Novo link" />
            </div>
          </section>

          <div className="buttons">
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}