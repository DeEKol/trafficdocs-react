import React, { useContext } from 'react';
import { Context } from '../context/context';
import CreateService from '../services/create.service';
import DocsService from '../services/docs.service';
import Button from '../utils/Button';

const DocsList = ({ elements, setElements }) => {
  const { setObjectForm } = useContext(Context);

  const createDocsXls = async (id) => {
    await CreateService.docsXls(id);
  }

  return (
    <div>
      <ul>
        {elements.map((e, index) => {
          return (
            <li key={index}>
              id={e.id},
              date={e.date},
              post={e.post},
              pay={e.pay},
              consumer={e.consumer},
              contractor={e.contractor}

              <button onClick={() => Button.removeBtn(e.id, elements, setElements, DocsService)}>Удалить</button>
              <button onClick={() => Button.updateBtn(e, setObjectForm)}>Изменить</button>
              <button onClick={() => createDocsXls(e.id)}>Создать документы</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DocsList;