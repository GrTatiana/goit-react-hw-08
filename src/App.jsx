import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "./redux/contactsSelectors";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 style={{ color: "black" }}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <p>Error: {error}</p>}
      <ContactList />
    </div>
  );
}

export default App;
