export const SMPage = () => {
  return (
    <div>
      <nav className="sm-header">Header Component</nav>
      <main className="sm-main">
      <div className="sm-profile-status-container">
          <div className="sm-profile-container">
            <section className="sm-profile-image">
              image
            </section>
            <hr/>
            <section className="sm-profile-info">
              info
            </section>
          </div>
          <div className="sm-status-container">
            status
          </div>
      </div>
      <div className="dotted-divider"></div>
      <div className="sm-post">
        Posts
      </div>
      </main>
    </div>
  );
};
