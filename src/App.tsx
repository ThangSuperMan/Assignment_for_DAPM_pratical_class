import React from "react";
import "./App.css";

interface Employee {
  id: string;
  name: string;
  address: string;
  jobTitle?: string;
  roomEmployee?: string;
}

function App() {
  const [employees, setEmployees] = React.useState<Employee[]>([
    { id: "1", name: "Default user", address: "Default address" },
  ]);
  const [isShowEditPopup, setIsShowEditPopUp] = React.useState<boolean>(false);
  const [employeeId, setEmployeeId] = React.useState<string>();
  const [employeeName, setEmployeeName] = React.useState<string>();
  const [employeeAddress, setEmployeeAddress] = React.useState<string>();
  const [selectedRoomEmployee, setSelectedRoomEmployee] =
    React.useState<string>();
  const [selectedJobTitle, setSelectedJobTitle] = React.useState<string>();
  // const employeeJobTitle = React.useRef<HTMLSelectElement>(null);
  // const employeeJobRoom = React.useRef<HTMLSelectElement>(null);
  const handleDeleteItem = (e: any) => {
    console.log("handleDeleteItem ");
    const employeeId = e.target.parentNode.parentNode.children[0].innerText;
    setEmployees(
      employees.filter((employee: Employee) => employee.id !== employeeId)
    );
    console.log("employeeId :>> ", employeeId);
  };

  const handleSubmitEditEmployee = (e: any) => {
    e.preventDefault();
    console.log("handleSubmitEditEmployee ");
    console.log("employeId :>> ", employeeId);

    if (employeeId && employeeName && employeeAddress) {
      const employee: Employee = {
        id: employeeId,
        name: employeeName,
        address: employeeAddress,
        roomEmployee: selectedRoomEmployee,
      };

      setEmployees([
        ...employees.filter((employee: Employee) => employee.id !== employeeId),
        employee,
      ]);
      console.log("employee :>> ", employees);
    }
  };

  const handleEditItem = () => {
    console.log("handleEditItem ");
    setIsShowEditPopUp((prev: boolean) => !prev);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("handleSubmit ");
    if (
      employeeId &&
      employeeName &&
      employeeAddress &&
      selectedJobTitle &&
      selectedRoomEmployee
    ) {
      const employee: Employee = {
        id: employeeId,
        name: employeeName,
        address: employeeAddress,
        roomEmployee: selectedRoomEmployee,
        jobTitle: selectedJobTitle,
      };

      setEmployees([...employees, employee]);
      console.log("employee :>> ", employees);
    }
  };

  React.useEffect(() => {
    console.log("just loaded the app compo");
    console.log("employeeId :>> ", employeeId);
    console.log("employeeName :>> ", employeeName);
    console.log("employeeAddress :>> ", employeeAddress);
    console.log("selectedJobTitle :>> ", selectedJobTitle);
    console.log("selectedRoomEmployee :>> ", selectedRoomEmployee);
  }, [
    employeeId,
    employeeName,
    employeeAddress,
    selectedJobTitle,
    selectedRoomEmployee,
  ]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Mã nhân viên
          </label>
          <input
            onChange={(e: any) => setEmployeeId(e.target.value)}
            type="text"
            id="idEmployee"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Mã nhân viên"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Họ tên
          </label>
          <input
            onChange={(e: any) => setEmployeeName(e.target.value)}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Họ tên"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Địa chị
            </label>
            <input
              onChange={(e: any) => setEmployeeAddress(e.target.value)}
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Địa chị"
              required
            />
          </div>
        </div>
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Phòng ban
        </label>
        <select
          id="roomEmployees"
          value={selectedRoomEmployee}
          onChange={(e: any) => setSelectedRoomEmployee(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        >
          <option value="Phòng ban Kinh doanh">Phòng ban Kinh doanh</option>
          <option value="Phòng ban Tài chính">Phòng ban Tài chính</option>
          <option value="Phòng ban Kỹ thuật">Phòng ban Kỹ thuật</option>
          <option value="Phòng ban Nhân sự">Phòng ban Nhân sự</option>
          <option value="Phòng ban Quản lý chất lượng">
            Phòng ban Quản lý chất lượng
          </option>
        </select>
        <br />
        <br />
        <select
          onChange={(e: any) => setSelectedJobTitle(e.target.value)}
          id="roomEmployees"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        >
          <option selected>
            Chọn chức vụ công việc của phòng ban Kinh doanh
          </option>
          <option value="Giám đốc Kinh doanh">Giám đốc Kinh doanh</option>
          <option value="Trưởng phòng Kinh doanh">
            Trưởng phòng Kinh doanh
          </option>
          <option value="Nhân viên Kinh doanh">Nhân viên Kinh doanh</option>
        </select>
        <select
          onChange={(e: any) => setSelectedJobTitle(e.target.value)}
          id="roomEmployees"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        >
          <option selected>
            Chọn chức vụ công việc của phòng ban tài chính
          </option>
          <option value="Giám đốc Tài chính">Giám đốc Tài chính</option>
          <option value="Trưởng phòng Tài chính">Trưởng phòng Tài chính</option>
          <option value="Kế toán trưởng">Kế toán trưởng</option>
          <option value="Kế toán viên">Kế toán viên</option>
          <option value="Nhân viên Tài chính">Nhân viên Tài chính</option>
        </select>
        <select
          onChange={(e: any) => setSelectedJobTitle(e.target.value)}
          id="roomEmployees"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        >
          <option selected>
            Chọn chức vụ công việc của phòng ban kỹ thuật
          </option>
          <option value="Giám đốc Kỹ thuật">Giám đốc Kỹ thuật</option>
          <option value="Trưởng phòng Kỹ thuật">Trưởng phòng Kỹ thuật</option>
          <option value="Nhân viên Thiết kế">Nhân viên Thiết kế</option>
          <option value="Nhân viên Lập trình ">Nhân viên Lập trình </option>
          <option value="Chuyên viên Kỹ thuật">Chuyên viên Kỹ thuật</option>
        </select>
        <select
          onChange={(e: any) => setSelectedJobTitle(e.target.value)}
          id="roomEmployees"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        >
          <option selected>Chọn chức vụ công việc của phòng ban Nhân sự</option>
          <option value="Phòng ban Kinh doanh">Phòng ban Kinh doanh</option>
          <option value="Phòng ban Kỹ thuật">Phòng ban Kỹ thuật</option>
          <option value="Phòng ban Nhân sự">Phòng ban Nhân sự</option>
          <option value="Phòng ban Quản lý chất lượng">
            Phòng ban Quản lý chất lượng
          </option>
        </select>
        <select
          onChange={(e: any) => setSelectedJobTitle(e.target.value)}
          id="roomEmployees"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        >
          <option selected>
            Chọn chức vụ công việc của phòng ban Quản lý chất lượng
          </option>
          <option value="Giám đốc Quản lý chất lượng">
            Giám đốc Quản lý chất lượng
          </option>
          <option value="Trưởng phòng Kiểm định chất lượng">
            Trưởng phòng Kiểm định chất lượng
          </option>
          <option value="Nhân viên Kiểm định chất lượng">
            Nhân viên Kiểm định chất lượng
          </option>
          <option value="Nhân viên Quản lý rủi ro">
            Nhân viên Quản lý rủi ro
          </option>
          <option value="Nhân viên Nghiên cứu phát triển">
            Nhân viên Nghiên cứu phát triển
          </option>
        </select>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Thêm
        </button>
      </form>
      <div className="flex flex-col w-full">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Họ Tên
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Địa chỉ
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Phòng ban
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Chức vụ công việc
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Chức năng
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee: Employee) => {
                    return (
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {employee.id}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {employee.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {employee.address}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {employee.roomEmployee}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {employee.jobTitle}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <button
                            onClick={handleDeleteItem}
                            className="text-white bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Xoá
                          </button>
                          <button
                            onClick={handleEditItem}
                            className="text-white bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2"
                          >
                            Cập nhật
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {isShowEditPopup && (
        <div className="model relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() => setIsShowEditPopUp(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <form
                onSubmit={handleSubmitEditEmployee}
                className="space-y-6"
                action="#"
              >
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Mã nhân viên
                  </label>
                  <input
                    onChange={(e: any) => setEmployeeId(e.target.value)}
                    type="text"
                    id="idEmployee"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Mã nhân viên"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Họ tên
                  </label>
                  <input
                    onChange={(e: any) => setEmployeeName(e.target.value)}
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Họ tên"
                    required
                  />
                </div>
                <div className="flex items-start mb-6">
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Địa chị
                    </label>
                    <input
                      onChange={(e: any) => setEmployeeAddress(e.target.value)}
                      type="text"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Địa chị"
                      required
                    />
                  </div>
                </div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phòng ban
                </label>
                <select
                  id="roomEmployees"
                  value={selectedRoomEmployee}
                  onChange={(e: any) => setSelectedRoomEmployee(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                >
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Phòng ban
                  </label>
                  <option value="Trưởng phòng Kinh doanh">
                    Trưởng phòng Kinh doanh
                  </option>
                  <option value="Nhân viên Kinh doanh">
                    Nhân viên Kinh doanh
                  </option>
                  <option value="Chuyên viên Marketing">
                    Chuyên viên Marketing
                  </option>
                  <option value="Chuyên viên Tư vấn">Chuyên viên Tư vấn</option>
                </select>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Cập nhật
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
