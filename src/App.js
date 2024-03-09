import './styles.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddCow from './AddCow.js'; // Import your AddCow component here

function Home() {
  return (
    <div>
      <h1 className="heading">Home</h1>
      <img className="homepagecow" src="image/cowsimage.jpg" alt="Cows grazing in a field" />
      <p className="description">Cow is an innovative program designed to assist farmers and veterinarians in monitoring and predicting the health status of cows. With Cow, users can easily input detailed information about individual cows, such as age, weight, feeding habits, and physical symptoms.

Once the data is entered, users can initiate the analysis process by pressing the "Analyze" button. Behind the scenes, CowHealthPredictor utilizes prediction algorithms based off of extensive datasets of cow health records. These algorithms analyze the input data to identify potential health issues, detect early signs of diseases, and predict future health outcomes for the cows.

The program provides users with comprehensive reports and insights, highlighting any detected health issues, their severity, and recommended actions for prevention or treatment. Additionally, CowHealthPredictor offers personalized recommendations and guidelines for maintaining optimal health and well-being for individual cows based on their specific characteristics.

</p>
<img className="homepagecow" src="image/cowimage.jpg" alt="Cows grazing in a field" />
<p className="description">Cow is brought to you by Aaron Xiong, Chris Pham, and Yeng Her</p>
    </div>
  );
}

function ViewCows() {
  return (
    <div>
      <h1>View Cows Page</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="logo">COWS</div>
          <div className="nav-items">
            <Link to="/">Home</Link>
            <Link to="/addcow">View Cows</Link>
          </div>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewcows" element={<ViewCows />} />
          <Route path="/addcow" element={<AddCow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
