'use server'

// 1.24

export async function sellYourItemAction(prevState: any ,formData : FormData ){
    console.log(formData.get("name"))
}