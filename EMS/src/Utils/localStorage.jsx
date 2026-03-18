const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Fix login bug",
        "description": "Resolve issue in authentication module",
        "date": "2026-03-18",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update UI",
        "description": "Improve dashboard design",
        "date": "2026-03-17",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Write tests",
        "description": "Add unit tests for API",
        "date": "2026-03-16",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "API integration",
        "description": "Connect frontend with backend",
        "date": "2026-03-18",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix CSS issues",
        "description": "Resolve responsiveness bugs",
        "date": "2026-03-15",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Database cleanup",
        "description": "Remove duplicate records",
        "date": "2026-03-14",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Code review",
        "description": "Review team pull requests",
        "date": "2026-03-13",
        "category": "Management",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Setup server",
        "description": "Deploy backend to cloud",
        "date": "2026-03-18",
        "category": "DevOps",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Optimize queries",
        "description": "Improve DB performance",
        "date": "2026-03-17",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix API error",
        "description": "Resolve 500 error issue",
        "date": "2026-03-16",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design homepage",
        "description": "Create landing page UI",
        "date": "2026-03-18",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix navbar",
        "description": "Resolve menu alignment issue",
        "date": "2026-03-17",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "User testing",
        "description": "Test usability of new UI",
        "date": "2026-03-15",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Icon updates",
        "description": "Replace outdated icons",
        "date": "2026-03-14",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Write documentation",
        "description": "Prepare API docs",
        "date": "2026-03-18",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix bugs",
        "description": "Resolve reported issues",
        "date": "2026-03-17",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Team meeting",
        "description": "Discuss sprint progress",
        "date": "2026-03-16",
        "category": "Management",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
]

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"

    }
]

export const setLocalStorage = ()=>{
localStorage.setItem("employees",JSON.stringify(employees))
localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
const employeeData = JSON.parse(localStorage.getItem("employees"))
console.log(employeeData)
const adminData = localStorage.getItem("admin")
console.log(JSON.parse(adminData))
}