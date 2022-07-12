const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000', // 출처 허용 옵션
    credential: 'true' // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
}));

app.get('', (req, res) =>{
	res.sendFile(__dirname + '/imageTest.html');
	res.setHeader('Access-Control-Allow-origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키 주고받기 허용
	}
)

app.listen(3000, () => {
	console.log('app is start')
})
