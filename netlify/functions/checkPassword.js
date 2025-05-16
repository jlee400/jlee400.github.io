exports.handler = async (event) => {
  let body = {};
  try {
    body = JSON.parse(event.body || '{}');
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: "Invalid JSON input" })
    };
  }

  const code = body.code;
  const PASSWORD = "12345"; // 너가 원하는 비밀번호로 바꿔줘

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
