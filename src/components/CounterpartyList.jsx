import React, { useState } from 'react';
import CounterpartyService from '../services/counterparty.service';

const CounterpartyList = () => {
    const [elements, setElements] = useState([]);

    const getAll = async () => {
        const response = await CounterpartyService.getAll();
        console.log(response.data);

        setElements(response.data);
    }
    return (
        <div>
            <button onClick={getAll}>Counterparty</button>
            <ul>
                {elements.map(e => {
                    return (
                        <li key={e.id}>
                            id={e.id},
                            businessStructure={e.businessStructure},
                            name={e.name},
                            email={e.email},
                            inn={e.inn},
                            kpp={e.kpp},
                            participant={e.participant},
                            businessStructureBank={e.businessStructureBank},
                            bank={e.bank},
                            bik={e.bik},
                            accountOfBank={e.accountOfBank},
                            account={e.account},
                            locationIndex={e.locationIndex},
                            subFederalUnit={e.subFederalUnit},
                            region={e.region},
                            settlement={e.settlement},
                            city={e.city},
                            streetUnit={e.streetUnit},
                            street={e.street},
                            houseUnit={e.houseUnit},
                            house={e.house},
                            appartmentUnit={e.appartmentUnit},
                            appartment={e.appartment}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CounterpartyList;