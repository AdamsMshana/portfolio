
const documents = [
  {
    title: "F6_DBMS",
    file: "pdfs/DBMS.pdf"
  },
  {
    title: "F1_Problem solving",
    file: "pdfs/Problem solvin.pdf"
  },
  {
    title: "F5_Adv_Networking_01",
    file: "pdfs/Adv_NetworkinG_01.pdf"
  }
];

const fileList = document.getElementById("fileList");
const searchInput = document.getElementById("searchInput");
const pdfViewer = document.getElementById("pdfViewer");
const fileTitle = document.getElementById("fileTitle");
const emptyMessage = document.getElementById("emptyMessage");
const downloadLink = document.getElementById("downloadLink");

let selectedFile = null;

function renderFiles(filter = "") {
  fileList.replaceChildren();

  const filtered = documents.filter(doc =>
    doc.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (filtered.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No matching documents found.";
    fileList.appendChild(message);
    return;
  }

  filtered.forEach(doc => {
    const button = document.createElement("button");
    button.className = "file-btn";

    if (selectedFile === doc.file) {
      button.classList.add("active");
    }

    const icon = document.createElement("span");
    icon.className = "pdf-icon";
    icon.textContent = "📕";

    const title = document.createElement("span");
    title.textContent = doc.title + ".pdf";

    button.append(icon, title);

    button.addEventListener("click", () => openPDF(doc));

    fileList.appendChild(button);
  });
}

function openPDF(doc) {
  selectedFile = doc.file;

  pdfViewer.src = doc.file;
  pdfViewer.hidden = false;
  emptyMessage.hidden = true;

  fileTitle.textContent = doc.title + ".pdf";
  downloadLink.href = doc.file;
  downloadLink.download = doc.file.split("/").pop();
  downloadLink.hidden = false;

  renderFiles(searchInput.value);
}

searchInput.addEventListener("input", () => {
  renderFiles(searchInput.value);
});

// Display the available documents on page load.
renderFiles();
