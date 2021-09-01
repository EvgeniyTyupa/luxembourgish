import * as axios from "axios";

const baseURL = 'https://v1.nocodeapi.com/nadai/google_sheets/QTobHYbteUwfgQfQ?tabId=new_orders&api_key=GHCmpNtnTEhcSbDjA';

export const googleApi = {
    saveDataToGoogleSheet(formData){
        let name = formData.name;
        let phone = formData.phone;
        let email = formData.email;
        let job = formData.job;
        let why = formData.why;
        let url = formData.url;

        return axios.post(baseURL, JSON.stringify([[name, phone, email, job, why, url]]), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.data);
    }
}