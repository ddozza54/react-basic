//리액트의 hook 은? use 로 시작하는 그냥 함수!
//use 를 붙이지 않는다고 에러가 나는 건 아니지만, 재사용 가능한 hooks 는 use~ 를 사용한다는 것이 스타일 가이드임. 
//일반 컴포넌트와 다른 점은 UI 를 render 하지 않는다는 것. 

import { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState();
    //useState 에 값 할당하지 않으면 undefined 설정됨.  


    useEffect(() => {
        setError()
        setIsLoading(true)
        fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
            .then(res => res.json())
            .then(data => {
                console.log('🔥')
                setProducts(data)
            }).catch((e) => {
                setError("에러가 발생했습니다.")
                console.log(e);
            }).finally(() => {
                setIsLoading(false)
            });
        return () => { console.log("🧹") }
    }, [salesOnly])

    return [isLoading, products, error];
}