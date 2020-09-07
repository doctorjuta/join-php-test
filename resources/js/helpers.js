export function renderMessage(txt, cls) {
    let alertSection = document.getElementById('alert-section');
    if (!alertSection) {
        return;
    }
    let html = `
        <div class="mt-3 alert ${cls}" role="alert">
            ${txt}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `;
    alertSection.innerHTML += html;
}
