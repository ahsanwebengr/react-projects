const Selector = ({ toggleTheme, theme }) => {
   const options = ["red", "blue", "orange"];

   return (
      <div className="flex flex-col gap-3 max-w-screen-sm">
         <label htmlFor="">Select Theme</label>
         <select
            defaultValue=""
            onChange={(e) => toggleTheme(e)}
            className="border p-3 rounded-md capitalize"
         >
            <option value="">Select Theme</option>
            {options?.map((option) => (
               <option key={option} value={option} className="capitalize">
                  {option}
               </option>
            ))}
         </select>
      </div>
   );
};

export default Selector;
