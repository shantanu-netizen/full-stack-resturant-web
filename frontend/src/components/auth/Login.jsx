import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { serverUrl } from '../../../config.mjs'
import styles from './Auth.module.css'

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
                navigate('/home')
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
        <div className={styles.page}>
            <section className={styles.shell}>
                <aside className={styles.brandPanel}>
                    <div className={styles.brandBadge}>Bistro Bliss</div>
                    <div className={styles.brandCopy}>
                        <h1 className={styles.brandTitle}>Welcome back</h1>
                        <p className={styles.brandText}>Sign in to manage bookings, browse fresh menus, and keep your restaurant plans moving.</p>
                    </div>
                </aside>

                <main className={styles.formPanel}>
                    <p className={styles.eyebrow}>Member access</p>
                    <h2 className={styles.title}>Login</h2>
                    <p className={styles.subtitle}>Use your registered email and password to continue.</p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="email">Email address</label>
                            <input className={styles.input} id="email" type='email' name='email' placeholder='you@example.com' value={formData.email} onChange={handleChange} />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="password">Password</label>
                            <input className={styles.input} id="password" type='password' name='password' placeholder='Enter your password' value={formData.password} onChange={handleChange} />
                        </div>

                        {error && <p className={styles.error}>{error}</p>}
                        <button className={styles.submitButton} type="submit" disabled={busy}>{busy ? "Signing in..." : "Login"}</button>
                    </form>

                    <p className={styles.switchText}>
                        Don't have an account? <Link className={styles.switchLink} to="/signup">Sign Up</Link>
                    </p>
                </main>
            </section>
        </div>
    )
}
