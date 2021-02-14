import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import "./App.css";
import NewFriend from "./components/NewFriend";

function App() {
  return (
@@ -18, 6 + 19, 7 @@function App() {
      </ul >
      <Switch>
        <ProtectedRoute exact path="/friends" component={FriendsList} />
        <Route path="/newfriend" component={NewFriend} />
        <Route path="/login" component={Login} />
      </Switch>
    </div >
  );
  }
    export default App;