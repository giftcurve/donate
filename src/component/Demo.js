import { useEffect } from "react";
import {
  connectWallet,  
  loadProjects,
  payoutProject,
} from "../services/blockchain";
import { setGlobalState, truncate, useGlobalState } from "../store/Index";
import UpdateProject from "./UpdateProject";
import DeleteProject from "./DeleteProject";
import CreateProject from "./CreateProject";

const Demo = () => {
  
  const [connectedAccount] = useGlobalState("connectedAccount");
  const [projects] = useGlobalState("projects");
  const project = projects[0];

  useEffect(() => {
    const fetchData = async () => {
      await loadProjects();
    };

    fetchData();
  }, []);


  const handlePayoutClick = async () => {
    try {
      const project = projects[0]; // Assuming you want to payout the first project
      if (project) {
        await payoutProject(project.id);
      } else {
        console.error("No project available for payout.");
      }
    } catch (error) {
      reportError(error);
    }
  };

  return (
    <div className="demo">
      <div className="demo-top">
        <h1>Dashboard</h1>
      </div>
      <div className="demo-main">
        {connectedAccount ? (
          <button type="button" className="btn btn-success ">
            connected
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
            </svg>
            ETH {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}

{connectedAccount? (
          <button
            className="btn btn-success"
            onClick={() => setGlobalState("createModal", "scale-100")}
          >
            Create Project
          </button>
        ) : null }

        {connectedAccount === project?.owner && (
          <button
            className="btn btn-danger"
            onClick={() => setGlobalState("updateModal", "scale-100")}
          >
            Update Project
          </button>
        )}

        {connectedAccount === project?.owner && (
          <button className="btn btn-apple-pay" onClick={handlePayoutClick}>
            Payout
          </button>
        )}

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setGlobalState("deleteModal", "scale-100")}
        >
          Delete
        </button>
      </div>
      <CreateProject />
      <UpdateProject />
      <DeleteProject />
    </div>
  );
};

export default Demo;
