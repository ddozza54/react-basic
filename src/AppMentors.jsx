import React, { useState } from 'react';

export default function AppMentor(props) {
    const [person, setPerson] = useState({
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
                {person.mentors.map((mentor, ind) => (<li key={ind}>{mentor.name} ({mentor.title})</li>))}
            </ul>
            <button
                onClick={() => {
                    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
                    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`)
                    setPerson(person => ({ ...person, mentors: person.mentors.map(v => v.name === prev ? ({ ...v, name: current }) : v) }))
                }}
            >
                멘토의 이름을 바꾸기
            </button>
            <button
                onClick={() => {
                    const rm = prompt(`누구를 삭제할까요?`);
                    setPerson(person => ({ ...person, mentors: person.mentors.filter(mentor => mentor.name !== rm) }));
                    console.log(person)
                }}>멘토 삭제하기</button>
            <button
                onClick={() => {
                    const add = prompt(`누구를 추가할까요?`);
                    const addTitle = prompt(`${add}의 title 은 무엇인가요?`)
                    if (add === "" || addTitle === "") {
                        setPerson(person)
                    } else {
                        setPerson(person => ({ ...person, mentors: [...person.mentors, { name: add, title: addTitle }] }))
                    }
                }}>멘토 추가하기</button>
        </div >
    );
}
