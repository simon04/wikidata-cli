require('should')
const execa = require('execa')

describe('wd props', function () {
  this.timeout(10000)

  it('should display help', done => {
    execa.shell('./bin/wd props --help')
    .then(res => {
      res.stdout.split('Usage:').length.should.equal(2)
      done()
    })
    .catch(done)
  })

  it('should output properties', done => {
    execa.shell('./bin/wd props')
    .then(res => {
      res.stdout.startsWith('{').should.be.true()
      res.stdout.split('"P6": "').length.should.equal(2)
      done()
    })
    .catch(done)
  })

  it('should output properties with types', done => {
    execa.shell('./bin/wd props --type -l en')
    .then(res => {
      const data = JSON.parse(res.stdout)
      data.P6.label.should.equal('head of government')
      data.P6.type.should.equal('WikibaseItem')
      done()
    })
    .catch(done)
  })

  it('should be able to query a custom SPARQL endpoint', done => {
    execa.shell('./bin/wd props --sparql-endpoint https://example.coool')
    .catch(err => {
      err.message.match(/ENOTFOUND example\.coool/).should.be.ok()
      done()
    })
    .catch(done)
  })
})
