import { createContext, useState } from 'react';

//데이터를 담고 있는 context
export const DarkModeContext = createContext();

//데이터를 보여주는 우산 역할
//얘도 '컴포넌트' 이기 때문에 하위 컴포넌트들을 감싸줄 수 있다. 
//UI 적으로 뭔갈 하진 않지만, dark mode 를 적용시킬 umbrella 를 만들어줌. 
export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !(mode))
    //자식 컴포넌트와 공유하고 싶은 data 를 value에 넣어줌
    return (<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
    </DarkModeContext.Provider>)
}