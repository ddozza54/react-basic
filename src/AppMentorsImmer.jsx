import React, { useState } from 'react';
import { useImmer } from 'use-immer'

export default function AppMentorImmer() {
    const [person, updatePereson] = useImmer(initialPerson);
    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`)
        updatePereson((person) => {
            const mentor = person.mentors.find(m => m.name === prev);
            mentor.name = current;
        })
    }
    const handleAdd = () => {
        const name = prompt(`누구를 추가할까요?`);
        const title = prompt(`${name}의 title 은 무엇인가요?`)
        updatePereson(person => { person.mentors.push({ name, title }) })
        //  중괄호로 묶지 않고 return 값으로 주면 오류남. 
        //   react-dom.development.js:12056 Uncaught Error: 
        //  [Immer] An immer producer returned a new value *and*
        //   modified its draft. Either return a new value *or* modify the draft.
        // 새로운 값을 반환하거나, draft를 수정하거나 둘중 하나만 하라는 의미의 에러입니다.
    }
    const handleDelete = () => {
        const name = prompt(`누구를 삭제할까요?`);
        updatePereson(person => {
            const index = person.mentors.findIndex((m) => m.name === name);
            if (index >= 0) person.mentors.splice(index, 1)
            //filter 사용시 새로운 배열을 만들어서 반환하기 때문에 immer 사용 안됨. 
        })
    }


    return (
        <div>
            <h1>IMMER</h1>
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
