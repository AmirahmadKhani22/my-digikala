import {Provider} from "@/contexts/homePageData"
import Head from '@/components/home/head'
import Header from '@/components/home/header'
import Main from '@/components/home/main'
import {getJsonData} from "@/components/utils/components/hooks/getData"

export default function Home({pageData}) {
    console.log(pageData.data.widgets)
    return pageData.data && <Provider value={pageData}>
        <Head />
        <Header />
        <Main />
    </Provider>
}

export async function getServerSideProps() {
    const {data} = await getJsonData("v2/")
    const extraData = data.widgets.filter(widget => widget.hasOwnProperty("endpoint"))
    for(const item of extraData) {
        item.data = (await getJsonData(`v1/${item.endpoint}`)).data
    }
    const pageData = {
        data,
    }
    return {props: {pageData}}
}
