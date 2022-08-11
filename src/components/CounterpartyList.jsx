import React from 'react';
import CounterpartyService from '../services/counterparty.service';

const CounterpartyList = ({ elements, setElements }) => {

    const removeBtn = async (id) => {
        await CounterpartyService.deleteById(id);
        
        setElements(elements.filter(element => element.id !== id));
    }

    return (
        <div>
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
                            <button onClick={() => removeBtn(e.id)}>Удалить</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CounterpartyList;