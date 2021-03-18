const router = require("express").Router();
const { forEach } = require("./message");
const messages = require("./message");


router.get('/messages', (req, res) => {
    return res.send(messages);
});
router.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    for (const message of messages) {
        if (message.id === parseInt(id)) {
            return res.send(message);
        }
    }
    return res.send("message id not found");
});

router.post('/messages', (req, res) => {
    const message = req.body.message;
    const newId = messages.length > 0 ? messages[messages.length - 1].id + 1 : 1;
    messages.push({
        id: newId,
        text: message
    })
    return res.send(messages[messages.length - 1]);
});

router.put('/messages/:id', (req, res) => {
    const message = req.body.message;
    const id = req.params.id;
    for (const message of messages) {
        if (message.id === parseInt(id)) {
            message.text = req.body.message;
            return res.send(message);
        }
    }
    return res.send('message id not found');
});

router.delete('/messages/:id', (req, res) => {
    const id = req.params.id;
    let i = 0;
    for (const message of messages) {
        if (message.id === parseInt(id)) {
            messages.splice(i,1);
            return res.send("message deleted");
        }
        i++;
    }
    return res.send('message id not found');
});

module.exports = router;
