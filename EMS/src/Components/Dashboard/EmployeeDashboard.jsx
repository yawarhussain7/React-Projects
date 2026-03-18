import Header from '../Other/Header'
import TaskList_No from '../Other/TaskList_No'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen '>
      <Header/>
      <TaskList_No/>
      <Tasklist/>
    </div>
  )
}

export default EmployeeDashboard