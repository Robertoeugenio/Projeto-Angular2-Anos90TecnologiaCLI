const express = require('express');

const router  = express.Router();

router.get("/", (req, res) => {
    res.json(
        [
            {'codigo': 1, 'nome': 'Roberto'},
            {'codigo': 2, 'nome': 'Eugenio'}
        ]
    )
});

module,exports = router;