//얘는 컴포넌트 아님

export default function personReducer(person, action) {
    switch (action.type) {
        case 'updated': {
            const { prev, current } = action;
            return {
                ...person,
                mentors: person.mentors.map((mentor) => {
                    return mentor.name === prev ? { ...mentor, name: current } : mentor
                })
            }
        };
        case 'add': {
            const { name, title } = action;
            return { ...person, mentors: [...person.mentors, { name, title }] }
        };
        case 'delete': {
            const { name } = action;
            return ({ ...person, mentors: person.mentors.filter(mentor => mentor.name !== name) });
        };
        default: {
            throw Error(`알 수 없는 액션 타입:${action.type}`);
        }
    }

}