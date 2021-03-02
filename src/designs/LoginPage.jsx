
const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-left-container">
        <div className="login-form">
          <section>
            <article className="input-container">
              <input placeholder="Email" />
            </article>
            <article className="input-container">
              <input placeholder="Password" />
            </article>
            <article className="button-container">
              <button>Login</button>
            </article>
          </section>
          
          <section className="login-thirdparty-signups">
              <div>Or</div>
             <div><button className="facebook-button">Login with Facebook</button></div>
              <div><button className="google-button">Login with Google</button></div>
          </section>
        </div>
      </div>
      <div className="login-right-container"></div>
    </div>
  );
};

export default LoginPage;
