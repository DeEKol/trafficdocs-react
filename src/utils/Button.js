//Класс хранит статические методы кнопок.
export default class Button {

  //Функция для кнопка удаления элемента.
  //Принимает id, массив элементов, функцию изменения массива, сервис
  static async removeBtn(id, elements, setElements, service) {
    await service.deleteById(id);
    setElements(elements.filter(element => element.id !== id));
  }

  //Функция для кнопки обновления элемента. Выносит элемент в форму отправки.
  //Принимет элемент и функцию изменения элемента в форме
  static updateBtn(e, setObjectForm) {
    setObjectForm(e);
  }
}