import {renderMessage} from './helpers';


class CandadateForm {


    constructor() {
        this.initForm();
    }


    initForm() {
        const self = this;
        const POSSIBLE_FILE_TYPES = [
            'image/jpeg',
            'image/png',
            'image/webp'
        ];
        const DATA_FIELDS = [
            'cand-email',
            'cand-passwd',
            'cand-fname',
            'cand-lname',
            'cand-tel'
        ];
        const MAX_FILE_SIZE = 10485760;
        const submitForm = document.getElementById('candform');
        const submitBtn = document.getElementById('candsubmit');
        if (!submitForm || !submitBtn) {
            return;
        }
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            let agree = document.getElementById('candagree');
            if (!agree.checked) {
                renderMessage('You must accept our terms and conditions as well as the privacy policy.', 'alert-danger');
                return false;
            }
            let formData = new FormData();
            let uploader = document.getElementById('candphoto');
            if (uploader && uploader.files.length > 0) {
                let file = uploader.files[0];
                if (!POSSIBLE_FILE_TYPES.includes(file.type)) {
                    renderMessage('Invalid file type. We accept only jpg, png, webp.', 'alert-danger');
                    return false;
                }
                let file_size = (file.size/1048576).toFixed(2);
                if (file_size > MAX_FILE_SIZE) {
                    renderMessage('Too large file. We accept only 10 MB max file size.', 'alert-danger');
                    return false;
                }
                formData.append('candphoto', file);
            }
            DATA_FIELDS.forEach(element => {
                formData.append(element, element);
            });
            self.beforeRequest();
            fetch(api.new_candidate, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': api.csrftoken
                },
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                renderMessage(data.message, 'alert-success');
                submitForm.reset();
                self.afterRequest();
            }).catch(error => {
                renderMessage(error.error, 'alert-danger');
                self.afterRequest();
            });
        });
    }


    beforeRequest() {
        document.body.classList.add('is-loading');
    }


    afterRequest() {
        document.body.classList.remove('is-loading');
    }


}


const candadateForm = new CandadateForm();
