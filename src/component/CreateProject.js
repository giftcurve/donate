import { useState } from "react";
import { createProject } from "../services/blockchain";
import { setGlobalState, useGlobalState } from "../store/Index";
import { toast } from "react-toastify";





const CreateProject = () => {
    const [createModal] = useGlobalState('createModal')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [cost, setCost] = useState('')
    const [date, setDate] = useState('')
    const [imageURL, setImageURL] = useState('')
  
    
  
    const toTimestamp = (dateStr) => {
        const dateObj = Date.parse(dateStr)
        return dateObj / 1000
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title || !description || !cost || !date || !imageURL) return
    
        const params = {
          title,
          description,
          cost,
          expiresAt: toTimestamp(date),
          imageURL,
        }
    
        await createProject(params)
        toast.success('Project created successfully, will reflect in 30sec.')
        onClose()
      }
    
      const onClose = () => {
        setGlobalState('createModal', 'scale-0')
        reset()
      }
    
      const reset = () => {
        setTitle('')
        setCost('')
        setDescription('')
        setImageURL('')
        setDate('')
      }
    
  
      return (
        <div className={`update1 ${createModal}`}
        >
          <div
            className="update2"
          >
            <form onSubmit={handleSubmit} className="update3">
              <div className="update4">
                <p className="update5">Add Project</p>
                <button
                  onClick={onClose}
                  type="button"
                  className="update6"
                >
                  X
                </button>
              </div>
    
              <div className="update7">
                <div className="update8">
                  <img
                    src={
                      imageURL ||
                      'https://ucarecdn.com/defce42f-83ed-43d3-8f79-a1cffc5dd09b/-/resize/624x/-/format/auto/'
                    }
                    alt="project title"
                    className="update9"
                  />
                </div>
              </div>
    
              <div className="update10">
                <input
                  className="update11"
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                />
              </div>
    
              <div className="update16">
                <input
                  className="update17"
                  type="date"
                  name="date"
                  placeholder="Expires"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                  required
                />
              </div>
    
              <div className="update12">
                <input
                  className="update13"
                  type="url"
                  name="imageURL"
                  placeholder="Image URL"
                  onChange={(e) => setImageURL(e.target.value)}
                  value={imageURL}
                  required
                />
              </div>
    
              <div className="update14">
                <input
                  className="update15"
                  type="number"
                  step={0.01}
                  min={0.01}
                  name="cost"
                  placeholder="cost (ETH)"
                  onChange={(e) => setCost(e.target.value)}
                  value={cost}
                  required
                />
              </div>

              <div className="update10">
                <textarea
                  className="update11"
                  type="text"
              name="description"
              placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                ></textarea>
              </div>
    
              <button
                type="submit"
                className="update18"
              >
                Create Project
              </button>
            </form>
          </div>
        </div>
      );
  };

export default CreateProject