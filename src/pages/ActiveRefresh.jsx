import { useGoogleSheets } from "../services/googleSheetService";

export default function ActiveRefresh() {
  const { getLocalizedData } = useGoogleSheets();

  // ดึงข้อมูลจากชีต "active refresh"
  const activeRefreshData = getLocalizedData("active refresh");
  return (
    <div>
      <div className="w-full h-[687px] max-h-[687px] bg-gray-400 flex justify-center items-center">
        image height = 687px
      </div>
      <hr />
      <div>
        <div>
          <h1>ข้อมูล active refresh</h1>
          {activeRefreshData.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
      </div>
      <hr />
      ActiveRefresh
    </div>
  );
}
