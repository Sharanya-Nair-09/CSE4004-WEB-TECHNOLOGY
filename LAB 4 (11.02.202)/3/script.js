// SIMULATED DATABASE (Local Storage or Array)
let students = [
    { id: "S101", name: "Alice Johnson", dept: "Computer Science", marks: 88 },
    { id: "S102", name: "Bob Smith", dept: "Mechanical", marks: 74 }
];

const tableBody = document.getElementById('tableBody');
const form = document.getElementById('studentForm');
const statusBox = document.getElementById('statusMessage');

/**
 * 1. MOCK AJAX SERVER
 * Simulates a real backend to handle HTTP status codes (200, 404, 500)
 */
async function mockFetch(method, data = null, id = null) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                if (method === 'GET') resolve({ status: 200, data: students });
                
                if (method === 'POST') {
                    if (students.find(s => s.id === data.id)) resolve({ status: 500, message: "ID already exists" });
                    students.push(data);
                    resolve({ status: 201, message: "Student added successfully" });
                }

                if (method === 'PUT') {
                    let index = students.findIndex(s => s.id === id);
                    if (index === -1) resolve({ status: 404, message: "Student not found" });
                    students[index] = data;
                    resolve({ status: 200, message: "Student updated" });
                }

                if (method === 'DELETE') {
                    students = students.filter(s => s.id !== id);
                    resolve({ status: 200, message: "Student deleted" });
                }
            } catch (e) {
                resolve({ status: 500, message: "Internal Server Error" });
            }
        }, 400); // Simulate network lag
    });
}

/**
 * 2. READ OPERATION (Fetch and Display)
 */
async function loadStudents() {
    tableBody.innerHTML = "<tr><td colspan='5'>Loading...</td></tr>";
    const res = await mockFetch('GET');
    
    if (res.status === 200) {
        tableBody.innerHTML = "";
        res.data.forEach(s => {
            const row = `<tr>
                <td>${s.id}</td>
                <td>${s.name}</td>
                <td>${s.dept}</td>
                <td>${s.marks}%</td>
                <td>
                    <button class="action-btn edit" onclick="enableEdit('${s.id}')">Edit</button>
                    <button class="action-btn delete" onclick="deleteStudent('${s.id}')">Delete</button>
                </td>
            </tr>`;
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    }
}

/**
 * 3. CREATE & UPDATE OPERATIONS
 */
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const isEdit = document.getElementById('editMode').value === "true";
    const student = {
        id: document.getElementById('studentId').value,
        name: document.getElementById('studentName').value,
        dept: document.getElementById('department').value,
        marks: document.getElementById('marks').value
    };

    const method = isEdit ? 'PUT' : 'POST';
    const response = await mockFetch(method, student, student.id);

    handleResponse(response);
});

/**
 * 4. DELETE OPERATION
 */
async function deleteStudent(id) {
    if (confirm("Are you sure you want to delete student " + id + "?")) {
        const response = await mockFetch('DELETE', null, id);
        handleResponse(response);
    }
}

/**
 * UTILITY: Handle Edit State, UI Updates & Status Codes
 */
function handleResponse(res) {
    statusBox.className = (res.status >= 200 && res.status < 300) ? "msg-success" : "msg-error";
    statusBox.innerText = res.message;
    
    if (res.status < 400) {
        loadStudents();
        form.reset();
        resetEditMode();
    }
}

function enableEdit(id) {
    const student = students.find(s => s.id === id);
    document.getElementById('studentId').value = student.id;
    document.getElementById('studentId').disabled = true; // Cannot change ID
    document.getElementById('studentName').value = student.name;
    document.getElementById('department').value = student.dept;
    document.getElementById('marks').value = student.marks;
    
    document.getElementById('editMode').value = "true";
    document.getElementById('submitBtn').innerText = "Update Student";
    document.getElementById('cancelBtn').classList.remove('hidden');
}

function resetEditMode() {
    document.getElementById('editMode').value = "false";
    document.getElementById('studentId').disabled = false;
    document.getElementById('submitBtn').innerText = "Add Student";
    document.getElementById('cancelBtn').classList.add('hidden');
}

document.getElementById('cancelBtn').onclick = () => { form.reset(); resetEditMode(); };
document.getElementById('refreshBtn').onclick = loadStudents;

// Initial Load
loadStudents();