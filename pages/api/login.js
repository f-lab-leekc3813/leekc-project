import sequelize from "./config/db";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function hendler(req,res) {
    if (req.method === 'POST'){
        const {email, password} = req.body;
        try{
            const checkEmailQuery = `
                SELECT email FROM leekc.user WHERE email=?
            `
            const [user] = await sequelize.query(checkEmailQuery, {
                replacements: [email],
            });

            if (user.length === 0) {
                return res.status(401).json({ message: 'email not found' });
            }

            const checkPasswordQuery = `
                SELECT password FROM leekc.user WHERE email= ? and password = ?
            `
            const [userPassword] = await sequelize.query(checkPasswordQuery,{
                replacements : [email,password],
            })

            if (userPassword.length === 0){
                return res.status(401).json({message: 'password not correct'})
            }
            const secretKey = '1023ldde'; 
            const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });

            res.status(200).json({token,message: '로그인 성공'});
        }catch(error){
            console.log('Login error', error);
            res.status(500).json({message: 'Internal server error'});
        }
    }else {
        res.status(405).json({ message: 'This method is not allowed' }); 
    }

}