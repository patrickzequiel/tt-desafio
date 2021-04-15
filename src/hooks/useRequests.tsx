import { useContext } from 'react'
import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    price: number;
    createdAt: string;
}

type RequestInput = Omit<Transaction, 'id' | 'createdAt'>;

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

export function requestsProvider({ children }: RequestProviderProps) {
    const [requests, setRequests] = useState<Request[]>([]);

    useEffect(() => {
        api.get('requests')
            .then(response => setRequests(response.data.requests))
    }, []);

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