import axios from 'axios';

export default {

    findUser: function(userID) {
        console.log(`api axios post ${userID}`);
        if (userID === undefined) {
            console.log(`undefined user`)
            return(null);
        }
        return new Promise((resolve, reject) => {
            axios.get(`/api/users/${userID}`)
            .then(response => {
                // console.log(`response.data from finduser promise API ${JSON.stringify(response.data)}`)
                if (response.data) {
                    resolve(response)
                }
                else{
                    console.log('find user error')
                }
            })
            .catch(error => {
                reject(Error('find user server error: ' + JSON.stringify(error)))
            })
        })
    },

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
        // console.log(JSON.stringify(user));
        // console.log('axios find user post on API page');
        return new Promise((resolve, reject) => {
            axios.post("/api/users/login", user)
                .then(response => {
                    // console.log(`this is the response data ${JSON.stringify(response.data)}`)
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
                    reject(Error('logout server error: ' + JSON.stringify(error)))
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
        // console.log(`course from getCourse API ${course}`)
        return new Promise((resolve, reject) => {
            axios.get(`/api/courses/${course}`)
                .then(response => {
                    if (response.data) {
                        // console.log("response.data " + JSON.stringify(response.data));
                        resolve(response)
                    } else {
                        // console.log('Course get error');
                    }
                })
                .catch(err => {
                    reject(Error('get course server error: ' + JSON.stringify(err)))
                })
            })
            
        },
    
    getCourses: function(course) {
        // console.log(`course from getCourse API ${course}`)
        return new Promise((resolve, reject) => {
            axios.get(`/api/courses`)
                .then(response => {
                    if (response.data) {
                        // console.log("response.data " + JSON.stringify(response.data));
                        resolve(response)
                    } else {
                        // console.log('Course get error');
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
                    // console.log(response.data);
                } else {
                    console.log('Hole build error');
                }
            }).catch(error => {
                console.log('Hole build server error: ');
                console.log(error);
            });
    },

    // =======================================
    // UPDATE HOLE FUNCTION, NOT YET NECESSARY
    // =======================================

    // =======================================
    // DELETE HOLE FUNCTION, NOT YET NECESSARY

    // =======================================
    // GET ALL ROUNDS
    // =======================================
    getAllScoresWhere: function() {
        // console.log(`api axios post get all scores`);
        return new Promise((resolve, reject) => {
            axios.get(`/api/userRounds`)
            .then(response => {
                // console.log(`response.data from get all scores where ${JSON.stringify(response.data)}`)
                if (response.data) {
                    resolve(response)
                }
                else{
                    console.log('get all scores where user error')
                }
            })
            .catch(error => {
                reject(Error('get all scores where server error: ' + JSON.stringify(error)))
            })
        })
    },
    // =======================================

    // =======================================
    // GET ROUNDS BY USER ID
    // =======================================
    getRounds: function(userID) {
        console.log(`api axios post ${userID}`);
        if (userID === undefined) {
            console.log(`undefined user`)
            return(null);
        }
        return new Promise((resolve, reject) => {
            axios.get(`/api/userRounds/${userID}`)
            .then(response => {
                console.log(`response.data from finduser promise API ${JSON.stringify(response.data)}`)
                if (response.data) {
                    resolve(response)
                }
                else{
                    console.log('find user error')
                }
            })
            .catch(error => {
                reject(Error('find user server error: ' + JSON.stringify(error)))
            })
        })
    },
    // =======================================

    
    // =======================================
    // CREATE NEW USER ROUND
    // =======================================

    createNewRound: function(newUserRound) {
        console.log('axios post create round on the API page');
        axios.post("/api/userRounds", newUserRound)
            .then(response => {
                if (response.data) {
                    console.log(response.data);
                } else {
                    console.log('create user round error');
                }
            }).catch(error => {
                console.log('create user round server error: ');
                console.log(error);
            });
    },

    // =======================================
    // =======================================
    // CREATE NEW USER ROUND
    // =======================================

    createNewHole: function(newUserHole) {
        console.log('axios post create round on the API page');
        axios.post("/api/userHoles", newUserHole)
            .then(response => {
                if (response.data) {
                    console.log(response.data);
                } else {
                    console.log('create user round error');
                }
            }).catch(error => {
                console.log('create user round server error: ');
                console.log(error);
            });
    },

    // =======================================


}