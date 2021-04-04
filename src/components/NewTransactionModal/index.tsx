
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import { Container, TransitionTypeContainer, RadioBox } from './styles'
import { useTransactions } from '../../hooks/useTransactionst';
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose } :NewTransactionModalProps) {
    const { createTransaction } = useTransactions()

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event:FormEvent) {
        event.preventDefault()
        
        await createTransaction({
            title,
            type,
            amount,
            category,
        })
        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onRequestClose()
        
    }

    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay" //passar classe para estilizar do zero
            className="react-modal-content" //passar classe para estilizar do zero
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar Modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)}/>
                <input type="number" placeholder="Valor" value={amount} onChange={event => setAmount(Number(event.target.value))} />
                
                <TransitionTypeContainer>
                    <RadioBox type="button" onClick={() => setType('deposit')} isActive={type === 'deposit'} activeColor="green">
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox type="button" onClick={() => setType('withdraw')} isActive={type === 'withdraw'} activeColor="red">
                        <img src={outcomeImg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>
                    
                </TransitionTypeContainer>

                <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
                <button type="submit">Cadastrar</button>
            </Container>
          

      </Modal>
    )

}