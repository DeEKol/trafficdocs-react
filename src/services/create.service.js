import api from "./api";

const docsXls = (id) => {
  return api.get("/create/docs.xls/" + id);
}

const CreateService = {
  docsXls
}

export default CreateService;