export default function header() {
  return (
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold text-blue-600">
          MySite
        </a>

        <nav class="space-x-6">
          <a href="#" class="text-gray-600 hover:text-blue-500">
            Home
          </a>
          <a href="#" class="text-gray-600 hover:text-blue-500">
            Shop
          </a>
          <a href="#" class="text-gray-600 hover:text-blue-500">
            About
          </a>
          <a href="#" class="text-gray-600 hover:text-blue-500">
            Contact
          </a>
        </nav>

        <a
          href="#"
          class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Login
        </a>
      </div>
    </header>
  );
}
