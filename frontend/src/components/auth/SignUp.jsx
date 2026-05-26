import React, { useState } from 'react'
import CustomButton from '../button/CustomButton'
import { serverUrl } from '../../../config.mjs'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function SignUp() {
    const [formData, setformData] = useState({
        fname: '',
        lname: '',
        title: '',
        email: '',
        password: ''
    })
    const [busy, setbusy] = useState(false)
    const [error, seterror] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        seterror('')

        if (
            !formData.fname.trim() ||
            !formData.lname.trim() ||
            !formData.email.trim() ||
            !formData.title ||
            !formData.password
        ) {
            seterror("Please fill all fields")
            return
        }

        try {
            setbusy(true)
            const response = await axios.post(`${serverUrl}/register`, formData, { headers: { 'Content-Type': 'application/json' } })
            if (response.status === 201) {
                navigate('/login')
            }
        } catch (error) {
            const msg = error?.response?.data?.message || error?.response?.data?.error
            if (error?.response?.status === 400) {
                seterror(msg || 'Please check the details and try again.')
            } else {
                seterror(msg || 'We could not create your account right now. Please try again in a moment.')
            }
        } finally {
            setbusy(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='fname' name='fname' value={formData.fname} onChange={handleChange} />
                <input type="text" placeholder='lname' name='lname' value={formData.lname} onChange={handleChange} />

                <label htmlFor="title">Title</label>
                <select id="title" name="title" value={formData.title} onChange={handleChange}>
                    <option value="">Select title</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                </select>

                <input type="email" placeholder='email' name='email' value={formData.email} onChange={handleChange} />
                <input type="password" placeholder='password' name='password' value={formData.password} onChange={handleChange} />
                {error && <p>{error}</p>}
                <CustomButton btnTxt={busy ? "Creating..." : "Sign Up"} />
            </form>
            <p>
                If you already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    )
}
