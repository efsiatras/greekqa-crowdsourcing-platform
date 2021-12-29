import { ReactComponent as ForgotPasswordSvg } from 'assets/forgotpassword.svg'

import AuthLayout from 'layouts/AuthLayout'
import ForgotPasswordForm from 'components/Auth/ForgotPasswordForm'

export default function ForgotPasswordPage() {  
    return (
        <AuthLayout
            form={ <ForgotPasswordForm /> }
            illustration={ <ForgotPasswordSvg /> }
        />
    );
}