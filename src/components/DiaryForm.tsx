import { FormEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { addDiary } from "../redux/slices/diarySlice";

function DiaryForm() {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();

    const time = date.toLocaleTimeString("us-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return `${day} ${month} ${year} | ${time}`;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = inputRef.current?.value ?? "-";
    const timeStamp = formatDate(new Date());

    dispatch(addDiary({ text, timeStamp }));
  };

  return (
    <section className="w-full bg-slate-800 p-4 rounded-xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          ref={inputRef}
          required
          placeholder="Write your message here"
          className="w-full rounded-md bg-slate-700 p-2 resize-y outline-[1.5px] outline-offset-2 focus:outline outline-sky-500"
        />
        <button className="p-2 bg-sky-500 w-full rounded-md font-bold hover:bg-sky-600">
          Add Diary
        </button>
      </form>
    </section>
  );
}

export default DiaryForm;
