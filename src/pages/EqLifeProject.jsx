import { useGoogleSheets } from "../services/googleSheetService";

export default function EqLifeProject() {
  const { getLocalizedData } = useGoogleSheets();

  // ดึงข้อมูลจากชีต "eq life project"
  const eqLifeProjectData = getLocalizedData("eq life project");
  return (
    <div>
      <div className="w-full h-[687px] max-h-[687px] bg-gray-400 flex justify-center items-center">
        image height = 687px
      </div>
      <hr />
      <div>
        <div>
          <h1>ข้อมูล eq ilfe</h1>
          {eqLifeProjectData.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
      </div>
      <hr />
      EqLifeProject
    </div>
  );
}
