import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid screen-header">
        <div className="row p-4">
              <div className="col-12">
                  <div className="d-flex flex-sm-row flex-column justify-content-center align-items-center">
                    <div className="p-2 me-sm-0 me-md-5 text-center">
                      <img src={process.env.PUBLIC_URL + '/images/pic.jpeg'} alt="Rohit Kumar S" className="profile-pic" />
                    </div>
                    <div className="p-2 ms-sm-0 ms-md-5 text-center">
                      <p className="display-4 mb-0 fw-bold">Rohit Kumar S</p>
                      <p className="lead fst-italic">Freelancer Software Solution Architect & Consultant</p>
                      <div className="fa-3x">
                        <span className="mx-2">
                            <a href="https://www.linkedin.com/in/rkd35109/"
                            target="_blank" rel="noreferrer" className="anchor-tag-icons">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </span>
                        <span className="mx-2">
                            <a href="https://www.instagram.com/rohitkumardubey92/" 
                            target="_blank" rel="noreferrer" className="anchor-tag-icons">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </span>
                        <span className="mx-2">
                              <a href="https://twitter.com/rohitkumar_92"
                              target="_blank" rel="noreferrer" className="anchor-tag-icons">
                                  <i className="fab fa-twitter-square"></i>
                              </a>
                          </span>
                      </div>
                    </div>
                  </div>
              </div>
        </div>
      </div>
      <div className="container">
          <div className="row">
              <div className="col-12 mt-4">
                  <ul className="nav justify-content-center">
                      <li className="nav-item">
                        <a className="nav-link nav-buttons active" aria-current="page" href="#">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link nav-buttons" href="#">Blogs</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link nav-buttons" href="#">Videos</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link nav-buttons" href="#">Training</a>
                      </li>
                    </ul>
              </div>
          </div>
      </div>
      <section className="about">
          <div className="container">
              <div className="row mt-5">
                  <div className="col-12 text-center">
                      <p className="fst-italic">
                          <b>Hello!!</b> I am an experienced Software Engineer & Architect and I am glad that you are here looking my profile.
                      </p>
                      <p className="fst-italic">
                          Website is still under development and you can connect with me through social sites.
                      </p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}

export default App;
