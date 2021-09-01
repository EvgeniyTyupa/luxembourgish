import * as axios from "axios";

const baseURL = 'https://secure.tutorcruncher.com/api/';

const instance = axios.create({
    baseURL: baseURL
});

instance.interceptors.request.use(
    config => {
        config.headers.authorization = `token bbf2cdd80f298e844f6344548aa1ce7199781148`;
        return config;
    }
);

export const formApi = {
    register(formData) {
        let name = formData.name;
        let phone = formData.phone;
        let email = formData.email;

        const data = {
            user: {
                first_name: name,
                last_name: "",
                email: email,
                phone: phone
            },
            send_emails: true
        }

        return instance.post('clients', data).then(response => response.data)
    }
}