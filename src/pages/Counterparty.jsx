import React, { useContext, useState } from 'react';
import { Context } from '../context/context';
import { useFetching } from '../hooks/useFetching';
import CounterpartyService from '../services/counterparty.service';
import CounterpartyForm from '../components/CounterpartyForm';
import CounterpartyList from '../components/CounterpartyList';

const Counterparty = () => {
  const { elements, setElements } = useContext(Context);

  const [counterparty, setCounterparty] = useState({
    id: "",
    businessStructure: "",
    name: "",
    email: "",
    inn: "",
    kpp: "",
    participant: "",
    businessStructureBank: "",
    bank: "",
    accountOfBank: "",
    account: "",
    locationIndex: "",
    subFederalUnit: "",
    region: "",
    settlement: "",
    city: "",
    streetUnit: "",
    street: "",
    houseUnit: "",
    house: "",
    appartmentUnit: "",
    appartment: "",
  });

  const [isLoading, error] = useFetching(async () => {
    const response = await CounterpartyService.getAll();
    setElements(response.data);
  })

  return (
    <div>
      <CounterpartyForm
        elements={elements}
        setElements={setElements}
        counterparty={counterparty}
        setCounterparty={setCounterparty}
      />
      {
        error &&
        <h1>Произошла ошибка ${error}</h1>
      }
      {isLoading
        ?
        <h1>Загрузка</h1>
        :
        <CounterpartyList
          elements={elements}
          setElements={setElements}
          counterparty={counterparty}
          setCounterparty={setCounterparty}
        />
      }
    </div>
  )
}

export default Counterparty;