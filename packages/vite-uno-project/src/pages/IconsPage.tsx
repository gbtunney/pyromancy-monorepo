import React from 'react'

const IconsPage: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false)
  const [heartClicked, setHeartClicked] = React.useState(false)
  const [starSpinning, setStarSpinning] = React.useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    // Toggle dark class on document
    document.documentElement.classList.toggle('dark')
  }

  const handleHeartClick = () => {
    setHeartClicked(!heartClicked)
    setTimeout(() => setHeartClicked(false), 1000)
  }

  const handleStarClick = () => {
    setStarSpinning(true)
    setTimeout(() => setStarSpinning(false), 1000)
  }

  return (
    <div className="mx-auto max-w-6xl space-y-12 p-8">
      <div className="mb-12 text-center">
        <h1 className="font-heading mb-4 text-4xl font-bold">
          Icon Testing Lab
        </h1>
        <p className="font-body text-gray-600">
          UnoCSS Icons from various collections
        </p>
      </div>

      {/* Basic Icon Examples */}
      <section className="border-b pb-8">
        <h2 className="font-heading mb-6 text-2xl font-semibold">
          Basic Icons
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          <div className="space-y-2 text-center">
            <div className="i-ph-anchor-simple-thin mx-auto text-4xl" />
            <p className="text-sm text-gray-600">ph-anchor-simple-thin</p>
            <code className="rounded bg-gray-100 px-2 py-1 text-xs">
              i-ph-anchor-simple-thin
            </code>
          </div>

          <div className="space-y-2 text-center">
            <div className="i-mdi-alarm mx-auto text-4xl text-orange-400" />
            <p className="text-sm text-gray-600">mdi-alarm (orange)</p>
            <code className="rounded bg-gray-100 px-2 py-1 text-xs">
              i-mdi-alarm text-orange-400
            </code>
          </div>

          <div className="space-y-2 text-center">
            <div className="i-logos-vue mx-auto text-3xl" />
            <p className="text-sm text-gray-600">logos-vue (large)</p>
            <code className="rounded bg-gray-100 px-2 py-1 text-xs">
              i-logos-vue text-3xl
            </code>
          </div>

          <div className="space-y-2 text-center">
            <button className="i-carbon-sun dark:i-carbon-moon mx-auto text-4xl transition-all" />
            <p className="text-sm text-gray-600">carbon-sun/moon</p>
            <code className="rounded bg-gray-100 px-2 py-1 text-xs">
              i-carbon-sun dark:i-carbon-moon
            </code>
          </div>

          <div className="space-y-2 text-center">
            <div className="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy mx-auto cursor-pointer text-4xl transition-all" />
            <p className="text-sm text-gray-600">twemoji hover</p>
            <code className="rounded bg-gray-100 px-2 py-1 text-xs">
              hover:i-twemoji-face-with-tears-of-joy
            </code>
          </div>

          <div className="space-y-2 text-center">
            <div className="i-heroicons-heart mx-auto text-4xl text-red-500" />
            <p className="text-sm text-gray-600">heroicons-heart</p>
            <code className="rounded bg-gray-100 px-2 py-1 text-xs">
              i-heroicons-heart text-red-500
            </code>
          </div>
        </div>
      </section>

      {/* Icon Sizes */}
      <section className="border-b pb-8">
        <h2 className="font-heading mb-6 text-2xl font-semibold">Icon Sizes</h2>
        <div className="flex flex-wrap items-center gap-6">
          <div className="space-y-2 text-center">
            <div className="i-ph-star text-xs text-yellow-500" />
            <p className="text-xs">text-xs</p>
          </div>
          <div className="space-y-2 text-center">
            <div className="i-ph-star text-sm text-yellow-500" />
            <p className="text-xs">text-sm</p>
          </div>
          <div className="space-y-2 text-center">
            <div className="i-ph-star text-base text-yellow-500" />
            <p className="text-xs">text-base</p>
          </div>
          <div className="space-y-2 text-center">
            <div className="i-ph-star text-lg text-yellow-500" />
            <p className="text-xs">text-lg</p>
          </div>
          <div className="space-y-2 text-center">
            <div className="i-ph-star text-xl text-yellow-500" />
            <p className="text-xs">text-xl</p>
          </div>
          <div className="space-y-2 text-center">
            <div className="i-ph-star text-2xl text-yellow-500" />
            <p className="text-xs">text-2xl</p>
          </div>
          <div className="space-y-2 text-center">
            <div className="i-ph-star text-3xl text-yellow-500" />
            <p className="text-xs">text-3xl</p>
          </div>
          <div className="space-y-2 text-center">
            <div className="i-ph-star text-4xl text-yellow-500" />
            <p className="text-xs">text-4xl</p>
          </div>
          <div className="space-y-2 text-center">
            <div className="i-ph-star text-5xl text-yellow-500" />
            <p className="text-xs">text-5xl</p>
          </div>
        </div>
      </section>

      {/* Icon Collections */}
      <section className="border-b pb-8">
        <h2 className="font-heading mb-6 text-2xl font-semibold">
          Icon Collections
        </h2>

        {/* Heroicons */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium">Heroicons</h3>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
            <div className="space-y-1 text-center">
              <div className="i-heroicons-home text-2xl text-blue-600" />
              <code className="text-xs">home</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-heroicons-user text-2xl text-green-600" />
              <code className="text-xs">user</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-heroicons-cog text-2xl text-purple-600" />
              <code className="text-xs">cog</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-heroicons-heart text-2xl text-red-600" />
              <code className="text-xs">heart</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-heroicons-star text-2xl text-yellow-600" />
              <code className="text-xs">star</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-heroicons-bell text-2xl text-indigo-600" />
              <code className="text-xs">bell</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-heroicons-search text-2xl text-gray-600" />
              <code className="text-xs">search</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-heroicons-mail text-2xl text-blue-600" />
              <code className="text-xs">mail</code>
            </div>
          </div>
        </div>

        {/* Material Design Icons */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium">Material Design Icons</h3>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
            <div className="space-y-1 text-center">
              <div className="i-mdi-account text-2xl text-blue-600" />
              <code className="text-xs">account</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-mdi-alarm text-2xl text-orange-600" />
              <code className="text-xs">alarm</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-mdi-camera text-2xl text-green-600" />
              <code className="text-xs">camera</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-mdi-delete text-2xl text-red-600" />
              <code className="text-xs">delete</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-mdi-email text-2xl text-blue-600" />
              <code className="text-xs">email</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-mdi-folder text-2xl text-yellow-600" />
              <code className="text-xs">folder</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-mdi-github text-2xl text-gray-800" />
              <code className="text-xs">github</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-mdi-help text-2xl text-purple-600" />
              <code className="text-xs">help</code>
            </div>
          </div>
        </div>

        {/* Carbon Icons */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium">Carbon Icons</h3>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
            <div className="space-y-1 text-center">
              <div className="i-carbon-add text-2xl text-green-600" />
              <code className="text-xs">add</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-carbon-close text-2xl text-red-600" />
              <code className="text-xs">close</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-carbon-download text-2xl text-blue-600" />
              <code className="text-xs">download</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-carbon-edit text-2xl text-orange-600" />
              <code className="text-xs">edit</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-carbon-favorite text-2xl text-red-600" />
              <code className="text-xs">favorite</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-carbon-moon text-2xl text-purple-600" />
              <code className="text-xs">moon</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-carbon-sun text-2xl text-yellow-600" />
              <code className="text-xs">sun</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-carbon-warning text-2xl text-orange-600" />
              <code className="text-xs">warning</code>
            </div>
          </div>
        </div>

        {/* Phosphor Icons */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium">Phosphor Icons</h3>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
            <div className="space-y-1 text-center">
              <div className="i-ph-anchor-simple-thin text-2xl text-blue-600" />
              <code className="text-xs">anchor</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-ph-bell text-2xl text-orange-600" />
              <code className="text-xs">bell</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-ph-calendar text-2xl text-green-600" />
              <code className="text-xs">calendar</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-ph-diamond text-2xl text-purple-600" />
              <code className="text-xs">diamond</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-ph-envelope text-2xl text-blue-600" />
              <code className="text-xs">envelope</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-ph-fire text-2xl text-red-600" />
              <code className="text-xs">fire</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-ph-gear text-2xl text-gray-600" />
              <code className="text-xs">gear</code>
            </div>
            <div className="space-y-1 text-center">
              <div className="i-ph-house text-2xl text-green-600" />
              <code className="text-xs">house</code>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Icons */}
      <section className="border-b pb-8">
        <h2 className="font-heading mb-6 text-2xl font-semibold">
          Interactive Icons
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="space-y-2 text-center">
            <button className="i-carbon-sun dark:i-carbon-moon mx-auto text-4xl transition-all duration-300 hover:scale-110"></button>
            <p className="text-sm">Theme Toggle</p>
            <code className="rounded bg-gray-100 px-2 py-1 text-xs">
              dark:i-carbon-moon
            </code>
          </div>

          <div className="space-y-2 text-center">
            <button className="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy mx-auto cursor-pointer text-4xl transition-all"></button>
            <p className="text-sm">Emoji Hover</p>
            <code className="rounded bg-gray-100 px-2 py-1 text-xs">
              hover:i-twemoji-face-with-tears-of-joy
            </code>
          </div>

          <div className="space-y-2 text-center">
            <button className="i-heroicons-heart mx-auto text-4xl transition-colors duration-300 hover:text-red-500"></button>
            <p className="text-sm">Color Change</p>
            <code className="rounded bg-gray-100 px-2 py-1 text-xs">
              hover:text-red-500
            </code>
          </div>

          <div className="space-y-2 text-center">
            <button className="i-mdi-star mx-auto text-4xl text-yellow-500 transition-all hover:animate-spin"></button>
            <p className="text-sm">Spin Animation</p>
            <code className="rounded bg-gray-100 px-2 py-1 text-xs">
              hover:animate-spin
            </code>
          </div>
        </div>
      </section>

      {/* Icon Buttons */}
      <section className="border-b pb-8">
        <h2 className="font-heading mb-6 text-2xl font-semibold">
          Icon Buttons
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <button className="flex items-center justify-center rounded-lg bg-blue-500 p-3 text-white transition-colors hover:bg-blue-600">
            <div className="i-heroicons-home text-xl" />
          </button>

          <button className="flex items-center justify-center rounded-lg bg-green-500 p-3 text-white transition-colors hover:bg-green-600">
            <div className="i-heroicons-check text-xl" />
          </button>

          <button className="flex items-center justify-center rounded-lg bg-red-500 p-3 text-white transition-colors hover:bg-red-600">
            <div className="i-heroicons-x text-xl" />
          </button>

          <button className="flex items-center justify-center rounded-lg bg-purple-500 p-3 text-white transition-colors hover:bg-purple-600">
            <div className="i-heroicons-cog text-xl" />
          </button>

          <button className="flex items-center justify-center rounded-lg bg-orange-500 p-3 text-white transition-colors hover:bg-orange-600">
            <div className="i-heroicons-bell text-xl" />
          </button>

          <button className="flex items-center justify-center rounded-lg bg-gray-500 p-3 text-white transition-colors hover:bg-gray-600">
            <div className="i-heroicons-search text-xl" />
          </button>
        </div>
      </section>

      {/* Icon with Text */}
      <section className="border-b pb-8">
        <h2 className="font-heading mb-6 text-2xl font-semibold">
          Icons with Text
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <button className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
            <div className="i-heroicons-download" />
            Download
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600">
            <div className="i-heroicons-check" />
            Success
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600">
            <div className="i-heroicons-trash" />
            Delete
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-purple-500 px-4 py-2 text-white transition-colors hover:bg-purple-600">
            <div className="i-heroicons-cog" />
            Settings
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600">
            <div className="i-heroicons-bell" />
            Notify
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-gray-500 px-4 py-2 text-white transition-colors hover:bg-gray-600">
            <div className="i-heroicons-user" />
            Profile
          </button>
        </div>
      </section>

      {/* Brand Logos */}
      <section>
        <h2 className="font-heading mb-6 text-2xl font-semibold">
          Brand Logos
        </h2>
        <div className="grid grid-cols-3 gap-6 md:grid-cols-6 lg:grid-cols-8">
          <div className="space-y-2 text-center">
            <div className="i-logos-vue mx-auto text-4xl" />
            <code className="text-xs">vue</code>
          </div>
          <div className="space-y-2 text-center">
            <div className="i-logos-react mx-auto text-4xl" />
            <code className="text-xs">react</code>
          </div>
          <div className="space-y-2 text-center">
            <div className="i-logos-typescript-icon mx-auto text-4xl" />
            <code className="text-xs">typescript</code>
          </div>
          <div className="space-y-2 text-center">
            <div className="i-logos-javascript mx-auto text-4xl" />
            <code className="text-xs">javascript</code>
          </div>
          <div className="space-y-2 text-center">
            <div className="i-logos-nodejs-icon mx-auto text-4xl" />
            <code className="text-xs">nodejs</code>
          </div>
          <div className="space-y-2 text-center">
            <div className="i-logos-python mx-auto text-4xl" />
            <code className="text-xs">python</code>
          </div>
          <div className="space-y-2 text-center">
            <div className="i-logos-github-icon mx-auto text-4xl" />
            <code className="text-xs">github</code>
          </div>
          <div className="space-y-2 text-center">
            <div className="i-logos-vscode-insiders mx-auto text-4xl" />
            <code className="text-xs">vscode</code>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IconsPage
