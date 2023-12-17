import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { deleteProject } from '../services/blockchain'
import { useGlobalState, setGlobalState } from '../store/Index'

const DeleteProject = () => {
    const [projects] = useGlobalState("projects");
  const project = projects[0];
  
  const [deleteModal] = useGlobalState('deleteModal')
  const navigate = useNavigate()

//   const handleSubmit = async () => {
//     await deleteProject(project?.id)
//     toast.success('Project deleted successfully, will reflect in 30sec.')
//     setGlobalState('deleteModal', 'scale-0')
//     navigate('/');

//   }

const handleSubmit = async () => {
    try {
      await deleteProject(project?.id);
      toast.success('Project deleted successfully, will reflect in 30sec.');
      setGlobalState('deleteModal', 'scale-0');
      navigate('/');
    } catch (error) {
      // Log the error to the console
      console.error("An error occurred:", error);
  
      // You can also display a toast or handle the error in some way
      toast.error('An error occurred while deleting the project. Please check the console for more details.');
    }
  };
  

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex
    items-center justify-center bg-black bg-opacity-50
    transform transition-transform duration-300 ${deleteModal}`}
    >
      <div
        className="bg-white shadow-xl shadow-black
        rounded-xl w-11/12 md:w-2/5 h-7/12 p-6"
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold">{project?.title}</p>
            <button
              onClick={() => setGlobalState('deleteModal', 'scale-0')}
              type="button"
              className="border-0 bg-transparent focus:outline-none"
            >
              cancel
            </button>
          </div>

          <div className="flex justify-center items-center mt-5">
            <div className="rounded-xl overflow-hidden h-20 w-20">
              <img
                src={
                  project?.imageURL ||
                  'https://media.wired.com/photos/5926e64caf95806129f50fde/master/pass/AnkiHP.jpg'
                }
                alt={project?.title}
                className="h-full w-full object-cover cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center rounded-xl mt-5">
            <p>Are you sure?</p>
            <small className="text-red-400">This is irreversible!</small>
          </div>

          <button
            className="inline-block px-6 py-2.5 bg-red-600
            text-white font-medium text-md leading-tight
            rounded-full shadow-md hover:bg-red-700 mt-5"
            onClick={handleSubmit}
          >
            Delete Project
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteProject
