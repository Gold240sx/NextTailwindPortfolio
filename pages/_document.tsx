import Document, { Head, Html, Main, NextScript} from "next/document";

//  This page is to add Heading Elements to every page within the app.
// font import still failing to import

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link 
                        rel="preload" 
                        href="/Assets/fonts/FiraCodeBoldNerdFontComplete.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin="anonymous"
                    ></link>
                    <link 
                        rel="preload" 
                        href="/Assets/fonts/FiraCodeLightNerdFontComplete.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin="anonymous"
                    ></link>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;