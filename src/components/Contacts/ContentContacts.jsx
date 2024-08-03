import React from "react";

const ContentContacts = () => {
  return (
    <div className="bg-blue-900 h-full flex flex-col">
      <main className="flex-grow flex justify-center items-center">
        <div className="w-full max-w-lg">
          <h1 className="text-white text-4xl font-bold mb-8 text-center">
            Contact
          </h1>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-md"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-md"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 rounded-md"
                placeholder=""
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Kirim
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ContentContacts;
