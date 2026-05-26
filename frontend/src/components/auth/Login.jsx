import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { serverUrl } from '../../../config.mjs'
import CustomButton from '../button/CustomButton'

export default function Login() {
    const [formData, setformData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const [busy, setBusy] = useState(false)
    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        if (!formData.email.trim() || !formData.password) {
            setError("Enter your email and password to continue.")
            return
        }
        try {
            setBusy(true)
            const response = await axios.post(`${serverUrl}/login`, formData, { headers: { 'Content-Type': 'application/json' } })
            if (response.status === 200) {
                const tokenFromBody = response.data?.data?.token
                const tokenFromHeader = response.headers?.authorization?.split(' ')?.[1]
                const token = tokenFromBody || tokenFromHeader
                if (!token) {
                    setError('Login successful but token was not returned by the server.')
                    return
                }
                localStorage.setItem('token', token)
                navigate('/')
            } else {
                setError(response.data.message || 'Login failed.')
            }
        } catch (error) {
            const msg = error?.response?.data?.message
            if (msg && msg.toLowerCase().includes('invalid')) {
                setError('Incorrect email or password. Check your details and try again.')
            } else if (error?.response?.status === 400) {
                setError(msg || 'Please check your details and try again.')
            } else if (error?.response?.status === 404) {
                setError(msg || 'User not found.')
            } else {
                setError(msg || 'We could not sign you in right now. Please try again in a moment.')
            }
        } finally {
            setBusy(false)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='email' name='email' placeholder='email' value={formData.email} onChange={handleChange} />
                <input type='password' name='password' placeholder='password' value={formData.password} onChange={handleChange} />
                {error && <p>{error}</p>}
                <CustomButton btnTxt={busy ? "Signing in..." : "Login"} />
            </form>
            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    )
}
