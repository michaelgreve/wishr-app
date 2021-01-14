# API

### Authentication Header:

`Authorization: Token jwt.token.here`

### Users (for authentication)

```JSON
{
  "user" : {
    "name" : "Michael Greve",
    "email" : "michael@grevens.dk",
    "token" : "jwt.token.here",
    "username" : "greven",
    "birthday" : "1977-05-05",
    "image" : null
  }
}
```

### Profile

```JSON
{
  "profile" : {
    "email" : "michael@grevens.dk",
    "username" : "greven",
    "image" : null,
    "following": false
  }
}
```

### Wishlist item

```JSON
{
  "item" : {
    "name" : "A pair of fancy socks",
    "url" : "http://example.com/this-is-a-pair-of-really-fancy-socks",
    "description" : "I want all the colors"
  }
}
```

### List of wishlist items

```JSON
{
  "items" : [{
    "name" : "A pair of fancy socks",
    "url" : "http://example.com/this-is-a-pair-of-really-fancy-socks",
    "description" : "I want all the colors"
  }, {
    "name" : "Fluffy cotton bathrobe",
    "url" : "http://example.com/i-cant-believe-how-fluffy-this-bathrobe-is",
    "description" : null
  }]
}
```

### Single wishlist

```JSON
{
  "wishlist" : {
    "slug" : "my-birthday-list-73n89k",
    "title" : "My birthday list",
    "createdAt" : "2017-05-18T03:22:56.637Z",
    "updatedAt": "2017-05-18T03:48:35.824Z",
    "published" : false,
    "author" : {
      "email" : "michael@grevens.dk",
      "username" : "greven",
      "image" : null,
      "following": false
    },
    "items" : [{
      "name" : "A pair of fancy socks",
      "url" : "http://example.com/this-is-a-pair-of-really-fancy-socks",
      "description" : "I want all the colors"
    }, {
      "name" : "Fluffy cotton bathrobe",
      "url" : "http://example.com/i-cant-believe-how-fluffy-this-bathrobe-is",
      "description" : null
    }]
  }
}
```

### List of wishlists

```JSON
{
  "wishlists" : [{
    "slug" : "my-birthday-list-73n89k",
    "title" : "My birthday list",
    "createdAt" : "2017-05-18T03:22:56.637Z",
    "updatedAt": "2017-05-18T03:48:35.824Z",
    "published" : false,
    "author" : {
      "email" : "michael@grevens.dk",
      "username" : "greven",
      "image" : null,
      "following": false
    },
    "items" : [{
      "name" : "A pair of fancy socks",
      "url" : "http://example.com/this-is-a-pair-of-really-fancy-socks",
      "description": "I want all the colors"
    }, {
      "name" : "Fluffy cotton bathrobe",
      "url" : "http://example.com/i-cant-believe-how-fluffy-this-bathrobe-is",
      "description" : null
    }]
  }, {
    "slug" : "christmas-list-4dakh1",
    "title" : "Christmas list",
    "createdAt" : "2017-05-18T03:22:56.637Z",
    "updatedAt": "2017-05-18T03:48:35.824Z",
    "published" : false,
    "author" : {
      "email" : "michael@grevens.dk",
      "username" : "greven",
      "image" : null,
      "following": false
    },
    "items" : [{
      "name" : "My Little Pony bed linen - collector's edition",
      "url" : "http://example.com/the-bed-linen-on-everyones-wishlist",
      "description": null
    }]
  }]
}
```
