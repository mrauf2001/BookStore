// 'use client'
// import { useState } from 'react';
// import MainFooter from '../mainFooter/MainFooter';

// const AdminPanel = () => {
//   const [books, setBooks] = useState([]);
//   const [bookName, setBookName] = useState('');
//   const [authorName, setAuthorName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editBookName, setEditBookName] = useState('');
//   const [editAuthorName, setEditAuthorName] = useState('');
//   const [editDescription, setEditDescription] = useState('');
//   const [editPrice, setEditPrice] = useState('');
//   const [editImage, setEditImage] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setPreviewImage(URL.createObjectURL(file));
//   };

//   const addBook = () => {
//     setBooks([...books, { bookName, authorName, description, price, image: previewImage }]);
//     setBookName('');
//     setAuthorName('');
//     setDescription('');
//     setPrice('');
//     setImage(null);
//     setPreviewImage(null);
//   };

//   const deleteBook = (index) => {
//     const updatedBooks = books.filter((_, i) => i !== index);
//     setBooks(updatedBooks);
//   };

//   const startEdit = (index) => {
//     const bookToEdit = books[index];
//     setEditIndex(index);
//     setEditBookName(bookToEdit.bookName);
//     setEditAuthorName(bookToEdit.authorName);
//     setEditDescription(bookToEdit.description);
//     setEditPrice(bookToEdit.price);
//     setEditImage(bookToEdit.image);
//   };

//   const saveEdit = () => {
//     const updatedBooks = books.map((book, index) =>
//       index === editIndex ? { bookName: editBookName, authorName: editAuthorName, description: editDescription, price: editPrice, image: editImage } : book
//     );
//     setBooks(updatedBooks);
//     setEditIndex(null);
//     setEditBookName('');
//     setEditAuthorName('');
//     setEditDescription('');
//     setEditPrice('');
//     setEditImage(null);
//   };

//   return (
//     <>
//       <div className="min-w-full min-h-screen mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-12 max-w-lg">
//         <div className="admin w-[70%] mx-auto">
//           <h2 className="text-4xl text-blue-600 text-center font-semibold mb-6">Admin Panel</h2>

//           <div className="mb-6">
//             <h3 className="text-xl font-medium mb-4">Add Book</h3>
//             <input
//               type="text"
//               placeholder="Book Name"
//               value={bookName}
//               onChange={(e) => setBookName(e.target.value)}
//               className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg"
//             />
//             <input
//               type="text"
//               placeholder="Author Name"
//               value={authorName}
//               onChange={(e) => setAuthorName(e.target.value)}
//               className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg"
//             />
//             <textarea
//               placeholder="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg"
//             />
//             <input
//               type="number"
//               placeholder="Price"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg"
//             />
//             <input
//               type="file"
//               onChange={handleImageChange}
//               className="w-full mb-4"
//             />
//             {previewImage && (
//               <img src={previewImage} alt="Preview" className="mb-4 max-w-full h-auto" />
//             )}
//             <button
//               onClick={addBook}
//               className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//             >
//               Add Book
//             </button>
//           </div>

//           <div>
//             <h3 className="text-xl font-medium mb-4">Books List</h3>
//             <ul className="space-y-4">
//               {books.map((book, index) => (
//                 <li key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
//                   {editIndex === index ? (
//                     <div className="flex items-center">
//                       <input
//                         type="text"
//                         value={editBookName}
//                         onChange={(e) => setEditBookName(e.target.value)}
//                         className="px-3 py-2 border border-gray-300 rounded-lg mr-2"
//                       />
//                       <input
//                         type="text"
//                         value={editAuthorName}
//                         onChange={(e) => setEditAuthorName(e.target.value)}
//                         className="px-3 py-2 border border-gray-300 rounded-lg mr-2"
//                       />
//                       <textarea
//                         value={editDescription}
//                         onChange={(e) => setEditDescription(e.target.value)}
//                         className="px-3 py-2 border border-gray-300 rounded-lg mr-2"
//                       />
//                       <input
//                         type="number"
//                         value={editPrice}
//                         onChange={(e) => setEditPrice(e.target.value)}
//                         className="px-3 py-2 border border-gray-300 rounded-lg mr-2"
//                       />
//                       <button
//                         onClick={saveEdit}
//                         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                       >
//                         Save
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="flex justify-between items-center w-full">
//                       <span>
//                         {book.bookName} by {book.authorName} - {book.description} - ${book.price}
//                         <img src={book.image} alt="Book cover" className="max-w-xs h-auto mt-2" />
//                       </span>
//                       <div className="flex items-center">
//                         <button
//                           onClick={() => startEdit(index)}
//                           className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 mr-2"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => deleteBook(index)}
//                           className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//       <MainFooter />
//     </>
//   );
// };

// export default AdminPanel;



'use client'

import { useState } from 'react';
import MainFooter from '../mainFooter/MainFooter';

const AdminPanel = () => {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editBookName, setEditBookName] = useState('');
  const [editAuthorName, setEditAuthorName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editPrice, setEditPrice] = useState('');
  const [editImage, setEditImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const addBook = () => {
    setBooks([...books, { bookName, authorName, description, price, image: previewImage }]);
    setBookName('');
    setAuthorName('');
    setDescription('');
    setPrice('');
    setImage(null);
    setPreviewImage(null);
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  const startEdit = (index) => {
    const bookToEdit = books[index];
    setEditIndex(index);
    setEditBookName(bookToEdit.bookName);
    setEditAuthorName(bookToEdit.authorName);
    setEditDescription(bookToEdit.description);
    setEditPrice(bookToEdit.price);
    setEditImage(bookToEdit.image);
  };

  const saveEdit = () => {
    const updatedBooks = books.map((book, index) =>
      index === editIndex ? { bookName: editBookName, authorName: editAuthorName, description: editDescription, price: editPrice, image: editImage } : book
    );
    setBooks(updatedBooks);
    setEditIndex(null);
    setEditBookName('');
    setEditAuthorName('');
    setEditDescription('');
    setEditPrice('');
    setEditImage(null);
  };

  return (
    <>
      <div className="min-w-full min-h-screen mx-auto p-6 bg-blue-300 rounded-lg shadow-lg mt-12 max-w-lg">
        <div className="admin w-[70%] mx-auto">
          <h2 className="text-4xl text-blue-600 text-center font-semibold mb-6">Admin Panel</h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-4">Add Book</h3>
            <input
              type="text"
              placeholder="Book Name"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Author Name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg"
            />
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full mb-4"
            />
            {previewImage && (
              <img src={previewImage} alt="Preview" className="mb-4 max-w-full h-auto" />
            )}
            <button
              onClick={addBook}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add Book
            </button>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">Books List</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <li
                  key={index}
                  className="bg-green-600 p-2 rounded-lg shadow-md flex flex-col  items-center text-center  max-w-full text-wrap"
                >
                  {editIndex === index ? (
                    <div className="w-full flex flex-col text-wrap">
                      <input
                        type="text"
                        value={editBookName}
                        onChange={(e) => setEditBookName(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg mb-2"
                      />
                      <input
                        type="text"
                        value={editAuthorName}
                        onChange={(e) => setEditAuthorName(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg mb-2"
                      />
                      <textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg mb-2"
                      />
                      <input
                        type="number"
                        value={editPrice}
                        onChange={(e) => setEditPrice(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg mb-2"
                      />
                      <button
                        onClick={saveEdit}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="w-full flex flex-col items-center">
                      <span className="text-2xl font-bold mb-2 text-white truncate w-full">
                        {book.bookName}
                      </span>
                      <span className="text-lg font-semibold mb-2 text-white truncate w-full">
                        {book.authorName}
                      </span>
                      <p className="text-sm mb-4 text-white overflow-hidden">
                        {book.description}
                      </p>
                      {book.image && (
                        <img
                          src={book.image}
                          alt="Book cover"
                          className="max-w-[80px] h-auto mb-4 border-2 border-orange-600"
                        />
                      )}
                      <div className="flex justify-center items-center w-full mt-4">
                        <button
                          onClick={() => startEdit(index)}
                          className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteBook(index)}
                          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default AdminPanel;