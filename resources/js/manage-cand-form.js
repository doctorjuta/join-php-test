import {renderMessage, beforeRequest, afterRequest} from './helpers';


class ManageCandidateForm {


    constructor() {
        this.initRemoveInput();
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
                    afterRequest();
                }).catch(error => {
                    renderMessage(error.error, 'alert-danger');
                    afterRequest();
                });
            });
        }
    }


}


const manageCandidateForm = new ManageCandidateForm();
