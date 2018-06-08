class ApiError extends Error {
  constructor(response = {}, message) {
    super(message || response.statusText);
    this.ok = response.ok;
    this.url = response.url;
    this.type = response.type;
    this.status = response.status;
    this.statusText = response.statusText;
    this.headers = response.headers;
    this.body = response.body;
  }
}

export default ApiError;
