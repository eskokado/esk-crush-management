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
    return model.findOneAndUpdate(id)
  }

  selectOne(req, res) {
    const id = { _id: req.params.id }
    this.getCrushById(id)
      .then(crush => res.status(200).json({'result': crush}))
      .catch(err => res.status(400).json({'result': err}))
  }

  // deleteOne
  deleteCrushById(id) {
    return model.findOneAndDelete(id)
  }

  deleteOne(req, res) {
    const id = { _id: req.params.id }
    this.deleteCrushById(id)
      .then(crush => res.status(200).json({'result': crush}))
      .catch(err => res.status(400).json({'result': err}))
  }

  // updateOne
  updateCrushById(id, data) {
    return model.findOneAndUpdate(id, data )
  }

  updateOne(req, res) {
    const id = { _id: req.params.id }
    const crush = req.body;

    this.updateCrushById(id, crush)
      .then(crush => res.status(200).json({'result': crush}))
      .catch(err => res.status(400).json({'result': err}))
  }

  // insert
  insertCrush(data) {
    return model.create(data)
  }

  insert(req, res) {
    const crush = req.body;

    this.insertCrush(crush)
      .then(crush => res.status(201).json({'result': crush}))
      .catch(err => res.status(400).json({'result': err}))
  }
}

export default Controller