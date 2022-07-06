import api from "./api";

const getAll = () => {
    return api.get("/trip");
}

const TripService = {
    getAll,
}

export default TripService;