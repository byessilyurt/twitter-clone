import axios from 'axios'

export function createUserStore() {
  return {
    user: {},
    isFetching:false,
    async loginUser(userCredentials){
      this.isFetching=true
      try {
        const res = await axios.post(
          "http://localhost:8800/api/auth/login",
          userCredentials
        );
        this.user = {...res.data}
        this.isFetching=false
      } catch (err) {
        this.isFetching=false
      }
    },
    logoutUser(){
      this.user= {}
    }

  };
}
