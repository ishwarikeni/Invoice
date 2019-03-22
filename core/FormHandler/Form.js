import Errors from './Errors.js';

class Form
{
  constructor(data) {
    this.originalData = data;

    for(let field in data) {
      this[field] = data[field];
    }

    this.errors = new Errors();
  }

  reset() {
    for(let field in this.originalData) {
      this[field] = '';
    }

    this.errors.clear();
  }

  data() {
    let data = Object.assign({}, this);

    delete data.originalData;
    delete data.errors;

    return data;
  }

  submit(requestType, url) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data()).then(response => {
        this.onSuccess(response.data);

        resolve(response.data);
      }).catch(error => {
        if(error.response.status !== 500) {
          this.onFail(error.response.data);
        }

        reject(error);
      });
    });
  }

  onSuccess(data) {
    this.errors.clear();
  }

  onFail({ errors }) {
    this.errors.record(errors);
  }
}

export default Form;
