import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { dateValue } from '../../../commons/store'
import SchedulesUI from './schedules.presenter'

export default function Schedules(){

    const router = useRouter()

    const [value, onChange] = useRecoilState(dateValue)

    const onClickBefore = () => {
        onChange(new Date(value.setDate(value.getDate() - 1)))
    }

    const onClickAfter = () => {
        onChange(new Date(value.setDate(value.getDate() + 1)))
    }

    const onClickToProjectSignUp = () => {
        router.push("/project/new")
    }

    return(
        <SchedulesUI 
        value={value}
        onClickBefore={onClickBefore}
        onClickAfter={onClickAfter}
        onClickToProjectSignUp={onClickToProjectSignUp} />
    )
}