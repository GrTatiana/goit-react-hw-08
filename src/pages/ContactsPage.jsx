import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import {
  selectContacts,
  selectContactsError,
  selectContactsLoading,
} from "../redux/contacts/selectors";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        toast.success("Phonebook loaded successfully!");
      })
      .catch((error) => {
        toast.error(`Failed to load phonebook: ${error.message}`);
      });
  }, [dispatch]);

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <Toaster />
      <ContactForm />
      <SearchBox />

      {items.length > 0 ? (
        <ContactList />
      ) : (
        <p>You don&apos;t have contacts yet!</p>
      )}
    </>
  );
};

export default ContactsPage;
