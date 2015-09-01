module.exports = {
	port: process.env.PORT || 80,
	protocol: 'http',
	ip: '104.131.31.144',
	url: function() {return this.protocol + '://' + this.ip + ':' + this.port}
}