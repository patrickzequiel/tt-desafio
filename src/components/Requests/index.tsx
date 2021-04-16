import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
// import { useRequests } from "../../hooks/useRequests";

interface Request {
    id: number;
    title: string;
    price: number;
    clients: number;
    createdAt: string;
}

export function Requests() {
    // const {requests} = useRequests();

    const [requests, setRequests] = useState<Request[]>([]);


    useEffect(() => {
        async function loadProducts() {
          const response = await api.get<Request[]>('requests')
       
    
        const data = response.data.map(request => ({
          ...request,
        }))

        console.log(response);
    
        setRequests(data)
        console.log(setRequests);

      }
        loadProducts();
      }, []);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Número do Pedido</th>
                        <th>Cliente</th>
                        <th>Valor Total</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {requests.map(request => (
                        <tr key={request.id}>
                            <td>{request.title}</td>
                            <td>{request.clients}</td>
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