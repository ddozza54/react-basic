import React, { useReducer, useState } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentor(props) {
    // const [person, setPerson] = useState(initialPerson);
    const [person, dispatch] = useReducer(personReducer, initialPerson);

    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`)
        dispatch({ type: "updated", prev, current })
    }
    const handleAdd = () => {
        const name = prompt(`누구를 추가할까요?`);
        const title = prompt(`${name}의 title 은 무엇인가요?`)
        dispatch({ type: "add", name, title })
    }
    const handleDelete = () => {
        const name = prompt(`누구를 삭제할까요?`);
        dispatch({ type: "delete", name })
    }
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는 :
            </p>
            <ul>
                {/* 원래 key에 index 를 넣는 것을 지양하고 있지만, 임시로 index 값을 사용함.  */}
                {person.mentors.map((mentor, ind) => (<li key={ind}>{mentor.name} ({mentor.title})</li>))}
            </ul>
            <button
                onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
            <button
                onClick={handleDelete}>멘토 삭제하기</button>
            <button
                onClick={handleAdd}>멘토 추가하기</button>
        </div >
    );
}

const initialPerson = {
    name: '엘리',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어개발자',
        },
        {
            name: '제임스',
            title: '시니어개발자',
        },
    ]
}