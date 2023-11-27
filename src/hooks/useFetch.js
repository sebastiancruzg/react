import { useEffect, useState } from "react"


export const useFetch = (url) => {
  
    const [state, setState] = useState({
        data: null,
        isLoading: null,
        hasError: null,
    })
    

    const getFetch = async()=>{
        try {

            setState({
                ...state,
                isLoading: true
            })

            const response = await fetch(url)
            const data = await response.json()
            setState({
                data,
                isLoading: false,
                hasError: null,
            })

        } catch (error) {

            setState({
                ...state,
                hasError: error
            })
        }
    }
    

    useEffect(() => {
        
        getFetch()
      
    }, [url])
    
  
    return {
        data:state.data,
        isLoading:state.isLoading,
        hasError:state.hasError

    }
}
