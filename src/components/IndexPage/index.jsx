import Head from 'next/head'
import {bg} from '../../../db.json'

const IndexPage = () =>{
    return(
        <div>
            <Head>
                <title>Final Fantasy Quiz</title>
                <meta property="og:image" content={bg}></meta>
            </Head>
        </div>
    )
}

export default IndexPage