import * as axios from "axios";

const baseURL = `https://${window.location.hostname}/server.php`;
// const baseURL = `http://localhost:3001/server.php`;

const instance = axios.create({
    baseURL: baseURL
});

// instance.interceptors.request.use(
//     config => {
//         config.headers.authorization = `token ${process.env.REACT_APP_API_TOKEN}`;
//         return config;
//     }
// );

export const formApi = {
    register(formData) {
        let name = formData.name;
        let phone = formData.phone;
        let email = formData.email;

        const data = {
            user: {
                first_name: name,
                last_name: "test",
                email: email,
                phone: phone
            },
            send_emails: true
        }

        return instance.post('', data).then(response => response.data)
    }
}