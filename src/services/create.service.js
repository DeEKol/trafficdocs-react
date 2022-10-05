import api from "./api";

const docsXls = () => {
  return api.get("/create/docs.xls");
}

const CreateService = {
  docsXls
}

export default CreateService;