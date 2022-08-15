import React, { useContext } from 'react';
import { Context } from '../context/context';
import TripService from '../services/trip.service';
import Button from '../utils/Button';

const TripList = ({ elements, setElements }) => {
  const { setObjectForm } = useContext(Context);

  return (
    <div>
      <ul>
        {elements.map((e, index) => {
          return (
            <li key={index}>
              id={e.id},
              itinerary={e.itinerary},
              date={e.date},
              quantity={e.quantity},
              quantityUnit={e.quantityUnit},
              price={e.price},
              consumer={e.consumer},
              contractor={e.contractor},
              docsId={e.docsId}

              <button onClick={() => Button.removeBtn(e.id, elements, setElements, TripService)}>Удалить</button>
              <button onClick={() => Button.updateBtn(e, setObjectForm)}>Изменить</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TripList;