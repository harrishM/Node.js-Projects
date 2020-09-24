'use strict';
var http = require('http');
var url = require('url');
var fs = require('fs');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var nodemailer = require('nodemailer');
    var q = url.parse(req.url, true);
    var qdata = q.query;
    if (qdata.name) {
       var msg = qdata.name + ',' + qdata.email + ',' + qdata.phone+','+qdata.comments;
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: 'coder30597@gmail.com',
                pass: 'swagmeansitsme'
            }
        });

        var mailOptions = {
            from: 'coder30597@gmail.com',
            to: 'kogul.karna@gmail.com',
            subject: 'Sending Email using Node.js',
            text: msg
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    } 
    fs.readFile('Page1.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
        res.write(data);
        res.end();
    })
}).listen(port);
