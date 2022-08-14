import React, { useContext, useState } from 'react';
import DocsForm from '../components/DocsForm';
import DocsList from '../components/DocsList';
import { Context } from '../context/context';
import { useFetching } from '../hooks/useFetching';
import DocsService from '../services/docs.service';

const Docs = () => {
  const { elements, setElements } = useContext(Context);

  const [docs, setDocs] = useState({
    id: "",
    date: "",
    post: "",
    pay: "",
    consumer: "",
    contractor: "",
  });

  const [isLoading, error] = useFetching(async () => {
    const response = await DocsService.getAll();
    setElements(response.data);
  })

  return (
    <div>
      <DocsForm
        elements={elements}
        setElements={setElements}
        docs={docs}
        setDocs={setDocs}
      />
      {
        error &&
        <h1>Произошла ошибка ${error}</h1>
      }
      {isLoading
        ?
        <h1>Загрузка</h1>
        :
        <DocsList
          elements={elements}
          setElements={setElements}
          docs={docs}
          setDocs={setDocs}
        />
      }
    </div>
  )
}

export default Docs;