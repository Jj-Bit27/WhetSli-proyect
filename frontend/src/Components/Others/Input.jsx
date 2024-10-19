const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-green-500" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-2 bg-slate-500 dark:bg-zinc-700 bg-opacity-50 rounded-lg border border-slate-400 dark:border-zinc-600 focus:border-green-500 dark:focus:border-green-500 focus:outline-none text-black dark:text-white placeholder-slate-600 dark:placeholder-slate-400 transition duration-200"
      />
    </div>
  );
};
export default Input;
