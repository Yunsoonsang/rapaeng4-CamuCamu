import { ThemeProvider } from "@material-ui/core";
import Navbar from "./Compnonet/Navbar";

<ThemeProvider>
    <Suspense fallback={(<div>Loading...</div>)}>
    <Navbar>
    <div sytle={{panddingTop: '69px'}}>
        <switch>
            <Route exact path="/" component={Auth(mainPage, null)} />
            <Route exact path="/guiid" component={Auth(GuidPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
            <Route exact path="/timelineEdit" component={Auth(TimelineEditPage, true)} />
            <Route exact path="/timelineUpload" component={Auth(TimelineUPloadPage, true)} />
        </switch>
    </div>
    {/* <Footer /> */}
    </Navbar>
    </Suspense>
</ThemeProvider>
}