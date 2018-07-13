import axios from "axios";

const defaultUrl = "https://interview-booking-api.herokuapp.com/api/";

export function GetTopEmployees() {
    return axios.get(defaultUrl + "bookings")
        .then(response => {
            let employees = [];
            response.data.forEach(c => {
                if (typeof c.employee === "undefined") return;
                if (employees.filter(e => e.id === c.employee.id).length === 0) {
                    employees.push(c.employee);
                }
                let currentEmployee = employees.find(e => e.id === c.employee.id);
                if (!currentEmployee.hasOwnProperty("totalHours")) {
                    currentEmployee.totalHours = 0;
                }

                let currentHours =
                    (ParseDate(c.checkOutDate) - ParseDate(c.checkInDate)) / 3600000;
                currentEmployee.totalHours += currentHours
            });

            let topEmployees = employees
                .sort((a, b) => {
                    return b.totalHours - a.totalHours;
                })
                .slice(0, 3);

            return topEmployees;
        })
        .catch(error => {
            return error;
        });
}

export function GetHotelStats() {
    return axios.get(defaultUrl + "booking-snapshot")
        .then(response => {
            let result = response.data;
            delete result.weekAvailabilityPercent;
            return result;
        })
        .catch(error => {
            return error;
        });
}

function ParseDate(text) {
    let textParsed = text.split("-");
    let month = parseInt(textParsed[1], 10) - 1; // JavaScript month is 0-based

    return new Date(textParsed[2], month, textParsed[0]);
}
