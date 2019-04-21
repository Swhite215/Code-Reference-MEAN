const axios = require("axios");
const fs = require("fs");
const adobeSecret = require("../secrets/adobe_secret.json");

//Link to Adobe Launch Documentation - https://developer.adobelaunch.com/api/
class AdobeAPI {
    constructor() {
        this.token = JSON.parse(
            fs.readFileSync("../secrets/token.json", "UTF-8")
        );
        this.headers = {
            Accept: "application/vnd.api+json;revision=1",
            "Content-Type": "application/vnd.api+json",
            "X-Api-Key": adobeSecret.X_Api_Key,
            Authorization: this.token.access_token
        };
        this.url = "";
    }

    async get_bearer() {
        let url =
            "https://adobeioruntime.net/api/v1/web/io-solutions/default/jwt";
        let body = adobeSecret.client_secret;
        let headers = {
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded"
        };

        return axios
            .post(url, body, headers)
            .then(response => {
                fs.writeFileSync(
                    "../secrets/token.json",
                    JSON.stringify(response.data)
                );
                this.token = response.data;
                this.headers.Authorization = this.token.access_token;
            })
            .catch(err => {
                console.log(
                    `Adobe Service Error: ${err.response.status}: ${
                        err.response.data.message
                    }`
                );
            });
    }

    generateRequestURL(objectType, objectId, secondaryObjectType = null) {
        if (secondaryObjectType) {
            this.url = `https://reactor.adobe.io/${objectType}/${objectId}/${secondaryObjectType}`;
            return this;
        } else {
            this.url = `https://reactor.adobe.io/${objectType}/${objectId}`;
            return this;
        }
    }

    get() {
        return axios
            .get(this.url, { headers: this.headers })
            .then(response => {
                return response.data;
            })
            .catch(err => {
                if (
                    err.response.statusText == "Unauthorized" ||
                    err.response.statusText == "Forbidden"
                ) {
                    console.log(`Service Token Error: Getting New Token`);
                    this.get_bearer();
                } else {
                    console.log(
                        `Adobe Service Error ${err.response.status}:  ${
                            err.response.data.message
                        }`
                    );
                }
            });
    }

    post(ruleObject) {
        let body = JSON.stringify(ruleObject);

        return axios
            .post(this.url, body, { headers: this.headers })
            .then(response => {
                return response.data;
            })
            .catch(err => {
                console.log(err);
                console.log(
                    `Adobe Service Error ${err.response.status}:  ${
                        err.response.data.message
                    }`
                );
            });
    }

    patch(ruleObject) {
        let body = JSON.stringify(ruleObject);

        return axios
            .patch(this.url, body, { headers: this.headers })
            .then(response => {
                return response.data;
            })
            .catch(err => {
                console.log(err);
                console.log(
                    `Adobe Service Error ${err.response.status}:  ${
                        err.response.data.message
                    }`
                );
            });
    }

    delete() {
        return axios
            .delete(this.url, { headers: this.headers })
            .then(response => {
                return response;
            })
            .catch(err => {
                if (
                    err.response.statusText == "Unauthorized" ||
                    err.response.statusText == "Forbidden"
                ) {
                    console.log(`Service Token Error: Getting New Token`);
                    this.get_bearer();
                } else {
                    console.log(
                        `Adobe Service Error ${err.response.status}:  ${
                            err.response.data.message
                        }`
                    );
                }
            });
    }
}

module.exports = new AdobeAPI();
