"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const customers_1 = __importDefault(require("./models/customers"));
const uuid_1 = require("uuid");
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = __importDefault(require("./database"));
const path_1 = __importDefault(require("path"));
// 환경 변수 설정
dotenv_1.default.config();
const sec = process.env.TOKEN_SECRET;
(0, database_1.default)();
// JWT 토큰 생성 함수
const generateAccessToken = (username) => {
    return jsonwebtoken_1.default.sign({ username }, sec, { expiresIn: '600s' });
};
// Express 설정
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const router = (0, express_1.Router)();
// 미들웨어 설정
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({ origin: '*', credentials: true }));
// JWT 인증 미들웨어
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token)
        return res.status(401).json({ msg: 'No token provided' });
    jsonwebtoken_1.default.verify(token, sec, (err, decoded) => {
        if (err)
            return res.status(403).json({ msg: 'Forbidden', error: err.message });
        // 토큰 검증 후 사용자 정보를 req 객체에 저장
        req.user = decoded;
        next();
    });
};
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../dist')));
// 기본 라우트
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'views', 'index.html'));
});
// 인증 라우트 (로그인)
router.post('/api/v1/auth', (req, res) => {
    const token = generateAccessToken(req.body.username);
    res.json({ token });
});
// 고객 목록 반환 라우트
router.get('/api/v1/customers', authenticateToken, async (req, res) => {
    try {
        const customers = await customers_1.default.find();
        res.json(customers);
    }
    catch (error) {
        res.status(500).json({ message: '고객 목록을 불러오는 중 오류가 발생했습니다.' });
    }
});
// 특정 고객 정보 반환 라우트
router.get('/api/v1/customers/:id', authenticateToken, async (req, res) => {
    try {
        const customer = await customers_1.default.findOne({ id: req.params.id });
        if (!customer)
            return res.sendStatus(404);
        res.json(customer);
    }
    catch (error) {
        res.status(500).json({ error: '조회 중 오류가 발생하였습니다.' });
    }
});
// 고객 정보 추가 라우트
router.post('/api/v1/customers', authenticateToken, async (req, res) => {
    const customer = req.body;
    const newCustomer = new customers_1.default({
        id: (0, uuid_1.v4)(),
        name: customer.name,
        address: customer.address,
        email: customer.email,
    });
    try {
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    }
    catch (error) {
        res.status(500).json({ error: '데이터베이스에 고객 정보 저장 실패' });
    }
});
// 고객 정보 수정 라우트
router.put('/api/v1/customers/:id', authenticateToken, async (req, res) => {
    try {
        const customer = await customers_1.default.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!customer)
            return res.sendStatus(404);
        res.json(customer);
    }
    catch (error) {
        res.status(500).json({ error: '고객 정보 수정 중 오류 발생하였습니다.' });
    }
});
// 고객 정보 삭제 라우트
router.delete('/api/v1/customers/:id', authenticateToken, async (req, res) => {
    try {
        const result = await customers_1.default.findOneAndDelete({ id: req.params.id });
        if (!result)
            return res.sendStatus(404);
        res.status(200).json({ msg: '고객 정보 삭제 완료' });
    }
    catch (error) {
        res.status(500).json({ error: '고객 정보 삭제 중 오류 발생하였습니다.' });
    }
});
app.use(router);
app.listen(PORT, () => {
    console.log(`localhost:${PORT}에서 실행 중`);
});
