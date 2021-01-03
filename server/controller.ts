import model from './model'

class Controller {
  constructor() {}

  // select
  getCrushs() {
    return model.find({})
  }

  select(req, res) {
    this.getCrushs()
      .then(crushs => res.status(200).json({'result': crushs}))
      .catch(err => res.status(400).json({'result': err}))
  }

  // selectOne
  getCrushById(id) {
    return model.findById(id)
  }

  selectOne(req, res) {
    const id = { id: req.params.id }
    this.getCrushById(id)
      .then(crush => res.status(200).json({'result': crush}))
      .catch(err => res.status(400).json({'result': err}))
  }
}

export default Controller