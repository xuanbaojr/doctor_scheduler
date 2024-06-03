'use server'

import CusPage from "./_page/CusPage"
import ExamiPage from "./_page/ExamiPage"
import FilePage from "./_page/FilePage"
import { IdPage } from "./_page/IdPage"

interface Props {

}

const CustomerPage = ({params} : {params : {id : string[]}}) => {

    // xu ly cac trang thoa man dieu kien
    if(params.id.length == 2) {
        if(params.id[1] === IdPage.customer) {
            return(
                <CusPage id={params.id[0]} />
            )
        } else if (params.id[1] === IdPage.profile) {
            return (
                <FilePage id={params.id[0]}/>
            )
        } else if (params.id[1] === IdPage.examination) {
            return (
                <ExamiPage id={params.id[0]}/>
            )
        }
    }
    // cac trang co duong link loi
    else {

    }
}

export default CustomerPage