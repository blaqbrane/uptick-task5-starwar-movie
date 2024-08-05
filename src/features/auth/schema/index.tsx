import * as yup from 'yup'

export const SignUpSchema = yup.object().shape({
    email:yup.string().required('email is required'),
    password: yup.string().required('Password is required').matches(
        /^.*(?=.{10,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
     "Password must contain at least 10 characters, one uppercase,one lowercase, one digit and one special character"),
})

export const SignInSchema = yup.object().shape({
    email:yup.string().required('email is required'),
    password: yup.string().required('Password is required')
})