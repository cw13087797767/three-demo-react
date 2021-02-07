import React, {useEffect} from 'react'
import * as THREE from 'three'
import { OrbitControls }  from 'three-orbitcontrols-ts'

const SecondDemo: React.FC = (props:any) => {

    useEffect(()=>{
        renderDemo()
    },[])

    const renderDemo = () => {
        const Scene = new THREE.Scene()

        // 圆柱
        // const CylinderGeometry = new THREE.CylinderGeometry(50,50,100,25)
        // const CylinderGeometryMaterial = new THREE.MeshLambertMaterial({
        //     color:0xffffff
        // })
        // const CylinderGeometryMesh = new THREE.Mesh(CylinderGeometry,CylinderGeometryMaterial)
        // Scene.add(CylinderGeometryMesh)

        // 自定义图形
        const geometry = new THREE.BufferGeometry()
        const vertices = new Float32Array([
            0,0,0,
            100,0,0,
            0,100,0,
            0,0,0,
            0,0,100,
            100,0,0,
            0,100,0,
            0,0,100,
            100,0,0
        ])
        const attribute = new THREE.BufferAttribute(vertices, 3)
        geometry.attributes.position = attribute
        const material = new THREE.MeshBasicMaterial({
            color:0xffffff, //三角面颜色
            // vertexColors:true,
            side:THREE.DoubleSide, //两面可见
        })
        const mesh = new THREE.Mesh(geometry, material)
        Scene.add(mesh)

        // 辅助轴
        const axesHelper = new THREE.AxesHelper(250)
        Scene.add(axesHelper)

        // 环境光
        const ambient = new THREE.AmbientLight(0x444444)
        Scene.add(ambient)

        // 点光源
        const pointLight = new THREE.PointLight(0xffffff)
        pointLight.position.set(500,600,1000)
        Scene.add(pointLight)

        // 相机
        const width = window.innerWidth
        const height = window.innerHeight
        const k = width / height
        const s = 200
        const camera = new THREE.OrthographicCamera(-s*k, s*k, s, -s, 1, 1000)
        camera.position.set(200, 200, 500)
        camera.lookAt(Scene.position)

        // 渲染器
        const WebGL1Renderer = new THREE.WebGL1Renderer()
        WebGL1Renderer.setSize(width,height)
        WebGL1Renderer.setClearColor(0xb9d3ff, 1)
        const SecondDemo = document.getElementById('SecondDemo')
        SecondDemo && SecondDemo.appendChild(WebGL1Renderer.domElement)
        // 鼠标监听事件
        const controls = new OrbitControls(camera, WebGL1Renderer.domElement)
        const renderInterval = () => {
            requestAnimationFrame(renderInterval)
            WebGL1Renderer.render(Scene, camera)
        }
        renderInterval()
    }

    return (
        <div id="SecondDemo" style={{width:'100%',height:"100%"}}></div>
    )
}

export default SecondDemo