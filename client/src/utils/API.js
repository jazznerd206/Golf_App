import axios from 'axios';

export default {

    signUpUser: function(newUser) {
        console.log('axios post on the API page');
            axios.post("/api/users", newUser)
                .then(response => {
                    if (response.data) {
                        console.log(response.data);
                    } else {
                        console.log('Sign-up error');
                    }
                }).catch(error => {
                    console.log('Sign up server error: ');
                    console.log(error);
                });
    },
}