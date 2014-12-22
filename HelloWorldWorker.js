self.addEventListener('message', function (event) { // event.data = 'Hello'
   self.postMessage('Got your message');
});
