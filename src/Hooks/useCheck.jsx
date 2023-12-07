import { useEffect, useState } from "react";

const useCheck = email => {

    const [check, setCheck] = useState('')
    const [adminLoading, setAdminLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/alluser/check/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // localStorage.setItem('accessToken', data.isAdmin)
                    // console.log(data.accessToken)
                    console.log(data)
                    setCheck(data.isCheck)
                    setAdminLoading(false)
                })
        }
    }, [email])

    return [check, adminLoading];
}

export default useCheck;