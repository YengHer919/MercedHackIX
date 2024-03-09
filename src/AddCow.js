import './styles.css';

function AddCow() {
  return (
    <div>
      <hr />
      <button className="Newcow">New Cow</button>
      <input className="search" type="text" placeholder="Search Name.." />
      <div className="square"></div>
    </div>
  );
}

export default AddCow;
