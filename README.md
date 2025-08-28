# Web Starter (HTML/CSS/JS)

## 로컬 개발
```bash
# 아무 웹서버로 실행 (Python 예시)
python -m http.server 8000
# http://localhost:8000 접속
```

## 배포(택1)

### 1) GitHub Pages (정적 사이트)
1. GitHub에 새 저장소 생성 → 이 파일들 push
2. Settings → Pages → Deploy from a branch → `main` / `/ (root)` 선택
3. 잠시 후 `https://<계정>.github.io/<저장소>`에서 접속
4. 도메인 연결: Pages 설정의 Custom domain에 `example.com` 입력 후, DNS에 CNAME 레코드 추가

### 2) Vercel (정적/Next.js 모두)
```bash
npm i -g vercel
vercel init   # (선택) 새 프로젝트
vercel        # 배포
```
- 도메인 연결: Vercel 프로젝트 → Settings → Domains → 도메인 추가 후 안내된 DNS 레코드 설정

### 3) Ubuntu VPS + Nginx (고정 IP 보유 시)
```bash
sudo apt update && sudo apt install -y nginx
sudo mkdir -p /var/www/mysite && sudo chown -R $USER:$USER /var/www/mysite
# 이 저장소의 파일들을 /var/www/mysite 에 복사
cat | sudo tee /etc/nginx/sites-available/mysite <<'CONF'
server {
    listen 80;
    server_name example.com www.example.com;
    root /var/www/mysite;
    index index.html;
    location / {
        try_files $uri $uri/ =404;
    }
}
CONF
sudo ln -s /etc/nginx/sites-available/mysite /etc/nginx/sites-enabled/mysite
sudo nginx -t && sudo systemctl reload nginx
# HTTPS (Let's Encrypt)
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com
```

## DNS 연결 가이드
- **A 레코드**: 고정 IP로 직접 연결할 때.  
  - `Host: @` → `Value: <서버_IP>` (루트 도메인)
  - `Host: www` → `Value: <서버_IP>` 또는 CNAME
- **CNAME 레코드**: 호스팅사가 준 주소로 별칭 연결 (예: `cname.vercel-dns.com`).
- **Nameserver 변경**: Cloudflare/호스팅사의 DNS로 전체 위임할 때.

## 구조
```
/
├─ index.html
├─ style.css
├─ app.js
└─ vercel.json (선택)
```

행복한 개발 되세요!
