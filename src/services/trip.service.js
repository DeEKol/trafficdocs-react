import api from "./api";

const getAll = () => {
  return api.get("/trip");
}
const getOne = (id) => {
  return api.get("/trip/" + id);
}
const create = (object) => {
  return api.post("/trip", object);
}
const updateById = (id, object) => {
  return api.put("/trip/" + id, object);
}
const deleteById = (id) => {
  return api.delete("/trip/" + id);
}

const TripService = {
  getAll,
  getOne,
  create,
  updateById,
  deleteById,
}

export default TripService;