import axios from "axios";

const BASE_URL = "http://34.239.137.242:8085/record";
// const BASE_URL = "http://localhost:8085/record";

class RecordService{
    getAllRecord(){
        return axios.get(BASE_URL);
    }
    saveRecord(recordData){
        return axios.post(BASE_URL, recordData);
    }
    updateRecord(id, recordData){
        return axios.put(`${BASE_URL}/${id}`, recordData)
    }
    getRecordById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }
    deleteRecord(id){
        return axios.delete(BASE_URL +"/" +id);
    }

}
export default new RecordService();
