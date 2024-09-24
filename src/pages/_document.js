import Document , {Html , Head , Main , NextScript} from 'next/document'

export default class AppDocument extends Document {

    render() {
        return (
            <Html lang="fa" dir="rtl" className="scroll-smooth">
                <Head />
                <body className="font-iran-yekan">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
