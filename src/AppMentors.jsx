import React, { useState } from 'react';

export default function AppMentor(props) {
    const [person, setPerson] = useState({
        name: '엘리',
        title: '개발자',
        mentor: [
            {
                name: '밥',
                title: '시니어개발자',
            },
            {
                name: '제임스',
                title: '시니어개발자',
            },
        ]
    });
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
                {person.mentor.map((mentor, ind) => (<li key={ind}>{mentor.name} ({mentor.title})</li>))}
            </ul>
            <button
                onClick={() => {
                    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
                    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`)
                    setPerson(person => ({ ...person, mentor: person.mentor.map(v => v.name === prev ? ({ ...v, name: current }) : v) }))
                }}
            >
                멘토의 이름을 바꾸기
            </button>
        </div>
    );
}
