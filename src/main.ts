import { Scene, FadeIn, FadeOut, renderScene, Camera, defineAttributes, Circle, Transform, Square, Vector } from '@graphize/anim-engine'

class Test extends Scene {
  public async define() {
    const s = new Square({ width: 2 })
    s.translate(Vector.FROM(-5, -5))
    const c = new Circle({ radius: 3 })

    await this.play(new FadeIn({ displayable: s }))
    await this.wait()
    await this.play(new Transform({ from: s, to: c }))
    await this.wait()
    await this.play(new FadeOut({ displayable: c }))
  }
}

const cam = new Camera({ document })
const svg = cam.domElement
document.body.appendChild(svg)
defineAttributes(svg, innerWidth, innerHeight)
renderScene(cam, Test)
