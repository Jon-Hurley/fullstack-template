import {Link} from 'react-router-dom'

function Index() {return (
  <div>
    <div>
      <Link to="/">Home</Link>
    </div>
    <div>
      <Link to="/create">Create</Link>
    </div>
    <div>
      <Link to="/myblogs">My Blogs</Link>
    </div>
  </div>
)}

export default Index;
  
