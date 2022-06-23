import { TechItem } from "./style";


function TechCard({ status, title, handleOpenUpdate }) {
  
  return (
    <TechItem onClick={() => handleOpenUpdate(title)} status={status}>
      <p className="title">{title}</p>
      <p className="status">{status}</p>
    </TechItem>
  )
}

export default TechCard;