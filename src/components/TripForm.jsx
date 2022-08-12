import React from 'react';
import { useSubmitForm } from '../hooks/useSubmitForm';
import TripService from '../services/trip.service';

const TripForm = ({ trip, setTrip }) => {
  const submitHandler = useSubmitForm(trip, setTrip, TripService);

  const defaultSelect = (key) => {
    return trip.id !== '' ? trip[key] : 'DEFAULT';
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="itinerary"
        value={trip.itinerary || ''}
        onChange={e => setTrip({ ...trip, itinerary: e.target.value })}
      /> 
      <input
        type="date"
        placeholder="date"
        value={trip.date || ''}
        onChange={e => setTrip({ ...trip, date: e.target.value })}
      />
      <input
        type="text"
        placeholder="quantity"
        value={trip.quantity || ''}
        onChange={e => setTrip({ ...trip, quantity: e.target.value })}
      />
      <select
        name="quantityUnit"
        value={defaultSelect("quantityUnit")}
        onChange={e => setTrip({ ...trip, quantityUnit: e.target.value })}
      >
        <option value="DEFAULT" disabled>ед.</option>
        <option value="ШТУК">ШТУК</option>
        <option value="ЧАСОВ">ЧАСОВ</option>
      </select>
      <input
        type="text"
        placeholder="price"
        value={trip.price || ''}
        onChange={e => setTrip({ ...trip, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="consumer"
        value={trip.consumer || ''}
        onChange={e => setTrip({ ...trip, consumer: e.target.value })}
      />
      <input
        type="text"
        placeholder="contractor"
        value={trip.contractor || ''}
        onChange={e => setTrip({ ...trip, contractor: e.target.value })}
      />

      <button type="submit">{trip.id ? `Update Trip id:${trip.id}` : 'Add Trip'}</button>
    </form>
  )
}

export default TripForm;