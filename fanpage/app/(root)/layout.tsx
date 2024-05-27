import Header from "./_component/header"

interface Props {

}

const RootLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <>
            <div className="w-full h-full bg-white">
                <Header />
                {children}
            </div>
        </>
    )
}

export default RootLayout