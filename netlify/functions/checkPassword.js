exports.handler = async (event) => {
  const { code } = JSON.parse(event.body);

  const PASSWORD = "mypassword";  // 원하는 비밀번호 설정

  if (code === PASSWORD) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  }

  return {
    statusCode: 403,
    body: JSON.stringify({ success: false })
  };
};
