import axios from "axios";

export const getTheme = (theme) => {
    return theme?.colorScheme === "dark"
}

export const getPrimaryColor = (theme) => {
    return theme?.colors?.orange[6]
}

export const formatCurrency = (price) => {
    return Number(price).toLocaleString()
}

export const checkIfEndwithSlash = (st) => {
    const len = st.length;
    const end = st.substring(len - 1, len)
    const regex = new RegExp(/\//)
    return regex.test(end)
}

export const removeLastSlash = (st) => {
    const len = st.length;
    return st.substring(0, len - 1);
}

export const matchTest = (str1, str2) => {
    let string1 = str1;
    let string2 = str2;

    const str1endswithslash = checkIfEndwithSlash(string1)
    const str2endswithslash = checkIfEndwithSlash(string2)

    if (str1endswithslash) {
        string1 = removeLastSlash(string1)
    }
    if (str2endswithslash) {
        string2 = removeLastSlash(string2)
    }

    const testpath = `^${string1}$`

    const regex = new RegExp(testpath, "gi");

    return regex.test(string2);
}


export const makeRequest = async (url, method, extra_headers, data, params = {}) => {

    const options = {
        method: method,
        url: url,
        headers: {
            // 'Content-Type': 'application/json',
            ...extra_headers
        },
        data: data,
        params: params
    };

    return await axios.request(options).then(response => {
        return {
            "success": response.data
        }
    }).catch(function (error) {
        return {
            "error": error
        }
    });
}


export const makeRequestOne = async (url, method, extra_headers, data, params) => {
    const options = {
        method: method,
        url: url,
        headers: {
            ...extra_headers
        },
        data: data,
        params: params
    };

    return await axios.request(options)
}


export const createImageURl = (file) => {
    return URL.createObjectURL(file);
}


export const toDate = (datestring, full = false) => {
    if (full) {
        return `${new Date(datestring).toDateString()} (${new Date(datestring).toLocaleTimeString()})`
    }
    return new Date(datestring).toDateString()
}

export const limitChars = (word, limit) => {
    if (word?.length <= limit) {
        return word;
    }
    return word?.substring(0, limit) + "...";
}