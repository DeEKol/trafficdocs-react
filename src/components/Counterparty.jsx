import React, { useContext } from 'react';
import { Context } from '../context/context';
import { useFetching } from '../hooks/useFetching';
import CounterpartyService from '../services/counterparty.service';
import CounterpartyForm from './CounterpartyForm';
import CounterpartyList from './CounterpartyList';

const Counterparty = () => {
    const { elements, setElements } = useContext(Context);

    const [isLoading, error] = useFetching(async () => {
        const response = await CounterpartyService.getAll();
        setElements(response.data);
    })

    return (
        <div>
            <CounterpartyForm />
            <CounterpartyList elements={elements} />
        </div>
    )
}

export default Counterparty;