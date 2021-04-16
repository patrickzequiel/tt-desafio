import Modal from 'react-modal';
import { Container } from './styles'
import { FormEvent, useState } from 'react';
import { useRequests } from '../../hooks/useRequests';

interface RequestModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function RequestModal({ isOpen, onRequestClose }: RequestModalProps) {
    const { createRequest } = useRequests();

    const [title, setTitle] = useState('');
    const [clients, setClients] = useState('')
    const [price, setPrice] = useState(0)

    async function handleCreateNewRequest(event: FormEvent) {
        event.preventDefault();

        await createRequest({
            title,
            clients,
            price,
        })

        setTitle('');
        setClients('');
        setPrice(0);


        onRequestClose();
    }

    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button 
            type="button" 
            onClick={onRequestClose}
            className="react-modal-close"
            >
            </button>

            <Container onSubmit={handleCreateNewRequest}>
                <h2>Formulário de Pedido</h2>

                <input
                    placeholder="Produto"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    placeholder="Cliente"
                    value={clients}
                    onChange={event => setClients(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={price}
                    onChange={event => setPrice(Number(event.target.value))}
                />

                <button type="submit" onClick={handleCreateNewRequest}>
                Cadastrar
                </button>

            </Container>
        </Modal>
        )

}
