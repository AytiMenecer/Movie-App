import React from 'react'

const SignUp = () => {
  return (
    <div className="sign-container">
    <form className='SignIn-container'>
       <h2 className='signIn-head'>Sign Up</h2>
       <div class="form__group field">
           <input required="" placeholder="Name" class="form__field" type="text" />
           <label class="form__label" for="name">Username</label>
       </div>
       <div class="form__group field">
           <input required="" placeholder="Name" class="form__field" type="text" />
           <label class="form__label" for="name">Email</label>
       </div>
       <div class="form__group field">
           <input required="" placeholder="Password" class="form__field" type="password" />
           <label class="form__label" for="name">Password</label>
       </div>

     <button className='submitBtn' type='submit'>Submit</button>

   </form>
  </div>
  )
}

export default SignUp