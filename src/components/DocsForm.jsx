import React from 'react';
import { useSubmitForm } from '../hooks/useSubmitForm';
import DocsService from '../services/docs.service';

const DocsForm = ({ docs, setDocs }) => {
  const submitHandler = useSubmitForm(docs, setDocs, DocsService);

  const defaultSelect = (key) => {
    return docs.id !== '' ? docs[key] : 'DEFAULT';
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="date"
        placeholder="date"
        value={docs.date || ''}
        onChange={e => setDocs({ ...docs, date: e.target.value })}
      />

      <select
        name="post"
        value={defaultSelect("post")}
        onChange={e => setDocs({ ...docs, post: e.target.value })}
      >
        <option value="DEFAULT" disabled>Статус отправки</option>
        <option value="НЕ_ОТПРАВЛЕНО">НЕ_ОТПРАВЛЕНО</option>
        <option value="ОТПРАВЛЕНО">ОТПРАВЛЕНО</option>
      </select>

      <select
        name="pay"
        value={defaultSelect("pay")}
        onChange={e => setDocs({ ...docs, pay: e.target.value })}
      >
        <option value="DEFAULT" disabled>Статус оплаты</option>
        <option value="НЕ_ОПЛАЧЕНО">НЕ_ОПЛАЧЕНО</option>
        <option value="ОПЛАЧЕНО">ОПЛАЧЕНО</option>
      </select>

      <input
        type="text"
        placeholder="consumer"
        value={docs.consumer || ''}
        onChange={e => setDocs({ ...docs, consumer: e.target.value })}
      />
      <input
        type="text"
        placeholder="contractor"
        value={docs.contractor || ''}
        onChange={e => setDocs({ ...docs, contractor: e.target.value })}
      />

      <button type="submit">{docs.id ? `Update Docs id:${docs.id}` : 'Add Docs'}</button>
    </form>
  )
}

export default DocsForm;