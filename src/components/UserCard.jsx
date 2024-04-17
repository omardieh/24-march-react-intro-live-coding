// ES5
// function UserCard() {
//   return <div> Hello from user card </div>;
// }

// ES6
// const UserCard = () => {
//   return <div> Hello from user card ES6 </div>;
// };

// ES6 concise
// const UserCard = () => <div> Hello from user card ES6 concise </div>;

// export default UserCard;

// ES5 concise one line
// export default function UserCard() {
//   return <div> Hello from user card ES6 concise </div>;
// }

// export a non-default function
export const sumNumbers = (a, b) => {
  return a + b;
};

import "./UserCard.css";

// export default function UserCard(props) {
//   return (
//     <div className="container">
//       <img className="avatar" alt={props.title} src={props.avatarURL} />
//       <h2 className="title"> {props.title || "no title was passed"} </h2>
//     </div>
//   );
// }

// export default function UserCard(props) {
//     const {title, avatarURL} = props;
//     return (
//       <div className="container">
//         <img className="avatar" alt={title} src={avatarURL} />
//         <h2 className="title"> {title || "no title was passed"} </h2>
//       </div>
//     );
//   }

// const userInfo = {
//     name: "Bob",
//     age: 16
// }
// // ES5
// const name = userInfo.name;
// const age = userInfo.age;

// // ES6
// const {name, age} = userInfo;

export default function UserCard({ title, avatarURL, isAdmin }) {
  if (isAdmin) {
    return <h2> Hello Admin {title} </h2>;
  }
  return (
    <div className="container">
      <img className="avatar" alt={title} src={avatarURL} />
      <h2 className="title"> {title || "no title was passed"} </h2>
    </div>
  );
}
