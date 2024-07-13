import React from "react";

function ContentHome() {
  return (
    <div className="bg-blue-900 text-white min-h-screen">
      <main className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-center my-8">Contact</h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="nama" className="block mb-2">
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              className="w-full p-2 rounded bg-white text-black"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 rounded bg-white text-black"
            />
          </div>

          <div>
            <label htmlFor="pesan" className="block mb-2">
              Pesan
            </label>
            <textarea
              id="pesan"
              name="pesan"
              rows="5"
              className="w-full p-2 rounded bg-white text-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Kirim
          </button>
        </form>
      </main>
    </div>
  );
}

export default ContentHome;
