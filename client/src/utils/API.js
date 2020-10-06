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

    loginUser: function(user) {
        console.log(JSON.stringify(user));
        console.log('axios find user post on API page');
        axios.post('/api/login', user)
            .then(response => {
                if (response) {
                    console.log(response.data);
                } else {
                    console.log('Login error');
                }
            }).catch(error => {
                console.log('Login server error: ');
                console.log(error);
            });
        },


    // =======================================
    // UPDATE USER FUNCTION, NOT YET NECESSARY
    // =======================================

    // =======================================
    // DELETE USER FUNCTION, NOT YET NECESSARY
    // =======================================

    designCourse: function(newCourse) {
        console.log('axios post course create');
        axios.post('/api/courses', newCourse)
            .then(response => {
                if (response.data) {
                    console.log(response.data);
                } else {
                    console.log('Course build error');
                }
            }).catch(error => {
                console.log('Course build server error: ');
                console.log(error);
            });
    },

    // =======================================
    // UPDATE COURSE FUNCTION, NOT YET NECESSARY
    // =======================================

    // =======================================
    // DELETE COURSE FUNCTION, NOT YET NECESSARY
    // =======================================

    addHole: function(newHole) {
        console.log('axios post hole create');
        axios.post('/api/holes', newHole)
            .then(response => {
                if (response.data) {
                    console.log(response.data);
                } else {
                    console.log('Hole build error');
                }
            }).catch(error => {
                console.log('Hole build server error: ');
                console.log(error);
            });
    }

    // =======================================
    // UPDATE HOLE FUNCTION, NOT YET NECESSARY
    // =======================================

    // =======================================
    // DELETE HOLE FUNCTION, NOT YET NECESSARY
    // =======================================

}