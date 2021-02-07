import React, {useEffect} from 'react'
import * as THREE from 'three'
import { OrbitControls }  from 'three-orbitcontrols-ts'

const firstDemo: React.FC = (props:any) => {

    useEffect(() =>{
        renderDemo()
    },[])    

    const renderDemo = () => {
        /**
         * 创建场景对象Scene
         */
        const scene = new THREE.Scene()

        /**
         * 创建网格模型
         */
        //创建一个立方体几何对象Geometry
        const geometry = new THREE.BoxGeometry(100,100,100)
        geometry.faces.map(face => {
            face.vertexColors = [
                new THREE.Color(0xffff00),
                new THREE.Color(0xff00ff),
                new THREE.Color(0x00ffff),
            ]
        })
        // geometry.faces.pop()
        // geometry.faces.pop()
        // geometry.faces.shift()
        // geometry.faces.shift()
        // geometry.scale(2,2,2)
        geometry.translate(100,0,0)
        geometry.rotateX(Math.PI / 4)
        // geometry.rotateY(Math.PI / 2)
        // geometry.rotateZ(Math.PI / 4)


        //材质对象Material
        const material:any = new THREE.MeshBasicMaterial({
            // color:0x0000ff,
            vertexColors:!!THREE.FaceColors
        })
        //网格模型对象Mesh
        const mesh = new THREE.Mesh(geometry, material)
        mesh.rotateY(Math.PI / 4)
        //网格模型添加到场景中
        scene.add(mesh)

        /**
         * 添加多个物体
        */
        // 球体
        const geometry2 = new THREE.SphereGeometry(60,40,40)
        const material2 = new THREE.MeshLambertMaterial({
            color:0xffffff,
            opacity:0.3,
            transparent:true
        })
        const mesh2 = new THREE.Mesh(geometry2, material2)
        mesh2.translateY(120)
        scene.add(mesh2)
        // 球体
        const geometry2_1 = new THREE.SphereGeometry(30,40,40)
        // const material2_1 = new THREE.MeshLambertMaterial({
        //     color:0xdd0011,
        //     opacity:1,
        //     // transparent:true
        // })
        const material2_1 = new THREE.MeshPhongMaterial({
            color:0xdd0011,
            specular:0x4488ee,
            shininess:12
        })
        const mesh2_1 = new THREE.Mesh(geometry2_1, material2_1)
        mesh2_1.translateY(120)
        scene.add(mesh2_1)
        // 圆柱  
        const geometry3 = new THREE.CylinderGeometry(50, 50, 100, 25)
        const material3 = new THREE.MeshLambertMaterial({
            color:0xffffff
        })
        const mesh3 = new THREE.Mesh(geometry3, material3)
        mesh3.translateY(-120)
        scene.add(mesh3)
        // 正八面体 
        const geometry4 = new THREE.OctahedronGeometry(50)
        const material4 = new THREE.MeshLambertMaterial({
            color:0xdd0011
        })
        const mesh4 = new THREE.Mesh(geometry4, material4)
        mesh4.translateX(120)
        scene.add(mesh4)
        
        // 正十二面体 
        const geometry5 = new THREE.DodecahedronGeometry(50)
        const material5 = new THREE.MeshLambertMaterial({
            color:0xdd0011
        })
        const mesh5 = new THREE.Mesh(geometry5, material5)
        mesh5.translateX(-120)
        scene.add(mesh5)

        // 正二十面体 
        const geometry6 = new THREE.IcosahedronGeometry(50)
        const material6 = new THREE.MeshLambertMaterial({
            color:0xdd0011
        })
        const mesh6 = new THREE.Mesh(geometry6, material6)
        mesh6.translateZ(120)
        scene.add(mesh6)

        // 圆锥几何体 
        const geometry7 = new THREE.ConeGeometry(50,50,10)
        const material7 = new THREE.MeshLambertMaterial({
            color:0xdd0011
        })
        const mesh7 = new THREE.Mesh(geometry7, material7)
        mesh7.translateZ(-120)
        scene.add(mesh7)

        // 自定义立方体
        const attributeGeometry = new THREE.BufferGeometry()
        const vertices = new Float32Array([
            0, 0, 0, //顶点1坐标
            50, 0, 0, //顶点2坐标
            0, 100, 0, //顶点3坐标
            0, 0, 10, //顶点4坐标
            0, 0, 100, //顶点5坐标
            50, 0, 10, //顶点6坐标
            100,0,100, //自定义数据
            0,0,100, //自定义数据
            100,0,0, //自定义数据
        ])
        const attribute = new THREE.BufferAttribute(vertices, 3)
        // const attribute = new THREE.Float32BufferAttribute(vertices, 3)
        attributeGeometry.attributes.posotion = attribute
        // attributeGeometry.setAttribute('posotion',attribute)
        const attributeMaterial = new THREE.MeshLambertMaterial({
            color:0xffffff,
            side:THREE.DoubleSide,
        })
        const meshAttribute = new THREE.Mesh(attributeGeometry,attributeMaterial)
        meshAttribute.translateY(500)
        scene.add(meshAttribute)
        // const attributeMaterial = new THREE.PointsMaterial({
        //     color: 0xff0000,
        //     size: 10.0 //点对象像素尺寸
        // }); 
        // const points = new THREE.Points(attributeGeometry, attributeMaterial); //点模型对象
        // console.log(attributeMaterial)
        // console.log(points)
        // scene.add(points)

        // const LineMaterial = new THREE.LineBasicMaterial({
        //     color:0xff0000 //线条颜色
        // });//材质对象
        // const line = new THREE.Line(attributeGeometry,LineMaterial);//线条模型对象
        // scene.add(line);//线条对象添加到场景中

        // // 辅助三维坐标系
        const axisHelper = new THREE.AxesHelper(250)
        scene.add(axisHelper)

        /**
         * 光源设置
        */
        const point = new THREE.PointLight(0xffffff)
        //点光源位置
        point.position.set(500,600,1000)
        //点光源添加到场景中
        scene.add(point)
        //环境光
        const ambient = new THREE.AmbientLight(0x444444)
        scene.add(ambient)

        // 多个光源
        const point2 = new THREE.PointLight(0xffffff)
        //点光源位置
        point2.position.set(-500,600,1000)
        //点光源添加到场景中
        scene.add(point2)
        //环境光
        const ambient2 = new THREE.AmbientLight(0x444444)
        scene.add(ambient2)

        /**
         * 相机设置
        */
        const width = window.innerWidth
        const height = window.innerHeight
        // 窗口宽高比例
        const k = width / height
        //三维场景显示范围控制系数，系数越大，显示的范围越大
        const s = 200
        //创建相机对象
        const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
        //设置相机位置
        camera.position.set(200,200,500)
        //设置相机方向(指向的场景对象)
        camera.lookAt(scene.position)

        /**
         * 创建渲染器对象
        */
        const renderer = new THREE.WebGL1Renderer()
        //设置渲染区域尺寸
        renderer.setSize(width, height)
        //设置背景颜色
        renderer.setClearColor(0xb9d3ff, 1)
        const firstDemo = document.getElementById('firstDemo')
        firstDemo && firstDemo.appendChild(renderer.domElement)
        /**
         * 添加鼠标监听事件
        */
        const controls = new OrbitControls(camera, renderer.domElement)

        /**
         * 循环渲染，旋转
         */
        let T0:any = new Date()
        const render = () => {
            let T1:any = new Date()
            let t:any = T1 - T0
            T0 = T1
            requestAnimationFrame(render)
            renderer.render(scene, camera)
            mesh.rotateY(0.0005 * t)
        }
        render()
    }

    return(
        <div id="firstDemo" style={{width:'100%',height:"100%"}}></div>
    )
}
export default firstDemo