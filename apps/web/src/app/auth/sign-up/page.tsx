import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

import githubIcon from '../../../assets/github-icon.svg'

export default function ForgotPasswordPassword() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" type="email" id="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" id="password" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password_confirmation">Confirm your password</Label>
        <Input
          name="password_confirmation"
          type="password_confirmation"
          id="password_confirmation"
        />
      </div>

      <Button type="submit" className="w-full">
        Create account
      </Button>

      <Button variant="link" className="w-full" asChild size="sm">
        <Link href="/auth/sign-in" className="w-full">
          Already registered? Sign in
        </Link>
      </Button>

      <Separator />

      <Button type="submit" variant="outline" className="w-full">
        <Image src={githubIcon} className="size-5 dark:invert" alt="" />
        Sign up with Github
      </Button>
    </form>
  )
}
