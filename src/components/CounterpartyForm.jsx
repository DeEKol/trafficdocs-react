import React from 'react';
import { useSubmitForm } from '../hooks/useSubmitForm';
import CounterpartyService from '../services/counterparty.service';

const CounterpartyForm = ({ counterparty, setCounterparty }) => {

  const submitHandler = useSubmitForm(counterparty, setCounterparty, CounterpartyService);

  const elementForm = (key) => {
    return counterparty.id !== '' ? counterparty[key] : 'DEFAULT';
  }

  return (
  <form onSubmit={submitHandler}>
    <select
      name="businessStructure"
      value={elementForm("businessStructure")}
      onChange={e => {
        setCounterparty({ ...counterparty, businessStructure: e.target.value })
        console.log("onChange businessStructure")
        console.log(counterparty);
      }}
    >
      <option value="DEFAULT" disabled>структура</option>
      <option value="ИП">ИП</option>
      <option value="ООО">ООО</option>
      <option value="АО">АО</option>
    </select>
    <input
      type="text"
      placeholder="name"
      value={counterparty.name || ''}
      onChange={e => setCounterparty({ ...counterparty, name: e.target.value })}
    />
    <input
      type="text"
      placeholder="email"
      value={counterparty.email || ''}
      onChange={e => setCounterparty({ ...counterparty, email: e.target.value })}
    />
    <input
      type="text"
      placeholder="inn"
      value={counterparty.inn || ''}
      onChange={e => setCounterparty({ ...counterparty, inn: e.target.value })}
    />
    <input
      type="text"
      placeholder="kpp"
      value={counterparty.kpp || ''}
      onChange={e => setCounterparty({ ...counterparty, kpp: e.target.value })}
    />
    <select
      name="participant"
      value={elementForm("participant")}
      onChange={e => setCounterparty({ ...counterparty, participant: e.target.value })}
    >
      <option value="DEFAULT" disabled>участник</option>
      <option value="ЗАКАЗЧИК">ЗАКАЗЧИК</option>
      <option value="ИСПОЛНИТЕЛЬ">ИСПОЛНИТЕЛЬ</option>
    </select>
    <select
      name="businessStructureBank"
      value={elementForm("businessStructureBank")}
      onChange={e => setCounterparty({ ...counterparty, businessStructureBank: e.target.value })}
    >
      <option value="DEFAULT" disabled>структура банка</option>
      <option value="ИП">ИП</option>
      <option value="ООО">ООО</option>
      <option value="АО">АО</option>
    </select>
    <input
      type="text"
      placeholder="bank"
      value={counterparty.bank || ''}
      onChange={e => setCounterparty({ ...counterparty, bank: e.target.value })}
    />

    <input
      type="text"
      placeholder="bik"
      value={counterparty.bik || ''}
      onChange={e => setCounterparty({ ...counterparty, bik: e.target.value })}
    />
    <input
      type="text"
      placeholder="accountOfBank"
      value={counterparty.accountOfBank || ''}
      onChange={e => setCounterparty({ ...counterparty, accountOfBank: e.target.value })}
    /><input
      type="text"
      placeholder="account"
      value={counterparty.account || ''}
      onChange={e => setCounterparty({ ...counterparty, account: e.target.value })}
    />
    <input
      type="text"
      placeholder="locationIndex"
      value={counterparty.locationIndex || ''}
      onChange={e => setCounterparty({ ...counterparty, locationIndex: e.target.value })}
    />
    <select
      name="subFederalUnit"
      value={elementForm("subFederalUnit")}
      onChange={e => setCounterparty({ ...counterparty, subFederalUnit: e.target.value })}
    >
      <option value="DEFAULT" disabled>субъект</option>
      <option value="ОБЛАСТЬ">ОБЛАСТЬ</option>
      <option value="РЕСПУБЛИКА">РЕСПУБЛИКА</option>  
      <option value="КРАЙ">КРАЙ</option>
      <option value="АО">АО</option>
    </select>
    <input
      type="text"
      placeholder="region"
      value={counterparty.region || ''}
      onChange={e => setCounterparty({ ...counterparty, region: e.target.value })}
    />
    <select
      name="settlement"
      value={elementForm("settlement")}
      onChange={e => setCounterparty({ ...counterparty, settlement: e.target.value })}
    >
      <option value="DEFAULT" disabled>поселение</option>
      <option value="ГОРОД">ГОРОД</option>
      <option value="ДЕРЕВНЯ">ДЕРЕВНЯ</option>
      <option value="СЕЛО">СЕЛО</option>
      <option value="ПОСЁЛОК">ПОСЁЛОК</option>
      <option value="СТАНЦИЯ">СТАНЦИЯ</option>
    </select>
    <input
      type="text"
      placeholder="city"
      value={counterparty.city || ''}
      onChange={e => setCounterparty({ ...counterparty, city: e.target.value })}
    />
      <select
        name="streetUnit"
        value={elementForm("streetUnit")}
        onChange={e => setCounterparty({ ...counterparty, streetUnit: e.target.value })}
      >
        <option value="DEFAULT" disabled>проезд</option>
        <option value="УЛИЦА">УЛИЦА</option>
        <option value="ШОССЕ">ШОССЕ</option>
        <option value="ПРОСПЕКТ">ПРОСПЕКТ</option>
      </select>
      <input
        type="text"
        placeholder="street"
        value={counterparty.street || ''}
        onChange={e => setCounterparty({ ...counterparty, street: e.target.value })}
      />
      <select
        name="houseUnit"
        value={elementForm("houseUnit")}
        onChange={e => setCounterparty({ ...counterparty, houseUnit: e.target.value })}
      >
        <option value="DEFAULT" disabled>здание</option>
        <option value="ДОМ">ДОМ</option>
        <option value="ПОМЕЩЕНИЕ">ПОМЕЩЕНИЕ</option>
      </select>
      <input
        type="text"
        placeholder="house"
        value={counterparty.house || ''}
        onChange={e => setCounterparty({ ...counterparty, house: e.target.value })}
      />
      <select
        name="appartmentUnit"
        value={elementForm("appartmentUnit")}
        onChange={e => setCounterparty({ ...counterparty, appartmentUnit: e.target.value })}
      >
        <option value="DEFAULT" disabled>апартамент</option>
        <option value="КВАРТИРА">КВАРТИРА</option>
        <option value="ОФИС">ОФИС</option>
      </select>
      <input
        type="text"
        placeholder="appartment"
        value={counterparty.appartment || ''}
        onChange={e => setCounterparty({ ...counterparty, appartment: e.target.value })}
      />

      <button type="submit">{counterparty.id ? `Update Counterparty id:${counterparty.id}` : 'Add Counterparty'}</button>
    </form>
  )
}

export default CounterpartyForm;