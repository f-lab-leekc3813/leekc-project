import sequelize from "./config/db";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nickName, email, password} = req.body;
        try{
            if (!nickName){
                res.status(400).json({ message: 'nickname 을 입력하지 않았습니다.' });
                return
            }
            if (!email){
                res.status(400).json({ message: 'email 을 입력하지 않았습니다.' });
                return
            }
            if (!password){
                res.status(400).json({ message: 'password 을 입력하지 않았습니다.' });
                return
            }
            const checkQuery = `
                SELECT nickname FROM leekc.user WHERE nickname=?
            `;
            const [existingUser] = await sequelize.query(checkQuery, {
                replacements: [nickName],
            });

            if (existingUser.length > 0) {
                res.status(400).json({ message: 'Nickname already exists' });
                return;
            }
            const checkEmailQuery = `
                SELECT email FROM leekc.user WHERE email=?
            `;
            const [existingEmail] = await sequelize.query(checkEmailQuery, {
                replacements: [email],
            });

            if (existingEmail.length > 0) {
                res.status(400).json({ message: 'Email already exists' });
                return;
            }

            const insertquery = `
                INSERT INTO leekc.user (email, password, nickName)
                VALUES (?, ?, ?)
            `;

            await sequelize.query(insertquery, {
                replacements: [
                  email,
                  password,
                  nickName,
                ],
              });
            res.status(200).json({message: '회원정보 전송완료'});
        }catch(error) {
            console.error('Error:', error);
            res.status(500).json({message: '500Error'})
        } 
    } else {
        res.status(405).json({message: '허락되지 않은 방법입니다'});
    }
}