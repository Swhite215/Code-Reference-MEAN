const axios = require("axios");
const secretFile = require("../secrets/example.json");

class CrudAPI {
    constructor() {}

    get_something(categoryId, secondaryCategoryId) {
        let url = `https://api.example.co/api/category/${categoryId}/secondaryCategory/${secondaryCategoryId}`;

        return axios
            .get(url, { headers: { Authorization: secretFile.Bearer_Token } })
            .then(response => {
                return response.data;
            })
            .catch(err => {
                console.log(
                    `Signal Service Error ${err.response.status}:  ${
                        err.response.data.message
                    }`
                );
            });
    }

    get_somethings(siteId) {
        let url = `https://api.signal.co/v2/tms/sites/${siteId}/tags`;

        return axios
            .get(url, { headers: { Authorization: signalSecret.Bearer_Token } })
            .then(response => {
                return response.data;
            })
            .catch(err => {
                console.log(
                    `Signal Service Error ${err.response.status}:  ${
                        err.response.data.message
                    }`
                );
            });
    }

    get_page(siteId, pageId) {
        let url = `https://api.signal.co/v2/tms/sites/${siteId}/pages/${pageId}`;

        return axios
            .get(url, { headers: { Authorization: signalSecret.Bearer_Token } })
            .then(response => {
                return response.data;
            })
            .catch(err => {
                console.log(
                    `Signal Service Error ${err.response.status}:  ${
                        err.response.data.message
                    }`
                );
            });
    }

    get_pages(siteId) {
        let url = `https://api.signal.co/v2/tms/sites/${siteId}/pages`;

        return axios
            .get(url, { headers: { Authorization: signalSecret.Bearer_Token } })
            .then(response => {
                return response.data;
            })
            .catch(err => {
                console.log(
                    `Signal Service Error ${err.response.status}:  ${
                        err.response.data.message
                    }`
                );
            });
    }

    create_tag(siteId, signalObj) {
        let url = `https://api.signal.co/v2/tms/sites/${siteId}/tags`;
        let body = JSON.stringify(signalObj);

        return axios
            .post(url, body, {
                headers: {
                    Authorization: signalSecret.Bearer_Token,
                    "content-type": "application/json"
                }
            })
            .then(response => {
                console.log(`Created Signal Tag: ${response.data.name}`);
                return response.data;
            })
            .catch(err => {
                console.log(
                    `Signal Service Error ${err.response.status}:  ${
                        err.response.statusText
                    }`
                );
            });
    }

    update_tag(siteId, tagId, signalObj) {
        let url = `https://api.signal.co/v2/tms/sites/${siteId}/tags/${tagId}`;
        let body = JSON.stringify(signalObj);

        return axios
            .put(url, body, {
                headers: {
                    Authorization: signalSecret.Bearer_Token,
                    "content-type": "application/json"
                }
            })
            .then(response => {
                console.log(`Updated Signal Tag: ${response.data.name}`);
                return response.data;
            })
            .catch(err => {
                console.log(
                    `Signal Service Error ${err.response.status}:  ${
                        err.response.statusText
                    }`
                );
            });
    }
}

module.exports = new SignalAPI();
