import api from "./api";

const getAll = () => {
  return api.get("/docs");
}
const getOne = (id) => {
  return api.get("/docs/" + id);
}
const create = (object) => {
  return api.post("/docs", object);
}
const updateById = (id, object) => {
  return api.put("/docs/" + id, object);
}
const deleteById = (id) => {
  return api.delete("/docs/" + id);
}

const DocsService = {
  getAll,
  getOne,
  create,
  updateById,
  deleteById,
}

export default DocsService;