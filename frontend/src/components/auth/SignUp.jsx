import React, { useState } from 'react'
import { serverUrl } from '../../../config.mjs'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './Auth.module.css'

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
        <div className={styles.page}>
            <section className={styles.shell}>
                <aside className={styles.brandPanel}>
                    <div className={styles.brandBadge}>Bistro Bliss</div>
                    <div className={styles.brandCopy}>
                        <h1 className={styles.brandTitle}>Create your table-side account</h1>
                        <p className={styles.brandText}>Join in to reserve tables, explore menus, and stay close to your next meal.</p>
                    </div>
                </aside>

                <main className={styles.formPanel}>
                    <p className={styles.eyebrow}>Start dining</p>
                    <h2 className={styles.title}>Sign Up</h2>
                    <p className={styles.subtitle}>Tell us a little about yourself to create your account.</p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label className={styles.label} htmlFor="fname">First name</label>
                                <input className={styles.input} id="fname" type="text" placeholder='First name' name='fname' value={formData.fname} onChange={handleChange} />
                            </div>

                            <div className={styles.field}>
                                <label className={styles.label} htmlFor="lname">Last name</label>
                                <input className={styles.input} id="lname" type="text" placeholder='Last name' name='lname' value={formData.lname} onChange={handleChange} />
                            </div>
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="title">Title</label>
                            <select className={styles.select} id="title" name="title" value={formData.title} onChange={handleChange}>
                                <option value="">Select title</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="email">Email address</label>
                            <input className={styles.input} id="email" type="email" placeholder='you@example.com' name='email' value={formData.email} onChange={handleChange} />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="password">Password</label>
                            <input className={styles.input} id="password" type="password" placeholder='Create a password' name='password' value={formData.password} onChange={handleChange} />
                        </div>

                        {error && <p className={styles.error}>{error}</p>}
                        <button className={styles.submitButton} type="submit" disabled={busy}>{busy ? "Creating..." : "Sign Up"}</button>
                    </form>

                    <p className={styles.switchText}>
                        Already have an account? <Link className={styles.switchLink} to="/login">Login</Link>
                    </p>
                </main>
            </section>
        </div>
    )
}
