import { useGoogleSheets } from "../services/googleSheetService";

export default function Projects() {
  const { getLocalizedData } = useGoogleSheets();

  // ดึงข้อมูลจากชีต "projects"
  const projectsData = getLocalizedData("projects");
  return (
    <div>
      <div className="w-full h-[687px] max-h-[687px] bg-gray-400 flex justify-center items-center">
        image height = 687px
      </div>
      <hr />
      <div>
        <div>
          <h1>ข้อมูล projects</h1>
          {projectsData.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
      </div>
      <hr />
      <div>Project</div>
      <div>Creating a Sustainable Ecosystem: The Journey of Chana Soap</div>
    </div>
  );
}
