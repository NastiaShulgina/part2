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

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
}

export default Course