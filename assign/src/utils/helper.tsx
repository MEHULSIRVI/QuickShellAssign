import LowPriorityIcon from './icons/LowPriorityIcon';
import MediumPriorityIcon from './icons/MediumPriorityIcon';
import HighPriorityIcon from './icons/HighPriorityIcon';
import UrgentPriorityIcon from './icons/UrgentPriorityIcon';
import BacklogStatusIcon from './icons/BacklogStatusIcon';
import TodoStatusIcon from './icons/TodoStatusIcon';
import InProgressStatusIcon from './icons/InProgressStatusIcon';
import DoneStatusIcon from './icons/DoneStatusIcon';
import CanceledStatusIcon from './icons/CanceledStatusIcon';
import NoPriorityIcon from './icons/NoPriorityIcon';


export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": return <NoPriorityIcon/>
        case "Low": return <LowPriorityIcon/>
        case "Medium": return <MediumPriorityIcon/>
        case "High": return <HighPriorityIcon/>
        case "Urgent": return <UrgentPriorityIcon/>
        default: return <DoneStatusIcon/>
    }
}

export const getStatusIcon = (priority: string) => {
    switch (priority) {
        case "Backlog": return <BacklogStatusIcon/>
        case "Todo": return <TodoStatusIcon/>
        case "In progress": return <InProgressStatusIcon/>
        case "Done": return <DoneStatusIcon/>
        case "Canceled": return <CanceledStatusIcon/>
        default: return <DoneStatusIcon/>
    }
}