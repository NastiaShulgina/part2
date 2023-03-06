const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

const Header = ({ name }) => {
  return <h1>{name}</h1>
}

const Content = ({ parts }) => {
  return (
    <div>
      {
        parts.map(part => {
          return <Part part={part.name} exercises={part.exercises} key={part.id} />
        })
      }
    </div>
  );
}

const Part = ({ part, exercises }) => {
  return <p>{part} {exercises}</p>
}

const Total = ({ parts }) => {
  let summation = parts.reduce((accumulator, currentPart) => accumulator + currentPart.exercises, 0);
  return <b>total of {summation} exercises</b>
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course => {
        return <Course course={course} key={course.id} />
      })}
    </div>
  );
}

export default App