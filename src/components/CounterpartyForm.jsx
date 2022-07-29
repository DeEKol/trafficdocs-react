import React, { useState } from 'react';
import CounterpartyService from '../services/counterparty.service';

const CounterpartyForm = () => {
    const [counterparty, setCounterparty] = useState({
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

    const submitHandler = async (e) => {
        e.preventDefault();
        const newElement = { ...counterparty };
        await CounterpartyService.create(newElement);
        setCounterparty({
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
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="businessStructure"
                value={counterparty.businessStructure || ''}
                onChange={e => setCounterparty({ ...counterparty, businessStructure: e.target.value })}
            />
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
            <input
                type="text"
                placeholder="participant"
                value={counterparty.participant || ''}
                onChange={e => setCounterparty({ ...counterparty, participant: e.target.value })}
            />
            <input
                type="text"
                placeholder="businessStructureBank"
                value={counterparty.businessStructureBank || ''}
                onChange={e => setCounterparty({ ...counterparty, businessStructureBank: e.target.value })}
            />
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
            <input
                type="text"
                placeholder="subFederalUnit"
                value={counterparty.subFederalUnit || ''}
                onChange={e => setCounterparty({ ...counterparty, subFederalUnit: e.target.value })}
            />
            <input
                type="text"
                placeholder="region"
                value={counterparty.region || ''}
                onChange={e => setCounterparty({ ...counterparty, region: e.target.value })}
            />
            <input
                type="text"
                placeholder="settlement"
                value={counterparty.settlement || ''}
                onChange={e => setCounterparty({ ...counterparty, settlement: e.target.value })}
            />
            <input
                type="text"
                placeholder="city"
                value={counterparty.city || ''}
                onChange={e => setCounterparty({ ...counterparty, city: e.target.value })}
            />
            <input
                type="text"
                placeholder="streetUnit"
                value={counterparty.streetUnit || ''}
                onChange={e => setCounterparty({ ...counterparty, streetUnit: e.target.value })}
            />
            <input
                type="text"
                placeholder="street"
                value={counterparty.street || ''}
                onChange={e => setCounterparty({ ...counterparty, street: e.target.value })}
            />
            <input
                type="text"
                placeholder="houseUnit"
                value={counterparty.houseUnit || ''}
                onChange={e => setCounterparty({ ...counterparty, houseUnit: e.target.value })}
            />
            <input
                type="text"
                placeholder="house"
                value={counterparty.house || ''}
                onChange={e => setCounterparty({ ...counterparty, house: e.target.value })}
            />
            <input
                type="text"
                placeholder="appartmentUnit"
                value={counterparty.appartmentUnit || ''}
                onChange={e => setCounterparty({ ...counterparty, appartmentUnit: e.target.value })}
            />
            <input
                type="text"
                placeholder="appartment"
                value={counterparty.appartment || ''}
                onChange={e => setCounterparty({ ...counterparty, appartment: e.target.value })}
            />

            <button type="submit">add Counterparty</button>
        </form>
    )
}

export default CounterpartyForm;