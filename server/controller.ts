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
    return model.find(id)
  }

  selectOne(req, res) {
    const id = { id: req.params.id }
    this.getCrushById(id)
      .then(crush => res.status(200).json({'result': crush}))
      .catch(err => res.status(400).json({'result': err}))
  }

  // selectOne
  deleteCrushById(id) {
    return model.deleteOne(id)
  }

  deleteOne(req, res) {
    const id = { id: req.params.id }
    this.deleteCrushById(id)
      .then(crush => res.status(200).json({'result': crush}))
      .catch(err => res.status(400).json({'result': err}))
  }

}

export default Controller