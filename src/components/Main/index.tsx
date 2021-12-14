import * as S from './styles'

const Main = ({
  title = 'Storage Manager',
  description = 'A simple tool to manage your storage'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
