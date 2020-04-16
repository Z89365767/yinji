/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
    
    
    
    
    
    config.filebrowserBrowseUrl = '/vendor/laravel-admin-ext/ckfinder/ckfinder.html'; //上传文件时浏览服务文件夹
	config.filebrowserImageBrowseUrl = '/vendor/laravel-admin-ext/ckfinder/ckfinder.html?Type=Images'; //上传图片时浏览服务文件夹
	config.filebrowserFlashBrowseUrl = '/vendor/laravel-admin-ext/ckfinder/ckfinder.html?Type=Flash';  //上传Flash时浏览服务文件夹
	config.filebrowserUploadUrl = '/vendor/laravel-admin-ext/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files'; //上传文件按钮(标签)
	config.filebrowserImageUploadUrl = '/vendor/laravel-admin-ext/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images'; //上传图片按钮(标签)
	config.filebrowserFlashUploadUrl = '/vendor/laravel-admin-ext/ckfinder/connector/php/connector.php?command=QuickUpload&type=Flash'; //上传Flash按钮(标签)

	config.allowedContent=true;//关闭标签过滤，
	config.colorButton_enableAutomatic = true;
	config.colorButton_enableMore = true;
};
