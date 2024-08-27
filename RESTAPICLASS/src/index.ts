import express, { NextFunction, Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Customer } from './types';
import CustomerModel from './models/customers';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import connectDB from './database';
import path from 'path';
// 환경 변수 설정
dotenv.config();
const sec: string = process.env.TOKEN_SECRET as string;

connectDB();
// JWT 토큰 생성 함수
const generateAccessToken = (username: string) => {
    return jwt.sign({ username }, sec, { expiresIn: '600s' });
};

// Express 설정
const app = express();
const PORT = process.env.PORT || 4000;
const router = Router();

// 미들웨어 설정
app.use(bodyParser.json());
app.use(cors({ origin: '*', credentials: true }));

// JWT 인증 미들웨어
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ msg: 'No token provided' });

    jwt.verify(token, sec, (err: VerifyErrors | null, decoded: any) => {
        if (err) return res.status(403).json({ msg: 'Forbidden', error: err.message });

        // 토큰 검증 후 사용자 정보를 req 객체에 저장
        (req as any).user = decoded;
        next();
    });
};

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../dist')));

// 기본 라우트
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 인증 라우트 (로그인)
router.post('/api/v1/auth', (req, res) => {
    const token = generateAccessToken(req.body.username);
    res.json({ token });
});

// 고객 목록 반환 라우트
router.get('/api/v1/customers', authenticateToken, async (req, res) => {
    try {
        const customers = await CustomerModel.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: '고객 목록을 불러오는 중 오류가 발생했습니다.' });
    }
});

// 특정 고객 정보 반환 라우트
router.get('/api/v1/customers/:id', authenticateToken, async (req, res) => {
    try {
        const customer = await CustomerModel.findOne({ id: req.params.id });
        if (!customer) return res.sendStatus(404);
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: '조회 중 오류가 발생하였습니다.' });
    }
});

// 고객 정보 추가 라우트
router.post('/api/v1/customers', authenticateToken, async (req, res) => {
    const customer: Omit<Customer, 'id'> = req.body;

    const newCustomer = new CustomerModel({
        id: uuidv4(),
        name: customer.name,
        address: customer.address,
        email: customer.email,
    });

    try {
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    } catch (error) {
        res.status(500).json({ error: '데이터베이스에 고객 정보 저장 실패' });
    }
});

// 고객 정보 수정 라우트
router.put('/api/v1/customers/:id', authenticateToken, async (req, res) => {
    try {
        const customer = await CustomerModel.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!customer) return res.sendStatus(404);
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: '고객 정보 수정 중 오류 발생하였습니다.' });
    }
});

// 고객 정보 삭제 라우트
router.delete('/api/v1/customers/:id', authenticateToken, async (req, res) => {
    try {
        const result = await CustomerModel.findOneAndDelete({ id: req.params.id });
        if (!result) return res.sendStatus(404);
        res.status(200).json({ msg: '고객 정보 삭제 완료' });
    } catch (error) {
        res.status(500).json({ error: '고객 정보 삭제 중 오류 발생하였습니다.' });
    }
});

app.use(router);

app.listen(PORT, () => {
    console.log(`localhost:${PORT}에서 실행 중`);
});