// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

// export default App;


// Define the Student component
class Student extends React.Component {
  render() {
    const { id, name, subject, favSubject } = this.props;

    return (
      <div>
        <h2>Student Information</h2>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Subject: {subject}</p>
        <p>Favorite Subject: {favSubject}</p>
        <hr />
      </div>
    );
  }
}

// Create an array of student objects
const studentsData = [
  { id: 1, name: 'John Doe', subject: 'Math', favSubject: 'Physics' },
  { id: 2, name: 'Jane Smith', subject: 'English', favSubject: 'Literature' },
  { id: 3, name: 'Bob Johnson', subject: 'Science', favSubject: 'Biology' },
  // Add more students as needed
];

// Main App component
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Student List</h1>
        {studentsData.map(student => (
          <Student
            key={student.id}
            id={student.id}
            name={student.name}
            subject={student.subject}
            favSubject={student.favSubject}
          />
        ))}
      </div>
    );
  }
}

export default App;
