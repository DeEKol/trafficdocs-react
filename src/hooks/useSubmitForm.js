import { useContext, useEffect } from "react"
import { Context } from "../context/context"

/*
  Хук, использующийся для формы.
  Принимает (элемент, функция изменения элемента, Сервис класс)
  Возвращает функцию отправки.
*/

export const useSubmitForm = (element, setElement, service) => {
  const { objectForm, elements, setElements } = useContext(Context);

  useEffect(() => {
    setElement(objectForm);
  }, [objectForm])

  const createElement = (newElement) => {
    const findIndex = elements.findIndex(item => item.id === newElement.id);
    if (findIndex === -1) {
      setElements([...elements, newElement]);
    } else {
      elements[findIndex] = newElement;
      setElements([...elements]);
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const newElement = { ...element };
    console.log(newElement);

    if (objectForm.id === undefined || objectForm.id !== element.id) {
      await service.create(newElement).then(response => {
        createElement(response.data);
      })
    } else {
      await service.updateById(element.id, newElement).then(response => {
        createElement(response.data);
      })
    }

    //Занулил объект
    for(let key in element) {
      element[key] = "";
    }
    setElement(element);
  }

  return submitHandler;
}