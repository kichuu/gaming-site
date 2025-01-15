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
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">Log In</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-secondary-foreground">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-[#2a2a2a] border-primary text-secondary-foreground"
              error="Please enter a valid email" // Example error state
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-secondary-foreground">Password</Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-[#2a2a2a] border-primary text-secondary-foreground"
              error="Password is required" // Example error state
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-primary mt-2"
            >
              {showPassword ? 'Hide' : 'Show'} Password
            </button>
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-[#1a8f45] text-secondary-foreground">
            Log In
          </Button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{' '}
          <Link href="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
