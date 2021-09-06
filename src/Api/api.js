import * as axios from "axios";

const baseURL = `https://${window.location.hostname}/server.php`;
// const baseURL = `http://localhost:3001/server.php`;
const tableURL = 'https://v1.nocodeapi.com/nadai/google_sheets/kQuHlFXmviaDWSmr?tabId=sheet1&api_key=GHCmpNtnTEhcSbDjA';

const instance = axios.create({
    baseURL: baseURL
});

instance.interceptors.request.use(
    config => {
        config.headers.authorization = `token ${process.env.REACT_APP_API_TOKEN}`;
        return config;
    }
);

export const formApi = {
    register(formData) {
        const { name, phone, email, url } = formData

        const data = {
            user: {
                first_name: name,
                last_name: "test",
                email: email,
                phone: phone
            },
            send_emails: true
        }

        // return instance.post('', data).then(response => 
            
        //     }).then(response => response.data)
        // )
        return axios.post(tableURL, JSON.stringify([[name, phone, email, url]]), {
            headers: {
                'Content-Type': 'application/json'
        }})
    }
}