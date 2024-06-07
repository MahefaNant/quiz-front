class AdminService {
    static basicAuth : string = 'Basic ' + btoa('admin' + ':' + 'admin');
}

export default AdminService;