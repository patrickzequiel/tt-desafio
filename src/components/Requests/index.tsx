import { Container } from "./styles";
import { useRequests } from "../../hooks/useRequests";

export function Requests() {
    const {requests} = useRequests();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {requests.map(request => (
                        <tr key={request.id}>
                            <td>{request.title}</td>
                            <td>
                                {/* {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(request.price)} */}
                            </td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(request.createdAt)
                                )}
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )

}