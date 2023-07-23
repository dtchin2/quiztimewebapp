import { Outlet, Link } from "react-router-dom";


function Navigation () {
    return (
        <>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/quizzes">Quiz Home</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
}

export default Navigation;