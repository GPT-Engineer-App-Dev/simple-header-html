const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <img src="/placeholder.svg" alt="logo" className="mx-auto object-cover w-8 h-8" />
          <span className="ml-2 text-xl font-bold">Logo</span>
        </div>
        <nav className="flex space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
        <div className="flex items-center">
          <img src="/placeholder.svg" alt="user profile" className="mx-auto object-cover w-8 h-8 rounded-full" />
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-3xl">Welcome to Our Website</h1>
      </main>
      <footer className="p-4 bg-gray-800 text-white text-center">
        <p>© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;