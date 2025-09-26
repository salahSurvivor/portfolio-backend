const Msg = require('../models/messages');
const nodemailer = require('nodemailer');

exports.createMsg = async(req, res) => {
    try{
        await Msg.create(req.body);
        res.status(200).json('Added With Success!!');
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

exports.readMsg = async(req, res) => {
    try{
        const msg = await Msg.find({});
        res.status(200).json(msg);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

exports.emailSend =  async(req, res) =>{
    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.in', // thise is zoho host 
        port: 465,
        secure: true,
        auth: {
          user: 'salaheddinenaji@zohomail.in', //zoho email
          pass: 'Stfesimaan2609' //zoho password
        },
        /**
         * If you are testing on your local machine, 
         * your antivirus software may be intercepting 
         * your attempt to contact the mail server. (this is what's stand for tls)
        */
        tls: {
            rejectUnauthorized: false
        }
    });

    const message = {
        from: 'salaheddinenaji@zohomail.in', 
        to: 'salaheddinenaji2000@gmail.com', 
        subject: `Message From ${req.body.name}`, 
        text: 
            `email : ${req.body.email}
             message : ${req.body.message}`,
    };

    transporter.sendMail(message, (error, info) => {
        if(error){
            res.status(500).json({Error: error.message})
            return;
        }
        res.status(200).json({emailSent : info.messageId});
    });
};