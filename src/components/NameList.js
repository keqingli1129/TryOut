import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 29,
            skill: 'Vue'

        },
        {
            id: 2,
            name: 'Clark',
            age: 29,
            skill: 'Vue'

        },
        {
            id: 3,
            name: 'Diana',
            age: 29,
            skill: 'Vue'

        }
    ]
    const personList = persons.map(person => <Person key = {person.id} person={person}></Person>)
        return (
            <div>
                {
                    personList
                }
            </div>
        )
}

export default NameList