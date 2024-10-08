import { useMemo } from "react";
import Card from "../ToDoCard";
import "./column.css";
import { Ticket, User } from "../../interfaces";
import { getPriorityIcon, getStatusIcon } from "../../utils/GetIcons";
import UserIcon from "../UserIcon";
import ThreeDotIcon from "../../utils/icons/ThreeDotIcon";
import AddIcon from "../../utils/icons/AddIcon";
function Column({
  tickets,
  grouping,
  groupBy,
  userIdToData,
}: {
  tickets: Ticket[];
  grouping: string;
  groupBy: string;
  userIdToData: Record<string, User>;
}) {
  const icon = useMemo(() => {
    if (grouping === "status") return getStatusIcon(groupBy);
    if (grouping === "priority") return getPriorityIcon(groupBy);
    if (grouping === "user")
      return (
        <UserIcon
          name={userIdToData[groupBy].name}
          available={userIdToData[groupBy].available}
        />
      );
  }, [grouping, groupBy]);
  
  const title = useMemo(() => {
    if (grouping === "status") return groupBy;
    if (grouping === "priority") return groupBy;
    if (grouping === "user") return userIdToData[groupBy].name;
  }, [grouping, groupBy]);



  return (
    <div className="column">
      <div className="column-header">
        <div className="column-header-left-container">
          {icon}
          <div className="column-title">
            {title}
            <span className="count">{tickets.length}</span>
          </div>
        </div>
        <div className="column-header-right-container">
          <AddIcon></AddIcon>
          <ThreeDotIcon></ThreeDotIcon>
        </div>
      </div>
      <div className="cards-container">
        {tickets.map((ticket: Ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            userData={userIdToData[ticket.userId]}
            hideStatusIcon={grouping === "status"}
            hideProfileIcon={grouping === "user"}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
