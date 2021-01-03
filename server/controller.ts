import model from './model'

class Controller {
  constructor() {}

  getCrushs() {
    return model.find({})
  }

  select(req, res) {
    this.getCrushs()
      .then(crushs => res.status(200).json({'result': crushs}))
      .catch(err => res.status(400).json({'result': err}))
  }
}

export default Controller