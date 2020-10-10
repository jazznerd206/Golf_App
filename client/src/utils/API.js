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
        return new Promise((resolve, reject) => {
            axios.post("/api/users/login", user)
                .then(response => {
                    console.log(`this is the response data ${JSON.stringify(response.data)}`)
                    if (response.data) {
                        resolve(response)
                    }
                    else{
                        console.log('log in error')
                    }
                })
                .catch(error => {
                    reject(Error('login server error: ' + error))
                })
            })
        },
    
        logoutUser: function(user) {
            return new Promise((resolve, reject) =>{
                axios.post("/api/users/logout", user)
                .then(response => {
                    if (response.data) {
                        resolve(response)
                    }
                    else{
                        console.log('log in error')
                    }
                })
                .catch(error => {
                    reject(Error('login server error: ' + JSON.stringify(error)))
                })
            })
        
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

    getCourse: function(course) {
        console.log(`course from getCourse API ${course}`)
        return new Promise((resolve, reject) => {
            axios.get(`/api/courses/${course}`)
                .then(response => {
                    if (response.data) {
                        console.log("response.data " + JSON.stringify(response.data));
                        resolve(response)
                    } else {
                        console.log('Course get error');
                    }
                })
                .catch(err => {
                    reject(Error('get course server error: ' + JSON.stringify(err)))
                })
            })
            
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