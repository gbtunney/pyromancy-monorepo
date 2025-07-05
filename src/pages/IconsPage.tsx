import React from "react";

const IconsPage: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);
  const [heartClicked, setHeartClicked] = React.useState(false);
  const [starSpinning, setStarSpinning] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Toggle dark class on document
    document.documentElement.classList.toggle("dark");
  };

  const handleHeartClick = () => {
    setHeartClicked(!heartClicked);
    setTimeout(() => setHeartClicked(false), 1000);
  };

  const handleStarClick = () => {
    setStarSpinning(true);
    setTimeout(() => setStarSpinning(false), 1000);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-heading mb-4">
          Icon Testing Lab
        </h1>
        <p className="text-gray-600 font-body">
          UnoCSS Icons from various collections
        </p>
      </div>

      {/* Basic Icon Examples */}
      <section className="border-b pb-8">
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Basic Icons
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="text-center space-y-2">
            <div className="i-ph-anchor-simple-thin text-4xl mx-auto" />
            <p className="text-sm text-gray-600">ph-anchor-simple-thin</p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">
              i-ph-anchor-simple-thin
            </code>
          </div>

          <div className="text-center space-y-2">
            <div className="i-mdi-alarm text-orange-400 text-4xl mx-auto" />
            <p className="text-sm text-gray-600">mdi-alarm (orange)</p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">
              i-mdi-alarm text-orange-400
            </code>
          </div>

          <div className="text-center space-y-2">
            <div className="i-logos-vue text-3xl mx-auto" />
            <p className="text-sm text-gray-600">logos-vue (large)</p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">
              i-logos-vue text-3xl
            </code>
          </div>

          <div className="text-center space-y-2">
            <button className="i-carbon-sun dark:i-carbon-moon text-4xl mx-auto transition-all" />
            <p className="text-sm text-gray-600">carbon-sun/moon</p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">
              i-carbon-sun dark:i-carbon-moon
            </code>
          </div>

          <div className="text-center space-y-2">
            <div className="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy text-4xl mx-auto transition-all cursor-pointer" />
            <p className="text-sm text-gray-600">twemoji hover</p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">
              hover:i-twemoji-face-with-tears-of-joy
            </code>
          </div>

          <div className="text-center space-y-2">
            <div className="i-heroicons-heart text-red-500 text-4xl mx-auto" />
            <p className="text-sm text-gray-600">heroicons-heart</p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">
              i-heroicons-heart text-red-500
            </code>
          </div>
        </div>
      </section>

      {/* Icon Sizes */}
      <section className="border-b pb-8">
        <h2 className="text-2xl font-semibold font-heading mb-6">Icon Sizes</h2>
        <div className="flex flex-wrap items-center gap-6">
          <div className="text-center space-y-2">
            <div className="i-ph-star text-yellow-500 text-xs" />
            <p className="text-xs">text-xs</p>
          </div>
          <div className="text-center space-y-2">
            <div className="i-ph-star text-yellow-500 text-sm" />
            <p className="text-xs">text-sm</p>
          </div>
          <div className="text-center space-y-2">
            <div className="i-ph-star text-yellow-500 text-base" />
            <p className="text-xs">text-base</p>
          </div>
          <div className="text-center space-y-2">
            <div className="i-ph-star text-yellow-500 text-lg" />
            <p className="text-xs">text-lg</p>
          </div>
          <div className="text-center space-y-2">
            <div className="i-ph-star text-yellow-500 text-xl" />
            <p className="text-xs">text-xl</p>
          </div>
          <div className="text-center space-y-2">
            <div className="i-ph-star text-yellow-500 text-2xl" />
            <p className="text-xs">text-2xl</p>
          </div>
          <div className="text-center space-y-2">
            <div className="i-ph-star text-yellow-500 text-3xl" />
            <p className="text-xs">text-3xl</p>
          </div>
          <div className="text-center space-y-2">
            <div className="i-ph-star text-yellow-500 text-4xl" />
            <p className="text-xs">text-4xl</p>
          </div>
          <div className="text-center space-y-2">
            <div className="i-ph-star text-yellow-500 text-5xl" />
            <p className="text-xs">text-5xl</p>
          </div>
        </div>
      </section>

      {/* Icon Collections */}
      <section className="border-b pb-8">
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Icon Collections
        </h2>

        {/* Heroicons */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Heroicons</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
            <div className="text-center space-y-1">
              <div className="i-heroicons-home text-2xl text-blue-600" />
              <code className="text-xs">home</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-heroicons-user text-2xl text-green-600" />
              <code className="text-xs">user</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-heroicons-cog text-2xl text-purple-600" />
              <code className="text-xs">cog</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-heroicons-heart text-2xl text-red-600" />
              <code className="text-xs">heart</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-heroicons-star text-2xl text-yellow-600" />
              <code className="text-xs">star</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-heroicons-bell text-2xl text-indigo-600" />
              <code className="text-xs">bell</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-heroicons-search text-2xl text-gray-600" />
              <code className="text-xs">search</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-heroicons-mail text-2xl text-blue-600" />
              <code className="text-xs">mail</code>
            </div>
          </div>
        </div>

        {/* Material Design Icons */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Material Design Icons</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
            <div className="text-center space-y-1">
              <div className="i-mdi-account text-2xl text-blue-600" />
              <code className="text-xs">account</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-mdi-alarm text-2xl text-orange-600" />
              <code className="text-xs">alarm</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-mdi-camera text-2xl text-green-600" />
              <code className="text-xs">camera</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-mdi-delete text-2xl text-red-600" />
              <code className="text-xs">delete</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-mdi-email text-2xl text-blue-600" />
              <code className="text-xs">email</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-mdi-folder text-2xl text-yellow-600" />
              <code className="text-xs">folder</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-mdi-github text-2xl text-gray-800" />
              <code className="text-xs">github</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-mdi-help text-2xl text-purple-600" />
              <code className="text-xs">help</code>
            </div>
          </div>
        </div>

        {/* Carbon Icons */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Carbon Icons</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
            <div className="text-center space-y-1">
              <div className="i-carbon-add text-2xl text-green-600" />
              <code className="text-xs">add</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-carbon-close text-2xl text-red-600" />
              <code className="text-xs">close</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-carbon-download text-2xl text-blue-600" />
              <code className="text-xs">download</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-carbon-edit text-2xl text-orange-600" />
              <code className="text-xs">edit</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-carbon-favorite text-2xl text-red-600" />
              <code className="text-xs">favorite</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-carbon-moon text-2xl text-purple-600" />
              <code className="text-xs">moon</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-carbon-sun text-2xl text-yellow-600" />
              <code className="text-xs">sun</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-carbon-warning text-2xl text-orange-600" />
              <code className="text-xs">warning</code>
            </div>
          </div>
        </div>

        {/* Phosphor Icons */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Phosphor Icons</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
            <div className="text-center space-y-1">
              <div className="i-ph-anchor-simple-thin text-2xl text-blue-600" />
              <code className="text-xs">anchor</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-ph-bell text-2xl text-orange-600" />
              <code className="text-xs">bell</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-ph-calendar text-2xl text-green-600" />
              <code className="text-xs">calendar</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-ph-diamond text-2xl text-purple-600" />
              <code className="text-xs">diamond</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-ph-envelope text-2xl text-blue-600" />
              <code className="text-xs">envelope</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-ph-fire text-2xl text-red-600" />
              <code className="text-xs">fire</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-ph-gear text-2xl text-gray-600" />
              <code className="text-xs">gear</code>
            </div>
            <div className="text-center space-y-1">
              <div className="i-ph-house text-2xl text-green-600" />
              <code className="text-xs">house</code>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Icons */}
      <section className="border-b pb-8">
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Interactive Icons
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <button className="i-carbon-sun dark:i-carbon-moon text-4xl mx-auto transition-all duration-300 hover:scale-110"></button>
            <p className="text-sm">Theme Toggle</p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">
              dark:i-carbon-moon
            </code>
          </div>

          <div className="text-center space-y-2">
            <button className="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy text-4xl mx-auto transition-all cursor-pointer"></button>
            <p className="text-sm">Emoji Hover</p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">
              hover:i-twemoji-face-with-tears-of-joy
            </code>
          </div>

          <div className="text-center space-y-2">
            <button className="i-heroicons-heart hover:text-red-500 text-4xl mx-auto transition-colors duration-300"></button>
            <p className="text-sm">Color Change</p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">
              hover:text-red-500
            </code>
          </div>

          <div className="text-center space-y-2">
            <button className="i-mdi-star hover:animate-spin text-yellow-500 text-4xl mx-auto transition-all"></button>
            <p className="text-sm">Spin Animation</p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">
              hover:animate-spin
            </code>
          </div>
        </div>
      </section>

      {/* Icon Buttons */}
      <section className="border-b pb-8">
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Icon Buttons
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors flex items-center justify-center">
            <div className="i-heroicons-home text-xl" />
          </button>

          <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors flex items-center justify-center">
            <div className="i-heroicons-check text-xl" />
          </button>

          <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition-colors flex items-center justify-center">
            <div className="i-heroicons-x text-xl" />
          </button>

          <button className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-lg transition-colors flex items-center justify-center">
            <div className="i-heroicons-cog text-xl" />
          </button>

          <button className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg transition-colors flex items-center justify-center">
            <div className="i-heroicons-bell text-xl" />
          </button>

          <button className="bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-lg transition-colors flex items-center justify-center">
            <div className="i-heroicons-search text-xl" />
          </button>
        </div>
      </section>

      {/* Icon with Text */}
      <section className="border-b pb-8">
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Icons with Text
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
            <div className="i-heroicons-download" />
            Download
          </button>

          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
            <div className="i-heroicons-check" />
            Success
          </button>

          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
            <div className="i-heroicons-trash" />
            Delete
          </button>

          <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
            <div className="i-heroicons-cog" />
            Settings
          </button>

          <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
            <div className="i-heroicons-bell" />
            Notify
          </button>

          <button className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
            <div className="i-heroicons-user" />
            Profile
          </button>
        </div>
      </section>

      {/* Brand Logos */}
      <section>
        <h2 className="text-2xl font-semibold font-heading mb-6">
          Brand Logos
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
          <div className="text-center space-y-2">
            <div className="i-logos-vue text-4xl mx-auto" />
            <code className="text-xs">vue</code>
          </div>
          <div className="text-center space-y-2">
            <div className="i-logos-react text-4xl mx-auto" />
            <code className="text-xs">react</code>
          </div>
          <div className="text-center space-y-2">
            <div className="i-logos-typescript-icon text-4xl mx-auto" />
            <code className="text-xs">typescript</code>
          </div>
          <div className="text-center space-y-2">
            <div className="i-logos-javascript text-4xl mx-auto" />
            <code className="text-xs">javascript</code>
          </div>
          <div className="text-center space-y-2">
            <div className="i-logos-nodejs-icon text-4xl mx-auto" />
            <code className="text-xs">nodejs</code>
          </div>
          <div className="text-center space-y-2">
            <div className="i-logos-python text-4xl mx-auto" />
            <code className="text-xs">python</code>
          </div>
          <div className="text-center space-y-2">
            <div className="i-logos-github-icon text-4xl mx-auto" />
            <code className="text-xs">github</code>
          </div>
          <div className="text-center space-y-2">
            <div className="i-logos-vscode-insiders text-4xl mx-auto" />
            <code className="text-xs">vscode</code>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IconsPage;
