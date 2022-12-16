jQuery(document).ready(function($) {

	'use strict';

	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });

});


document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', event => {
          const codeBlock = event.target.closest('.code-block');
          if (!codeBlock) return;
      
          // 检测浏览器环境
          if (navigator.userAgent.indexOf('Firefox') > -1) {
            // 火狐浏览器
            const range = document.createRange();
            range.selectNodeContents(codeBlock);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            try {
              document.execCommand('copy');
              console.log('复制成功');
            } catch (error) {
              console.error('复制失败: ', error);
            }
          } else if (navigator.userAgent.indexOf('Edge') > -1) {
            // Edge浏览器
            window.getSelection().selectAllChildren(codeBlock);
            try {
              document.execCommand('copy');
              console.log('复制成功');
            } catch (error) {
              console.error('复制失败: ', error);
            }
          } else {
            // 其他浏览器
            const range = document.createRange();
            range.selectNodeContents(codeBlock);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            try {
              document.execCommand('copy');
              console.log('复制成功');
            } catch (error) {
              console.error('复制失败: ', error);
            }
          }
        });
      });
      
      
