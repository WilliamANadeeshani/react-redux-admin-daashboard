function loginResponseController(text) {
    return text.text().then(res => {

        if (!text.ok) {
            if (text.status === 400) {
                return Promise.reject(res);
            }
            return Promise.reject(res);
        }
        return Promise.resolve(res);
    });
}

export const controllers = {
    loginResponseController
}