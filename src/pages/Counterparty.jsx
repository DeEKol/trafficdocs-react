import React, { useContext } from 'react';
import { Context } from '../context/context';
import { useFetching } from '../hooks/useFetching';
import CounterpartyService from '../services/counterparty.service';
import CounterpartyForm from '../components/CounterpartyForm';
import CounterpartyList from '../components/CounterpartyList';

const Counterparty = () => {
    const { elements, setElements } = useContext(Context);

    const [isLoading, error] = useFetching(async () => {
        const response = await CounterpartyService.getAll();
        setElements(response.data);
        console.log(error);
    })

    return (
        <div>
            <CounterpartyForm />
            {
                error &&
                <h1>Произошла ошибка ${error}</h1>
            }
            {isLoading
                ?
                <h1>Загрузка</h1>
                :
                <CounterpartyList elements={elements} />
            }
        </div>
    )
}

export default Counterparty;