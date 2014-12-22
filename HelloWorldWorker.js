self.addEventListener('message', function (event) { // event.data = 'Hello'
   document.body.innerHTML = 'asdf';
   self.postMessage('Got your message');
});
