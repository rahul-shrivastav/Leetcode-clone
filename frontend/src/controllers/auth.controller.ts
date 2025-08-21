'use server'
import { signIn } from '@/auth'

const SignIn = (inputs: any) => {
    try {
        signIn("credentials", {
            redirect: false,
            username: inputs.username,
            password: inputs.password
        })
    } catch (error) {
        console.log(error)
    }
}
const SignUp = async (inputs: any) => {
    try {
        let response = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs),
        });
        response = await response.json()
        console.log("Signup done", response)
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}
const GoogleSignin = async () => {
    await signIn('google')
}
export { SignIn, SignUp, GoogleSignin };