import api from "./api";

const getAll = () => {
    return api.get("/counterparty");
}
const getOne = (id) => {
    return api.get("/counterparty/" + id);
}
const create = (object) => {
    return api.post("/counterparty", object);
}
const updateById = (id, object) => {
    return api.put("/counterparty/" + id, object);
}
const deleteById = (id) => {
    return api.delete("/counterparty/" + id);
}

const Counterparty = {
    getAll,
    getOne,
    create,
    updateById,
    deleteById,
}

export default Counterparty;