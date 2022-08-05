import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {publicRoutes} from "~/routes";
import DefaultLayout from "~/layouts";
import {Fragment, useEffect, useState} from "react";

function App() {
    const [loading, setLoading]=useState(true);
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        },15000)
    });
if(!loading) {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {
                        publicRoutes.map((route, index) => {

                            const Page = route.component;

                            let Layout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            } else {
                                Layout = DefaultLayout;
                            }
                            return <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page/>
                                    </Layout>
                                }
                            />
                        })
                    }
                </Routes>
            </div>
        </Router>

    );}
else {
    return <h1>Dang load.....</h1>

}
}

export default App;
