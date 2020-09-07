import {renderMessage} from './helpers';


class CandadateForm {


    constructor() {
        this.initFileUploader();
    }


    initFileUploader() {
        const self = this;
        const POSSIBLE_FILE_TYPES = [
            'image/jpeg',
            'image/png',
            'image/webp'
        ];
        const MAX_FILE_SIZE = 10485760;
        const uploader = document.getElementById('cand-photo');
        if (!uploader) {
            return;
        }
        uploader.addEventListener('change', (event) => {
            if (event.target.files.length < 1) {
                return;
            }
            let file = event.target.files[0];
            if (!POSSIBLE_FILE_TYPES.includes(file.type)) {
                renderMessage('Invalid file type. We accept only jpg, png, webp.', 'alert-danger');
            }
            let file_size = (file.size/1048576).toFixed(2);
            if (file_size > MAX_FILE_SIZE) {
                renderMessage('Too large file. We accept only 10 MB max file size.', 'alert-danger');
            }
            self.beforeRequest();
            let formData = new FormData();
            formData.append('ufile', file);
            fetch(api.upload_path, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': api.csrftoken
                },
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                self.afterRequest();
            }).catch(error => {
                console.log(error);
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
