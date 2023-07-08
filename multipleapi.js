//Implement multiple api's using all http methods, validations, exception handling, try all response code and mock their uses.

const express = require('express');

const Joi = require('joi');

const app = express();
const PORT = 3000;

const schema = Joi.object({
  name: Joi.string().required(),
});

// GET request
app.get('/api/endpoint', async (req, res) => {
  try {
    // Perform validations using Joi
    const { error } = schema.validate(req.query);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Mock response with different status codes
    const statusCode = req.query.statusCode || 200;
    if (statusCode === 200) {
      res.status(200).json({ message: `GET request successful for ${req.query.name}` });
    } else if (statusCode === 404) {
      res.status(404).json({ error: 'Resource not found' });
    } else if (statusCode === 500) {
      throw new Error('Internal Server Error');
    } else {
      res.status(statusCode).end();
    }
  } catch (error) {
    // Handle exceptions
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST request
app.post('/api/endpoint', async (req, res) => {
//   try {
    const name =req.body
    // Perform validations using Joi
    const { error,value } = schema.validate(name);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    res.send(value)
    }

    // Mock response with different status codes
     const statusCode = req.body.statusCode || 201;
    if (statusCode === 201) {
      res.status(201).json({ message: `POST request successful for ${req.body.name}` });
    } else if (statusCode === 400) {
      res.status(400).json({ error: 'Bad Request' });
    } else if (statusCode === 500) {
      throw new Error('Internal Server Error');
    } else {
      res.status(statusCode).end();
     }
  } catch (error) {
    // Handle exceptions
    res.status(500).json({ error: 'Internal Server Error' });
      }
});

// PUT request
app.put('/api/endpoint', async (req, res) => {
  try {
    // Perform validations using Joi
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Mock response with different status codes
    const statusCode = req.body.statusCode || 200;
    if (statusCode === 200) {
      res.status(200).json({ message: `PUT request successful for ${req.body.name}` });
    } else if (statusCode === 403) {
      res.status(403).json({ error: 'Forbidden' });
    } else if (statusCode === 500) {
      throw new Error('Internal Server Error');
    } else {
      res.status(statusCode).end();
    }
  } catch (error) {
    // Handle exceptions
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE request
app.delete('/api/endpoint', async (req, res) => {
  try {
    // Perform validations using Joi
    const { error } = schema.validate(req.query);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Mock response with different status codes
    const statusCode = req.query.statusCode || 204;
    if (statusCode === 204) {
      res.status(204).end();
    } else if (statusCode === 401) {
      res.status(401).json({ error: 'Unauthorized' });
    } else {
      res.status(statusCode).end();
    }
  } catch (error) {
    // Handle exceptions
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
