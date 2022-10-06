import React, { useContext, useState } from 'react';
import TripForm from '../components/TripForm';
import TripList from '../components/TripList';
import { Context } from '../context/context';
import { useFetching } from '../hooks/useFetching';
import TripService from '../services/trip.service';

const Trip = () => {
  const { elements, setElements } = useContext(Context);

  const [trip, setTrip] = useState({
    id: "",
    itinerary: "",
    date: "",
    quantity: "",
    quantityUnit: "",
    price: "",
    consumer: "",
    contractor: "",
    docsId: "",
  });

  const [isLoading, error] = useFetching(async () => {
    const response = await TripService.getAll();
    setElements(response.data);
  })

  return (
    <div>
      <h2>Рейсы</h2>
      <TripForm
        elements={elements}
        setElements={setElements}
        trip={trip}
        setTrip={setTrip}
      />
      {
        error &&
        <h1>Произошла ошибка ${error}</h1>
      }
      {isLoading
        ?
        <h1>Загрузка</h1>
        :
        <TripList
          elements={elements}
          setElements={setElements}
          trip={trip}
          setTrip={setTrip}
        />
      }
    </div>
  )
}

export default Trip;