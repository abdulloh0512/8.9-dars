import { useEffect, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../Helpers/Firebase";
export default function Book() {
  const [title, setTitle] = useState("");
  const [books, setBooks] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (title) {
      setLoading(true);
      const ref = await addDoc(collection(db, "library"), {
        title,
      });
      setBooks([...books, { id: ref.id, title }]);
      setLoading(false);
    }
  };

  useEffect(() => {
    async function getData() {
      let booksArr: any = [];
      const snap = await getDocs(collection(db, "library"));
      snap.forEach((doc) => {
        booksArr.push({ id: doc.id, ...doc.data() });
      });

      setBooks(booksArr);
    }

    getData();
  }, []);

  const handleDelete = async (e: any) => {
    deleteDoc(doc(db, "library", e));
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-100% flex justify-center gap-6 pt-10"
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 p-2"
            type="text"
            placeholder="Book title ..."
          />
          <button
            disabled={loading}
            className="bg-[#4ffc4f] py-4 px-8 rounded-[10px] text-white"
          >
            {loading ? "loading..." : "Add"}
          </button>
        </form>
      </div>
      <div>
        <ul className="flex w-100% items-center flex-col justify-center">
          {books.map((book: any) => (
            <li
              className="border-2 flex justify-center border-black w-[250px] py-3 mt-3 text-center"
              key={book.id}
            >
              {book.title}
              <MdModeEdit className="size-6 ml-5 cursor-pointer" />

              <MdDelete
                onClick={() => handleDelete(e.id)}
                className="size-7 ml-2 cursor-pointer"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
