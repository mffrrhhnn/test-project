import http from "../http-common";
class Services {
    getAll() {
        return http.get("/Data");
    }
    get(id) {
        return http.get(`/data/${id}`);
    }
    create(data) {
        return http.post("/data", data);
    }
    update(id, data) {
        return http.put(`/data/${id}`, data);
    }
    delete(id) {
        return http.delete(`/data/${id}`);
    }
    deleteAll() {
        return http.delete(`/data`);
    }
    findByTitle(title) {
        return http.get(`/data?title=${title}`);
    }
}
export default new Services();