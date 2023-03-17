import { useState } from "react";
import { ethers } from 'ethers';
import { useStateContext } from "../context/stateContext";
const  CreateCampaign =() => {
  const { createCampaign } = useStateContext();
  const [loading,setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [target, setTarget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [image, setImage] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTargetChange = (event) => {
    setTarget(event.target.value);
  };

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // do something with form data
    const name = "sid";
    if(title && description && deadline && target && image){
        const form ={
             name,
             title,
             description,
             target,
             deadline,
             image
        }
       setLoading(true)
       await createCampaign({...form, target: ethers.utils.parseUnits(form.target, 18)})
       setLoading(false);
    }else{
      console.log("missing fields error")
    }
  };

  return (
   <> 
    <div className="mt-20 text-3xl text-center p-10">
    Create your own <span className="text-blue-600">campaign </span> 
</div>
     <form onSubmit={handleSubmit} className="max-w-lg mx-auto">


<div className="mb-4">
  
  <input
    type="text"
    placeholder="Title"
    id="title"
    className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-inherit"
    value={title}
    onChange={handleTitleChange}
  />
</div>
<div className="mb-4">
  
  
  <textarea
    id="description"
    placeholder="description"
    className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-inherit"
    value={description}
    onChange={handleDescriptionChange}
  />
</div>
<div className="mb-4">
  
  <input
    type="text"
    id="target"
    placeholder="target amount"
    className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-inherit"
    onChange={handleTargetChange}
  />
</div>
<div className="mb-4">

  <input
    type="date"
    id="deadline"
    placeholder="deadline"
    className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-inherit"
    value={deadline}
    onChange={handleDeadlineChange}
  />
</div>
<div className="mb-4">
 
  <input
    type="text"
    id="image"
    placeholder="image link"
    className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-inherit"
    value={image}
    onChange={handleImageChange}
  />
</div>
<div className="flex items-center justify-between">
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
   { loading == true ? "Loading" : "Create Campaign" }
  </button>
</div>

</form>
    </>
   
  );
}

export default CreateCampaign;


