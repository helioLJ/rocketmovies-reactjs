import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Content, } from './styles'

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { Button } from '../../components/Button'

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <div>
          <h2>Meus filmes</h2>
          <Button icon={FiPlus} title="Adicionar filme" />
        </div>

        <section className="notes">
          <Note data={{
            title: "Interestellar",
            rating: "4",
            tags: [
              { id: '1', name: 'drama' },
              { id: '2', name: 'família' },
            ]
          }}
          />
          <Note data={{
            title: "Interestellar",
            rating: "4",
            tags: [
              { id: '1', name: 'drama' },
              { id: '2', name: 'família' },
            ]
          }}
          />
          <Note data={{
            title: "Interestellar",
            rating: "4",
            tags: [
              { id: '1', name: 'drama' },
              { id: '2', name: 'família' },
            ]
          }}
          />
          <Note data={{
            title: "Interestellar",
            rating: "4",
            tags: [
              { id: '1', name: 'drama' },
              { id: '2', name: 'família' },
            ]
          }}
          />
          <Note data={{
            title: "Interestellar",
            rating: "4",
            tags: [
              { id: '1', name: 'drama' },
              { id: '2', name: 'família' },
            ]
          }}
          />
          <Note data={{
            title: "Interestellar",
            rating: "4",
            tags: [
              { id: '1', name: 'drama' },
              { id: '2', name: 'família' },
            ]
          }}
          />
        </section>
      </Content>

    </Container>
  )
}