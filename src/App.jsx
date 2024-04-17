import "./App.css";
import UserCard from "./components/UserCard";
import { sumNumbers } from "./components/UserCard";

function App() {
  const sum = sumNumbers(5, 10);
  console.log(sum);
  return (
    <>
      <UserCard
        title="Bob"
        avatarURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VzmS-daFRz7FjzGKjzUn_1HuJTpwVaDKiWgNFSwGxg&s"
      />
      <UserCard
        isAdmin
        title="Sarah"
        avatarURL="https://upload.wikimedia.org/wikipedia/commons/a/ab/B.o.B_UIT_2013_%28cropped%29.jpg"
      />
      {/* <UserCard /> */}
    </>
  );
}

export default App;
