import { Container } from './styles'
import { Tag } from '../Tag'
import { Rating } from '../Rating'

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <Rating />

      <p>Interestelar se passa em um futuro em que a Terra se torna um lugar inabitável. Com a promessa de encontrar um jeito de solucionar o problema, um grupo de exploradores descobrem um buraco negro capaz de proporcionar viagens pelo espaço e pelo tempo, além de outras dimensões, com a qual os humanos nunca tinham sonhado.
      </p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}