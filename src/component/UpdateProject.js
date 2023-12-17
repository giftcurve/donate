import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { updateProject } from '../services/blockchain';
import { useGlobalState, setGlobalState } from '../store/Index';

const UpdateProject = () => {
  const [projects] = useGlobalState("projects");
  const project = projects[0];

  const [updateModal] = useGlobalState('updateModal');
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [cost, setCost] = useState('');
  const [imageURL, setImageURL] = useState("")

  const toTimestamp = (dateStr) => { 
    const dateObj = Date.parse(dateStr); 
    return dateObj / 1000;
  };

  useEffect(() => {
    setTitle(project?.title || '');
    setDescription(project?.description || '');
    setCost(project?.cost || '');
    setDate(project?.date || '');
    setImageURL(project?.imageURL || '');
  }, [project]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !date || !description || !imageURL || !cost) return;
  
    const params = {
      id: project?.id,
      title,
      description,
      expiresAt: toTimestamp(date),
      imageURL,
      cost, 
      
    };
  
    await updateProject(params);
    toast.success('Project updated successfully, will reflect in 30sec.');
    onClose();
  };
  

  const onClose = () => {
    setGlobalState('updateModal', 'scale-0');
  };

  return (
    <div className={`update1 ${updateModal}`}
    >
      <div
        className="update2"
      >
        <form onSubmit={handleSubmit} className="update3">
          <div className="update4">
            <p className="update5">Edit Project</p>
            <button
              onClick={onClose}
              type="button"
              className="update6"
            >
              cancel
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
            Update Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProject;
