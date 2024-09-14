function LoginInput({ type, id, placeholder }) {
  return (
    <div className="my-1.5">
      <input
        type={type}
        id={id}
        className="w-18 text-white bg-[#334155] hover:border-[#7f5abe] border-4 border-transparent focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-md text-sm px-11 py-1.5 text-center items-center transition-all duration-300"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default LoginInput;
