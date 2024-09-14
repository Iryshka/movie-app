function CheckBox() {
  return (
    <div className="flex justify-start items-center w-full mb-4">
      <label
        className="relative flex cursor-pointer items-center rounded-full mr-2.5"
        htmlFor="ripple-on"
        data-ripple-dark="true"
      >
        <input
          id="ripple-on"
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border-2 border-[#7f5abe] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#7f5abe] checked:bg-[#7f5abe] checked:before:bg-[#7f5abe] hover:before:opacity-10"
        />
        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </label>
      <label
        className="mt-px text-sm cursor-pointer select-none font-light text-gray-100"
        htmlFor="ripple-on"
      >
        Remember Password
      </label>
    </div>
  );
}

export default CheckBox;
