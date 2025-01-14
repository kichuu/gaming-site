"use client"
import Link from 'next/link'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import { useState } from 'react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#22B357]">Log In</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-[#2a2a2a] border-[#22B357] text-white"
              error="Please enter a valid email" // Example error state
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-[#2a2a2a] border-[#22B357] text-white"
              error="Password is required" // Example error state
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-[#22B357] mt-2"
            >
              {showPassword ? 'Hide' : 'Show'} Password
            </button>
          </div>
          <Button type="submit" className="w-full bg-[#22B357] hover:bg-[#1a8f45] text-white">
            Log In
          </Button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{' '}
          <Link href="/signup" className="text-[#22B357] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
