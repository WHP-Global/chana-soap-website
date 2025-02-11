import { useGoogleSheets } from "../services/googleSheetService";

export default function AloeveraProject() {
  const { getLocalizedData } = useGoogleSheets();

  // ดึงข้อมูลจากชีต "aloe vera project"
  const aloeVeraProjectData = getLocalizedData("aloe vera project");
  return (
    <div>
      <div className="w-full h-[687px] max-h-[687px] bg-gray-400 flex justify-center items-center">
        image height = 687px
      </div>
      <hr />
      <div>
        <div>
          <h1>ข้อมูล aloe vera</h1>
          {aloeVeraProjectData.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
      </div>
      <hr />
      AloveraProject
    </div>
  );
}
