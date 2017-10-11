<html>
	<head>
		<meta charset="UTF-8">
		<style>
			body{
				display: flex;
				justify-content: center;
				background: #e0e0e0;
				padding: 0; 
				margin: 0; 
			}
			div{
				width: 720px;				
				line-height: 1.4;
				background: #fcfcfc;
				padding: 40px;		
				margin-top: 0; 
			}
		</style>
		<link rel="shortcut icon" href="./logo_32.ico">
		<meta name="author" content="TTD">
		<title>相关资讯</title>	
	</head>
	<body>
		<div>
			<h1 align="center"><?=$_GET["title"]?></h1>
			<p align="center">发布时间：<?=$_GET["time"]?></p>
			<?php
				$URL = $_GET["URL"];
				$rawHTML = file_get_contents($URL);
				$contentMatches = array();
				
				preg_match_all("/<p>.*?p>/", $rawHTML, $contentMatches);
				
				for ($i = 0; $i < count($contentMatches); $i++) $contentMatches[$i] = preg_replace("/<\/?[^>]+>/i", "", $contentMatches[$i]);
				foreach ($contentMatches[0] as $match) echo "<p>" . $match . "</p>";
			?>
			<p align="right">来源：<a href="<?=$_GET["link"]?>">东方财富网</a>
			</p>
		</div>
	</body>
</html>