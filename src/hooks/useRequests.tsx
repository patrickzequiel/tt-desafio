import { useContext } from 'react'
import { createContext, ReactNode, useState } from 'react';
import { api } from '../services/api';

type RequestInput = Omit<Request, 'id' | 'createdAt'>;

interface Request {
    id: number;
    title: string;
    price: number;
    clients: string;
    createdAt: string;
}

interface RequestProviderProps {
    children: ReactNode;
};

interface RequestContextData {
    requests: Request[];
    createRequest: (request: RequestInput) => Promise<void>;
}

const RequestContext = createContext<RequestContextData>(
    {} as RequestContextData
    );

export function RequestsProvider({ children }: RequestProviderProps) {
    const [requests, setRequests] = useState<Request[]>([]);

    async function createRequest(RequestInput: RequestInput){
        const response = await api.post('/requests', {
            ...RequestInput,
            createdAt: new Date(),
        })
        const { request } = response.data;

        setRequests([
            ...requests,
            request,
        ])
    }

    return (
        <RequestContext.Provider value={{requests, createRequest}}>
        {children}
        </RequestContext.Provider>
    );
}

export function useRequests() {
    const context = useContext(RequestContext);

    return context;
}