import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
function Protectedroute(props) {
    const { Component } = props
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('token')
        if (!login) {
            navigate('/login')
        }
    }, [])
    return (
        <>
            <Component />
        </>
    )
}
export default Protectedroute