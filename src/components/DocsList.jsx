import React, { useContext } from 'react';
import { Context } from '../context/context';
import DocsService from '../services/docs.service';
import Button from '../utils/Button';

const DocsList = ({ elements, setElements }) => {
  const { setObjectForm } = useContext(Context);

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
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DocsList;