import { sendEmail } from "@/utils/mail"

export async function POST(){
    const sender = {
        name: 'Hotels App',
        address: 'seanboateng7@gmail.com',
    }

    const receipients = [{
        name: 'John Doe',
        address: 'seanboateng7@gmail.com',
    }]

    try {
        const result = await sendEmail({
            sender,
            receipients,
            subject:"Booking Confirmation",
            message:'Your booking is now confirmed. We will reach out soon with more details',
        })
        console.log("Ran")
        return Response.json({
            accepted: result.accepted,
            
        })
        
    } catch (error){
        console.log('fail')
        accepted:Response.json({message: 'Unable to send email this time'},{
        status: 500 
        })

    }
}