import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getData } from '@/context/userContext'
import Google from "../assets/googleLogo.png"

const Login = () => {
    const { setUser } = getData()
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const res = await axios.post(`http://localhost:8000/user/login`, formData, {
                headers: { "Content-Type": "application/json" }
            })

            if (res.data.success) {
                setUser(res.data.user)
                localStorage.setItem("accessToken", res.data.accessToken)

                navigate('/')   // or /dashboard
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='relative w-full min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 overflow-hidden'>

            {/* Glow Background */}
            <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-400 opacity-30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-400 opacity-20 rounded-full blur-3xl"></div>

            <div className='min-h-screen flex items-center justify-center p-4'>
                <div className='w-full max-w-md space-y-6'>

                    {/* Heading */}
                    <div className='text-center space-y-2'>
                        <h1 className='text-3xl font-bold text-indigo-600'>
                            Welcome Back 👋
                        </h1>
                        <p className='text-gray-600'>
                            Continue your learning journey
                        </p>
                    </div>

                    {/* Card */}
                    <Card className="backdrop-blur-md bg-white/80 shadow-xl border">

                        <CardHeader className='space-y-1'>
                            <CardTitle className='text-2xl text-center text-indigo-600'>
                                Login
                            </CardTitle>
                            <CardDescription className='text-center'>
                                Access your courses and dashboard
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <div className="flex flex-col gap-6">

                                {/* Email */}
                                <div className="grid gap-2">
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>

                                {/* Password */}
                                <div className="grid gap-2">
                                    <div className='flex justify-between'>
                                        <Label>Password</Label>
                                        <Link className='text-sm text-indigo-600 hover:underline' to={'/forgot-password'}>
                                            Forgot?
                                        </Link>
                                    </div>

                                    <div className='relative'>
                                        <Input
                                            name="password"
                                            placeholder="Enter password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            type={showPassword ? "text" : "password"}
                                            required
                                        />

                                        <Button
                                            variant='ghost'
                                            size="sm"
                                            className='absolute right-0 top-0 h-full px-3 hover:bg-transparent'
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {
                                                showPassword
                                                    ? <EyeOff className="w-4 h-4 text-gray-600" />
                                                    : <Eye className="w-4 h-4 text-gray-600" />
                                            }
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </CardContent>

                        <CardFooter className="flex-col gap-3">

                            {/* Login Button */}
                            <Button
                                onClick={handleSubmit}
                                className="w-full bg-indigo-600 hover:bg-indigo-700"
                            >
                                {
                                    isLoading ? (
                                        <>
                                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                            Logging in...
                                        </>
                                    ) : "Login"
                                }
                            </Button>

                            {/* Google Login */}
                            <Button
                                onClick={() => window.open("http://localhost:8000/auth/google", "_self")}
                                className='w-full flex items-center gap-2'
                                variant='outline'
                            >
                                <img src={Google} alt="" className='w-5' />
                                Continue with Google
                            </Button>

                            {/* Signup Link */}
                            <p className="text-sm text-gray-600 text-center">
                                Don’t have an account?{" "}
                                <Link to="/signup" className="text-indigo-600 hover:underline">
                                    Sign up
                                </Link>
                            </p>

                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Login