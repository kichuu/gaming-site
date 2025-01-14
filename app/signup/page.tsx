'use client'; // Ensure this is a client-side component

import { useState } from 'react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#22B357]">Sign Up</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-[#2a2a2a] border-[#22B357] text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-[#2a2a2a] border-[#22B357] text-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-[#22B357] mt-2"
            >
              {showPassword ? 'Hide' : 'Show'} Password
            </button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className="bg-[#2a2a2a] border-[#22B357] text-white"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPassword && confirmPassword !== "" && confirmPassword !== (document.getElementById("password") as HTMLInputElement)?.value && (
              <p className="text-xs text-red-500">Passwords do not match</p>
            )}
          </div>
          <Button type="submit" className="w-full bg-[#22B357] hover:bg-[#1a8f45] text-white">
            Sign Up
          </Button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="text-[#22B357] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
