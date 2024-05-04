import { axiosApiCall } from "../../utility/axiosHelper";


const user_api_url = `${import.meta.env.VITE_APP_BASE_URL}/api/user`

// public route 

// SignUp

export const signUpUser = (userObj) =>{

    return axiosApiCall({
        method: "post",
        url: user_api_url,
        data: userObj,
    })
}

// verify user email (from verification link)

export const verifyUser = (verificationData) =>{

    return axiosApiCall({
      method: "post",
      url: `${user_api_url}/verify-email`,
      data: verificationData
    })
}

// user login 

export const userLogin = (userObj) =>{
    return axiosApiCall({
      method: 'post',
      url: `${user_api_url}/login`,
      data: userObj  
    })
}

// private route


export const getNewAccessJwt = () =>{
    return  axiosApiCall({
          method:"get",
          url: `${user_api_url}/accessjwt`,
          isPrivate: true,
          useRefreshToken: true,
      })
}

export const getUser = () =>{

    return axiosApiCall({
      method: 'get',
      url: user_api_url,
      isPrivate: true
    })
}