import { Fragment, useState } from "react";

// const categories = [
//   {
//     name: "Boiled Rice",
//     products: ["Boiled IR Rice", "Boiled Swarna Rice"],
//   },
//   {
//     name: "White Rice",
//     products: ["White Broken Rice", "White Rice"],
//   },
// ];

// const products = [
//   {
//     title: "Boiled IR Rice",
//     description:
//       "We specialize in providing premium-quality Boiled IR Rice, meticulously processed to meet global industry standards.",
//     image: "/product-1.png",
//   },
//   {
//     title: "Boiled Swarna Rice",
//     description:
//       "We process Boiled Swarna Rice with precision, ensuring it meets the highest standards for the global market.",
//     image: "/product-2.png",
//   },
//   {
//     title: "White Broken Rice",
//     description:
//       "Every batch of White Broken Rice meets rigorous quality standards to ensure the best taste and nutrition.",
//     image: "/product-3.png",
//   },
//   {
//     title: "White Rice",
//     description:
//       "We ensure that every batch of White Rice meets the highest quality standards for a superior culinary experience.",
//     image: "/product-4.png",
//   },
// ];

// export default function ProductPage() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   // Function to get filtered products based on category
//   const getFilteredProducts = () => {
//     if (selectedProduct) {
//       return [selectedProduct]; // Show only selected product in detail view
//     }
//     if (selectedCategory === "All") {
//       return products;
//     }
//     return products.filter((product) =>
//       categories
//         .find((cat) => cat.name === selectedCategory)
//         ?.products.includes(product.title)
//     );
//   };

//   return (
//     <div className="flex flex-col min-h-screen lg:flex-row  bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-full lg:w-1/4 bg-white shadow-lg p-6 border-r">
//         {/* <h3 className="text-2xl font-bold text-[#558B2F] mb-4">Categories</h3> */}
//         <ul>
//           <li>
//             <button
//               className={`w-full text-left p-2 mt-8 font-semibold hover:text-[#558B2F] transition ${
//                 selectedCategory === "All" && !selectedProduct
//                   ? "text-[#558B2F]"
//                   : ""
//               }`}
//               onClick={() => {
//                 setSelectedCategory("All");
//                 setSelectedProduct(null);
//               }}
//             >
//               All Products
//             </button>
//           </li>
//           {categories.map((category) => (
//             <li key={category.name}>
//               <button
//                 className={`w-full text-left p-2 font-semibold hover:text-[#558B2F] transition ${
//                   selectedCategory === category.name && !selectedProduct
//                     ? "text-[#558B2F]"
//                     : ""
//                 }`}
//                 onClick={() => {
//                   setSelectedCategory(category.name);
//                   setSelectedProduct(null);
//                 }}
//               >
//                 {category.name}
//               </button>
//               <ul className="pl-4">
//                 {category.products.map((productTitle) => (
//                   <li key={productTitle}>
//                     <button
//                       className={`w-full text-left p-2 text-sm hover:text-[#558B2F] transition ${
//                         selectedProduct?.title === productTitle
//                           ? "text-[#558B2F]"
//                           : ""
//                       }`}
//                       onClick={() =>
//                         setSelectedProduct(
//                           products.find((p) => p.title === productTitle)
//                         )
//                       }
//                     >
//                       {productTitle}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {selectedProduct ? (
//           // Product Detail View
//           <div className="max-w-2xl mx-auto bg-white p-6 mt-8 rounded-lg shadow-lg">
//             <button
//               className="text-[#558B2F] font-semibold mb-4"
//               onClick={() => setSelectedProduct(null)}
//             >
//               ← Back to {selectedCategory}
//             </button>
//             <div className="text-center">
//               <img
//                 src={selectedProduct.image}
//                 alt={selectedProduct.title}
//                 className="w-64 h-64 object-cover mx-auto rounded-lg border"
//               />
//               <h2 className="text-3xl font-bold text-[#558B2F] mt-4">
//                 {selectedProduct.title}
//               </h2>
//               <p className="text-lg text-gray-700 mt-2">
//                 {selectedProduct.description}
//               </p>
//             </div>
//           </div>
//         ) : (
//           // Product List View
//           <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-14">
//             {getFilteredProducts().map((product) => (
//               <div
//                 key={product.title}
//                 className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4 cursor-pointer hover:shadow-xl transition"
//                 onClick={() => setSelectedProduct(product)}
//               >
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-28 h-28 object-cover rounded-lg border"
//                 />
//                 <div>
//                   <h2 className="text-lg font-semibold text-[#558B2F]">
//                     {product.title}
//                   </h2>
//                   <p className="text-gray-700 text-sm mt-1">
//                     {product.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

("use client");

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

const navigation = {
  categories: [
    {
      name: "Category 1",
      featured: [
        {
          name: "Featured Item 1",
          href: "#",
          imageSrc: "https://via.placeholder.com/150",
          imageAlt: "Featured Item 1",
        },
      ],
      sections: [
        {
          name: "Section 1",
          id: "section-1",
          items: [{ name: "Item 1", href: "#" }],
        },
      ],
    },
  ],
  pages: [{ name: "Page 1", href: "#" }],
};

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "All Products", href: "#" },
  { name: "Boiled Rice", href: "#" },
  { name: "White Rice", href: "#" },
];
const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "Boiled IR Rice", label: "Boiled IR Rice", checked: false },
      {
        value: "Boiled Swarna Rice",
        label: "Boiled Swarna Rice",
        checked: false,
      },
      { value: "White Broken Rice", label: "White Broken Rice", checked: true },
      { value: "White Rice", label: "White Rice", checked: false },
    ],
  },
];
const products = [
  {
    title: "Boiled IR Rice",
    description:
      "We specialize in providing premium-quality Boiled IR Rice, meticulously processed to meet global industry standards.",
    image: "/product-1.png",
  },
  {
    title: "Boiled Swarna Rice",
    description:
      "We process Boiled Swarna Rice with precision, ensuring it meets the highest standards for the global market.",
    image: "/product-2.png",
  },
  {
    title: "White Broken Rice",
    description:
      "Every batch of White Broken Rice meets rigorous quality standards to ensure the best taste and nutrition.",
    image: "/product-3.png",
  },
  {
    title: "White Rice",
    description:
      "We ensure that every batch of White Rice meets the highest quality standards for a superior culinary experience.",
    image: "/product-4.png",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Produtes() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a
                      href={page.href}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        <header className="relative bg-white">
          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>

                {/* Logo */}

                {/* Flyout menus */}
              </div>
            </div>
          </nav>
        </header>
      </div>

      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 group-[&:not([data-open])]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  defaultChecked={option.checked}
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Our Products
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 py-6"
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 group-[&:not([data-open])]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  defaultChecked={option.checked}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
                {products.map((product) => (
                  <a
                    key={product.id}
                    href={product.href}
                    className="group text-sm"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                    />
                    <h3 className="text-[#558B2F] font-semibold mb-4">
                      {product.title}
                    </h3>
                    <p className="italic text-gray-500">{product.name}</p>
                    <p className="mt-2 font-medium text-gray-900">
                      {product.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
