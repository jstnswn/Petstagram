import { useState } from "react";


function EditComment(){



    const [comment, setComment] = useState()
    

    return (

        <form>
            <label>
                <input
                type="textarea"

                />

            </label>
        </form>

    )



}


export default EditComment;
