import { useEffect, useState } from "react"


export default function Post({posts, loading}) {

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {

    }, [])

    function handlePagination(pageNumber) {
        setCurrentPage(pageNumber)
    };

    return(
        <>
            <div>

            </div>
        </>
    )
}