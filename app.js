// 간단한 JS 예시
const features = [
  "반응형 레이아웃",
  "접근성 고려(aria-live 등)",
  "간단한 폼 검증",
];
const list = document.getElementById("feature-list");
features.forEach(f => {
  const li = document.createElement("li");
  li.textContent = f;
  list.appendChild(li);
});

const form = document.getElementById("contact-form");
const status = document.getElementById("status");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
  const message = formData.get("message");
  // 서버가 없는 정적 사이트에서는 실제 전송은 불가. 여기선 데모 메시지.
  status.textContent = `(${email}) 로부터 메시지를 받았다고 가정합니다: "${message.slice(0, 80)}..."`;
  form.reset();
});
