import axios from 'axios'


export const RegsiterUser = async(info) => {
    try {
        const resp = await axios.post('/auth/register', {
            username: info.username,
            email: info.email,
            password: info.password
        })

        if (resp.data) {
            alert('success')
        }
    } catch (err) {
        alert(err.response.data.message)
    }
}


export const LoginUser = async(info) => {
    try {
        const resp = await axios.post('/auth/login', {

            email: info.email,
            password: info.password
        })

        if (resp.data) {
            alert('success')
        }
    } catch (err) {
        alert(err.response.data.message)
    }
}