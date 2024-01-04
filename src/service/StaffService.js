import axios from "axios";

const BASE_URL = "http://34.239.137.242:8085/staff";
class StaffService {
    getAllStaff(){
        return axios.get(BASE_URL);
    }
    saveStaff(staffData){
        return axios.post(BASE_URL, staffData);
    }
    updateStaff(id, staffData){
        return axios.put(`${BASE_URL}/${id}`, staffData)
    }
    getStaffById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }
    deleteStaff(id){
        return axios.delete(BASE_URL +"/" +id);
    }
}
export default new StaffService();