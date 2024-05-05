export default function Navbar() {

  return (
    
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundcolor: '#e3f2fd'}}>
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><b>StudyBudy</b></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    <a class="nav-link" href="/addtask">Task</a>
                    <a class="nav-link" href="/calendar">Calendar</a>    
                </div>
                </div>
                <button class="btn btn-outline-success" type="submit">Log Out</button>
            </div>
        </nav>
    </div>
  );
}

