<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export function load({ error, status }) {
      return {
        props: {
          title: `${status}: ${error.message}`
        }
      };
    }
  </script>
  
  <script>
    export let title;
  </script>
  <div class="h-screen w-screen bg-blue-400 text-white grid place-items-center place-content-center">
    <div class="grid place-items-center">
      <h1>{title}</h1>
      <a href="/" class="rounded bg-blue-600 hover:text-black hover:bg-blue-200 my-2 mt-3 p-1 transition ease-in-out delay-75">Home</a>
    </div>
  </div>