
var breeze_prefetch = {"local_url":"https:\/\/team.ctnis.com","ignore_remote_prefetch":"1","ignore_list":["\/wp-admin\/"]};HappyForms = {};
var NeveProperties = {"ajaxurl":"https:\/\/team.ctnis.com\/wp-admin\/admin-ajax.php","nonce":"b70cbc1b2b","isRTL":"","isCustomize":"","infScroll":"enabled","maxPages":"1","endpoint":"https:\/\/team.ctnis.com\/wp-json\/nv\/v1\/posts\/page\/","query":"{\"tag\":\"provider\"}","lang":"zh_CN"};
	var html = document.documentElement;
	var theme = html.getAttribute('data-neve-theme') || 'light';
	var variants = {"logo":{"light":{"src":"https:\/\/cdn.jsdelivr.net\/gh\/hzdu\/team_ctnis_com_upload@master\/wp-content\/uploads\/2022\/02\/logo.webp","srcset":false,"sizes":"(max-width: 200px) 100vw, 200px"},"dark":{"src":"https:\/\/cdn.jsdelivr.net\/gh\/hzdu\/team_ctnis_com_upload@master\/wp-content\/uploads\/2022\/02\/logo.webp","srcset":false,"sizes":"(max-width: 200px) 100vw, 200px"},"same":true},"logo_2":{"light":{"src":false,"srcset":false,"sizes":false},"dark":{"src":false,"srcset":false,"sizes":false},"same":true}};

	function setCurrentTheme( theme ) {
		var pictures = document.getElementsByClassName( 'neve-site-logo' );
		for(var i = 0; i<pictures.length; i++) {
			var picture = pictures.item(i);
			if( ! picture ) {
				continue;
			};
			var compId = picture.getAttribute('data-variant');
			if ( compId && variants[compId] ) {
				var isConditional = variants[compId]['same'];
				if ( theme === 'light' || isConditional || variants[compId]['dark']['src'] === false ) {
					picture.src = variants[compId]['light']['src'];
					picture.srcset = variants[compId]['light']['srcset'] || '';
					picture.sizes = variants[compId]['light']['sizes'];
					continue;
				};
				picture.src = variants[compId]['dark']['src'];
				picture.srcset = variants[compId]['dark']['srcset'] || '';
				picture.sizes = variants[compId]['dark']['sizes'];
			};
		};
	};

	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.type == 'attributes') {
				theme = html.getAttribute('data-neve-theme');
				setCurrentTheme(theme);
			};
		});
	});

	observer.observe(html, {
		attributes: true
	});
var scrollOffset = {"offset":"0"};