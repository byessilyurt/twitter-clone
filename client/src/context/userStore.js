import axios from 'axios'

export function createUserStore() {
  return {
    user: {},
    isFetching:false,
    async loginUser(userCredentials){
      this.isFetching=true
      console.log(this.isFetching)
      try {
        const res = await axios.post(
          "http://localhost:8800/api/auth/login",
          userCredentials
        );
        this.user = {...res.data}
        this.isFetching=false
        console.log(this.user)
        console.log(this.isFetching)
      } catch (err) {
        this.isFetching=false
        console.log("User not found.");
        console.log(this.isFetching)
      }
    },
    logoutUser(){
      console.log(this.user)
      this.user= {}
      console.log(this.user)
    }

  };
}
