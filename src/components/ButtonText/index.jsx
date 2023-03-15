import { Container } from "./styles";

export function ButtonText({ icon: Icon, size = 22, title, isActive = false, ...rest }) {
  return (
    <Container
      type="button"
      isActive={isActive}
      {...rest}
    >
      {Icon && <Icon size={size} />}
      {title}
    </Container>
  )
}