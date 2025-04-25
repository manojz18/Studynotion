import signupImg from "../assets/Images/signUpImg.jpg"
import Template from "../components/core/Auth/Template"

function signup() {
  return (
    <Template
      title="Join the millions learning to code with NeoShiksha for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  )
}

export default signup