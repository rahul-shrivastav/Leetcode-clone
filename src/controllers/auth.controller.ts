'use server'
import { signIn } from '@/auth'
import { redirect } from 'next/navigation'

const SignIn = async (inputs: any) => {
    try {
        await signIn("credentials", {
            redirect: false,
            callbackUrl: "/",
            username: inputs.username,
            password: inputs.password
        })

    } catch (error) {
        console.log(error)
    }
    redirect('/')
}
const SignUp = async (inputs: any) => {
    try {
        let response = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs),
        });
        response = await response.json()
        console.log("Signup done")
    } catch (error) {
        // Handle error
        console.error('Error submitting form:', error);
    }
}
const GoogleSignin = async () => {
    await signIn('google')
}
export { SignIn, SignUp, GoogleSignin };