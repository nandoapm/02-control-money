import logoImg from '../../assets/name.svg'
import { Container, Content } from './styles'

export function Header() {
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="control money" />
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}