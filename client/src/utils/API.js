import axios from 'axios';

export default {

    signUpUser: function(newUser) {
        return new Promise((resolve, reject) => {
            // No need to send the username to api/user, because the backend will send you whoever
            // is currently logged in for that session.
            axios.post("/api/users", newUser)
                .then(response => {
                    if (response.data) {
                        resolve(response.data);
                    } else {
                        console.log('Sign-up error');
                    }
                }).catch(error => {
                    console.log('Sign up server error: ');
                    console.log(error);
                    reject(error);
                });
        });
    },
}