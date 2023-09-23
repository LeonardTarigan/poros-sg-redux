import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { deleteDiaryItem } from "../redux/slices/diarySlice";

function DiaryList() {
  const diaries = useSelector((state: RootState) => state.diary.data);

  const dispatch = useDispatch();

  return (
    <div className="w-full bg-slate-800 p-4 rounded-xl flex flex-col gap-3">
      {diaries.length === 0 && (
        <div className="h-10 flex items-center justify-center italic font-semibold text-slate-400">
          No Diary Found
        </div>
      )}
      {diaries?.map(({ timeStamp, text }, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-start gap-3 rounded-xl bg-slate-700 p-5 transition-colors duration-150"
          >
            <div className="flex w-full items-center justify-between gap-5">
              <span className="text-sm font-semibold text-slate-400">
                {timeStamp}
              </span>
              <button
                onClick={() => dispatch(deleteDiaryItem({ text, timeStamp }))}
                className="group rounded border-2 font-semibold text-rose-500 border-rose-500 bg-transparent py-1 px-4 transition-all duration-150 hover:bg-rose-500 hover:text-white active:translate-y-1"
              >
                Delete
              </button>
            </div>

            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DiaryList;
