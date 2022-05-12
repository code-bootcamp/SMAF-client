import * as S from './beforeLogin.styles'
import Login from '../mainSrc/login/login.container'
import Schedules from '../../../commons/Schedules/schedules.container'

export default function BeforeLoginUI(){

    return(
        <S.Wrapper>
            <Schedules />
            <Login />
        </S.Wrapper>
    )
}