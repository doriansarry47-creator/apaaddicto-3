const { theme } = require('./theme.js');

// Vercel serverless function handler
module.exports = (req, res) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apaaddicto 3</title>
    <style>
        body {
            font-family: ${theme.fonts.main};
            background-color: ${theme.colors.background};
            color: ${theme.colors.text};
            margin: 0;
            padding: ${theme.spacing}px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: ${theme.colors.surface};
            padding: ${theme.spacing * 2}px;
            border-radius: ${theme.borderRadius};
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
            color: white;
            padding: ${theme.spacing}px;
            border-radius: ${theme.borderRadius};
            margin-bottom: ${theme.spacing}px;
        }
        .accent {
            color: ${theme.colors.accent};
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Apaaddicto 3</h1>
            <p>Application is running successfully!</p>
        </div>
        <div class="content">
            <h2>Welcome</h2>
            <p>This is the <span class="accent">Apaaddicto 3</span> application.</p>
            <p style="color: ${theme.colors.muted};">
                The 404 error has been fixed and the application is now working properly.
            </p>
        </div>
    </div>
</body>
</html>
`;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
};