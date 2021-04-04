import { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/name.svg'
import { Container, Content } from './styles'

interface Headerprops {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: Headerprops) {
    
    
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="control money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
                
            </Content>
        </Container>
    )
}