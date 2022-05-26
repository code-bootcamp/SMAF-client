import { useQuery } from '@apollo/client'
import TodoUI from './todo.presenter'
import { FETCH_PARTICIPATING_PROJECTS} from './todo.queries'

export default function Todo(){

    const { data } = useQuery(FETCH_PARTICIPATING_PROJECTS)



    return(
        <TodoUI 
        data={data}/>
    )
}