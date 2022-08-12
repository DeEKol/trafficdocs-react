import React, { useContext } from 'react';
import { Context } from '../context/context';
import CounterpartyService from '../services/counterparty.service';
import Button from '../utils/Button';

const CounterpartyList = ({ elements, setElements }) => {
  const { setObjectForm } = useContext(Context);

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
              <button onClick={() => Button.removeBtn(e.id, elements, setElements)}>Удалить</button>
              
              <button onClick={() => Button.updateBtn(e, setObjectForm)}>Изменить</button>
          </li>
        )})}
      </ul>
    </div>
  )
}

export default CounterpartyList;