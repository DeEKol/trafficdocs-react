import CounterpartyService from "../services/counterparty.service";

export default class Button {

  static async removeBtn(id, elements, setElements) {
    await CounterpartyService.deleteById(id);
    setElements(elements.filter(element => element.id !== id));
  }

  static updateBtn(e, setObjectForm) {
    setObjectForm(e);
  }
}