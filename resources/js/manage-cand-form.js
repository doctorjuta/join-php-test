import {renderMessage, beforeRequest, afterRequest} from './helpers';


class ManageCandidateForm {


    constructor() {
        this.initRemoveInput();
        this.initChangeStateInput();
    }


    initRemoveInput() {
        const self = this;
        let d_inputs = document.getElementsByClassName('candidate-remove');
        for (let i = 0; i < d_inputs.length; i++) {
            d_inputs[i].addEventListener('click', (event) => {
                let cand_id = parseInt(event.target.dataset.id);
                let cand_div = document.getElementById('candidate'+cand_id);
                let formData = new FormData();
                formData.append('cand_id', cand_id);
                beforeRequest();
                fetch(api.rem_candidate, {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': api.csrftoken
                    },
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    renderMessage(data.message, 'alert-success');
                    cand_div.remove();
                    let cand_divs = document.getElementsByClassName('candidate-list-item');
                    if (cand_divs.length < 1) {
                        location.reload();
                    }
                    afterRequest();
                }).catch(error => {
                    renderMessage(error, 'alert-danger');
                    afterRequest();
                });
            });
        }
    }


    initChangeStateInput() {
        const self = this;
        let d_inputs = document.getElementsByClassName('candidate-switch-state');
        for (let i = 0; i < d_inputs.length; i++) {
            d_inputs[i].addEventListener('click', (event) => {
                let cand_id = parseInt(event.target.dataset.id);
                let state_p = document.getElementById('candidate'+cand_id+'-state');
                let close_modal_btn = document.getElementById('candidateModalClose'+cand_id);
                let formData = new FormData();
                formData.append('cand_id', cand_id);
                let radios = document.getElementsByName('candidatestatus'+cand_id);
                let new_state = 0;
                for (let i = 0; i < radios.length; i++) {
                    if (radios[i].checked) {
                        new_state = radios[i].value;
                        break;
                    }
                }
                formData.append('new_state', new_state);
                beforeRequest();
                fetch(api.uptd_candidate, {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': api.csrftoken
                    },
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    state_p.innerHTML = data.message;
                    close_modal_btn.click();
                    afterRequest();
                }).catch(error => {
                    renderMessage(error, 'alert-danger');
                    afterRequest();
                });
            });
        }
    }


}


const manageCandidateForm = new ManageCandidateForm();
