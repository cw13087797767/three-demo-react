import React, {useEffect} from 'react'
import * as THREE from 'three'
import { OrbitControls }  from 'three-orbitcontrols-ts'

const SecondDemo: React.FC = (props:any) => {

    useEffect(()=>{
        renderDemo()
    },[])

    const renderDemo = () => {
        const Scene = new THREE.Scene()

        // 自定义图形
        const geometry = new THREE.BufferGeometry()
        const vertices = new Float32Array([
            0, 0, 0, //顶点1坐标
            50, 0, 0, //顶点2坐标
            0, 100, 0, //顶点3坐标

            0, 0, 10, //顶点4坐标
            0, 0, 100, //顶点5坐标
            50, 0, 10, //顶点6坐标
        ])
        const attribute = new THREE.BufferAttribute(vertices, 3)
        geometry.attributes.position = attribute

        // 设置颜色
        const colors = new  Float32Array([
            1, 0, 0, //顶点1颜色
            0, 1, 0, //顶点2颜色
            0, 0, 1, //顶点3颜色
          
            1, 1, 0, //顶点4颜色
            0, 1, 1, //顶点5颜色
            1, 0, 1, //顶点6颜色
        ])
        geometry.attributes.color = new THREE.BufferAttribute(colors,3)

        // 设置法向量
        const normals = new Float32Array([
            0, 0, 1, //顶点1法向量
            0, 0, 1, //顶点2法向量
            0, 0, 1, //顶点3法向量
          
            0, 1, 0, //顶点4法向量
            0, 1, 0, //顶点5法向量
            0, 1, 0, //顶点6法向量
        ])
        geometry.attributes.normal = new THREE.BufferAttribute(normals,3)

        // 面
        const flourMaterial = new THREE.MeshBasicMaterial({
            // color:0xffffff, //三角面颜色
            vertexColors:!!THREE.VertexColors,
            side:THREE.DoubleSide, //两面可见
        })
        const mesh = new THREE.Mesh(geometry, flourMaterial)
        Scene.add(mesh)

        // 点
        const pointMaterial = new THREE.PointsMaterial({
            // color:0xff0000,
            vertexColors:!!THREE.VertexColors,
            size:10
        })
        const points = new THREE.Points(geometry,pointMaterial)
        Scene.add(points)

        // 线
        const material = new THREE.LineBasicMaterial({
            // color:0xff0000
            vertexColors:!!THREE.VertexColors,
        })
        const line = new THREE.Line(geometry,material)
        Scene.add(line)

        const rectangleGeomeary = new THREE.BufferGeometry()
        const rectangleVertices = new Float32Array([
            0, 0, 0, //顶点1坐标
            80, 0, 0, //顶点2坐标
            80, 80, 0, //顶点3坐标
            0, 80, 0, //顶点4坐标
        ])
        const rectangleAttribue = new THREE.BufferAttribute(rectangleVertices, 3)
        rectangleGeomeary.attributes.position = rectangleAttribue
        const rectangleNormals = new Float32Array([
            0, 0, 1, //顶点1法向量
            0, 0, 1, //顶点2法向量
            0, 0, 1, //顶点3法向量
            0, 0, 1, //顶点4法向量
        ])

        rectangleGeomeary.attributes.normal = new THREE.BufferAttribute(rectangleNormals, 3)
        const indexes = new Uint16Array([
            // 0对应第1个顶点位置数据、第1个顶点法向量数据
            // 1对应第2个顶点位置数据、第2个顶点法向量数据
            // 索引值3个为一组，表示一个三角形的3个顶点
            0, 1, 2,
            0, 2, 3,
            // 0,1,3,
            // 1,2,3
        ])
        rectangleGeomeary.index = new THREE.BufferAttribute(indexes, 1)

        rectangleGeomeary.attributes.color = new THREE.BufferAttribute(colors,3)

        const rectFlourMaterial = new THREE.MeshBasicMaterial({
            vertexColors:!!THREE.VertexColors,
            side:THREE.DoubleSide, //两面可见
        })
        const rectangleMesh = new THREE.Mesh(rectangleGeomeary, rectFlourMaterial)
        rectangleGeomeary.translate(50,50,50)
        Scene.add(rectangleMesh)

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