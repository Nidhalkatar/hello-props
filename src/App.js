import "./App.css";
import Profile from "./component/profile";
import Image from "./component/nidhal2.jpg";
import ActionLink from "./component/alert";



function App() {
  const handleName = (fullName) => alert(` Hello there it's ${fullName}`);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        marginTop:"5%",
        width: "330px",
        height:"700px",
        justifyContent:"center"
      }}
    >
      <Profile
        img={Image}
        fullName= "Nidhal Katar"
        bio={` hello i'm a mechanical engineer trying to be a good developer. `}
        profession="Student"
        handleName={handleName}
      />
      <ActionLink />
    </div>
  );
}

export default App;

