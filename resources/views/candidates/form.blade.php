<div class="card">
    <div class="card-header">Candidates form</div>
    <div class="card-body">
        <form method="post" action="/" id="candform">
            <div class="form-group">
                <label for="candemail">Your E-mail</label>
                <input type="email" class="form-control" id="candemail" name="candemail">
            </div>
            <div class="form-group">
                <label for="candpasswd">Set a Password</label>
                <input type="password" class="form-control" id="candpasswd" name="candpasswd">
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="form-group">
                        <label for="candfname">First Name</label>
                        <input type="text" class="form-control" id="candfname" name="candfname">
                    </div>
                </div>
                <div class="col-sm">
                    <div class="form-group">
                        <label for="candlname">Last Name</label>
                        <input type="text" class="form-control" id="candlname" name="candlname">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="candtel">Phone number</label>
                <input type="tel" class="form-control" id="candtel" name="candtel">
            </div>
            <div class="form-group">
                <label for="candphoto">Photo</label>
                <input type="file" class="form-control-file" id="candphoto" name="candphoto">
                <small class="form-text text-muted">We accept only jpg, png, webp and 10 MB max size.</small>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="candagree" name="candagree">
                <label class="form-check-label" for="candagree">I agree to JOIN's <a href="#">terms and conditions</a> as well as the <a href="#">privacy policy</a>.</label>
            </div>
            <button type="submit" id="candsubmit" class="btn btn-primary">Apply now for this job</button>
        </form>
    </div>
</div>
