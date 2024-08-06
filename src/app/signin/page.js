export default function page() {
    return (
        <>
        <br /><br /><br />
        <div class="container">
          
        <div>
        <form className="mb-3">
  <div className="col-12">
  <label for="inputPassword4" class="form-label">Username</label>
    <div className="input-group">
      <div className="input-group-text"><i class="bi bi-lock-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg></i></div>
      <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
    </div>
  </div></form>

  <form className="mb-3">
  <div className="col-12">
  <label for="inputPassword4" class="form-label">Password</label>
    <div className="input-group">
      <div className="input-group-text"><i class="bi bi-lock-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
</svg>
</i>
</div>
<input type="password" className="form-control" id="inputPassword4" />

    </div>
  </div></form>

  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</div>

</div>
        </>
    )
}