import { BrowserRouter as Router} from 'react-router-dom';

import AllRoutes from './AllRoutes';

const Root = () => {
  return (
    <Router>
      <AllRoutes />
    </Router>
  );
};

export default Root;
