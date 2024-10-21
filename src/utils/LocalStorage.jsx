const employees=
    {
        "employees": [
          {
            "id": 1,
            "email": "employee1@example.com",
            "password": "123",
            "tasks": [
              {
                "title": "Task 1",
                "description": "Complete the monthly report.",
                "date": "2024-10-10",
                "category": "Reports",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
              },
              {
                "title": "Task 2",
                "description": "Prepare presentation for client meeting.",
                "date": "2024-10-15",
                "category": "Presentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
              },
              {
                "title": "Task 3",
                "description": "Update project documentation.",
                "date": "2024-10-05",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
              }
            ]
          },
          {
            "id": 2,
            "email": "employee2@example.com",
            "password": "123",
            "tasks": [
              {
                "title": "Task 1",
                "description": "Fix bugs in the user dashboard.",
                "date": "2024-10-11",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
              },
              {
                "title": "Task 2",
                "description": "Deploy the new feature to production.",
                "date": "2024-10-07",
                "category": "Deployment",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
              },
              {
                "title": "Task 3",
                "description": "Review pull requests from the team.",
                "date": "2024-10-09",
                "category": "Code Review",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
              },
              {
                "title": "Task 4",
                "description": "Conduct interview with a potential candidate.",
                "date": "2024-10-12",
                "category": "HR",
                "active": true,
                "newTask": true,
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
                "title": "Task 1",
                "description": "Organize the team-building event.",
                "date": "2024-10-20",
                "category": "Event Planning",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
              },
              {
                "title": "Task 2",
                "description": "Submit the budget plan for Q4.",
                "date": "2024-10-01",
                "category": "Finance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
              },
              {
                "title": "Task 3",
                "description": "Coordinate with vendors for project resources.",
                "date": "2024-10-08",
                "category": "Vendor Management",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
              },
              {
                "title": "Task 4",
                "description": "Draft the marketing strategy for product launch.",
                "date": "2024-10-15",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
              },
              {
                "title": "Task 5",
                "description": "Analyze competitor data for quarterly report.",
                "date": "2024-10-02",
                "category": "Analysis",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
              }
            ]
          },
          {
            "id": 4,
            "email": "employee4@example.com",
            "password": "123",
            "tasks": [
              {
                "title": "Task 1",
                "description": "Create training materials for new employees.",
                "date": "2024-10-18",
                "category": "Training",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
              },
              {
                "title": "Task 2",
                "description": "Plan and execute the next marketing campaign.",
                "date": "2024-10-10",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
              },
              {
                "title": "Task 3",
                "description": "Evaluate performance reports from Q3.",
                "date": "2024-10-05",
                "category": "Performance",
                "active": false,
                "newTask": false,
                "completed": true,
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
                "title": "Task 1",
                "description": "Perform security audit for the new feature.",
                "date": "2024-10-06",
                "category": "Security",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
              },
              {
                "title": "Task 2",
                "description": "Attend team meeting regarding project deadlines.",
                "date": "2024-10-12",
                "category": "Meetings",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
              },
              {
                "title": "Task 3",
                "description": "Prepare testing scenarios for the new application.",
                "date": "2024-10-03",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
              },
              {
                "title": "Task 4",
                "description": "Fix critical bugs in the backend API.",
                "date": "2024-10-11",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
              },
              {
                "title": "Task 5",
                "description": "Optimize database queries for performance.",
                "date": "2024-10-13",
                "category": "Database",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
              }
            ]
          }
        ]
      }
      
      


const admin=[
    {
        "admin": {
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }
      }
      
]


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  }
  
  
  export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    console.log(data)
    return data ? JSON.parse(data) : null; 
  }