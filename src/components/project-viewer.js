import { useState, forwardRef, useImperativeHandle } from 'react'
import { Modal, Carousel } from '@arco-design/web-react'

export default forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)
  const [currentProject, setCurrentProject] = useState({ img: [] })

  useImperativeHandle(ref, () => ({
    show: project => {
      console.log(project)
      setCurrentProject(project)
      setVisible(true)
    },
  }))

  return (
    <Modal
      visible={visible}
      footer={null}
      simple={false}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      className="project_detail w-4/5 max-w-screen-lg overflow-hidden rounded-xl"
    >
      <div className="md:flex">
        <div className="w-full md:w-2/3">
          <Carousel
            style={{
              width: '100%',
              height: '60vh',
              backgroundColor: 'black',
            }}
            moveSpeed={300}
          >
            {currentProject.img.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <aside
          className="content-bg w-full overflow-y-auto px-8 py-8 md:w-1/3"
          style={{
            height: '60vh',
          }}
        >
          <h3 className="mb-4 text-lg font-bold">{currentProject.name}</h3>
          <h5 className="mb-2 text-slate-400">项目简介</h5>
          <p className="mb-4">{currentProject.intro}</p>
          <h5 className="mb-2 text-slate-400">我的职责</h5>
          <p className="mb-4">{currentProject.duty}</p>
          <h5 className="mb-2 text-slate-400">项目成果</h5>
          <p>{currentProject.gains}</p>
        </aside>
      </div>
    </Modal>
  )
})
