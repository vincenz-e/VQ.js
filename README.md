# VQ.JS
Type less - get more done.

VQ stands for vanilla-query and is just a shortcut to default JS functions.

# How
## Include VQ.js
Download the VQ.js from the src folder and add it to your project, then:

    <script src="your/local/path/VQ.js"></script>

Or use jsdelivr to include it:

    <script src="https://cdn.jsdelivr.net/gh/vincenz-e/VQ.js@main/src/VQ.js"></script>

## Usage

For a query selector use VQ:

    VQ('div>.test-class');

To just get the first element use VQ1:

    VQ1('#custom-header');

For nested calls:

    const header = VQ1('#custom-header');
    const nested = header.VQ('div>.test-class');

## Additional functions
For optimization you can also use VQID and VQCL which are slightly faster.

VQID returns the first element with given ID:

    VQID('custom-header')

VQCL returns all elements with given class:

    VQCL('test-class')

## Comparison


| VQ.js              |               Vanilla.js                |                                jQuery |
| ------------------ | :-------------------------------------: | ------------------------------------: |
| VQ('.meep')        |   document.querySelectorAll('.meep')    |                            $('.meep') |
| VQ1('#heading>div) | document.querySelector('#heading>div')  |                     $('#heading>div') |
| VQID('heading')    |   document.getElementById('heading')    | $('#heading') // but is reeeally slow |
| VQCL('meep')       | document.getElementsByClassName('meep') |    $('.meep') // but is reeeally slow |

| Package    |  Size  | Query Time* |
| ---------- | :----: | ----------: |
| Vanilla.js |  0 kB  |       100 % |
| VQ.js      | 0.3 kB |     100.4 % |
| jQuery     | 30 kB  |     125.2 % |

*Query time: Average value of running equal queries each 100 000 times.

# Why
Type less and get more done.

Honestly I find myself still using jQuery just because typing `$(...)` is faster than `document.querySelectorAll(...)` which results in **24 more** characters to type (and also hitting shift twice at the right time).

Also it's less than 400 Bytes to include VQ. This is almost the same as having `document.querySelectorAll('foo.bar')` 11 times in your code.

# FAQ
**Q:** But adding a custom function to Element.prototype is bad practice!!!1!

**A:** I don't care. It is handy and I expect, that the call on Element objects works the same. Also chances that a builtin function called VQ will be added, are probably 0.00000042069% across the whole multiverse.

---

**Q:** No really you should never mess with the predefined stuff!

**A:** I think at this point you should forget about VQ.js and move on with your life. Or you could create your own version and remove the Element.prototype additions. It's really not that hard.

---

**Q:** Why is there no VQ.min.js or minified version?
  
**A:** Counter question: Do you really need those extra six bytes?
  
---

**Q:** Why not just Q instead of VQ? This is one extra character to type - every time.
  
**A:** Yeah, I was just using the Q at first, but I'm a bit afraid of collisions and also the whole naming works better with VQ.  
But there is a solution: Clone the repo and make your own Q version :)
  
---

**Q:** Are you serious?
  
**A:** Yes.
  
---

**Q:** How is this even comparable to a complex and diverse library as jQuery?
  
**A:** It's not. I just don't want to type so much to use default JavaScript functions. At this point you should be able to tell that I'm half joking here.
