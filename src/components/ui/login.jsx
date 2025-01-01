export default function Login() {
  return (
    <div class="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-bold text-center text-gray-700">Login</h2>
      <form class="mt-6">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            class="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            required
          />
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </div>
      </form>

      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">
          Don’t have an account?
          <a href="#" class="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
