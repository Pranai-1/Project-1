import axios from "axios";
function UpdateCard(props){

    let HandleChange = (e, field) => {
        props.setCourse({
          ...props.course,
          [field]: e.target.value
        });
      };
    
       
      async function Submit() {
        let token = localStorage.getItem('token');
        try {
          const res = await axios.post(`http://localhost:3000/admin/courses/${props.id}`, {
            title: props.course.title,
            description: props.course.description,
            price: props.course.price,
            image: props.course.image,
            published: props.course.published
          }, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
      
          if (res.data.message === 'success') {
            alert('Course Updated');
          } else {
            alert('Updation failed');
          }
        } catch (error) {
          // Handle error if something goes wrong with the request
          console.error("Error updating course:", error);
        }
      }
      


return(
    <>
      <div className="flex justify-center items-center flex-wrap">
             
             <div className="grid border-2 border-solid border-blue-500  rounded mt-5 mr-[500px] p-3 z-10 bg-white">
                <p className="text-m font-medium text-blue-600 flex justify-center">Update Course Details</p>
             <input type="text" placeholder="title" value={props.course.title} onChange={(e) => { HandleChange(e, 'title') }} className=" w-[400px] border border-solid border-slate-500 p-2 m-2 rounded hover:border-orange-500 hover:border-2" />
             <input type="text" placeholder="description" value={props.course.description} onChange={(e) => { HandleChange(e, 'description') }} className="border border-solid border-slate-500 p-2 m-2 rounded hover:border-orange-500 hover:border-2" />
            <input type="number" placeholder="price" value={props.course.price} onChange={(e) => { HandleChange(e, 'price') }} className="border border-solid border-slate-500 p-2 m-2 rounded hover:border-orange-500 hover:border-2" />
            <input type="text" placeholder="image url" value={props.course.image} onChange={(e) => { HandleChange(e, 'image') }} className="border border-solid border-slate-500 p-2 m-2 rounded hover:border-orange-500 hover:border-2" />
            <input type="text" placeholder="published" value={props.course.published} onChange={(e) => { HandleChange(e, 'published') }} className="border border-solid border-slate-500 p-2 m-2 rounded hover:border-orange-500 hover:border-2" />
            <button onClick={Submit} className="h-max w-full bg-indigo-700 text-white font-bold text-xm p-1 rounded  m-1 hover:bg-indigo-800">Submit</button>
               </div>
               
               </div>
    </>
)
}
export default UpdateCard