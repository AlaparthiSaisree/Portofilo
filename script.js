document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;
    let isBlueTheme = false;

    themeToggle.addEventListener("click", function () {
        if (isBlueTheme) {
            body.style.backgroundColor = "#001F54"; // Dark Mode
            body.style.color = "white";
        } else {
            body.style.backgroundColor = "#87CEEB"; // Blue Mode
            body.style.color = "#8B0000";
        }
        isBlueTheme = !isBlueTheme;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close-btn");

    const projectDetails = {
		"quantum": {
            title: "Quantum Algorithms: Grover’s Search Implementation",
            description:[
			" Developed a 2-qubit Grover’s search circuit to find target state |10>, visualized results via Qiskit simulators.",
			"Extended implementation to a 3-qubit circuit to locate the state |101> and executed it on a real IBM quantum backend with 1000 shots.",
			"Solved a 3-SAT problem using a custom-built oracle based on DIMACS CNF, without deprecated PhaseOracle, and implemented Grover’s algorithm to find valid solutions.",
			"Captured and analyzed results across simulations and real quantum hardware to evaluate quantum speedup and accuracy under noise."
		    ].join("\n"), 
		},   
        "weather-app": {
            title: "Weather App",
            description:[
			"Weather-App: A React-Based Weather Forecast Application. Developed a React application that fetches real-time weather data using the OpenWeatherMap API.",
			"Users can search for acity's current weather and a 5-day forecast, view key weather details, and toggle between profile and program informationsections.",
			"Key Features: Search weather by city- View temperature, humidity, wind speed & weather icons, 5-day weather forecast, Toggle between Profile & Info sections",
			"Future improvements include user geolocation detection and hourly forecasts.", 
			"Built as part of the PM Accelerator program to enhance frontend development and API integration skills."
		    ].join("\n"), 
		},  
		"ir": {
            title: "Design and Evaluation of a Vector-Based Information Retrieval System",
            description:[
			"Developed a full-featured vector-space-based IR system using Python and scikit-learn, implementing custom TF-IDF and Binary Vectorization.",
			"Integrated preprocessing (tokenization, lowercasing, stop-word removal), and computed Cosine Similarity and Manhattan Distance across 225 queries and 1400 documents.",
			"Evaluated performance using Precision, Recall, and F-score, generating over 9000 similarity scores and 12 evaluation graphs with matplotlib.", 
			"Delivered a clean, reproducible, CLI-based solution with full documentation and dependency management."
		    ].join("\n"), 
		},   
        "dc": {
            title: "Distributed Network Design using Cisco Packet Tracer",
            description:[
			"Designed and implemented a distributed campus network using Cisco Packet Tracer, featuring subnetting, CIDR-based IP allocation, and multi-subnet connectivity.",
			"Configured routers, switches, and end-devices with manual IP setup and validated inter-subnet communication using CLI ping tests.",
			"Achieved full connectivity with zero packet loss and documented the network architecture, IP strategy, and test results."
		    ].join("\n"), 
		},   		
        "hospital-system": {
            title: "Intelligent Hospital Management System",
            description:[ 
			" Led a cross-functional team in designing and developing a robust hospital management system prototype.",
			"Designed a user friendly front-end interface using HTML, CSS, and JavaScript to streamline hospital operations, including patient management and resource allocation.",
			"Implemented back-end functionality using JDBC, Servlets, and XML, ensuring seamless communication between database and application layers.",
			"Enhanced system performance with enterprise programming techniques, resulting in a scalable and secure solution.", 
			"Deployedcomprehensive testing strategies to optimize code efficiency and ensure high reliability under real-world scenarios."
            ].join("\n"),
		},
        "insurance-system": {
            title: "Health and Life Insurance System",
            description: [
			" Developed a dynamic, responsive website using Django as the front-end framework and MySQL as the back-end database.",
			"Automated insurance policy calculations and streamlined the customer onboarding process to improve user engagement.",
			"Written complex SQL queries to handle customer data securely and optimize database performance. ",
			"Integrated Django templates for a seamless user interface while adhering to the best coding practices for Python-based development.",
			"Conducted extensive user testing and feedback incorporation, ensuring a bug-free and intuitive user experience."
            ].join("\n"),
		},
        "banking-system": {
            title: "Banking and Finance System",
            description:[
			"Spearheaded the development of a Java-based web application for managing financial transactions and customer accounts.",
			"Utilized Angular CLI for dynamic front-end development and integrated MySQL to support secure and scalable back-end operations.",
			"Designed robust features for account creation, transaction history, and financial reporting, providing end-to-end bankingsolutions.",
			"Leveraged Visual Studio for code optimization, debugging, and seamless deployment.",
			"Enhanced the security of sensitive financial data by implementing industry-standard encryption and data validationprotocols.",
			"Delivered project ahead of schedule, receiving accolades for innovative features and high reliability"
            ].join("\n"),
		}
    };

    document.querySelectorAll(".project-title").forEach(title => {
        title.addEventListener("click", function () {
            const projectKey = this.getAttribute("data-project");
            modalTitle.textContent = projectDetails[projectKey].title;
            modalDescription.textContent = projectDetails[projectKey].description;           
			modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
