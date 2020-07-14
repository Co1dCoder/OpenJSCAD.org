const test = require('ava')

const geom3 = require('../geometries/geom3')

const { sphere } = require('./index')

const comparePolygonsAsPoints = require('../../test/helpers/comparePolygonsAsPoints')

test('sphere (defaults)', (t) => {
  const obs = sphere()
  const pts = geom3.toPoints(obs)

  t.is(pts.length, 512)
})

test('sphere (options)', (t) => {
  // test radius
  let obs = sphere({ radius: 5, segments: 12 })
  let pts = geom3.toPoints(obs)
  let exp = []
  t.is(pts.length, 72)
  // t.true(comparePolygonsAsPoints(pts, exp))

  // test segments
  obs = sphere({ segments: 8 })
  pts = geom3.toPoints(obs)
  exp = [
    [[1, 0, 0 ], [ 0.7071067811865476, -0.7071067811865475, 0 ],
     [0.5000000000000001, -0.5, -0.7071067811865475 ], [ 0.7071067811865476, 0, -0.7071067811865475 ] ],
    [[0.7071067811865476, 0, 0.7071067811865475 ], [ 0.5000000000000001, -0.5, 0.7071067811865475 ],
     [0.7071067811865476, -0.7071067811865475, 0 ], [ 1, 0, 0 ] ],
    [[0.7071067811865476, 0, -0.7071067811865475 ], [ 0.5000000000000001, -0.5, -0.7071067811865475 ], [ 6.123233995736766e-17, 0, -1 ] ],
    [[6.123233995736766e-17, 0, 1 ], [ 0.5000000000000001, -0.5, 0.7071067811865475 ], [ 0.7071067811865476, 0, 0.7071067811865475 ] ],
    [[0.7071067811865476, -0.7071067811865475, 0 ], [ 6.123233995736766e-17, -1, 0 ],
     [4.329780281177467e-17, -0.7071067811865476, -0.7071067811865475 ], [ 0.5000000000000001, -0.5, -0.7071067811865475 ] ],
    [[0.5000000000000001, -0.5, 0.7071067811865475 ], [ 4.329780281177467e-17, -0.7071067811865476, 0.7071067811865475 ],
     [6.123233995736766e-17, -1, 0 ], [ 0.7071067811865476, -0.7071067811865475, 0 ] ],
    [[0.5000000000000001, -0.5, -0.7071067811865475 ], [ 4.329780281177467e-17, -0.7071067811865476, -0.7071067811865475 ],
     [4.329780281177467e-17, -4.329780281177466e-17, -1 ] ],
    [[4.329780281177467e-17, -4.329780281177466e-17, 1 ],
     [4.329780281177467e-17, -0.7071067811865476, 0.7071067811865475 ],
     [0.5000000000000001, -0.5, 0.7071067811865475 ] ],
    [[6.123233995736766e-17, -1, 0 ],
     [-0.7071067811865475, -0.7071067811865476, 0 ],
     [-0.5, -0.5000000000000001, -0.7071067811865475 ],
     [4.329780281177467e-17, -0.7071067811865476, -0.7071067811865475 ] ],
    [[4.329780281177467e-17, -0.7071067811865476, 0.7071067811865475 ],
     [-0.5, -0.5000000000000001, 0.7071067811865475 ],
     [-0.7071067811865475, -0.7071067811865476, 0 ],
     [6.123233995736766e-17, -1, 0 ] ],
    [[4.329780281177467e-17, -0.7071067811865476, -0.7071067811865475 ],
     [-0.5, -0.5000000000000001, -0.7071067811865475 ],
     [3.749399456654644e-33, -6.123233995736766e-17, -1 ] ],
    [[3.749399456654644e-33, -6.123233995736766e-17, 1 ],
     [-0.5, -0.5000000000000001, 0.7071067811865475 ],
     [4.329780281177467e-17, -0.7071067811865476, 0.7071067811865475 ] ],
    [[-0.7071067811865475, -0.7071067811865476, 0 ],
     [-1, -1.2246467991473532e-16, 0 ],
     [-0.7071067811865476, -8.659560562354934e-17, -0.7071067811865475 ],
     [-0.5, -0.5000000000000001, -0.7071067811865475 ] ],
    [[-0.5, -0.5000000000000001, 0.7071067811865475 ],
     [-0.7071067811865476, -8.659560562354934e-17, 0.7071067811865475 ],
     [-1, -1.2246467991473532e-16, 0 ],
     [-0.7071067811865475, -0.7071067811865476, 0 ] ],
    [[-0.5, -0.5000000000000001, -0.7071067811865475 ],
     [-0.7071067811865476, -8.659560562354934e-17, -0.7071067811865475 ],
     [-4.329780281177466e-17, -4.329780281177467e-17, -1 ] ],
    [[-4.329780281177466e-17, -4.329780281177467e-17, 1 ],
     [-0.7071067811865476, -8.659560562354934e-17, 0.7071067811865475 ],
     [-0.5, -0.5000000000000001, 0.7071067811865475 ] ],
    [[-1, -1.2246467991473532e-16, 0 ],
     [-0.7071067811865477, 0.7071067811865475, 0 ],
     [-0.5000000000000001, 0.5, -0.7071067811865475 ],
     [-0.7071067811865476, -8.659560562354934e-17, -0.7071067811865475 ] ],
    [[-0.7071067811865476, -8.659560562354934e-17, 0.7071067811865475 ],
     [-0.5000000000000001, 0.5, 0.7071067811865475 ],
     [-0.7071067811865477, 0.7071067811865475, 0 ],
     [-1, -1.2246467991473532e-16, 0 ] ],
    [[-0.7071067811865476, -8.659560562354934e-17, -0.7071067811865475 ],
     [-0.5000000000000001, 0.5, -0.7071067811865475 ],
     [-6.123233995736766e-17, -7.498798913309288e-33, -1 ] ],
    [[-6.123233995736766e-17, -7.498798913309288e-33, 1 ],
     [-0.5000000000000001, 0.5, 0.7071067811865475 ],
     [-0.7071067811865476, -8.659560562354934e-17, 0.7071067811865475 ] ],
    [[-0.7071067811865477, 0.7071067811865475, 0 ],
     [-1.8369701987210297e-16, 1, 0 ],
     [-1.29893408435324e-16, 0.7071067811865476, -0.7071067811865475 ],
     [-0.5000000000000001, 0.5, -0.7071067811865475 ] ],
    [[-0.5000000000000001, 0.5, 0.7071067811865475 ],
     [-1.29893408435324e-16, 0.7071067811865476, 0.7071067811865475 ],
     [-1.8369701987210297e-16, 1, 0 ],
     [-0.7071067811865477, 0.7071067811865475, 0 ] ],
    [[-0.5000000000000001, 0.5, -0.7071067811865475 ],
     [-1.29893408435324e-16, 0.7071067811865476, -0.7071067811865475 ],
     [-4.3297802811774677e-17, 4.329780281177466e-17, -1 ] ],
    [[-4.3297802811774677e-17, 4.329780281177466e-17, 1 ],
     [-1.29893408435324e-16, 0.7071067811865476, 0.7071067811865475 ],
     [-0.5000000000000001, 0.5, 0.7071067811865475 ] ],
    [[-1.8369701987210297e-16, 1, 0 ],
     [0.7071067811865474, 0.7071067811865477, 0 ],
     [0.4999999999999999, 0.5000000000000001, -0.7071067811865475 ],
     [-1.29893408435324e-16, 0.7071067811865476, -0.7071067811865475 ] ],
    [[-1.29893408435324e-16, 0.7071067811865476, 0.7071067811865475 ],
     [0.4999999999999999, 0.5000000000000001, 0.7071067811865475 ],
     [0.7071067811865474, 0.7071067811865477, 0 ],
     [-1.8369701987210297e-16, 1, 0 ] ] ,
    [[-1.29893408435324e-16, 0.7071067811865476, -0.7071067811865475 ],
     [0.4999999999999999, 0.5000000000000001, -0.7071067811865475 ],
     [-1.1248198369963932e-32, 6.123233995736766e-17, -1 ] ],
    [[-1.1248198369963932e-32, 6.123233995736766e-17, 1 ],
     [0.4999999999999999, 0.5000000000000001, 0.7071067811865475 ],
     [-1.29893408435324e-16, 0.7071067811865476, 0.7071067811865475 ] ],
    [[0.7071067811865474, 0.7071067811865477, 0 ],
     [1, 2.4492935982947064e-16, 0 ],
     [0.7071067811865476, 1.7319121124709868e-16, -0.7071067811865475 ],
     [0.4999999999999999, 0.5000000000000001, -0.7071067811865475 ] ],
    [[0.4999999999999999, 0.5000000000000001, 0.7071067811865475 ],
     [0.7071067811865476, 1.7319121124709868e-16, 0.7071067811865475 ],
     [1, 2.4492935982947064e-16, 0 ],
     [0.7071067811865474, 0.7071067811865477, 0 ] ],
    [[0.4999999999999999, 0.5000000000000001, -0.7071067811865475 ],
     [0.7071067811865476, 1.7319121124709868e-16, -0.7071067811865475 ],
     [4.329780281177465e-17, 4.3297802811774677e-17, -1 ] ],
    [[4.329780281177465e-17, 4.3297802811774677e-17, 1 ],
     [0.7071067811865476, 1.7319121124709868e-16, 0.7071067811865475 ],
     [0.4999999999999999, 0.5000000000000001, 0.7071067811865475 ] ]
  ]
  t.is(pts.length, 32)
  t.true(comparePolygonsAsPoints(pts, exp))
})
