<h1>1、类型</h1>
<p>1.1 原始类型: 当你访问一个原始类型时，你是直接作用在他的值（值直接存储在变量访问的位置）</p>
<ul>
<li>string</li>
<li>number</li>
<li>boolean</li>
<li>null</li>
<li>undefined</li>
<li>symbol</li>
</ul>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-keyword">const</span> foo = <span class="hljs-number">1</span>;
<span class="hljs-keyword">let</span> bar = foo;
bar = <span class="hljs-number">9</span>;
<span class="hljs-built_in">console</span>.log(foo, bar); <span class="hljs-comment">// =&gt; 1, </span>
</code></pre>
<p>1.2 引用类型: 当你访问一个引用类型时，你是作用在这个值的引用上。 （存储在变量处的值是一个指针（point），指向存储对象的内存处）</p>
<ul>
<li>object</li>
<li>array</li>
<li>function</li>
</ul>
<pre class="hljs cpp"><code class="cpp"><span class="hljs-keyword">const</span> foo = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>];
<span class="hljs-keyword">const</span> bar = foo;
bar[<span class="hljs-number">0</span>] = <span class="hljs-number">9</span>;
console.<span class="hljs-built_in">log</span>(foo[<span class="hljs-number">0</span>], bar[<span class="hljs-number">0</span>]); <span class="hljs-comment">// =&gt; 9, 9</span>
</code></pre>
<h1>2、引用</h1>
<p>2.1 对所有的引用使用const，避免使用var。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fprefer-const.html" target="_blank" rel="nofollow"><code>prefer-const</code></a>, <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-const-assign.html" target="_blank" rel="nofollow"><code>no-const-assign</code></a></p>
<blockquote>
<p>这样能确保你不能对引用重新赋值，不会因此出现 bug 或难以理解的代码</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>;
<span class="hljs-keyword">var</span> b = <span class="hljs-number">2</span>;

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> a = <span class="hljs-number">1</span>;
<span class="hljs-keyword">const</span> b = <span class="hljs-number">2</span>;
</code></pre>
<p>2.2 如果你必须对引用赋值，可以使用let代替var。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-var.html" target="_blank" rel="nofollow"><code>no-var</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FdisallowVar" target="_blank" rel="nofollow"><code>disallowVar</code></a></p>
<blockquote>
<p>因为let是块级作用域，而var是函数作用域</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">var</span> count = <span class="hljs-number">1</span>;
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
  count += <span class="hljs-number">1</span>;
}

<span class="hljs-comment">// good, use the let.</span>
<span class="hljs-keyword">let</span> count = <span class="hljs-number">1</span>;
<span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
  count += <span class="hljs-number">1</span>;
}
</code></pre>
<p>2.3 注意：let和const都是块级作用域。</p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// const 和 let 只在他定义的块级作用域内存在</span>
{
  <span class="hljs-keyword">let</span> a = <span class="hljs-number">1</span>;
  <span class="hljs-keyword">const</span> b = <span class="hljs-number">1</span>;
}
<span class="hljs-built_in">console</span>.log(a); <span class="hljs-comment">// ReferenceError</span>
<span class="hljs-built_in">console</span>.log(b); <span class="hljs-comment">// ReferenceError</span>
</code></pre>
<h1>3、对象</h1>
<ul>
<li>
<p>3.1 使用对象字面量创建对象. eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-new-object.html" target="_blank" rel="nofollow"><code>no-new-object</code></a></p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> item = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Object</span>();

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> item = {};
</code></pre>
</li>
<li>
<p>3.2 在创建具有动态属性名的对象时，使用计算属性名</p>
<blockquote>
<p>允许您在一个地方定义对象的所有属性</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getKey</span>(<span class="hljs-params">k</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-string">`a key named <span class="hljs-subst">${k}</span>`</span>;
}

<span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> obj = {
  <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,
  <span class="hljs-attr">name</span>: <span class="hljs-string">'San Francisco'</span>,
};
obj[getKey(<span class="hljs-string">'enabled'</span>)] = <span class="hljs-literal">true</span>;

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> obj = {
  <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,
  <span class="hljs-attr">name</span>: <span class="hljs-string">'San Francisco'</span>,
  [getKey(<span class="hljs-string">'enabled'</span>)]: <span class="hljs-literal">true</span>,
};
</code></pre>
</li>
<li>
<p>3.3使用对象方法的简写. eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fobject-shorthand.html" target="_blank" rel="nofollow"><code>object-shorthand</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireEnhancedObjectLiterals" target="_blank" rel="nofollow"><code>requireEnhancedObjectLiterals</code></a></p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> atom = {
  <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>,

  <span class="hljs-attr">addValue</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">value</span>) </span>{
    <span class="hljs-keyword">return</span> atom.value + value;
  },
};

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> atom = {
  <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>,

  addValue(value) {
    <span class="hljs-keyword">return</span> atom.value + value;
  },
};
</code></pre>
</li>
<li>
<p>3.4使用对象属性值简写. eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fobject-shorthand.html" target="_blank" rel="nofollow"><code>object-shorthand</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireEnhancedObjectLiterals" target="_blank" rel="nofollow"><code>requireEnhancedObjectLiterals</code></a></p>
<blockquote>
<p>这样更简短且具有描述性.</p>
</blockquote>
<pre class="hljs java"><code class="java"><span class="hljs-keyword">const</span> lukeSkywalker = <span class="hljs-string">'Luke Skywalker'</span>;

<span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> obj = {
  lukeSkywalker: lukeSkywalker,
};

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> obj = {
  lukeSkywalker,
};
</code></pre>
</li>
<li>
<p>3.5 在对象声明开始的位置将您的简写属性分组。</p>
<blockquote>
<p>这样可以更容易告知哪些属性使用了简写。</p>
</blockquote>
<pre class="hljs java"><code class="java"><span class="hljs-keyword">const</span> anakinSkywalker = <span class="hljs-string">'Anakin Skywalker'</span>;
<span class="hljs-keyword">const</span> lukeSkywalker = <span class="hljs-string">'Luke Skywalker'</span>;

<span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> obj = {
  episodeOne: <span class="hljs-number">1</span>,
  twoJediWalkIntoACantina: <span class="hljs-number">2</span>,
  lukeSkywalker,
  episodeThree: <span class="hljs-number">3</span>,
  mayTheFourth: <span class="hljs-number">4</span>,
  anakinSkywalker,
};

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: <span class="hljs-number">1</span>,
  twoJediWalkIntoACantina: <span class="hljs-number">2</span>,
  episodeThree: <span class="hljs-number">3</span>,
  mayTheFourth: <span class="hljs-number">4</span>,
};
</code></pre>
</li>
<li>
<p>[3.6] 只有对无效的标识符的属性才使用引号. eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fquote-props.html" target="_blank" rel="nofollow"><code>quote-props</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FdisallowQuotedKeysInObjects" target="_blank" rel="nofollow"><code>disallowQuotedKeysInObjects</code></a></p>
<blockquote>
<p>总的来说，我们认为这样阅读更容易。它改进了语法高亮显示，并且更容易被许多JS引擎优化。</p>
</blockquote>
</li>
</ul>
<pre class="hljs java"><code class="java">```source-js
<span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> bad = {
  <span class="hljs-string">'foo'</span>: <span class="hljs-number">3</span>,
  <span class="hljs-string">'bar'</span>: <span class="hljs-number">4</span>,
  <span class="hljs-string">'data-blah'</span>: <span class="hljs-number">5</span>,
};

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> good = {
  foo: <span class="hljs-number">3</span>,
  bar: <span class="hljs-number">4</span>,
  <span class="hljs-string">'data-blah'</span>: <span class="hljs-number">5</span>,
};

</code></pre>
<ul>
<li>
<p>3.7 不要直接调用Object.prototype的方法，比如 hasOwnProperty、propertyIsEnumerable、isPrototypeOf。</p>
<blockquote>
<p>这些方法可能被考虑之中的对象属性所屏蔽，考虑下{ hasOwnProperty: false }或者创建了一个空对象(<code>Object.create(null)</code>).</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-built_in">console</span>.log(object.hasOwnProperty(key));

<span class="hljs-comment">// good</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Object</span>.prototype.hasOwnProperty.call(object, key));

<span class="hljs-comment">// best</span>
<span class="hljs-keyword">const</span> has = <span class="hljs-built_in">Object</span>.prototype.hasOwnProperty; <span class="hljs-comment">// cache the lookup once, in module scope.</span>
<span class="hljs-comment">/* or */</span>
<span class="hljs-keyword">import</span> has <span class="hljs-keyword">from</span> <span class="hljs-string">'has'</span>; <span class="hljs-comment">// https://www.npmjs.com/package/has</span>
<span class="hljs-comment">// ...</span>
<span class="hljs-built_in">console</span>.log(has.call(object, key));
</code></pre>
</li>
<li>
<p>3.8 浅拷贝对象的时候使用 … 操作符而不是 Object.assign</p>
<pre class="hljs objectivec"><code class="objectivec"><span class="hljs-comment">// very bad</span>
<span class="hljs-keyword">const</span> original = { a: <span class="hljs-number">1</span>, b: <span class="hljs-number">2</span> };
<span class="hljs-keyword">const</span> <span class="hljs-keyword">copy</span> = Object.assign(original, { c: <span class="hljs-number">3</span> }); <span class="hljs-comment">// this mutates `original` ಠ_ಠ</span>
delete <span class="hljs-keyword">copy</span>.a; <span class="hljs-comment">// so does this</span>

<span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> original = { a: <span class="hljs-number">1</span>, b: <span class="hljs-number">2</span> };
<span class="hljs-keyword">const</span> <span class="hljs-keyword">copy</span> = Object.assign({}, original, { c: <span class="hljs-number">3</span> }); <span class="hljs-comment">// copy =&gt; { a: 1, b: 2, c: 3 }</span>

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> original = { a: <span class="hljs-number">1</span>, b: <span class="hljs-number">2</span> };
<span class="hljs-keyword">const</span> <span class="hljs-keyword">copy</span> = { ...original, c: <span class="hljs-number">3</span> }; <span class="hljs-comment">// copy =&gt; { a: 1, b: 2, c: 3 }</span>

<span class="hljs-keyword">const</span> { a, ...noA } = <span class="hljs-keyword">copy</span>; <span class="hljs-comment">// noA =&gt; { b: 2, c: 3 }</span>
</code></pre>
</li>
</ul>
<h1>4、数组</h1>
<ul>
<li>
<p>4.1使用字面量创建数组 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-array-constructor.html" target="_blank" rel="nofollow"><code>no-array-constructor</code></a></p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> items = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>();

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> items = [];
</code></pre>
</li>
<li>
<p>4.2添加数组元素的时候使用push代替直接赋值</p>
<pre class="hljs java"><code class="java"><span class="hljs-keyword">const</span> someStack = [];

<span class="hljs-comment">// bad</span>
someStack[someStack.length] = <span class="hljs-string">'abracadabra'</span>;

<span class="hljs-comment">// good</span>
someStack.push(<span class="hljs-string">'abracadabra'</span>);
</code></pre>
</li>
<li>
<p>4.3使用拓展运算符 … 复制数组</p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> len = items.length;
<span class="hljs-keyword">const</span> itemsCopy = [];
<span class="hljs-keyword">let</span> i;

<span class="hljs-keyword">for</span> (i = <span class="hljs-number">0</span>; i &lt; len; i += <span class="hljs-number">1</span>) {
  itemsCopy[i] = items[i];
}

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> itemsCopy = [...items];
</code></pre>
</li>
<li>
<p>4.4将数组类对象(对于一个普通的对象来说，如果它的所有property名均为正整数，同时也有相应的length属性，那么虽然该对象并不是由Array构造函数所创建的，它依然呈现出数组的行为，在这种情况下，这些对象被称为“类数组对象”)转换为数组，可以使用扩展…而不是Array.from.</p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-keyword">const</span> foo = <span class="hljs-built_in">document</span>.querySelectorAll(<span class="hljs-string">'.foo'</span>);

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> nodes = <span class="hljs-built_in">Array</span>.from(foo);

<span class="hljs-comment">// best</span>
<span class="hljs-keyword">const</span> nodes = [...foo];
</code></pre>
</li>
<li>
<p>4.5使用Array.from而不是…用于对可迭代的对象进行映射，因为它避免创建中间数组。</p>
<pre class="hljs cpp"><code class="cpp"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> baz = [...foo].<span class="hljs-built_in">map</span>(bar);

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> baz = Array.from(foo, bar);
</code></pre>
</li>
<li>
<p>4.6 在数组方法回调中使用return语句。如果函数体包含一个单独的语句，返回一个没有<a href="https://link.jianshu.com?t=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F30779564" target="_blank" rel="nofollow">副作用</a>的表达式，那么省略返回是可以的。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Farray-callback-return" target="_blank" rel="nofollow"><code>array-callback-return</code></a></p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// good</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function">(<span class="hljs-params">x</span>) =&gt;</span> {
  <span class="hljs-keyword">const</span> y = x + <span class="hljs-number">1</span>;
  <span class="hljs-keyword">return</span> x * y;
});

<span class="hljs-comment">// good</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x + <span class="hljs-number">1</span>);

<span class="hljs-comment">// bad - 没有返回值代表数组acc在第一次迭代之后变成了undefined </span>
[[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>], [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>], [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>]].reduce(<span class="hljs-function">(<span class="hljs-params">acc, item, index</span>) =&gt;</span> {
  <span class="hljs-keyword">const</span> flatten = acc.concat(item);
  acc[index] = flatten;
});

<span class="hljs-comment">// good</span>
[[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>], [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>], [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>]].reduce(<span class="hljs-function">(<span class="hljs-params">acc, item, index</span>) =&gt;</span> {
  <span class="hljs-keyword">const</span> flatten = acc.concat(item);
  acc[index] = flatten;
  <span class="hljs-keyword">return</span> flatten;
});

<span class="hljs-comment">// bad</span>
inbox.filter(<span class="hljs-function">(<span class="hljs-params">msg</span>) =&gt;</span> {
  <span class="hljs-keyword">const</span> { subject, author } = msg;
  <span class="hljs-keyword">if</span> (subject === <span class="hljs-string">'Mockingbird'</span>) {
    <span class="hljs-keyword">return</span> author === <span class="hljs-string">'Harper Lee'</span>;
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
  }
});

<span class="hljs-comment">// good</span>
inbox.filter(<span class="hljs-function">(<span class="hljs-params">msg</span>) =&gt;</span> {
  <span class="hljs-keyword">const</span> { subject, author } = msg;
  <span class="hljs-keyword">if</span> (subject === <span class="hljs-string">'Mockingbird'</span>) {
    <span class="hljs-keyword">return</span> author === <span class="hljs-string">'Harper Lee'</span>;
  }

  <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
});
</code></pre>
</li>
<li>
<p>4.7如果数组有多行，则在打开位置使用换行符，然后在关闭数组括号之前使用换行符。</p>
<pre class="hljs objectivec"><code class="objectivec"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> arr = [
  [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>], [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>], [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>],
];

<span class="hljs-keyword">const</span> objectInArray = [{
  <span class="hljs-keyword">id</span>: <span class="hljs-number">1</span>,
}, {
  <span class="hljs-keyword">id</span>: <span class="hljs-number">2</span>,
}];

<span class="hljs-keyword">const</span> numberInArray = [
  <span class="hljs-number">1</span>, <span class="hljs-number">2</span>,
];

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> arr = [[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>], [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>], [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>]];

<span class="hljs-keyword">const</span> objectInArray = [
  {
    <span class="hljs-keyword">id</span>: <span class="hljs-number">1</span>,
  },
  {
    <span class="hljs-keyword">id</span>: <span class="hljs-number">2</span>,
  },
];

<span class="hljs-keyword">const</span> numberInArray = [
  <span class="hljs-number">1</span>,
  <span class="hljs-number">2</span>,
];
</code></pre>
</li>
</ul>
<h1>5、解构</h1>
<ul>
<li>
<p>5.1在访问和使用对象的多个属性时，使用对象的解构。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fprefer-destructuring" target="_blank" rel="nofollow"><code>prefer-destructuring</code></a>jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireObjectDestructuring" target="_blank" rel="nofollow"><code>requireObjectDestructuring</code></a></p>
<blockquote>
<p>解构能减少临时引用属性。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getFullName</span>(<span class="hljs-params">user</span>) </span>{
  <span class="hljs-keyword">const</span> firstName = user.firstName;
  <span class="hljs-keyword">const</span> lastName = user.lastName;

  <span class="hljs-keyword">return</span> <span class="hljs-string">`<span class="hljs-subst">${firstName}</span> <span class="hljs-subst">${lastName}</span>`</span>;
}

<span class="hljs-comment">// good</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getFullName</span>(<span class="hljs-params">user</span>) </span>{
  <span class="hljs-keyword">const</span> { firstName, lastName } = user;
  <span class="hljs-keyword">return</span> <span class="hljs-string">`<span class="hljs-subst">${firstName}</span> <span class="hljs-subst">${lastName}</span>`</span>;
}

<span class="hljs-comment">// best</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getFullName</span>(<span class="hljs-params">{ firstName, lastName }</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-string">`<span class="hljs-subst">${firstName}</span> <span class="hljs-subst">${lastName}</span>`</span>;
}
</code></pre>
</li>
<li>
<p>5.2 使用数组解构. eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fprefer-destructuring" target="_blank" rel="nofollow"><code>prefer-destructuring</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireArrayDestructuring" target="_blank" rel="nofollow"><code>requireArrayDestructuring</code></a></p>
<pre class="hljs cpp"><code class="cpp"><span class="hljs-keyword">const</span> arr = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];

<span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> first = arr[<span class="hljs-number">0</span>];
<span class="hljs-keyword">const</span> second = arr[<span class="hljs-number">1</span>];

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> [first, second] = arr;
</code></pre>
</li>
<li>
<p>[5.3]使用对象解构来实现多个返回值，而不是数组解构 。 jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FdisallowArrayDestructuringReturn" target="_blank" rel="nofollow"><code>disallowArrayDestructuringReturn</code></a></p>
<blockquote>
<p>你可以随时间的推移添加新的属性或更改排序，而不会改变调用时的位置。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">processInput</span>(<span class="hljs-params">input</span>) </span>{
  <span class="hljs-comment">// then a miracle occurs</span>
  <span class="hljs-keyword">return</span> [left, right, top, bottom];
}

<span class="hljs-comment">// 调用者需要考虑返回数据的顺序</span>
<span class="hljs-keyword">const</span> [left, __, top] = processInput(input);

<span class="hljs-comment">// good</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">processInput</span>(<span class="hljs-params">input</span>) </span>{
  <span class="hljs-comment">// then a miracle occurs</span>
  <span class="hljs-keyword">return</span> { left, right, top, bottom };
}

<span class="hljs-comment">// 调用者只需选择他需要的数据</span>
<span class="hljs-keyword">const</span> { left, top } = processInput(input);
</code></pre>
</li>
</ul>
<h1>6、字符串</h1>
<ul>
<li>
<p>6.1 字符串使用单引号''。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fquotes.html" target="_blank" rel="nofollow"><code>quotes</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FvalidateQuoteMarks" target="_blank" rel="nofollow"><code>validateQuoteMarks</code></a></p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> name = <span class="hljs-string">"Capt. Janeway"</span>;

<span class="hljs-comment">// bad - 模板字面量应该包含插值或换行符</span>
<span class="hljs-keyword">const</span> name = <span class="hljs-string">`Capt. Janeway`</span>;

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> name = <span class="hljs-string">'Capt. Janeway'</span>;
</code></pre>
</li>
<li>
<p>6.2 超过100个字符导致换行的字符串不应该使用字符串连接符写成多行。</p>
<blockquote>
<p>拼接字符串是个痛苦的工作，并且使代码的可搜索性降低。</p>
</blockquote>
<pre class="hljs java"><code class="java"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> errorMessage = <span class="hljs-string">'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.'</span>;

<span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> errorMessage = <span class="hljs-string">'This is a super long error that was thrown because '</span> +
  <span class="hljs-string">'of Batman. When you stop to think about how Batman had anything to do '</span> +
  <span class="hljs-string">'with this, you would get nowhere fast.'</span>;

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> errorMessage = <span class="hljs-string">'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.'</span>;
</code></pre>
</li>
<li>
<p>6.3 以编程方式构建字符串时， 使用模板字符串代替字符串连接. eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fprefer-template.html" target="_blank" rel="nofollow"><code>prefer-template</code></a><a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Ftemplate-curly-spacing" target="_blank" rel="nofollow"><code>template-curly-spacing</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireTemplateStrings" target="_blank" rel="nofollow"><code>requireTemplateStrings</code></a></p>
<blockquote>
<p>为什么? 模板字符串为你提供了一种可读的、简洁的语法，具有正确的换行和字符串插值特性。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayHi</span>(<span class="hljs-params">name</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-string">'How are you, '</span> + name + <span class="hljs-string">'?'</span>;
}

<span class="hljs-comment">// bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayHi</span>(<span class="hljs-params">name</span>) </span>{
  <span class="hljs-keyword">return</span> [<span class="hljs-string">'How are you, '</span>, name, <span class="hljs-string">'?'</span>].join();
}

<span class="hljs-comment">// bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayHi</span>(<span class="hljs-params">name</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-string">`How are you, <span class="hljs-subst">${ name }</span>?`</span>;
}

<span class="hljs-comment">// good</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sayHi</span>(<span class="hljs-params">name</span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-string">`How are you, <span class="hljs-subst">${name}</span>?`</span>;
}
</code></pre>
</li>
<li><p>6.4 永远不要对字符串使用eval(),他产生无数的漏洞。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-eval" target="_blank" rel="nofollow"><code>no-eval</code></a></p></li>
<li>
<p>6.5 不要对字符串使用不必要的转义字符. eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-useless-escape" target="_blank" rel="nofollow"><code>no-useless-escape</code></a></p>
<blockquote>
<p>为什么? 反斜杠损害可读性，因此他们只要在必须的时候使用。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> foo = <span class="hljs-string">'\'this\' \i\s \"quoted\"'</span>;

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> foo = <span class="hljs-string">'\'this\' is "quoted"'</span>;
<span class="hljs-keyword">const</span> foo = <span class="hljs-string">`my name is '<span class="hljs-subst">${name}</span>'`</span>;
</code></pre>
</li>
</ul>
<h1>7、函数</h1>
<ul>
<li>
<p>7.1 使用命名函数表达式而不是函数声明。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Ffunc-style" target="_blank" rel="nofollow"><code>func-style</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FdisallowFunctionDeclarations" target="_blank" rel="nofollow"><code>disallowFunctionDeclarations</code></a></p>
<blockquote>
<p>为什么？ 函数声明很容易被提升，你可以在函数被定义之前引用该函数，这会损害可读性和可维护性。如果你发现一个函数的定义很大或很复杂，以至于妨碍了解文件的其他部分，那么也许是时候把它提取到自己的模块中去！【不要忘记显式地命名表达式，不管该名称是否从包含变量中推断出来的（在现代浏览器中，或在使用编译器如Babel 时经常出现这种情况）。这消除了关于Error的调用堆栈的任何假设。---不是很理解】</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-comment">// ...</span>
}

<span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> foo = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
  <span class="hljs-comment">// ...</span>
};

<span class="hljs-comment">// good</span>
<span class="hljs-comment">// 用明显区别于变量引用调用的词汇命名</span>
<span class="hljs-keyword">const</span> short = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">longUniqueMoreDescriptiveLexicalFoo</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-comment">// ...</span>
};
</code></pre>
</li>
<li>
<p>7.2  圆括号包裹来立即调用函数表达式。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fwrap-iife.html" target="_blank" rel="nofollow"><code>wrap-iife</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireParenthesesAroundIIFE" target="_blank" rel="nofollow"><code>requireParenthesesAroundIIFE</code></a></p>
<blockquote>
<p>为什么？一个立即调用函数表达式是一个单独的单元 – 将函数表达式包裹在括号中，后面再跟一个调用括号。请注意，在模块的中，你几乎不需要 IIFE</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">//立即调用函数表达式 (IIFE)</span>
(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Welcome to the Internet. Please follow me.'</span>);
}());
</code></pre>
</li>
<li><p>7.3 永远不要在一个非函数代码块中声明一个函数（if,while等等），把这个函数赋值给一个变量代替. 浏览器允许你这么做，但是他们的解析各不相同。. eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-loop-func.html" target="_blank" rel="nofollow"><code>no-loop-func</code></a></p></li>
</ul>
<pre class="hljs javascript"><code class="javascript">  <span class="hljs-comment">// 千万不要这样做！</span>
  <span class="hljs-comment">// 有的浏览器会把foo声明为返回first的那个函数</span>
  <span class="hljs-comment">// 而有的浏览器则会让foo返回second</span>
  <span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{
      <span class="hljs-keyword">return</span> <span class="hljs-string">'first'</span>;
    }
  }
  <span class="hljs-keyword">else</span> {
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{
      <span class="hljs-keyword">return</span> <span class="hljs-string">'second'</span>;
    }
  }
  foo();
  <span class="hljs-comment">// 记住，这种情况下要使用函数表达式：</span>
  <span class="hljs-keyword">let</span> foo;
  <span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
    foo = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
      <span class="hljs-keyword">return</span> <span class="hljs-string">'first'</span>;
    };
  }
  <span class="hljs-keyword">else</span> {
    foo = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
      <span class="hljs-keyword">return</span> <span class="hljs-string">'second'</span>;
    };
  }
  foo();
</code></pre>
<ul>
<li>
<p>7.4  注意： ECMA-262标准 定义block为一组语句。函数声明不是语句。</p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">if</span> (currentUser) {
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Nope.'</span>);
  }
}

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">let</span> test;
<span class="hljs-keyword">if</span> (currentUser) {
  test = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Yup.'</span>);
  };
}
</code></pre>
</li>
<li>
<p>7.5 永远不要命名一个参数为 arguments。这将会覆盖原来函数作用域内的 arguments 对象。</p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params">name, options, arguments</span>) </span>{
  <span class="hljs-comment">// ...</span>
}

<span class="hljs-comment">// good</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params">name, options, args</span>) </span>{
  <span class="hljs-comment">// ...</span>
}
</code></pre>
</li>
<li>
<p>7.6 永远不要使用 arguments，选择 rest 语法 ... 替代。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fprefer-rest-params" target="_blank" rel="nofollow"><code>prefer-rest-params</code></a></p>
<blockquote>
<p>为什么？使用 ... 能明确你要传入的参数。另外 rest（...）参数是一个真正的数组，而  arguments 是一个类数组（Array-like）。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">concatenateAll</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">const</span> args = <span class="hljs-built_in">Array</span>.prototype.slice.call(<span class="hljs-built_in">arguments</span>);
  <span class="hljs-keyword">return</span> args.join(<span class="hljs-string">''</span>);
}

<span class="hljs-comment">// good</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">concatenateAll</span>(<span class="hljs-params">...args</span>) </span>{
  <span class="hljs-keyword">return</span> args.join(<span class="hljs-string">''</span>);
}
</code></pre>
</li>
<li>
<p>7.7 使用默认的传参而不是改变函数的参数。</p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// really bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handleThings</span>(<span class="hljs-params">opts</span>) </span>{
  <span class="hljs-comment">// 不！我们不应该改变函数的参数No! </span>
  <span class="hljs-comment">// 更坏的是如果opts是false,他将被设置为一个对象</span>
  <span class="hljs-comment">// 这可能是你想要的，但它可以引起一些小的bug</span>
  opts = opts || {};
  <span class="hljs-comment">// ...</span>
}

<span class="hljs-comment">// still bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handleThings</span>(<span class="hljs-params">opts</span>) </span>{
  <span class="hljs-keyword">if</span> (opts === <span class="hljs-keyword">void</span> <span class="hljs-number">0</span>) {
    opts = {};
  }
  <span class="hljs-comment">// ...</span>
}

<span class="hljs-comment">// good</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handleThings</span>(<span class="hljs-params">opts = {}</span>) </span>{
  <span class="hljs-comment">// ...</span>
}
</code></pre>
</li>
<li>
<p>7.8  避免默认参数的副作用</p>
<blockquote>
<p>为什么? 这样写会使人困惑</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-keyword">var</span> b = <span class="hljs-number">1</span>;
<span class="hljs-comment">// bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">count</span>(<span class="hljs-params">a = b++</span>) </span>{
  <span class="hljs-built_in">console</span>.log(a);
}
count();  <span class="hljs-comment">// 1</span>
count();  <span class="hljs-comment">// 2</span>
count(<span class="hljs-number">3</span>); <span class="hljs-comment">// 3</span>
count();  <span class="hljs-comment">// 3</span>
</code></pre>
</li>
<li>
<p>7.9 始终将默认参数放到最后</p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handleThings</span>(<span class="hljs-params">opts = {}, name</span>) </span>{
  <span class="hljs-comment">// ...</span>
}

<span class="hljs-comment">// good</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handleThings</span>(<span class="hljs-params">name, opts = {}</span>) </span>{
  <span class="hljs-comment">// ...</span>
}
</code></pre>
</li>
<li>
<p>7.10 永远不要使用函数构造器去创建一个函数。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-new-func" target="_blank" rel="nofollow"><code>no-new-func</code></a></p>
<blockquote>
<p>为什么?通过这种方法创建函数与 eval() 类似，会对字符串求值, 这样会产生漏洞。</p>
</blockquote>
<pre class="hljs php"><code class="php"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">var</span> add = <span class="hljs-keyword">new</span> <span class="hljs-function"><span class="hljs-keyword">Function</span><span class="hljs-params">(<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'return a + b'</span>)</span></span>;

<span class="hljs-comment">// still bad</span>
<span class="hljs-keyword">var</span> subtract = <span class="hljs-function"><span class="hljs-keyword">Function</span><span class="hljs-params">(<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'return a - b'</span>)</span></span>;
</code></pre>
</li>
<li>
<p>7.11 隔开函数签名Spacing in a function signature. eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fspace-before-function-paren" target="_blank" rel="nofollow"><code>space-before-function-paren</code></a> <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fspace-before-blocks" target="_blank" rel="nofollow"><code>space-before-blocks</code></a></p>
<blockquote>
<p>为什么？这样有利于代码的一致性，当你添加或删除函数名时不需要添加或删除空格</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> f = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">const</span> g = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>)</span>{};
<span class="hljs-keyword">const</span> h = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> x = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{};
<span class="hljs-keyword">const</span> y = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">a</span>(<span class="hljs-params"></span>) </span>{};
</code></pre>
</li>
<li>
<p>7.12 永远不要改变参数 Never mutate parameters. eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-param-reassign.html" target="_blank" rel="nofollow"><code>no-param-reassign</code></a></p>
<blockquote>
<p>为什么？将传入的对象作为参数进行操作可能会在调用原始对象时造成不必要的变量副作用。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f1</span>(<span class="hljs-params">obj</span>) </span>{
  obj.key = <span class="hljs-number">1</span>;
}

<span class="hljs-comment">// good</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f2</span>(<span class="hljs-params">obj</span>) </span>{
  <span class="hljs-keyword">const</span> key = <span class="hljs-built_in">Object</span>.prototype.hasOwnProperty.call(obj, <span class="hljs-string">'key'</span>) ? obj.key : <span class="hljs-number">1</span>;
}
</code></pre>
</li>
<li>
<p>7.13 不要重新赋值参数. eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-param-reassign.html" target="_blank" rel="nofollow"><code>no-param-reassign</code></a></p>
<blockquote>
<p>为什么，重新赋值参数会导致不可预期的行为，特别是当访问arguments对象。它也可能导致性能问题，特别是在V8中。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f1</span>(<span class="hljs-params">a</span>) </span>{
  a = <span class="hljs-number">1</span>;
  <span class="hljs-comment">// ...</span>
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f2</span>(<span class="hljs-params">a</span>) </span>{
  <span class="hljs-keyword">if</span> (!a) { a = <span class="hljs-number">1</span>; }
  <span class="hljs-comment">// ...</span>
}

<span class="hljs-comment">// good</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f3</span>(<span class="hljs-params">a</span>) </span>{
  <span class="hljs-keyword">const</span> b = a || <span class="hljs-number">1</span>;
  <span class="hljs-comment">// ...</span>
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f4</span>(<span class="hljs-params">a = <span class="hljs-number">1</span></span>) </span>{
  <span class="hljs-comment">// ...</span>
}
</code></pre>
</li>
<li>
<p>7.14 更喜欢使用展开运算符..去调用可变参数的函数. eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fprefer-spread" target="_blank" rel="nofollow"><code>prefer-spread</code></a></p>
<blockquote>
<p>为什么？因为他更清洁，你不需要去支持上下文，而且你不能更容易的去使用new和apply</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> x = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];
<span class="hljs-built_in">console</span>.log.apply(<span class="hljs-built_in">console</span>, x);

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> x = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];
<span class="hljs-built_in">console</span>.log(...x);

<span class="hljs-comment">// bad</span>
<span class="hljs-keyword">new</span> (<span class="hljs-built_in">Function</span>.prototype.bind.apply(<span class="hljs-built_in">Date</span>, [<span class="hljs-literal">null</span>, <span class="hljs-number">2016</span>, <span class="hljs-number">8</span>, <span class="hljs-number">5</span>]));

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(...[<span class="hljs-number">2016</span>, <span class="hljs-number">8</span>, <span class="hljs-number">5</span>]);
</code></pre>
</li>
<li>
<p>7.15 具有多行签名或调用的函数，应该像本指南中的其他多行列表一样缩进：每一项都独占一行，最后一项上有一个尾逗号 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Ffunction-paren-newline" target="_blank" rel="nofollow"><code>function-paren-newline</code></a></p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params">bar,
             baz,
             quux</span>) </span>{
  <span class="hljs-comment">// ...</span>
}

<span class="hljs-comment">// good</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params">
  bar,
  baz,
  quux,
</span>) </span>{
  <span class="hljs-comment">// ...</span>
}

<span class="hljs-comment">// bad</span>
<span class="hljs-built_in">console</span>.log(foo,
  bar,
  baz);

<span class="hljs-comment">// good</span>
<span class="hljs-built_in">console</span>.log(
  foo,
  bar,
  baz,
);
</code></pre>
</li>
</ul>
<p>8.1 当您必须使用匿名函数（如在传递一个内联回调时），请使用箭头函数表示法。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fprefer-arrow-callback.html" target="_blank" rel="nofollow"><code>prefer-arrow-callback</code></a>, <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Farrow-spacing.html" target="_blank" rel="nofollow"><code>arrow-spacing</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireArrowFunctions" target="_blank" rel="nofollow"><code>requireArrowFunctions</code></a></p>
<blockquote>
<p>为什么？ 它创建了一个在 <code>this</code> 上下文中执行的函数的版本，这通常是你想要的，而且这样的写法更为简洁。（愚人码头注：参考 <a href="https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FFunctions%2FArrow_functions" target="_blank" rel="nofollow">Arrow functions – JavaScript | MDN</a> 和 <a href="https://link.jianshu.com?t=http%3A%2F%2Ftoddmotto.com%2Fes6-arrow-functions-syntaxes-and-lexical-scoping%2F" target="_blank" rel="nofollow">ES6 arrow functions, syntax and lexical scoping</a>）</p>
<p>为什么不？ 如果你有一个相当复杂的函数，你或许可以把逻辑部分转移到一个声明函数上。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">x</span>) </span>{
    <span class="hljs-keyword">const</span> y = x + <span class="hljs-number">1</span>;
    <span class="hljs-keyword">return</span> x * y;
});
 
<span class="hljs-comment">// good</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function">(<span class="hljs-params">x</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> y = x + <span class="hljs-number">1</span>;
    <span class="hljs-keyword">return</span> x * y;
});
</code></pre>
<p>8.2  如果函数体由一个返回无副作用(side effect)的<a href="https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FGuide%2FExpressions_and_Operators%23Expressions" target="_blank" rel="nofollow">expression(表达式)</a>的单行语句组成，那么可以省略大括号并使用隐式返回。否则，保留大括号并使用 <code>return</code> 语句。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Farrow-parens.html" target="_blank" rel="nofollow"><code>arrow-parens</code></a>, <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Farrow-body-style.html" target="_blank" rel="nofollow"><code>arrow-body-style</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FdisallowParenthesesAroundArrowParam" target="_blank" rel="nofollow"><code>disallowParenthesesAroundArrowParam</code></a>, <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireShorthandArrowFunctions" target="_blank" rel="nofollow"><code>requireShorthandArrowFunctions</code></a></p>
<p>愚人码头注，什么是副作用(side effect)？一段代码，即在不需要的情况下，创建一个变量并在整个作用域内可用。</p>
<blockquote>
<p>为什么？ 语法糖。 当多个函数链式调用时，可读性更高。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function"><span class="hljs-params">number</span> =&gt;</span> {
    <span class="hljs-keyword">const</span> nextNumber = number + <span class="hljs-number">1</span>;
    <span class="hljs-string">`A string containing the <span class="hljs-subst">${nextNumber}</span>.`</span>;
});
 
<span class="hljs-comment">// good</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function"><span class="hljs-params">number</span> =&gt;</span> <span class="hljs-string">`A string containing the <span class="hljs-subst">${number}</span>.`</span>);
 
<span class="hljs-comment">// good</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function">(<span class="hljs-params">number</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> nextNumber = number + <span class="hljs-number">1</span>;
    <span class="hljs-keyword">return</span> <span class="hljs-string">`A string containing the <span class="hljs-subst">${nextNumber}</span>.`</span>;
});
 
<span class="hljs-comment">// good</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function">(<span class="hljs-params">number, index</span>) =&gt;</span> ({
    [index]: number,
}));
 
<span class="hljs-comment">// No implicit return with side effects</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params">callback</span>) </span>{
    <span class="hljs-keyword">const</span> val = callback();
    <span class="hljs-keyword">if</span> (val === <span class="hljs-literal">true</span>) {
    <span class="hljs-comment">// Do something if callback returns true</span>
    }
}
 
<span class="hljs-keyword">let</span> bool = <span class="hljs-literal">false</span>;
 
<span class="hljs-comment">// bad</span>
foo(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> bool = <span class="hljs-literal">true</span>);
 
<span class="hljs-comment">// good</span>
foo(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    bool = <span class="hljs-literal">true</span>;
});
</code></pre>
<p>8.3  如果表达式跨多行，将其包裹在括号中，可以提高可读性。</p>
<blockquote>
<p>为什么？ 它清楚地显示了函数开始和结束的位置。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
[<span class="hljs-string">'get'</span>, <span class="hljs-string">'post'</span>, <span class="hljs-string">'put'</span>].map(<span class="hljs-function"><span class="hljs-params">httpMethod</span> =&gt;</span> <span class="hljs-built_in">Object</span>.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
    )
);
 
<span class="hljs-comment">// good</span>
[<span class="hljs-string">'get'</span>, <span class="hljs-string">'post'</span>, <span class="hljs-string">'put'</span>].map(<span class="hljs-function"><span class="hljs-params">httpMethod</span> =&gt;</span> (
    <span class="hljs-built_in">Object</span>.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
    )
));
</code></pre>
<p>8.4 如果你的函数只有一个参数并且不使用大括号，则可以省略参数括号。否则，为了清晰和一致性，总是给参数加上括号。<br>
注意：总是使用圆括号也是可以被lint工具接受的，在这种情况下 使用 eslint 的 <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Farrow-parens%23always" target="_blank" rel="nofollow">“always” 选项</a>，或者 jscs 中不要包含 <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FdisallowParenthesesAroundArrowParam" target="_blank" rel="nofollow"><code>disallowParenthesesAroundArrowParam</code></a> 选项。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Farrow-parens.html" target="_blank" rel="nofollow"><code>arrow-parens</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FdisallowParenthesesAroundArrowParam" target="_blank" rel="nofollow"><code>disallowParenthesesAroundArrowParam</code></a></p>
<blockquote>
<p>为什么？ 不造成视觉上的混乱。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function">(<span class="hljs-params">x</span>) =&gt;</span> x * x);
 
<span class="hljs-comment">// good</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x * x);
 
<span class="hljs-comment">// good</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function"><span class="hljs-params">number</span> =&gt;</span> (
    <span class="hljs-string">`A long string with the <span class="hljs-subst">${number}</span>. It’s so long that we don’t want it to take up space on the .map line!`</span>
));
 
<span class="hljs-comment">// bad</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> {
    <span class="hljs-keyword">const</span> y = x + <span class="hljs-number">1</span>;
    <span class="hljs-keyword">return</span> x * y;
});
 
<span class="hljs-comment">// good</span>
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(<span class="hljs-function">(<span class="hljs-params">x</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> y = x + <span class="hljs-number">1</span>;
    <span class="hljs-keyword">return</span> x * y;
});
</code></pre>
<p>8.5 避免使用比较运算符(<code>&amp;lt; =</code>, <code>&amp;gt;=</code>)时，混淆箭头函数语法(<code>=&amp;gt;</code>)。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-confusing-arrow" target="_blank" rel="nofollow"><code>no-confusing-arrow</code></a></p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> itemHeight = <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> item.height &gt; <span class="hljs-number">256</span> ? item.largeSize : item.smallSize;
 
<span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> itemHeight = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> item.height &gt; <span class="hljs-number">256</span> ? item.largeSize : item.smallSize;
 
<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> itemHeight = <span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> (item.height &gt; <span class="hljs-number">256</span> ? item.largeSize : item.smallSize);
 
<span class="hljs-comment">// good</span>
<span class="hljs-keyword">const</span> itemHeight = <span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> { height, largeSize, smallSize } = item;
    <span class="hljs-keyword">return</span> height &gt; <span class="hljs-number">256</span> ? largeSize : smallSize;
};
</code></pre>
<h1>9、类 Classes &amp; 构造函数 Constructors</h1>
<p>9.1 总是使用 <code>class</code>。避免直接操作 <code>prototype</code> 。</p>
<blockquote>
<p>为什么? 因为 <code>class</code> 语法更为简洁更易读。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Queue</span>(<span class="hljs-params">contents = []</span>) </span>{
    <span class="hljs-keyword">this</span>.queue = [...contents];
}
Queue.prototype.pop = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">const</span> value = <span class="hljs-keyword">this</span>.queue[<span class="hljs-number">0</span>];
    <span class="hljs-keyword">this</span>.queue.splice(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>);
    <span class="hljs-keyword">return</span> value;
};
 
<span class="hljs-comment">// good</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Queue</span> </span>{
    <span class="hljs-keyword">constructor</span>(contents = []) {
    <span class="hljs-keyword">this</span>.queue = [...contents];
    }
    pop() {
    <span class="hljs-keyword">const</span> value = <span class="hljs-keyword">this</span>.queue[<span class="hljs-number">0</span>];
    <span class="hljs-keyword">this</span>.queue.splice(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>);
    <span class="hljs-keyword">return</span> value;
    }
}
</code></pre>
<p>9.2 使用 <code>extends</code> 继承。</p>
<blockquote>
<p>为什么？因为 <code>extends</code> 是一个内置的原型继承方法并且不会破坏 <code>instanceof</code>。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-keyword">const</span> inherits = <span class="hljs-built_in">require</span>(<span class="hljs-string">'inherits'</span>);
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">PeekableQueue</span>(<span class="hljs-params">contents</span>) </span>{
    Queue.apply(<span class="hljs-keyword">this</span>, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.queue[<span class="hljs-number">0</span>];
};
 
<span class="hljs-comment">// good</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">PeekableQueue</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Queue</span> </span>{
    peek() {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.queue[<span class="hljs-number">0</span>];
    }
}
</code></pre>
<p>9.3 方法可以返回 <code>this</code> 来帮助链式调用。</p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
Jedi.prototype.jump = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">this</span>.jumping = <span class="hljs-literal">true</span>;
    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
};
 
Jedi.prototype.setHeight = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">height</span>) </span>{
    <span class="hljs-keyword">this</span>.height = height;
};
 
<span class="hljs-keyword">const</span> luke = <span class="hljs-keyword">new</span> Jedi();
luke.jump(); <span class="hljs-comment">// =&gt; true</span>
luke.setHeight(<span class="hljs-number">20</span>); <span class="hljs-comment">// =&gt; undefined</span>
 
<span class="hljs-comment">// good</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Jedi</span> </span>{
    jump() {
    <span class="hljs-keyword">this</span>.jumping = <span class="hljs-literal">true</span>;
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>;
    }
 
    setHeight(height) {
    <span class="hljs-keyword">this</span>.height = height;
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>;
    }
}
 
<span class="hljs-keyword">const</span> luke = <span class="hljs-keyword">new</span> Jedi();
 
luke.jump()
    .setHeight(<span class="hljs-number">20</span>)
</code></pre>
<p>9.4 可以写一个自定义的 toString() 方法，但要确保它能正常运行并且不会引起副作用</p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Jedi</span> </span>{
    <span class="hljs-keyword">constructor</span>(options = {}) {
    <span class="hljs-keyword">this</span>.name = options.name || <span class="hljs-string">'no name'</span>;
    }
 
    getName() {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;
    }
 
    toString() {
    <span class="hljs-keyword">return</span> <span class="hljs-string">`Jedi - <span class="hljs-subst">${<span class="hljs-keyword">this</span>.getName()}</span>`</span>;
    }
}
</code></pre>
<p>9.5 如果没有指定，类有一个默认的构造函数。一个空的构造函数或者只是委托给父类则不是必须的。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-useless-constructor" target="_blank" rel="nofollow"><code>no-useless-constructor</code></a></p>
<pre class="hljs javascript"><code class="javascript"><span class="hljs-comment">// bad</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Jedi</span> </span>{
    <span class="hljs-keyword">constructor</span>() {}
 
    getName() {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;
    }
}
 
<span class="hljs-comment">// bad</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Rey</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Jedi</span> </span>{
    <span class="hljs-keyword">constructor</span>(...args) {
    <span class="hljs-keyword">super</span>(...args);
    }
}
 
<span class="hljs-comment">// good</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Rey</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Jedi</span> </span>{
    <span class="hljs-keyword">constructor</span>(...args) {
    <span class="hljs-keyword">super</span>(...args);
    <span class="hljs-keyword">this</span>.name = <span class="hljs-string">'Rey'</span>;
    }
}
</code></pre>
<p>9.6 避免重复类成员。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-dupe-class-members" target="_blank" rel="nofollow"><code>no-dupe-class-members</code></a></p>
<blockquote>
<p>为什么？ 重复类成员声明将默认使用最后一个 – 重复类成员几乎肯定是一个错误。</p>
</blockquote>
<pre class="hljs cpp"><code class="cpp"><span class="hljs-comment">// bad</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Foo</span> {</span>
    bar() { <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>; }
    bar() { <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>; }
}
 
<span class="hljs-comment">// good</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Foo</span> {</span>
    bar() { <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>; }
}
 
<span class="hljs-comment">// good</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Foo</span> {</span>
    bar() { <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>; }
}
</code></pre>
<h2>模块 Modules</h2>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23modules--use-them" target="_blank" rel="nofollow">10.1</a> 总是使用模块 (<code>import</code>/<code>export</code>) 而不是其他非标准模块系统。你可以编译为你喜欢的模块系统。</p>
<blockquote>
<p>为什么？模块就是未来，让我们开始迈向未来吧。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">const</span>  AirbnbStyleGuide  =  <span class="hljs-built_in">require</span>(<span class="hljs-string">'./AirbnbStyleGuide'</span>);
<span class="hljs-number">3.</span>  <span class="hljs-built_in">module</span>.exports =  AirbnbStyleGuide.es6;

<span class="hljs-number">5.</span>  <span class="hljs-comment">// ok</span>
<span class="hljs-number">6.</span>  <span class="hljs-keyword">import</span>  AirbnbStyleGuide  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./AirbnbStyleGuide'</span>;
<span class="hljs-number">7.</span>  <span class="hljs-keyword">export</span>  <span class="hljs-keyword">default</span>  AirbnbStyleGuide.es6;

<span class="hljs-number">9.</span>  <span class="hljs-comment">// best</span>
<span class="hljs-number">10.</span>  <span class="hljs-keyword">import</span>  { es6 }  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./AirbnbStyleGuide'</span>;
<span class="hljs-number">11.</span>  <span class="hljs-keyword">export</span>  <span class="hljs-keyword">default</span> es6;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23modules--no-wildcard" target="_blank" rel="nofollow">10.2</a> 不要使用通配符 import(导入)。</p>
<blockquote>
<p>为什么？这样能确保你只有一个默认 export(导出)。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">import</span>  *  <span class="hljs-keyword">as</span>  AirbnbStyleGuide  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./AirbnbStyleGuide'</span>;

<span class="hljs-number">4.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">5.</span>  <span class="hljs-keyword">import</span>  AirbnbStyleGuide  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./AirbnbStyleGuide'</span>;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23modules--no-export-from-import" target="_blank" rel="nofollow">10.3</a> 不要从 import(导入) 中直接 export(导出)。</p>
<blockquote>
<p>为什么？虽然一行代码简洁明了，但有一个明确的 import(导入) 方法和一个明确的 export(导出) 方法，使事情能保持一致。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-comment">// filename es6.js</span>
<span class="hljs-number">3.</span>  <span class="hljs-keyword">export</span>  { es6 <span class="hljs-keyword">as</span>  <span class="hljs-keyword">default</span>  }  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./AirbnbStyleGuide'</span>;

<span class="hljs-number">5.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">6.</span>  <span class="hljs-comment">// filename es6.js</span>
<span class="hljs-number">7.</span>  <span class="hljs-keyword">import</span>  { es6 }  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./AirbnbStyleGuide'</span>;
<span class="hljs-number">8.</span>  <span class="hljs-keyword">export</span>  <span class="hljs-keyword">default</span> es6;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23modules--no-duplicate-imports" target="_blank" rel="nofollow">10.4</a> 一个地方只在一个路径中 import(导入) 。<br>
eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-duplicate-imports" target="_blank" rel="nofollow"><code>no-duplicate-imports</code></a></p>
<blockquote>
<p>为什么？ 从同一路径 import(导入) 多个模块分散在多行代码中，可能会使代码难以维护。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">import</span> foo <span class="hljs-keyword">from</span>  <span class="hljs-string">'foo'</span>;
<span class="hljs-number">3.</span>  <span class="hljs-comment">// … 其他一些 imports … //</span>
<span class="hljs-number">4.</span>  <span class="hljs-keyword">import</span>  { named1, named2 }  <span class="hljs-keyword">from</span>  <span class="hljs-string">'foo'</span>;

<span class="hljs-number">6.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">7.</span>  <span class="hljs-keyword">import</span> foo,  { named1, named2 }  <span class="hljs-keyword">from</span>  <span class="hljs-string">'foo'</span>;

<span class="hljs-number">9.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">10.</span>  <span class="hljs-keyword">import</span> foo,  {
<span class="hljs-number">11.</span>  named1,
<span class="hljs-number">12.</span>  named2,
<span class="hljs-number">13.</span>  }  <span class="hljs-keyword">from</span>  <span class="hljs-string">'foo'</span>;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23modules--no-mutable-exports" target="_blank" rel="nofollow">10.5</a> 不要 export(导出) 可变绑定。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fbenmosher%2Feslint-plugin-import%2Fblob%2Fmaster%2Fdocs%2Frules%2Fno-mutable-exports.md" target="_blank" rel="nofollow"><code>import/no-mutable-exports</code></a></p>
<blockquote>
<p>为什么？ 一般应该避免可变性，特别是在导出可变绑定时。虽然一些特殊情况下，可能需要这种技术，但是一般而言，只应该导出常量引用。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">let</span> foo =  <span class="hljs-number">3</span>;
<span class="hljs-number">3.</span>  <span class="hljs-keyword">export</span>  { foo };

<span class="hljs-number">5.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">6.</span>  <span class="hljs-keyword">const</span> foo =  <span class="hljs-number">3</span>;
<span class="hljs-number">7.</span>  <span class="hljs-keyword">export</span>  { foo };

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23modules--prefer-default-export" target="_blank" rel="nofollow">10.6</a> 在只有单个导出的模块中，默认 export(导出) 优于命名 export(导出)。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fbenmosher%2Feslint-plugin-import%2Fblob%2Fmaster%2Fdocs%2Frules%2Fprefer-default-export.md" target="_blank" rel="nofollow"><code>import/prefer-default-export</code></a></p>
<blockquote>
<p>为什么？为了鼓励更多的文件只有一个 export(导出)，这有利于模块的可读性和可维护性。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">export</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{}

<span class="hljs-number">4.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">5.</span>  <span class="hljs-keyword">export</span>  <span class="hljs-keyword">default</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{}

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23modules--imports-first" target="_blank" rel="nofollow">10.7</a> 将所有 <code>import</code> 导入放在非导入语句的上面。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fbenmosher%2Feslint-plugin-import%2Fblob%2Fmaster%2Fdocs%2Frules%2Ffirst.md" target="_blank" rel="nofollow"><code>import/first</code></a></p>
<blockquote>
<p>由于 <code>import</code> 被提升，保持他们在顶部，防止意外的行为。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">import</span> foo <span class="hljs-keyword">from</span>  <span class="hljs-string">'foo'</span>;
<span class="hljs-number">3.</span>  foo.init();

<span class="hljs-number">5.</span>  <span class="hljs-keyword">import</span> bar <span class="hljs-keyword">from</span>  <span class="hljs-string">'bar'</span>;

<span class="hljs-number">7.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">8.</span>  <span class="hljs-keyword">import</span> foo <span class="hljs-keyword">from</span>  <span class="hljs-string">'foo'</span>;
<span class="hljs-number">9.</span>  <span class="hljs-keyword">import</span> bar <span class="hljs-keyword">from</span>  <span class="hljs-string">'bar'</span>;

<span class="hljs-number">11.</span>  foo.init();

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23modules--multiline-imports-over-newlines" target="_blank" rel="nofollow">10.8</a> 多行导入应该像多行数组和对象字面量一样进行缩进。</p>
<blockquote>
<p>为什么？ 花括号应遵循与编码风格指南中的每个其他花括号相同的缩进规则，末尾的逗号也一样。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">import</span>  {longNameA, longNameB, longNameC, longNameD, longNameE}  <span class="hljs-keyword">from</span>  <span class="hljs-string">'path'</span>;

<span class="hljs-number">4.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">5.</span>  <span class="hljs-keyword">import</span>  {
<span class="hljs-number">6.</span>  longNameA,
<span class="hljs-number">7.</span>  longNameB,
<span class="hljs-number">8.</span>  longNameC,
<span class="hljs-number">9.</span>  longNameD,
<span class="hljs-number">10.</span>  longNameE,
<span class="hljs-number">11.</span>  }  <span class="hljs-keyword">from</span>  <span class="hljs-string">'path'</span>;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23modules--no-webpack-loader-syntax" target="_blank" rel="nofollow">10.9</a> 禁止在模块 import(导入) 语句中使用 Webpack 加载器语法。<br>
eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fbenmosher%2Feslint-plugin-import%2Fblob%2Fmaster%2Fdocs%2Frules%2Fno-webpack-loader-syntax.md" target="_blank" rel="nofollow"><code>import/no-webpack-loader-syntax</code></a></p>
<blockquote>
<p>为什么？由于在 import(导入) 中使用 Webpack 语法会将代码耦合到模块打包器。 首选在 <code>webpack.config.js</code> 中使用加载器语法。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">import</span> fooSass <span class="hljs-keyword">from</span>  <span class="hljs-string">'css!sass!foo.scss'</span>;
<span class="hljs-number">3.</span>  <span class="hljs-keyword">import</span> barCss <span class="hljs-keyword">from</span>  <span class="hljs-string">'style!css!bar.css'</span>;

<span class="hljs-number">5.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">6.</span>  <span class="hljs-keyword">import</span> fooSass <span class="hljs-keyword">from</span>  <span class="hljs-string">'foo.scss'</span>;
<span class="hljs-number">7.</span>  <span class="hljs-keyword">import</span> barCss <span class="hljs-keyword">from</span>  <span class="hljs-string">'bar.css'</span>;

</code></pre>
<p>**[[图片上传失败...(image-b2ba02-1523884943343)]</p>
<p>返回目录](<a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23table-of-contents%29%2A%2A" target="_blank" rel="nofollow">http://www.css88.com/archives/8345#table-of-contents)**</a></p>
<h2>迭代器 Iterators 和 生成器 Generators</h2>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23iterators--nope" target="_blank" rel="nofollow">11.1</a> 不要使用 iterators（迭代器） 。请使用高阶函数，例如 <code>map()</code> 和 <code>reduce()</code> 等，而不是像 <code>for-in</code> 或 <code>for-of</code> 这样的循环。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-iterator.html" target="_blank" rel="nofollow"><code>no-iterator</code></a> <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-restricted-syntax" target="_blank" rel="nofollow"><code>no-restricted-syntax</code></a></p>
<blockquote>
<p>为什么？ 这是强制执行我们不变性的规则。 处理返回值的纯函数比 Side Effects(副作用) 更容易推理。</p>
<p>使用 <code>map()</code> / <code>every()</code> / <code>filter()</code> / <code>find()</code> / <code>findIndex()</code> / <code>reduce()</code> / <code>some()</code> / … 来迭代数组, 使用 <code>Object.keys()</code> / <code>Object.values()</code> / <code>Object.entries()</code> 来生成数组，以便可以迭代对象。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-keyword">const</span> numbers =  [<span class="hljs-number">1</span>,  <span class="hljs-number">2</span>,  <span class="hljs-number">3</span>,  <span class="hljs-number">4</span>,  <span class="hljs-number">5</span>];

<span class="hljs-number">3.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">4.</span>  <span class="hljs-keyword">let</span> sum =  <span class="hljs-number">0</span>;
<span class="hljs-number">5.</span>  <span class="hljs-keyword">for</span>  (<span class="hljs-keyword">let</span> num <span class="hljs-keyword">of</span> numbers)  {
<span class="hljs-number">6.</span>  sum += num;
<span class="hljs-number">7.</span>  }
<span class="hljs-number">8.</span>  sum ===  <span class="hljs-number">15</span>;

<span class="hljs-number">10.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">11.</span>  <span class="hljs-keyword">let</span> sum =  <span class="hljs-number">0</span>;
<span class="hljs-number">12.</span>  numbers.forEach(<span class="hljs-function">(<span class="hljs-params">num</span>)  =&gt;</span>  {
<span class="hljs-number">13.</span>  sum += num;
<span class="hljs-number">14.</span>  });
<span class="hljs-number">15.</span>  sum ===  <span class="hljs-number">15</span>;

<span class="hljs-number">17.</span>  <span class="hljs-comment">// best (use the functional force)</span>
<span class="hljs-number">18.</span>  <span class="hljs-keyword">const</span> sum = numbers.reduce(<span class="hljs-function">(<span class="hljs-params">total, num</span>)  =&gt;</span> total + num,  <span class="hljs-number">0</span>);
<span class="hljs-number">19.</span>  sum ===  <span class="hljs-number">15</span>;

<span class="hljs-number">21.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">22.</span>  <span class="hljs-keyword">const</span> increasedByOne =  [];
<span class="hljs-number">23.</span>  <span class="hljs-keyword">for</span>  (<span class="hljs-keyword">let</span> i =  <span class="hljs-number">0</span>; i &lt; numbers.length; i++)  { increasedByOne.push(numbers[i]  +  <span class="hljs-number">1</span>);  }  <span class="hljs-comment">// good const increasedByOne = []; numbers.forEach((num) =&gt; {</span>
<span class="hljs-number">24.</span>  increasedByOne.push(num +  <span class="hljs-number">1</span>);
<span class="hljs-number">25.</span>  });

<span class="hljs-number">27.</span>  <span class="hljs-comment">// best (keeping it functional)</span>
<span class="hljs-number">28.</span>  <span class="hljs-keyword">const</span> increasedByOne = numbers.map(<span class="hljs-function"><span class="hljs-params">num</span> =&gt;</span> num +  <span class="hljs-number">1</span>);

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23generators--nope" target="_blank" rel="nofollow">11.2</a> 现在不要使用 generators (生成器)。</p>
<blockquote>
<p>为什么？ 因为目前没有很好地办法将他们转译成 ES5 。</p>
</blockquote>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23generators--spacing" target="_blank" rel="nofollow">11.3</a> 如果您必须使用 generators (生成器)，或者如果漠视<a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23generators--nope" target="_blank" rel="nofollow">我们的建议</a>，请确保它们的函数签名恰当的间隔。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fgenerator-star-spacing" target="_blank" rel="nofollow"><code>generator-star-spacing</code></a></p>
<blockquote>
<p>为什么？ <code>function</code> 和 <code>*</code> 都是同一概念关键字的组成部分 – <code>*</code> 不是 <code>function</code> 的修饰符，<code>function*</code> 是一个独特的构造，与<code>function</code>不同。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span>  * <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">3.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">4.</span>  }

<span class="hljs-number">6.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">7.</span>  <span class="hljs-keyword">const</span> bar =  <span class="hljs-function"><span class="hljs-keyword">function</span>  *  (<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">8.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">9.</span>  };

<span class="hljs-number">11.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">12.</span>  <span class="hljs-keyword">const</span> baz =  <span class="hljs-function"><span class="hljs-keyword">function</span>  *(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">13.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">14.</span>  };

<span class="hljs-number">16.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">17.</span>  <span class="hljs-keyword">const</span> quux =  <span class="hljs-function"><span class="hljs-keyword">function</span>*(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">18.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">19.</span>  };

<span class="hljs-number">21.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">22.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span>*<span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">23.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">24.</span>  }

<span class="hljs-number">26.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">27.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span>  *<span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">28.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">29.</span>  }

<span class="hljs-number">31.</span>  <span class="hljs-comment">// very bad</span>
<span class="hljs-number">32.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span>
33.  *
34.  <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">35.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">36.</span>  }

<span class="hljs-number">38.</span>  <span class="hljs-comment">// very bad</span>
<span class="hljs-number">39.</span>  <span class="hljs-keyword">const</span> wat =  <span class="hljs-function"><span class="hljs-keyword">function</span>
40.  *
41.  (<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">42.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">43.</span>  };

<span class="hljs-number">45.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">46.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span>* <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">47.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">48.</span>  }

<span class="hljs-number">50.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">51.</span>  <span class="hljs-keyword">const</span> foo =  <span class="hljs-function"><span class="hljs-keyword">function</span>*  (<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">52.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">53.</span>  };

</code></pre>
<h2>属性 Properties</h2>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23properties--dot" target="_blank" rel="nofollow">12.1</a> 使用 点语法(<code>.</code>) 来访问对象的属性。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fdot-notation.html" target="_blank" rel="nofollow"><code>dot-notation</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireDotNotation" target="_blank" rel="nofollow"><code>requireDotNotation</code></a></p>
<pre class="hljs java"><code class="java">
<span class="hljs-number">1</span>.  <span class="hljs-keyword">const</span> luke =  {
<span class="hljs-number">2</span>.  jedi:  <span class="hljs-keyword">true</span>,
<span class="hljs-number">3</span>.  age:  <span class="hljs-number">28</span>,
<span class="hljs-number">4</span>.  };

<span class="hljs-number">6</span>.  <span class="hljs-comment">// bad</span>
<span class="hljs-number">7</span>.  <span class="hljs-keyword">const</span> isJedi = luke[<span class="hljs-string">'jedi'</span>];

<span class="hljs-number">9</span>.  <span class="hljs-comment">// good</span>
<span class="hljs-number">10</span>.  <span class="hljs-keyword">const</span> isJedi = luke.jedi;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23properties--bracket" target="_blank" rel="nofollow">12.2</a> 当通过变量访问属性时使用中括号 <code>[]</code>。</p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-keyword">const</span> luke =  {
<span class="hljs-number">2.</span>  jedi:  <span class="hljs-literal">true</span>,
<span class="hljs-number">3.</span>  age:  <span class="hljs-number">28</span>,
<span class="hljs-number">4.</span>  };

<span class="hljs-number">6.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getProp</span>(<span class="hljs-params">prop</span>)  </span>{
<span class="hljs-number">7.</span>  <span class="hljs-keyword">return</span> luke[prop];
<span class="hljs-number">8.</span>  }

<span class="hljs-number">10.</span>  <span class="hljs-keyword">const</span> isJedi = getProp(<span class="hljs-string">'jedi'</span>);

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23es2016-properties--exponentiation-operator" target="_blank" rel="nofollow">12.3</a> 求幂时使用求幂运算符 <code>**</code> 。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-restricted-properties" target="_blank" rel="nofollow"><code>no-restricted-properties</code></a>.</p>
<pre class="hljs cpp"><code class="cpp">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">const</span> binary =  Math.<span class="hljs-built_in">pow</span>(<span class="hljs-number">2</span>,  <span class="hljs-number">10</span>);

<span class="hljs-number">4.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">5.</span>  <span class="hljs-keyword">const</span> binary =  <span class="hljs-number">2</span>  **  <span class="hljs-number">10</span>;

</code></pre>
<h2>变量 Variables</h2>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23variables--const" target="_blank" rel="nofollow">13.1</a> 总是使用 <code>const</code> 或 <code>let</code> 来声明变量。 不这样做会导致产生全局变量。 我们希望避免污染全局命名空间。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-undef" target="_blank" rel="nofollow"><code>no-undef</code></a> <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fprefer-const" target="_blank" rel="nofollow"><code>prefer-const</code></a></p>
<pre class="hljs cpp"><code class="cpp">

<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  superPower =  <span class="hljs-keyword">new</span>  SuperPower();

<span class="hljs-number">4.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">5.</span>  <span class="hljs-keyword">const</span> superPower =  <span class="hljs-keyword">new</span>  SuperPower();

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23variables--one-const" target="_blank" rel="nofollow">13.2</a> 使用 <code>const</code> 或 <code>let</code>声明每个变量。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fone-var.html" target="_blank" rel="nofollow"><code>one-var</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FdisallowMultipleVarDecl" target="_blank" rel="nofollow"><code>disallowMultipleVarDecl</code></a></p>
<blockquote>
<p>为什么？ 以这种方式添加新的变量声明更容易，你永远不必担心是否需要将 <code>,</code> 换成 <code>;</code>，或引入标点符号差异。您也可以在调试器中遍历每个声明，而不是一次跳过所有的变量。</p>
</blockquote>
<pre class="hljs cpp"><code class="cpp">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">const</span> items = getItems(),
<span class="hljs-number">3.</span>  goSportsTeam =  <span class="hljs-literal">true</span>,
<span class="hljs-number">4.</span>  dragonball =  <span class="hljs-string">'z'</span>;

<span class="hljs-number">6.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">7.</span>  <span class="hljs-comment">// (与上面的比较，并尝试找出错误)</span>
<span class="hljs-number">8.</span>  <span class="hljs-keyword">const</span> items = getItems(),
<span class="hljs-number">9.</span>  goSportsTeam =  <span class="hljs-literal">true</span>;
<span class="hljs-number">10.</span>  dragonball =  <span class="hljs-string">'z'</span>;

<span class="hljs-number">12.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">13.</span>  <span class="hljs-keyword">const</span> items = getItems();
<span class="hljs-number">14.</span>  <span class="hljs-keyword">const</span> goSportsTeam =  <span class="hljs-literal">true</span>;
<span class="hljs-number">15.</span>  <span class="hljs-keyword">const</span> dragonball =  <span class="hljs-string">'z'</span>;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23variables--const-let-group" target="_blank" rel="nofollow">13.3</a> 将所有的 <code>const</code> 和 <code>let</code> 分组 。</p>
<blockquote>
<p>为什么？当你需要把已分配的变量分配给一个变量时非常有用。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">


<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">let</span> i, len, dragonball,
<span class="hljs-number">3.</span>  items = getItems(),
<span class="hljs-number">4.</span>  goSportsTeam =  <span class="hljs-literal">true</span>;

<span class="hljs-number">6.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">7.</span>  <span class="hljs-keyword">let</span> i;
<span class="hljs-number">8.</span>  <span class="hljs-keyword">const</span> items = getItems();
<span class="hljs-number">9.</span>  <span class="hljs-keyword">let</span> dragonball;
<span class="hljs-number">10.</span>  <span class="hljs-keyword">const</span> goSportsTeam =  <span class="hljs-literal">true</span>;
<span class="hljs-number">11.</span>  <span class="hljs-keyword">let</span> len;

<span class="hljs-number">13.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">14.</span>  <span class="hljs-keyword">const</span> goSportsTeam =  <span class="hljs-literal">true</span>;
<span class="hljs-number">15.</span>  <span class="hljs-keyword">const</span> items = getItems();
<span class="hljs-number">16.</span>  <span class="hljs-keyword">let</span> dragonball;
<span class="hljs-number">17.</span>  <span class="hljs-keyword">let</span> i;
<span class="hljs-number">18.</span>  <span class="hljs-keyword">let</span> length;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23variables--define-where-used" target="_blank" rel="nofollow">13.4</a> 在你需要的地方分配变量，但请把它们放在一个合理的位置。</p>
<blockquote>
<p>为什么？<code>let</code> 和 <code>const</code> 是块级作用域而不是函数作用域。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad - 不必要的函数调用</span>
<span class="hljs-number">2.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">checkName</span>(<span class="hljs-params">hasName</span>)  </span>{
<span class="hljs-number">3.</span>  <span class="hljs-keyword">const</span> name = getName();

<span class="hljs-number">5.</span>  <span class="hljs-keyword">if</span>  (hasName ===  <span class="hljs-string">'test'</span>)  {
<span class="hljs-number">6.</span>  <span class="hljs-keyword">return</span>  <span class="hljs-literal">false</span>;
<span class="hljs-number">7.</span>  }

<span class="hljs-number">9.</span>  <span class="hljs-keyword">if</span>  (name ===  <span class="hljs-string">'test'</span>)  {
<span class="hljs-number">10.</span>  <span class="hljs-keyword">this</span>.setName(<span class="hljs-string">''</span>);
<span class="hljs-number">11.</span>  <span class="hljs-keyword">return</span>  <span class="hljs-literal">false</span>;
<span class="hljs-number">12.</span>  }

<span class="hljs-number">14.</span>  <span class="hljs-keyword">return</span> name;
<span class="hljs-number">15.</span>  }

<span class="hljs-number">17.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">18.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">checkName</span>(<span class="hljs-params">hasName</span>)  </span>{
<span class="hljs-number">19.</span>  <span class="hljs-keyword">if</span>  (hasName ===  <span class="hljs-string">'test'</span>)  {
<span class="hljs-number">20.</span>  <span class="hljs-keyword">return</span>  <span class="hljs-literal">false</span>;
<span class="hljs-number">21.</span>  }

<span class="hljs-number">23.</span>  <span class="hljs-keyword">const</span> name = getName();

<span class="hljs-number">25.</span>  <span class="hljs-keyword">if</span>  (name ===  <span class="hljs-string">'test'</span>)  {
<span class="hljs-number">26.</span>  <span class="hljs-keyword">this</span>.setName(<span class="hljs-string">''</span>);
<span class="hljs-number">27.</span>  <span class="hljs-keyword">return</span>  <span class="hljs-literal">false</span>;
<span class="hljs-number">28.</span>  }

<span class="hljs-number">30.</span>  <span class="hljs-keyword">return</span> name;
<span class="hljs-number">31.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23variables--no-chain-assignment" target="_blank" rel="nofollow">13.5</a> 变量不要链式赋值。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-multi-assign" target="_blank" rel="nofollow"><code>no-multi-assign</code></a></p>
<blockquote>
<p>为什么？ 链接变量赋值会创建隐式全局变量。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  (<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">example</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">3.</span>  <span class="hljs-comment">// JavaScript 将其解析为</span>
<span class="hljs-number">4.</span>  <span class="hljs-comment">// let a = ( b = ( c = 1 ) );</span>
<span class="hljs-number">5.</span>  <span class="hljs-comment">// let关键字只适用于变量a;</span>
<span class="hljs-number">6.</span>  <span class="hljs-comment">// 变量b和c变成了全局变量。</span>
<span class="hljs-number">7.</span>  <span class="hljs-keyword">let</span> a = b = c =  <span class="hljs-number">1</span>;
<span class="hljs-number">8.</span>  }());

<span class="hljs-number">10.</span>  <span class="hljs-built_in">console</span>.log(a);  <span class="hljs-comment">// 抛出 ReferenceError（引用错误）</span>
<span class="hljs-number">11.</span>  <span class="hljs-built_in">console</span>.log(b);  <span class="hljs-comment">// 1</span>
<span class="hljs-number">12.</span>  <span class="hljs-built_in">console</span>.log(c);  <span class="hljs-comment">// 1</span>

<span class="hljs-number">14.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">15.</span>  (<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">example</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">16.</span>  <span class="hljs-keyword">let</span> a =  <span class="hljs-number">1</span>;
<span class="hljs-number">17.</span>  <span class="hljs-keyword">let</span> b = a;
<span class="hljs-number">18.</span>  <span class="hljs-keyword">let</span> c = a;
<span class="hljs-number">19.</span>  }());

<span class="hljs-number">21.</span>  <span class="hljs-built_in">console</span>.log(a);  <span class="hljs-comment">// 抛出 ReferenceError（引用错误）</span>
<span class="hljs-number">22.</span>  <span class="hljs-built_in">console</span>.log(b);  <span class="hljs-comment">// 抛出 ReferenceError（引用错误）</span>
<span class="hljs-number">23.</span>  <span class="hljs-built_in">console</span>.log(c);  <span class="hljs-comment">// 抛出 ReferenceError（引用错误）</span>

<span class="hljs-number">25.</span>  <span class="hljs-comment">// 同样适用于 `const`</span>

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23variables--unary-increment-decrement" target="_blank" rel="nofollow">13.6</a> 避免使用一元递增和递减运算符(<code>++</code>, <code>--</code>)。 eslint <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-plusplus" target="_blank" rel="nofollow"><code>no-plusplus</code></a></p>
<blockquote>
<p>为什么？ 根据 eslint 文档，一元递增和递减语句会受到自动插入分号的影响，并可能导致应用程序中的值递增或递减，从而导致无提示错误。使用像 <code>num += 1</code> 而不是 <code>num++</code> 或 <code>num ++</code> 这样的语句来改变你的值也更具有表现力。不允许一元递增和递减语句也会阻止您无意中预先递增/递减值，这也会导致程序中的意外行为。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>

<span class="hljs-number">3.</span>  <span class="hljs-keyword">const</span> array =  [<span class="hljs-number">1</span>,  <span class="hljs-number">2</span>,  <span class="hljs-number">3</span>];
<span class="hljs-number">4.</span>  <span class="hljs-keyword">let</span> num =  <span class="hljs-number">1</span>;
<span class="hljs-number">5.</span>  num++;
<span class="hljs-number">6.</span>  --num;

<span class="hljs-number">8.</span>  <span class="hljs-keyword">let</span> sum =  <span class="hljs-number">0</span>;
<span class="hljs-number">9.</span>  <span class="hljs-keyword">let</span> truthyCount =  <span class="hljs-number">0</span>;
<span class="hljs-number">10.</span>  <span class="hljs-keyword">for</span>  (<span class="hljs-keyword">let</span> i =  <span class="hljs-number">0</span>; i &lt; array.length; i++)  {  <span class="hljs-keyword">let</span>  value  = array[i]; sum +=  value;  <span class="hljs-keyword">if</span>  (value)  { truthyCount++;  }  }  <span class="hljs-comment">// good const array = [1, 2, 3]; let num = 1; num += 1; num -= 1; const sum = array.reduce((a, b) =&gt; a + b, 0);</span>
<span class="hljs-number">11.</span>  <span class="hljs-keyword">const</span> truthyCount = array.filter(<span class="hljs-built_in">Boolean</span>).length;

</code></pre>
<h2>Hoisting</h2>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23hoisting--about" target="_blank" rel="nofollow">14.1</a> <code>var</code> 声明会被提升至他们作用域的顶部，但它们赋值不会提升。<code>let</code> 和 <code>const</code> 声明被赋予了一种称为「<a href="https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Flet%23Temporal_dead_zone_and_errors_with_let" target="_blank" rel="nofollow">暂时性死区（Temporal Dead Zones, TDZ）</a>」的概念。这对于了解为什么 <a href="https://link.jianshu.com?t=http%3A%2F%2Fes-discourse.com%2Ft%2Fwhy-typeof-is-no-longer-safe%2F15" target="_blank" rel="nofollow">type of 不再安全</a>相当重要。</p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// 我们知道这样运行不了</span>
<span class="hljs-number">2.</span>  <span class="hljs-comment">// （假设没有 notDefined 全局变量）</span>
<span class="hljs-number">3.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">example</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">4.</span>  <span class="hljs-built_in">console</span>.log(notDefined);  <span class="hljs-comment">// =&gt; 抛出一个 ReferenceError（引用错误）</span>
<span class="hljs-number">5.</span>  }

<span class="hljs-number">7.</span>  <span class="hljs-comment">// 在引用变量后创建变量声明</span>
<span class="hljs-number">8.</span>  <span class="hljs-comment">// 将因变量提升而起作用。</span>
<span class="hljs-number">9.</span>  <span class="hljs-comment">// 注意：赋值的 `true`没有被提升。</span>
<span class="hljs-number">10.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">example</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">11.</span>  <span class="hljs-built_in">console</span>.log(declaredButNotAssigned);  <span class="hljs-comment">// =&gt; undefined</span>
<span class="hljs-number">12.</span>  <span class="hljs-keyword">var</span> declaredButNotAssigned =  <span class="hljs-literal">true</span>;
<span class="hljs-number">13.</span>  }

<span class="hljs-number">15.</span>  <span class="hljs-comment">// 解析器将变量声明提升到作用域的顶部，</span>
<span class="hljs-number">16.</span>  <span class="hljs-comment">// 这意味着我们的例子可以被重写为：</span>
<span class="hljs-number">17.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">example</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">18.</span>  <span class="hljs-keyword">let</span> declaredButNotAssigned;
<span class="hljs-number">19.</span>  <span class="hljs-built_in">console</span>.log(declaredButNotAssigned);  <span class="hljs-comment">// =&gt; undefined</span>
<span class="hljs-number">20.</span>  declaredButNotAssigned =  <span class="hljs-literal">true</span>;
<span class="hljs-number">21.</span>  }

<span class="hljs-number">23.</span>  <span class="hljs-comment">// 使用 const 和 let</span>
<span class="hljs-number">24.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">example</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">25.</span>  <span class="hljs-built_in">console</span>.log(declaredButNotAssigned);  <span class="hljs-comment">// =&gt; 抛出一个 ReferenceError（引用错误）</span>
<span class="hljs-number">26.</span>  <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> declaredButNotAssigned);  <span class="hljs-comment">// =&gt; 抛出一个 ReferenceError（引用错误）</span>
<span class="hljs-number">27.</span>  <span class="hljs-keyword">const</span> declaredButNotAssigned =  <span class="hljs-literal">true</span>;
<span class="hljs-number">28.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23hoisting--anon-expressions" target="_blank" rel="nofollow">14.2</a> 匿名函数表达式的变量名会被提升，但函数分配不会。</p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">example</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">2.</span>  <span class="hljs-built_in">console</span>.log(anonymous);  <span class="hljs-comment">// =&gt; undefined</span>

<span class="hljs-number">4.</span>  anonymous();  <span class="hljs-comment">// =&gt; TypeError anonymous is not a function 输入错误，anonymous 不是一个函数</span>

<span class="hljs-number">6.</span>  <span class="hljs-keyword">var</span> anonymous =  <span class="hljs-function"><span class="hljs-keyword">function</span>  (<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">7.</span>  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'anonymous function expression'</span>);
<span class="hljs-number">8.</span>  };
<span class="hljs-number">9.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23hoisting--named-expresions" target="_blank" rel="nofollow">14.3</a> 命名的函数表达式的变量名会被提升，但函数名和函数体并不会。</p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">example</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">2.</span>  <span class="hljs-built_in">console</span>.log(named);  <span class="hljs-comment">// =&gt; undefined</span>

<span class="hljs-number">4.</span>  named();  <span class="hljs-comment">// =&gt; TypeError named is not a function，输入错误，named 不是一个函数</span>

<span class="hljs-number">6.</span>  superPower();  <span class="hljs-comment">// =&gt; ReferenceError superPower is not defined， ReferenceError（引用错误）superPower 未定义</span>

<span class="hljs-number">8.</span>  <span class="hljs-keyword">var</span> named =  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">superPower</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">9.</span>  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Flying'</span>);
<span class="hljs-number">10.</span>  };
<span class="hljs-number">11.</span>  }

<span class="hljs-number">13.</span>  <span class="hljs-comment">// 当函数名称与变量名称相同时</span>
<span class="hljs-number">14.</span>  <span class="hljs-comment">// 也是如此。</span>
<span class="hljs-number">15.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">example</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">16.</span>  <span class="hljs-built_in">console</span>.log(named);  <span class="hljs-comment">// =&gt; undefined</span>

<span class="hljs-number">18.</span>  named();  <span class="hljs-comment">// =&gt; TypeError named is not a function，输入错误，named 不是一个函数</span>

<span class="hljs-number">20.</span>  <span class="hljs-keyword">var</span> named =  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">named</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">21.</span>  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'named'</span>);
<span class="hljs-number">22.</span>  };
<span class="hljs-number">23.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23hoisting--declarations" target="_blank" rel="nofollow">14.4</a> 函数声明的名称和函数体都会被提升。</p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">example</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">2.</span>  superPower();  <span class="hljs-comment">// =&gt; Flying</span>

<span class="hljs-number">4.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">superPower</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">5.</span>  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Flying'</span>);
<span class="hljs-number">6.</span>  }
<span class="hljs-number">7.</span>  }

</code></pre>
<h2>比较运算符 Comparison Operators 和 等号 Equality</h2>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23comparison--eqeqeq" target="_blank" rel="nofollow">15.1</a> 使用 <code>===</code> 和 <code>!==</code> 优先于 <code>==</code> 和 <code>!=</code>。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Feqeqeq.html" target="_blank" rel="nofollow"><code>eqeqeq</code></a></p>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23comparison--if" target="_blank" rel="nofollow">15.2</a> 诸如 <code>if</code> 语句之类的条件语句使用 <code>ToBoolean</code> 抽象方法来强制求值它们的表达式，并始终遵循以下简单规则：</p>
<ul>
<li>
<strong>Objects</strong> 求值为 <strong>true</strong>
</li>
<li>
<strong>Undefined</strong> 求值为 <strong>false</strong>
</li>
<li>
<strong>Null</strong> 求值为 <strong>false</strong>
</li>
<li>
<strong>Booleans</strong> 求值为 <strong>布尔值</strong>
</li>
<li>
<strong>Numbers</strong> 如果是 <strong>+0、-0、或 NaN</strong> 求值为 <strong>false</strong> ， 否则为 <strong>true</strong>
</li>
<li>
<strong>Strings</strong> 如果是空字符串 <code>''</code> 求值为 <strong>false</strong> ， 否则为 <strong>true</strong>
</li>
</ul>
<pre class="hljs bash"><code class="bash">
1.  <span class="hljs-keyword">if</span>  ([0]  &amp;&amp;  [])  {
2.  // <span class="hljs-literal">true</span>
3.  // 一个数组 (即使是一个空数组) 是一个 object, objects 被求值为 <span class="hljs-literal">true</span>
4.  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23comparison--shortcuts" target="_blank" rel="nofollow">15.3</a> 对于布尔值使用简写，但对于字符串和数字使用显式比较。</p>
<pre class="hljs java"><code class="java">
<span class="hljs-number">1</span>.  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2</span>.  <span class="hljs-keyword">if</span>  (isValid ===  <span class="hljs-keyword">true</span>)  {
<span class="hljs-number">3</span>.  <span class="hljs-comment">// ...</span>
<span class="hljs-number">4</span>.  }

<span class="hljs-number">6</span>.  <span class="hljs-comment">// good</span>
<span class="hljs-number">7</span>.  <span class="hljs-keyword">if</span>  (isValid)  {
<span class="hljs-number">8</span>.  <span class="hljs-comment">// ...</span>
<span class="hljs-number">9</span>.  }

<span class="hljs-number">11</span>.  <span class="hljs-comment">// bad</span>
<span class="hljs-number">12</span>.  <span class="hljs-keyword">if</span>  (name)  {
<span class="hljs-number">13</span>.  <span class="hljs-comment">// ...</span>
<span class="hljs-number">14</span>.  }

<span class="hljs-number">16</span>.  <span class="hljs-comment">// good</span>
<span class="hljs-number">17</span>.  <span class="hljs-keyword">if</span>  (name !==  <span class="hljs-string">''</span>)  {
<span class="hljs-number">18</span>.  <span class="hljs-comment">// ...</span>
<span class="hljs-number">19</span>.  }

<span class="hljs-number">21</span>.  <span class="hljs-comment">// bad</span>
<span class="hljs-number">22</span>.  <span class="hljs-keyword">if</span>  (collection.length)  {
<span class="hljs-number">23</span>.  <span class="hljs-comment">// ...</span>
<span class="hljs-number">24</span>.  }

<span class="hljs-number">26</span>.  <span class="hljs-comment">// good</span>
<span class="hljs-number">27</span>.  <span class="hljs-keyword">if</span>  (collection.length &gt;  <span class="hljs-number">0</span>)  {
<span class="hljs-number">28</span>.  <span class="hljs-comment">// ...</span>
<span class="hljs-number">29</span>.  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23comparison--moreinfo" target="_blank" rel="nofollow">15.4</a> 想了解更多信息，参考 Angus Croll 的 <a href="https://link.jianshu.com?t=https%3A%2F%2Fjavascriptweblog.wordpress.com%2F2011%2F02%2F07%2Ftruth-equality-and-javascript%2F%23more-2108" target="_blank" rel="nofollow">Truth Equality and JavaScript</a>。</p>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23comparison--switch-blocks" target="_blank" rel="nofollow">15.5</a> 在 <code>case</code> 和 <code>default</code> 子句中，使用大括号来创建包含词法声明的语句块(例如 <code>let</code>, <code>const</code>, <code>function</code>, 和 <code>class</code>). eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-case-declarations.html" target="_blank" rel="nofollow"><code>no-case-declarations</code></a></p>
<blockquote>
<p>为什么？ 词法声明在整个 <code>switch</code> 语句块中都是可见的，但是只有在分配时才被初始化，这只有当它到达 <code>case</code> 时才会发生。这在多个 <code>case</code> 子句试图定义相同的变量时会导致问题。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">switch</span>  (foo)  {
<span class="hljs-number">3.</span>  <span class="hljs-keyword">case</span>  <span class="hljs-number">1</span>:
<span class="hljs-number">4.</span>  <span class="hljs-keyword">let</span> x =  <span class="hljs-number">1</span>;
<span class="hljs-number">5.</span>  <span class="hljs-keyword">break</span>;
<span class="hljs-number">6.</span>  <span class="hljs-keyword">case</span>  <span class="hljs-number">2</span>:
<span class="hljs-number">7.</span>  <span class="hljs-keyword">const</span> y =  <span class="hljs-number">2</span>;
<span class="hljs-number">8.</span>  <span class="hljs-keyword">break</span>;
<span class="hljs-number">9.</span>  <span class="hljs-keyword">case</span>  <span class="hljs-number">3</span>:
<span class="hljs-number">10.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">11.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">12.</span>  }
<span class="hljs-number">13.</span>  <span class="hljs-keyword">break</span>;
<span class="hljs-number">14.</span>  <span class="hljs-keyword">default</span>:
<span class="hljs-number">15.</span>  <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">C</span> </span>{}
<span class="hljs-number">16.</span>  }

<span class="hljs-number">18.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">19.</span>  <span class="hljs-keyword">switch</span>  (foo)  {
<span class="hljs-number">20.</span>  <span class="hljs-keyword">case</span>  <span class="hljs-number">1</span>:  {
<span class="hljs-number">21.</span>  <span class="hljs-keyword">let</span> x =  <span class="hljs-number">1</span>;
<span class="hljs-number">22.</span>  <span class="hljs-keyword">break</span>;
<span class="hljs-number">23.</span>  }
<span class="hljs-number">24.</span>  <span class="hljs-keyword">case</span>  <span class="hljs-number">2</span>:  {
<span class="hljs-number">25.</span>  <span class="hljs-keyword">const</span> y =  <span class="hljs-number">2</span>;
<span class="hljs-number">26.</span>  <span class="hljs-keyword">break</span>;
<span class="hljs-number">27.</span>  }
<span class="hljs-number">28.</span>  <span class="hljs-keyword">case</span>  <span class="hljs-number">3</span>:  {
<span class="hljs-number">29.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">30.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">31.</span>  }
<span class="hljs-number">32.</span>  <span class="hljs-keyword">break</span>;
<span class="hljs-number">33.</span>  }
<span class="hljs-number">34.</span>  <span class="hljs-keyword">case</span>  <span class="hljs-number">4</span>:
<span class="hljs-number">35.</span>  bar();
<span class="hljs-number">36.</span>  <span class="hljs-keyword">break</span>;
<span class="hljs-number">37.</span>  <span class="hljs-keyword">default</span>:  {
<span class="hljs-number">38.</span>  <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">C</span> </span>{}
<span class="hljs-number">39.</span>  }
<span class="hljs-number">40.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23comparison--nested-ternaries" target="_blank" rel="nofollow">15.6</a> 三元表达式不应该嵌套，通常写成单行表达式。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-nested-ternary.html" target="_blank" rel="nofollow"><code>no-nested-ternary</code></a></p>
<pre class="hljs java"><code class="java">
<span class="hljs-number">1</span>.  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2</span>.  <span class="hljs-keyword">const</span> foo = maybe1 &gt; maybe2
<span class="hljs-number">3</span>.  ?  <span class="hljs-string">"bar"</span>
<span class="hljs-number">4</span>.  : value1 &gt; value2 ?  <span class="hljs-string">"baz"</span>  :  <span class="hljs-keyword">null</span>;

<span class="hljs-number">6</span>.  <span class="hljs-comment">// 拆分成2个分离的三元表达式</span>
<span class="hljs-number">7</span>.  <span class="hljs-keyword">const</span> maybeNull = value1 &gt; value2 ?  <span class="hljs-string">'baz'</span>  :  <span class="hljs-keyword">null</span>;

<span class="hljs-number">9</span>.  <span class="hljs-comment">// better</span>
<span class="hljs-number">10</span>.  <span class="hljs-keyword">const</span> foo = maybe1 &gt; maybe2
<span class="hljs-number">11</span>.  ?  <span class="hljs-string">'bar'</span>
<span class="hljs-number">12</span>.  : maybeNull;

<span class="hljs-number">14</span>.  <span class="hljs-comment">// best</span>
<span class="hljs-number">15</span>.  <span class="hljs-keyword">const</span> foo = maybe1 &gt; maybe2 ?  <span class="hljs-string">'bar'</span>  : maybeNull;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23comparison--unneeded-ternary" target="_blank" rel="nofollow">15.7</a> 避免不必要的三元表达式语句。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-unneeded-ternary.html" target="_blank" rel="nofollow"><code>no-unneeded-ternary</code></a></p>
<pre class="hljs cpp"><code class="cpp">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">const</span> foo = a ? a : b;
<span class="hljs-number">3.</span>  <span class="hljs-keyword">const</span> bar = c ?  <span class="hljs-literal">true</span>  :  <span class="hljs-literal">false</span>;
<span class="hljs-number">4.</span>  <span class="hljs-keyword">const</span> baz = c ?  <span class="hljs-literal">false</span>  :  <span class="hljs-literal">true</span>;

<span class="hljs-number">6.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">7.</span>  <span class="hljs-keyword">const</span> foo = a || b;
<span class="hljs-number">8.</span>  <span class="hljs-keyword">const</span> bar =  !!c;
<span class="hljs-number">9.</span>  <span class="hljs-keyword">const</span> baz =  !c;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23comparison--no-mixed-operators" target="_blank" rel="nofollow">15.8</a> 当运算符混合在一个语句中时，请将其放在括号内。混合算术运算符时，不要将 <code>**</code> 和 <code>%</code> 与 <code>+</code> ， <code>-</code>，<code>*</code>，<code>/</code> 混合在一起。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-mixed-operators.html" target="_blank" rel="nofollow"><code>no-mixed-operators</code></a></p>
<blockquote>
<p>为什么？ 这可以提高可读性，并清晰展现开发者的意图。</p>
</blockquote>
<pre class="hljs cpp"><code class="cpp">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">const</span> foo = a &amp;&amp; b &lt;  <span class="hljs-number">0</span>  || c &gt;  <span class="hljs-number">0</span>  || d +  <span class="hljs-number">1</span>  ===  <span class="hljs-number">0</span>;

<span class="hljs-number">4.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">5.</span>  <span class="hljs-keyword">const</span> bar = a ** b -  <span class="hljs-number">5</span>  % d;

<span class="hljs-number">7.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">8.</span>  <span class="hljs-keyword">if</span>  (a || b &amp;&amp; c)  {
<span class="hljs-number">9.</span>  <span class="hljs-keyword">return</span> d;
<span class="hljs-number">10.</span>  }

<span class="hljs-number">12.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">13.</span>  <span class="hljs-keyword">const</span> foo =  (a &amp;&amp; b &lt;  <span class="hljs-number">0</span>)  || c &gt;  <span class="hljs-number">0</span>  ||  (d +  <span class="hljs-number">1</span>  ===  <span class="hljs-number">0</span>);

<span class="hljs-number">15.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">16.</span>  <span class="hljs-keyword">const</span> bar =  (a ** b)  -  (<span class="hljs-number">5</span>  % d);

<span class="hljs-number">18.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">19.</span>  <span class="hljs-keyword">if</span>  ((a || b)  &amp;&amp; c)  {
<span class="hljs-number">20.</span>  <span class="hljs-keyword">return</span> d;
<span class="hljs-number">21.</span>  }

<span class="hljs-number">23.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">24.</span>  <span class="hljs-keyword">const</span> bar = a + b / c * d;

</code></pre>
<h2>代码块 Blocks</h2>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23blocks--braces" target="_blank" rel="nofollow">16.1</a> 使用大括号包裹所有的多行代码块。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fnonblock-statement-body-position" target="_blank" rel="nofollow"><code>nonblock-statement-body-position</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">if</span>  (test)
<span class="hljs-number">3.</span>  <span class="hljs-keyword">return</span>  <span class="hljs-literal">false</span>;

<span class="hljs-number">5.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">6.</span>  <span class="hljs-keyword">if</span>  (test)  <span class="hljs-keyword">return</span>  <span class="hljs-literal">false</span>;

<span class="hljs-number">8.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">9.</span>  <span class="hljs-keyword">if</span>  (test)  {
<span class="hljs-number">10.</span>  <span class="hljs-keyword">return</span>  <span class="hljs-literal">false</span>;
<span class="hljs-number">11.</span>  }

<span class="hljs-number">13.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">14.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{  <span class="hljs-keyword">return</span>  <span class="hljs-literal">false</span>;  }

<span class="hljs-number">16.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">17.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">18.</span>  <span class="hljs-keyword">return</span>  <span class="hljs-literal">false</span>;
<span class="hljs-number">19.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23blocks--cuddled-elses" target="_blank" rel="nofollow">16.2</a> 如果通过 <code>if</code> 和 <code>else</code> 使用多行代码块，把 <code>else</code> 放在 <code>if</code> 代码块闭合括号的同一行。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fbrace-style.html" target="_blank" rel="nofollow"><code>brace-style</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FdisallowNewlineBeforeBlockStatements" target="_blank" rel="nofollow"><code>disallowNewlineBeforeBlockStatements</code></a></p>
<pre class="hljs bash"><code class="bash">
1.  // bad
2.  <span class="hljs-keyword">if</span>  (<span class="hljs-built_in">test</span>)  {
3.  thing1();
4.  thing2();
5.  }
6.  <span class="hljs-keyword">else</span>  {
7.  thing3();
8.  }

10.  // good
11.  <span class="hljs-keyword">if</span>  (<span class="hljs-built_in">test</span>)  {
12.  thing1();
13.  thing2();
14.  }  <span class="hljs-keyword">else</span>  {
15.  thing3();
16.  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23blocks--no-else-return" target="_blank" rel="nofollow">16.3</a> 如果一个 <code>if</code> 块总是执行一个 <code>return</code> 语句，后面的 <code>else</code> 块是不必要的。在 <code>else if</code> 块中的 <code>return</code>，可以分成多个 <code>if</code> 块来 <code>return</code> 。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-else-return" target="_blank" rel="nofollow"><code>no-else-return</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">3.</span>  <span class="hljs-keyword">if</span>  (x)  {
<span class="hljs-number">4.</span>  <span class="hljs-keyword">return</span> x;
<span class="hljs-number">5.</span>  }  <span class="hljs-keyword">else</span>  {
<span class="hljs-number">6.</span>  <span class="hljs-keyword">return</span> y;
<span class="hljs-number">7.</span>  }
<span class="hljs-number">8.</span>  }

<span class="hljs-number">10.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">11.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">cats</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">12.</span>  <span class="hljs-keyword">if</span>  (x)  {
<span class="hljs-number">13.</span>  <span class="hljs-keyword">return</span> x;
<span class="hljs-number">14.</span>  }  <span class="hljs-keyword">else</span>  <span class="hljs-keyword">if</span>  (y)  {
<span class="hljs-number">15.</span>  <span class="hljs-keyword">return</span> y;
<span class="hljs-number">16.</span>  }
<span class="hljs-number">17.</span>  }

<span class="hljs-number">19.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">20.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">dogs</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">21.</span>  <span class="hljs-keyword">if</span>  (x)  {
<span class="hljs-number">22.</span>  <span class="hljs-keyword">return</span> x;
<span class="hljs-number">23.</span>  }  <span class="hljs-keyword">else</span>  {
<span class="hljs-number">24.</span>  <span class="hljs-keyword">if</span>  (y)  {
<span class="hljs-number">25.</span>  <span class="hljs-keyword">return</span> y;
<span class="hljs-number">26.</span>  }
<span class="hljs-number">27.</span>  }
<span class="hljs-number">28.</span>  }

<span class="hljs-number">30.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">31.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">32.</span>  <span class="hljs-keyword">if</span>  (x)  {
<span class="hljs-number">33.</span>  <span class="hljs-keyword">return</span> x;
<span class="hljs-number">34.</span>  }

<span class="hljs-number">36.</span>  <span class="hljs-keyword">return</span> y;
<span class="hljs-number">37.</span>  }

<span class="hljs-number">39.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">40.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">cats</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">41.</span>  <span class="hljs-keyword">if</span>  (x)  {
<span class="hljs-number">42.</span>  <span class="hljs-keyword">return</span> x;
<span class="hljs-number">43.</span>  }

<span class="hljs-number">45.</span>  <span class="hljs-keyword">if</span>  (y)  {
<span class="hljs-number">46.</span>  <span class="hljs-keyword">return</span> y;
<span class="hljs-number">47.</span>  }
<span class="hljs-number">48.</span>  }

<span class="hljs-number">50.</span>  <span class="hljs-comment">//good</span>
<span class="hljs-number">51.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">dogs</span>(<span class="hljs-params">x</span>)  </span>{
<span class="hljs-number">52.</span>  <span class="hljs-keyword">if</span>  (x)  {
<span class="hljs-number">53.</span>  <span class="hljs-keyword">if</span>  (z)  {
<span class="hljs-number">54.</span>  <span class="hljs-keyword">return</span> y;
<span class="hljs-number">55.</span>  }
<span class="hljs-number">56.</span>  }  <span class="hljs-keyword">else</span>  {
<span class="hljs-number">57.</span>  <span class="hljs-keyword">return</span> z;
<span class="hljs-number">58.</span>  }
<span class="hljs-number">59.</span>  }

</code></pre>
<h2>控制语句 Control Statements</h2>
<ul>
<li>
<a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23control-statements" target="_blank" rel="nofollow">17.1</a> 如果您的控制语句(<code>if</code>, <code>while</code> 的)太长或超过最大行长度，那么每个（分组）条件可以放单独一行。逻辑运算符应该放在每行起始处。</li>
</ul>
<blockquote>
<p>为什么？ 在每行起始处要求运算符可以使运算符保持一致，并遵循与方法链式调用类似的模式。这样可以使复杂逻辑更易于查看，以提高可读性。</p>
</blockquote>
<pre class="hljs java"><code class="java">
<span class="hljs-number">1</span>.  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2</span>.  <span class="hljs-keyword">if</span>  ((foo ===  <span class="hljs-number">123</span>  || bar ===  <span class="hljs-string">'abc'</span>)  &amp;&amp; doesItLookGoodWhenItBecomesThatLong()  &amp;&amp; isThisReallyHappening())  {
<span class="hljs-number">3</span>.  thing1();
<span class="hljs-number">4</span>.  }

<span class="hljs-number">6</span>.  <span class="hljs-comment">// bad</span>
<span class="hljs-number">7</span>.  <span class="hljs-keyword">if</span>  (foo ===  <span class="hljs-number">123</span>  &amp;&amp;
<span class="hljs-number">8</span>.  bar ===  <span class="hljs-string">'abc'</span>)  {
<span class="hljs-number">9</span>.  thing1();
<span class="hljs-number">10</span>.  }

<span class="hljs-number">12</span>.  <span class="hljs-comment">// bad</span>
<span class="hljs-number">13</span>.  <span class="hljs-keyword">if</span>  (foo ===  <span class="hljs-number">123</span>
<span class="hljs-number">14</span>.  &amp;&amp; bar ===  <span class="hljs-string">'abc'</span>)  {
<span class="hljs-number">15</span>.  thing1();
<span class="hljs-number">16</span>.  }

<span class="hljs-number">18</span>.  <span class="hljs-comment">// bad</span>
<span class="hljs-number">19</span>.  <span class="hljs-keyword">if</span>  (
<span class="hljs-number">20</span>.  foo ===  <span class="hljs-number">123</span>  &amp;&amp;
<span class="hljs-number">21</span>.  bar ===  <span class="hljs-string">'abc'</span>
<span class="hljs-number">22</span>.  )  {
<span class="hljs-number">23</span>.  thing1();
<span class="hljs-number">24</span>.  }

<span class="hljs-number">26</span>.  <span class="hljs-comment">// good</span>
<span class="hljs-number">27</span>.  <span class="hljs-keyword">if</span>  (
<span class="hljs-number">28</span>.  foo ===  <span class="hljs-number">123</span>
<span class="hljs-number">29</span>.  &amp;&amp; bar ===  <span class="hljs-string">'abc'</span>
<span class="hljs-number">30</span>.  )  {
<span class="hljs-number">31</span>.  thing1();
<span class="hljs-number">32</span>.  }

<span class="hljs-number">34</span>.  <span class="hljs-comment">// good</span>
<span class="hljs-number">35</span>.  <span class="hljs-keyword">if</span>  (
<span class="hljs-number">36</span>.  (foo ===  <span class="hljs-number">123</span>  || bar ===  <span class="hljs-string">"abc"</span>)
<span class="hljs-number">37</span>.  &amp;&amp; doesItLookGoodWhenItBecomesThatLong()
<span class="hljs-number">38</span>.  &amp;&amp; isThisReallyHappening()
<span class="hljs-number">39</span>.  )  {
<span class="hljs-number">40</span>.  thing1();
<span class="hljs-number">41</span>.  }

<span class="hljs-number">43</span>.  <span class="hljs-comment">// good</span>
<span class="hljs-number">44</span>.  <span class="hljs-keyword">if</span>  (foo ===  <span class="hljs-number">123</span>  &amp;&amp; bar ===  <span class="hljs-string">'abc'</span>)  {
<span class="hljs-number">45</span>.  thing1();
<span class="hljs-number">46</span>.  }

</code></pre>
<h2>注释 Comments</h2>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23comments--multiline" target="_blank" rel="nofollow">18.1</a> 多行注释使用 <code>/** ... */</code>。</p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-comment">// make() returns a new element</span>
<span class="hljs-number">3.</span>  <span class="hljs-comment">// based on the passed in tag name</span>
<span class="hljs-number">4.</span>  <span class="hljs-comment">//</span>
<span class="hljs-number">5.</span>  <span class="hljs-comment">// @param {String} tag</span>
<span class="hljs-number">6.</span>  <span class="hljs-comment">// @return {Element} element</span>
<span class="hljs-number">7.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">make</span>(<span class="hljs-params">tag</span>)  </span>{

<span class="hljs-number">9.</span>  <span class="hljs-comment">// ...</span>

<span class="hljs-number">11.</span>  <span class="hljs-keyword">return</span> element;
<span class="hljs-number">12.</span>  }

<span class="hljs-number">14.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">15.</span>  <span class="hljs-comment">/**
16.  * make() returns a new element
17.  * based on the passed-in tag name
18.  */</span>
<span class="hljs-number">19.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">make</span>(<span class="hljs-params">tag</span>)  </span>{

<span class="hljs-number">21.</span>  <span class="hljs-comment">// ...</span>

<span class="hljs-number">23.</span>  <span class="hljs-keyword">return</span> element;
<span class="hljs-number">24.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23comments--singleline" target="_blank" rel="nofollow">18.2</a> 单行注释使用 <code>//</code> 。将单行注释放在续注释的语句上方。在注释之前放置一个空行，除非它位于代码块的第一行。</p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">const</span> active =  <span class="hljs-literal">true</span>;  <span class="hljs-comment">// is current tab</span>

<span class="hljs-number">4.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">5.</span>  <span class="hljs-comment">// is current tab</span>
<span class="hljs-number">6.</span>  <span class="hljs-keyword">const</span> active =  <span class="hljs-literal">true</span>;

<span class="hljs-number">8.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">9.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getType</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">10.</span>  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'fetching type...'</span>);
<span class="hljs-number">11.</span>  <span class="hljs-comment">// set the default type to 'no type'</span>
<span class="hljs-number">12.</span>  <span class="hljs-keyword">const</span> type =  <span class="hljs-keyword">this</span>.type ||  <span class="hljs-string">'no type'</span>;

<span class="hljs-number">14.</span>  <span class="hljs-keyword">return</span> type;
<span class="hljs-number">15.</span>  }

<span class="hljs-number">17.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">18.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getType</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">19.</span>  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'fetching type...'</span>);

<span class="hljs-number">21.</span>  <span class="hljs-comment">// set the default type to 'no type'</span>
<span class="hljs-number">22.</span>  <span class="hljs-keyword">const</span> type =  <span class="hljs-keyword">this</span>.type ||  <span class="hljs-string">'no type'</span>;

<span class="hljs-number">24.</span>  <span class="hljs-keyword">return</span> type;
<span class="hljs-number">25.</span>  }

<span class="hljs-number">27.</span>  <span class="hljs-comment">// also good</span>
<span class="hljs-number">28.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getType</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">29.</span>  <span class="hljs-comment">// set the default type to 'no type'</span>
<span class="hljs-number">30.</span>  <span class="hljs-keyword">const</span> type =  <span class="hljs-keyword">this</span>.type ||  <span class="hljs-string">'no type'</span>;

<span class="hljs-number">32.</span>  <span class="hljs-keyword">return</span> type;
<span class="hljs-number">33.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23comments--spaces" target="_blank" rel="nofollow">18.3</a> 所有注释符和注释内容用一个空格隔开，让它更容易阅读。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fspaced-comment" target="_blank" rel="nofollow"><code>spaced-comment</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-comment">//is current tab</span>
<span class="hljs-number">3.</span>  <span class="hljs-keyword">const</span> active =  <span class="hljs-literal">true</span>;

<span class="hljs-number">5.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">6.</span>  <span class="hljs-comment">// is current tab</span>
<span class="hljs-number">7.</span>  <span class="hljs-keyword">const</span> active =  <span class="hljs-literal">true</span>;

<span class="hljs-number">9.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">10.</span>  <span class="hljs-comment">/**
11.  *make() returns a new element
12.  *based on the passed-in tag name
13.  */</span>
<span class="hljs-number">14.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">make</span>(<span class="hljs-params">tag</span>)  </span>{

<span class="hljs-number">16.</span>  <span class="hljs-comment">// ...</span>

<span class="hljs-number">18.</span>  <span class="hljs-keyword">return</span> element;
<span class="hljs-number">19.</span>  }

<span class="hljs-number">21.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">22.</span>  <span class="hljs-comment">/**
23.  * make() returns a new element
24.  * based on the passed-in tag name
25.  */</span>
<span class="hljs-number">26.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">make</span>(<span class="hljs-params">tag</span>)  </span>{

<span class="hljs-number">28.</span>  <span class="hljs-comment">// ...</span>

<span class="hljs-number">30.</span>  <span class="hljs-keyword">return</span> element;
<span class="hljs-number">31.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23comments--actionitems" target="_blank" rel="nofollow">18.4</a> 给注释增加 <code>FIXME</code> 或 <code>TODO</code> 的前缀，可以帮助其他开发者快速了解这个是否是一个需要重新复查的问题，或是你正在为需要解决的问题提出解决方案。这将有别于常规注释，因为它们是可操作的。使用 <code>FIXME -- need to figure this out</code> 或者 <code>TODO -- need to implement</code>。</p>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23comments--fixme" target="_blank" rel="nofollow">18.5</a> 使用 <code>// FIXME:</code> 来标识需要修正的问题。愚人码头注：如果代码中有该标识，说明标识处代码需要修正，甚至代码是错误的，不能工作，需要修复，如何修正会在说明中简略说明。</p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-class"><span class="hljs-keyword">class</span>  <span class="hljs-title">Calculator</span>  <span class="hljs-keyword">extends</span>  <span class="hljs-title">Abacus</span>  </span>{
<span class="hljs-number">2.</span>  <span class="hljs-keyword">constructor</span>()  {
<span class="hljs-number">3.</span>  <span class="hljs-keyword">super</span>();

<span class="hljs-number">5.</span>  <span class="hljs-comment">// <span class="hljs-doctag">FIXME:</span> shouldn’t use a global here</span>
<span class="hljs-number">6.</span>  total =  <span class="hljs-number">0</span>;
<span class="hljs-number">7.</span>  }
<span class="hljs-number">8.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23comments--todo" target="_blank" rel="nofollow">18.6</a> 使用 <code>// TODO:</code> 来标识需要实现的问题。愚人码头注：如果代码中有该标识，说明在标识处有功能代码待编写，待实现的功能在说明中会简略说明。</p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-class"><span class="hljs-keyword">class</span>  <span class="hljs-title">Calculator</span>  <span class="hljs-keyword">extends</span>  <span class="hljs-title">Abacus</span>  </span>{
<span class="hljs-number">2.</span>  <span class="hljs-keyword">constructor</span>()  {
<span class="hljs-number">3.</span>  <span class="hljs-keyword">super</span>();

<span class="hljs-number">5.</span>  <span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> total should be configurable by an options param</span>
<span class="hljs-number">6.</span>  <span class="hljs-keyword">this</span>.total =  <span class="hljs-number">0</span>;
<span class="hljs-number">7.</span>  }
<span class="hljs-number">8.</span>  }

</code></pre>
<p>愚人码头注：还有 <code>// XXX:</code> 注释，如果代码中有该标识，说明标识处代码虽然实现了功能，但是实现的方法有待商榷，希望将来能改进，要改进的地方会在说明中简略说明。部分 IDE 有这些注释的收集视图，例如任务（task）视图，TODO视图等，在项目发布前，检查一下任务视图是一个很好的习惯。</p>
<p>hitespace</p>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23whitespace--spaces" target="_blank" rel="nofollow">19.1</a> 使用 2 个空格作为缩进。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Findent.html" target="_blank" rel="nofollow"><code>indent</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FvalidateIndentation" target="_blank" rel="nofollow"><code>validateIndentation</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">3.</span>  ∙∙∙∙<span class="hljs-keyword">let</span> name;
<span class="hljs-number">4.</span>  }

<span class="hljs-number">6.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">7.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">8.</span>  ∙<span class="hljs-keyword">let</span> name;
<span class="hljs-number">9.</span>  }

<span class="hljs-number">11.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">12.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">13.</span>  ∙∙<span class="hljs-keyword">let</span> name;
<span class="hljs-number">14.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23whitespace--before-blocks" target="_blank" rel="nofollow">19.2</a> 在大括号前放置 1 个空格。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fspace-before-blocks.html" target="_blank" rel="nofollow"><code>space-before-blocks</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireSpaceBeforeBlockStatements" target="_blank" rel="nofollow"><code>requireSpaceBeforeBlockStatements</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>)</span>{
<span class="hljs-number">3.</span>  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'test'</span>);
<span class="hljs-number">4.</span>  }

<span class="hljs-number">6.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">7.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">8.</span>  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'test'</span>);
<span class="hljs-number">9.</span>  }

<span class="hljs-number">11.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">12.</span>  dog.set(<span class="hljs-string">'attr'</span>,{
<span class="hljs-number">13.</span>  age:  <span class="hljs-string">'1 year'</span>,
<span class="hljs-number">14.</span>  breed:  <span class="hljs-string">'Bernese Mountain Dog'</span>,
<span class="hljs-number">15.</span>  });

<span class="hljs-number">17.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">18.</span>  dog.set(<span class="hljs-string">'attr'</span>,  {
<span class="hljs-number">19.</span>  age:  <span class="hljs-string">'1 year'</span>,
<span class="hljs-number">20.</span>  breed:  <span class="hljs-string">'Bernese Mountain Dog'</span>,
<span class="hljs-number">21.</span>  });

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23whitespace--around-keywords" target="_blank" rel="nofollow">19.3</a> 在控制语句（<code>if</code>、<code>while</code> 等）的小括号前放一个空格。在函数调用及声明中，不在函数的参数列表前加空格。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fkeyword-spacing.html" target="_blank" rel="nofollow"><code>keyword-spacing</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireSpaceAfterKeywords" target="_blank" rel="nofollow"><code>requireSpaceAfterKeywords</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">if</span>(isJedi)  {
<span class="hljs-number">3.</span>  fight ();
<span class="hljs-number">4.</span>  }

<span class="hljs-number">6.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">7.</span>  <span class="hljs-keyword">if</span>  (isJedi)  {
<span class="hljs-number">8.</span>  fight();
<span class="hljs-number">9.</span>  }

<span class="hljs-number">11.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">12.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fight</span> (<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">13.</span>  <span class="hljs-built_in">console</span>.log (<span class="hljs-string">'Swooosh!'</span>);
<span class="hljs-number">14.</span>  }

<span class="hljs-number">16.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">17.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fight</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">18.</span>  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Swooosh!'</span>);
<span class="hljs-number">19.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23whitespace--infix-ops" target="_blank" rel="nofollow">19.4</a> 使用空格把运算符隔开。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fspace-infix-ops.html" target="_blank" rel="nofollow"><code>space-infix-ops</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireSpaceBeforeBinaryOperators" target="_blank" rel="nofollow"><code>requireSpaceBeforeBinaryOperators</code></a>, <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireSpaceAfterBinaryOperators" target="_blank" rel="nofollow"><code>requireSpaceAfterBinaryOperators</code></a></p>
<pre class="hljs cpp"><code class="cpp">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">const</span> x=y+<span class="hljs-number">5</span>;

<span class="hljs-number">4.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">5.</span>  <span class="hljs-keyword">const</span> x = y +  <span class="hljs-number">5</span>;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23whitespace--newline-at-end" target="_blank" rel="nofollow">19.5</a> 在文件末尾插入一个空行。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Feslint%2Feslint%2Fblob%2Fmaster%2Fdocs%2Frules%2Feol-last.md" target="_blank" rel="nofollow"><code>eol-last</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">import</span>  { es6 }  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./AirbnbStyleGuide'</span>;
<span class="hljs-number">3.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">4.</span>  <span class="hljs-keyword">export</span>  <span class="hljs-keyword">default</span> es6;

</code></pre>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">import</span>  { es6 }  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./AirbnbStyleGuide'</span>;
<span class="hljs-number">3.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">4.</span>  <span class="hljs-keyword">export</span>  <span class="hljs-keyword">default</span> es6;↵
<span class="hljs-number">5.</span>  ↵

</code></pre>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">import</span>  { es6 }  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./AirbnbStyleGuide'</span>;
<span class="hljs-number">3.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">4.</span>  <span class="hljs-keyword">export</span>  <span class="hljs-keyword">default</span> es6;↵

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23whitespace--chains" target="_blank" rel="nofollow">19.6</a> 长方法链式调用时使用缩进（2个以上的方法链式调用）。使用一个点 <code>.</code> 开头，强调该行是一个方法调用，不是一个新的声明。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fnewline-per-chained-call" target="_blank" rel="nofollow"><code>newline-per-chained-call</code></a><a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-whitespace-before-property" target="_blank" rel="nofollow"><code>no-whitespace-before-property</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  $(<span class="hljs-string">'#items'</span>).find(<span class="hljs-string">'.selected'</span>).highlight().end().find(<span class="hljs-string">'.open'</span>).updateCount();

<span class="hljs-number">4.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">5.</span>  $(<span class="hljs-string">'#items'</span>).
<span class="hljs-number">6.</span>  find(<span class="hljs-string">'.selected'</span>).
<span class="hljs-number">7.</span>  highlight().
<span class="hljs-number">8.</span>  end().
<span class="hljs-number">9.</span>  find(<span class="hljs-string">'.open'</span>).
<span class="hljs-number">10.</span>  updateCount();

<span class="hljs-number">12.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">13.</span>  $(<span class="hljs-string">'#items'</span>)
<span class="hljs-number">14.</span>  .find(<span class="hljs-string">'.selected'</span>)
<span class="hljs-number">15.</span>  .highlight()
<span class="hljs-number">16.</span>  .end()
<span class="hljs-number">17.</span>  .find(<span class="hljs-string">'.open'</span>)
<span class="hljs-number">18.</span>  .updateCount();

<span class="hljs-number">20.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">21.</span>  <span class="hljs-keyword">const</span> leds = stage.selectAll(<span class="hljs-string">'.led'</span>).data(data).enter().append(<span class="hljs-string">'svg:svg'</span>).classed(<span class="hljs-string">'led'</span>,  <span class="hljs-literal">true</span>)
<span class="hljs-number">22.</span>  .attr(<span class="hljs-string">'width'</span>,  (radius + margin)  *  <span class="hljs-number">2</span>).append(<span class="hljs-string">'svg:g'</span>)
<span class="hljs-number">23.</span>  .attr(<span class="hljs-string">'transform'</span>,  <span class="hljs-string">`translate(<span class="hljs-subst">${radius + margin}</span>,<span class="hljs-subst">${radius + margin}</span>)`</span>)
<span class="hljs-number">24.</span>  .call(tron.led);

<span class="hljs-number">26.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">27.</span>  <span class="hljs-keyword">const</span> leds = stage.selectAll(<span class="hljs-string">'.led'</span>)
<span class="hljs-number">28.</span>  .data(data)
<span class="hljs-number">29.</span>  .enter().append(<span class="hljs-string">'svg:svg'</span>)
<span class="hljs-number">30.</span>  .classed(<span class="hljs-string">'led'</span>,  <span class="hljs-literal">true</span>)
<span class="hljs-number">31.</span>  .attr(<span class="hljs-string">'width'</span>,  (radius + margin)  *  <span class="hljs-number">2</span>)
<span class="hljs-number">32.</span>  .append(<span class="hljs-string">'svg:g'</span>)
<span class="hljs-number">33.</span>  .attr(<span class="hljs-string">'transform'</span>,  <span class="hljs-string">`translate(<span class="hljs-subst">${radius + margin}</span>,<span class="hljs-subst">${radius + margin}</span>)`</span>)
<span class="hljs-number">34.</span>  .call(tron.led);

<span class="hljs-number">36.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">37.</span>  <span class="hljs-keyword">const</span> leds = stage.selectAll(<span class="hljs-string">'.led'</span>).data(data);

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23whitespace--after-blocks" target="_blank" rel="nofollow">19.7</a> 在语句块后和下条语句前留一个空行。jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequirePaddingNewLinesAfterBlocks" target="_blank" rel="nofollow"><code>requirePaddingNewLinesAfterBlocks</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">if</span>  (foo)  {
<span class="hljs-number">3.</span>  <span class="hljs-keyword">return</span> bar;
<span class="hljs-number">4.</span>  }
<span class="hljs-number">5.</span>  <span class="hljs-keyword">return</span> baz;

<span class="hljs-number">7.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">8.</span>  <span class="hljs-keyword">if</span>  (foo)  {
<span class="hljs-number">9.</span>  <span class="hljs-keyword">return</span> bar;
<span class="hljs-number">10.</span>  }

<span class="hljs-number">12.</span>  <span class="hljs-keyword">return</span> baz;

<span class="hljs-number">14.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">15.</span>  <span class="hljs-keyword">const</span> obj =  {
<span class="hljs-number">16.</span>  foo()  {
<span class="hljs-number">17.</span>  },
<span class="hljs-number">18.</span>  bar()  {
<span class="hljs-number">19.</span>  },
<span class="hljs-number">20.</span>  };
<span class="hljs-number">21.</span>  <span class="hljs-keyword">return</span> obj;

<span class="hljs-number">23.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">24.</span>  <span class="hljs-keyword">const</span> obj =  {
<span class="hljs-number">25.</span>  foo()  {
<span class="hljs-number">26.</span>  },

<span class="hljs-number">28.</span>  bar()  {
<span class="hljs-number">29.</span>  },
<span class="hljs-number">30.</span>  };

<span class="hljs-number">32.</span>  <span class="hljs-keyword">return</span> obj;

<span class="hljs-number">34.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">35.</span>  <span class="hljs-keyword">const</span> arr =  [
<span class="hljs-number">36.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">37.</span>  },
<span class="hljs-number">38.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">39.</span>  },
<span class="hljs-number">40.</span>  ];
<span class="hljs-number">41.</span>  <span class="hljs-keyword">return</span> arr;

<span class="hljs-number">43.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">44.</span>  <span class="hljs-keyword">const</span> arr =  [
<span class="hljs-number">45.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">46.</span>  },

<span class="hljs-number">48.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">49.</span>  },
<span class="hljs-number">50.</span>  ];

<span class="hljs-number">52.</span>  <span class="hljs-keyword">return</span> arr;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23whitespace--padded-blocks" target="_blank" rel="nofollow">19.8</a> 不要用空行来填充块。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fpadded-blocks.html" target="_blank" rel="nofollow"><code>padded-blocks</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FdisallowPaddingNewlinesInBlocks" target="_blank" rel="nofollow"><code>disallowPaddingNewlinesInBlocks</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>)  </span>{

<span class="hljs-number">4.</span>  <span class="hljs-built_in">console</span>.log(foo);

<span class="hljs-number">6.</span>  }

<span class="hljs-number">8.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">9.</span>  <span class="hljs-keyword">if</span>  (baz)  {

<span class="hljs-number">11.</span>  <span class="hljs-built_in">console</span>.log(qux);
<span class="hljs-number">12.</span>  }  <span class="hljs-keyword">else</span>  {
<span class="hljs-number">13.</span>  <span class="hljs-built_in">console</span>.log(foo);

<span class="hljs-number">15.</span>  }

<span class="hljs-number">17.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">18.</span>  <span class="hljs-class"><span class="hljs-keyword">class</span>  <span class="hljs-title">Foo</span>  </span>{

<span class="hljs-number">20.</span>  <span class="hljs-keyword">constructor</span>(bar)  {
<span class="hljs-number">21.</span>  <span class="hljs-keyword">this</span>.bar = bar;
<span class="hljs-number">22.</span>  }
<span class="hljs-number">23.</span>  }

<span class="hljs-number">25.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">26.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">27.</span>  <span class="hljs-built_in">console</span>.log(foo);
<span class="hljs-number">28.</span>  }

<span class="hljs-number">30.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">31.</span>  <span class="hljs-keyword">if</span>  (baz)  {
<span class="hljs-number">32.</span>  <span class="hljs-built_in">console</span>.log(qux);
<span class="hljs-number">33.</span>  }  <span class="hljs-keyword">else</span>  {
<span class="hljs-number">34.</span>  <span class="hljs-built_in">console</span>.log(foo);
<span class="hljs-number">35.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23whitespace--in-parens" target="_blank" rel="nofollow">19.9</a> 不要在圆括号内加空格。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fspace-in-parens.html" target="_blank" rel="nofollow"><code>space-in-parens</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FdisallowSpacesInsideParentheses" target="_blank" rel="nofollow"><code>disallowSpacesInsideParentheses</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"> foo </span>)  </span>{
<span class="hljs-number">3.</span>  <span class="hljs-keyword">return</span> foo;
<span class="hljs-number">4.</span>  }

<span class="hljs-number">6.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">7.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params">foo</span>)  </span>{
<span class="hljs-number">8.</span>  <span class="hljs-keyword">return</span> foo;
<span class="hljs-number">9.</span>  }

<span class="hljs-number">11.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">12.</span>  <span class="hljs-keyword">if</span>  ( foo )  {
<span class="hljs-number">13.</span>  <span class="hljs-built_in">console</span>.log(foo);
<span class="hljs-number">14.</span>  }

<span class="hljs-number">16.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">17.</span>  <span class="hljs-keyword">if</span>  (foo)  {
<span class="hljs-number">18.</span>  <span class="hljs-built_in">console</span>.log(foo);
<span class="hljs-number">19.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23whitespace--in-brackets" target="_blank" rel="nofollow">19.10</a> 不要在中括号内添加空格。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Farray-bracket-spacing.html" target="_blank" rel="nofollow"><code>array-bracket-spacing</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FdisallowSpacesInsideArrayBrackets" target="_blank" rel="nofollow"><code>disallowSpacesInsideArrayBrackets</code></a></p>
<pre class="hljs cpp"><code class="cpp">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">const</span> foo =  [  <span class="hljs-number">1</span>,  <span class="hljs-number">2</span>,  <span class="hljs-number">3</span>  ];
<span class="hljs-number">3.</span>  console.<span class="hljs-built_in">log</span>(foo[  <span class="hljs-number">0</span>  ]);

<span class="hljs-number">5.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">6.</span>  <span class="hljs-keyword">const</span> foo =  [<span class="hljs-number">1</span>,  <span class="hljs-number">2</span>,  <span class="hljs-number">3</span>];
<span class="hljs-number">7.</span>  console.<span class="hljs-built_in">log</span>(foo[<span class="hljs-number">0</span>]);

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23whitespace--in-braces" target="_blank" rel="nofollow">19.11</a> 在大括号内添加空格。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fobject-curly-spacing.html" target="_blank" rel="nofollow"><code>object-curly-spacing</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireSpacesInsideObjectBrackets" target="_blank" rel="nofollow"><code>requireSpacesInsideObjectBrackets</code></a></p>
<pre class="hljs java"><code class="java">
<span class="hljs-number">1</span>.  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2</span>.  <span class="hljs-keyword">const</span> foo =  {clark:  <span class="hljs-string">'kent'</span>};

<span class="hljs-number">4</span>.  <span class="hljs-comment">// good</span>
<span class="hljs-number">5</span>.  <span class="hljs-keyword">const</span> foo =  { clark:  <span class="hljs-string">'kent'</span>  };

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23whitespace--max-len" target="_blank" rel="nofollow">19.12</a> 避免有超过100个字符（包括空格）的代码行。注意：根据上面的<a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23strings--line-length" target="_blank" rel="nofollow">规则</a>，长字符串可以免除这个规则，不应该被破坏。eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fmax-len.html" target="_blank" rel="nofollow"><code>max-len</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FmaximumLineLength" target="_blank" rel="nofollow"><code>maximumLineLength</code></a></p>
<blockquote>
<p>为什么？ 这可以确保可读性和可维护性。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">const</span> foo = jsonData &amp;&amp; jsonData.foo &amp;&amp; jsonData.foo.bar &amp;&amp; jsonData.foo.bar.baz &amp;&amp; jsonData.foo.bar.baz.quux &amp;&amp; jsonData.foo.bar.baz.quux.xyzzy;

<span class="hljs-number">4.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">5.</span>  $.ajax({ <span class="hljs-attr">method</span>:  <span class="hljs-string">'POST'</span>, <span class="hljs-attr">url</span>:  <span class="hljs-string">'https://airbnb.com/'</span>, <span class="hljs-attr">data</span>:  { <span class="hljs-attr">name</span>:  <span class="hljs-string">'John'</span>  }  }).done(<span class="hljs-function"><span class="hljs-params">()</span>  =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Congratulations!'</span>)).fail(<span class="hljs-function"><span class="hljs-params">()</span>  =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'You have failed this city.'</span>));

<span class="hljs-number">7.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">8.</span>  <span class="hljs-keyword">const</span> foo = jsonData
<span class="hljs-number">9.</span>  &amp;&amp; jsonData.foo
<span class="hljs-number">10.</span>  &amp;&amp; jsonData.foo.bar
<span class="hljs-number">11.</span>  &amp;&amp; jsonData.foo.bar.baz
<span class="hljs-number">12.</span>  &amp;&amp; jsonData.foo.bar.baz.quux
<span class="hljs-number">13.</span>  &amp;&amp; jsonData.foo.bar.baz.quux.xyzzy;

<span class="hljs-number">15.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">16.</span>  $.ajax({
<span class="hljs-number">17.</span>  method:  <span class="hljs-string">'POST'</span>,
<span class="hljs-number">18.</span>  url:  <span class="hljs-string">'https://airbnb.com/'</span>,
<span class="hljs-number">19.</span>  data:  { <span class="hljs-attr">name</span>:  <span class="hljs-string">'John'</span>  },
<span class="hljs-number">20.</span>  })
<span class="hljs-number">21.</span>  .done(<span class="hljs-function"><span class="hljs-params">()</span>  =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Congratulations!'</span>))
<span class="hljs-number">22.</span>  .fail(<span class="hljs-function"><span class="hljs-params">()</span>  =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'You have failed this city.'</span>));

</code></pre>
<h2>逗号 Commas</h2>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23commas--leading-trailing" target="_blank" rel="nofollow">20.1</a> 行开头处<strong>不要</strong>实用使用逗号。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fcomma-style.html" target="_blank" rel="nofollow"><code>comma-style</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireCommaBeforeLineBreak" target="_blank" rel="nofollow"><code>requireCommaBeforeLineBreak</code></a></p>
<pre class="hljs java"><code class="java">
JavaScript  代码:

<span class="hljs-number">1</span>.  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2</span>.  <span class="hljs-keyword">const</span> story =  [
<span class="hljs-number">3</span>.  once
<span class="hljs-number">4</span>.  , upon
<span class="hljs-number">5</span>.  , aTime
<span class="hljs-number">6</span>.  ];

<span class="hljs-number">8</span>.  <span class="hljs-comment">// good</span>
<span class="hljs-number">9</span>.  <span class="hljs-keyword">const</span> story =  [
<span class="hljs-number">10</span>.  once,
<span class="hljs-number">11</span>.  upon,
<span class="hljs-number">12</span>.  aTime,
<span class="hljs-number">13</span>.  ];

<span class="hljs-number">15</span>.  <span class="hljs-comment">// bad</span>
<span class="hljs-number">16</span>.  <span class="hljs-keyword">const</span> hero =  {
<span class="hljs-number">17</span>.  firstName:  <span class="hljs-string">'Ada'</span>
<span class="hljs-number">18</span>.  , lastName:  <span class="hljs-string">'Lovelace'</span>
<span class="hljs-number">19</span>.  , birthYear:  <span class="hljs-number">1815</span>
<span class="hljs-number">20</span>.  , superPower:  <span class="hljs-string">'computers'</span>
<span class="hljs-number">21</span>.  };

<span class="hljs-number">23</span>.  <span class="hljs-comment">// good</span>
<span class="hljs-number">24</span>.  <span class="hljs-keyword">const</span> hero =  {
<span class="hljs-number">25</span>.  firstName:  <span class="hljs-string">'Ada'</span>,
<span class="hljs-number">26</span>.  lastName:  <span class="hljs-string">'Lovelace'</span>,
<span class="hljs-number">27</span>.  birthYear:  <span class="hljs-number">1815</span>,
<span class="hljs-number">28</span>.  superPower:  <span class="hljs-string">'computers'</span>,
<span class="hljs-number">29</span>.  };

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23commas--dangling" target="_blank" rel="nofollow">20.2</a> 添加结尾的逗号。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fcomma-dangle.html" target="_blank" rel="nofollow"><code>comma-dangle</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireTrailingComma" target="_blank" rel="nofollow"><code>requireTrailingComma</code></a></p>
<blockquote>
<p>为什么？这会让 git diff(差异比较) 更干净。另外，像Babel这样的转译器会删除转译后代码中的结尾逗号，这意味着您不必担心传统浏览器中的<a href="https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fairbnb%2Fjavascript%2Fblob%2Fes5-deprecated%2Fes5%2FREADME.md%23commas" target="_blank" rel="nofollow">结尾逗号问题</a>。</p>
</blockquote>
<pre class="hljs java"><code class="java">
<span class="hljs-number">1</span>.  <span class="hljs-comment">// bad - 没有结尾逗号的 git diff 差异比较</span>
<span class="hljs-number">2</span>.  <span class="hljs-keyword">const</span> hero =  {
<span class="hljs-number">3</span>.  firstName:  <span class="hljs-string">'Florence'</span>,
<span class="hljs-number">4</span>.  - lastName:  <span class="hljs-string">'Nightingale'</span>
<span class="hljs-number">5</span>.  + lastName:  <span class="hljs-string">'Nightingale'</span>,
<span class="hljs-number">6</span>.  + inventorOf:  [<span class="hljs-string">'coxcomb chart'</span>,  <span class="hljs-string">'modern nursing'</span>]
<span class="hljs-number">7</span>.  };

<span class="hljs-number">9</span>.  <span class="hljs-comment">// good - 有结尾逗号的 git diff 差异比较</span>
<span class="hljs-number">10</span>.  <span class="hljs-keyword">const</span> hero =  {
<span class="hljs-number">11</span>.  firstName:  <span class="hljs-string">'Florence'</span>,
<span class="hljs-number">12</span>.  lastName:  <span class="hljs-string">'Nightingale'</span>,
<span class="hljs-number">13</span>.  + inventorOf:  [<span class="hljs-string">'coxcomb chart'</span>,  <span class="hljs-string">'modern nursing'</span>],
<span class="hljs-number">14</span>.  };

</code></pre>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">const</span> hero =  {
<span class="hljs-number">3.</span>  firstName:  <span class="hljs-string">'Dana'</span>,
<span class="hljs-number">4.</span>  lastName:  <span class="hljs-string">'Scully'</span>
<span class="hljs-number">5.</span>  };

<span class="hljs-number">7.</span>  <span class="hljs-keyword">const</span> heroes =  [
<span class="hljs-number">8.</span>  <span class="hljs-string">'Batman'</span>,
<span class="hljs-number">9.</span>  <span class="hljs-string">'Superman'</span>
<span class="hljs-number">10.</span>  ];

<span class="hljs-number">12.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">13.</span>  <span class="hljs-keyword">const</span> hero =  {
<span class="hljs-number">14.</span>  firstName:  <span class="hljs-string">'Dana'</span>,
<span class="hljs-number">15.</span>  lastName:  <span class="hljs-string">'Scully'</span>,
<span class="hljs-number">16.</span>  };

<span class="hljs-number">18.</span>  <span class="hljs-keyword">const</span> heroes =  [
<span class="hljs-number">19.</span>  <span class="hljs-string">'Batman'</span>,
<span class="hljs-number">20.</span>  <span class="hljs-string">'Superman'</span>,
<span class="hljs-number">21.</span>  ];

<span class="hljs-number">23.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">24.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createHero</span>(<span class="hljs-params">
<span class="hljs-number">25.</span>  firstName,
<span class="hljs-number">26.</span>  lastName,
<span class="hljs-number">27.</span>  inventorOf
<span class="hljs-number">28.</span>  </span>)  </span>{
<span class="hljs-number">29.</span>  <span class="hljs-comment">// does nothing</span>
<span class="hljs-number">30.</span>  }

<span class="hljs-number">32.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">33.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createHero</span>(<span class="hljs-params">
<span class="hljs-number">34.</span>  firstName,
<span class="hljs-number">35.</span>  lastName,
<span class="hljs-number">36.</span>  inventorOf,
<span class="hljs-number">37.</span>  </span>)  </span>{
<span class="hljs-number">38.</span>  <span class="hljs-comment">// does nothing</span>
<span class="hljs-number">39.</span>  }

<span class="hljs-number">41.</span>  <span class="hljs-comment">// good (请注意，逗号不能出现在 “rest” 元素的后面)</span>
<span class="hljs-number">42.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createHero</span>(<span class="hljs-params">
<span class="hljs-number">43.</span>  firstName,
<span class="hljs-number">44.</span>  lastName,
<span class="hljs-number">45.</span>  inventorOf,
<span class="hljs-number">46.</span>  ...heroArgs
<span class="hljs-number">47.</span>  </span>)  </span>{
<span class="hljs-number">48.</span>  <span class="hljs-comment">// does nothing</span>
<span class="hljs-number">49.</span>  }

<span class="hljs-number">51.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">52.</span>  createHero(
<span class="hljs-number">53.</span>  firstName,
<span class="hljs-number">54.</span>  lastName,
<span class="hljs-number">55.</span>  inventorOf
<span class="hljs-number">56.</span>  );

<span class="hljs-number">58.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">59.</span>  createHero(
<span class="hljs-number">60.</span>  firstName,
<span class="hljs-number">61.</span>  lastName,
<span class="hljs-number">62.</span>  inventorOf,
<span class="hljs-number">63.</span>  );

<span class="hljs-number">65.</span>  <span class="hljs-comment">// good (请注意，逗号不能出现在 “rest” 元素的后面)</span>
<span class="hljs-number">66.</span>  createHero(
<span class="hljs-number">67.</span>  firstName,
<span class="hljs-number">68.</span>  lastName,
<span class="hljs-number">69.</span>  inventorOf,
<span class="hljs-number">70.</span>  ...heroArgs
<span class="hljs-number">71.</span>  );

</code></pre>
<h2>分号 Semicolons</h2>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23semicolons--required" target="_blank" rel="nofollow">21.1</a> <strong>当然要使用封号</strong> eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fsemi.html" target="_blank" rel="nofollow"><code>semi</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireSemicolons" target="_blank" rel="nofollow"><code>requireSemicolons</code></a></p>
<blockquote>
<p>为什么？ 当 JavaScript 遇到没有分号的换行符时，它使用一组称为<a href="https://link.jianshu.com?t=https%3A%2F%2Ftc39.github.io%2Fecma262%2F%23sec-automatic-semicolon-insertion" target="_blank" rel="nofollow">自动分号插入的规则</a>来确定是否应该将换行符视为语句的结尾，并且（顾名思义）如果被这样认为的话，在换行符前面自动插入一个分号。ASI（自动分号插入）包含了一些稀奇古怪的的行为，不过，如果 JavaScript 错误地解释了你的换行符，你的代码将会被中断执行。随着新功能成为 JavaScript 的一部分，这些规则将变得更加复杂。明确地结束你的语句并配置你的 linter 来捕获缺少的分号，将有助于防止遇到问题。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad - 引发异常</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">const</span> luke =  {}
<span class="hljs-number">3.</span>  <span class="hljs-keyword">const</span> leia =  {}
<span class="hljs-number">4.</span>  [luke, leia].forEach(<span class="hljs-function"><span class="hljs-params">jedi</span> =&gt;</span> jedi.father =  <span class="hljs-string">'vader'</span>)

<span class="hljs-number">6.</span>  <span class="hljs-comment">// bad - 引发异常</span>
<span class="hljs-number">7.</span>  <span class="hljs-keyword">const</span> reaction =  <span class="hljs-string">"No! That's impossible!"</span>
<span class="hljs-number">8.</span>  (<span class="hljs-keyword">async</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">meanwhileOnTheFalcon</span>(<span class="hljs-params"></span>)</span>{
<span class="hljs-number">9.</span>  <span class="hljs-comment">// handle `leia`, `lando`, `chewie`, `r2`, `c3p0`</span>
<span class="hljs-number">10.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">11.</span>  }())

<span class="hljs-number">13.</span>  <span class="hljs-comment">// bad - 返回`undefined`，而不是下一行的值 - 当 `return` 独占一行时，自动分号插入总是会发生。</span>
<span class="hljs-number">14.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">15.</span>  <span class="hljs-keyword">return</span>
<span class="hljs-number">16.</span>  <span class="hljs-string">'search your feelings, you know it to be foo'</span>
<span class="hljs-number">17.</span>  }

<span class="hljs-number">19.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">20.</span>  <span class="hljs-keyword">const</span> luke =  {};
<span class="hljs-number">21.</span>  <span class="hljs-keyword">const</span> leia =  {};
<span class="hljs-number">22.</span>  [luke, leia].forEach(<span class="hljs-function">(<span class="hljs-params">jedi</span>)  =&gt;</span>  {
<span class="hljs-number">23.</span>  jedi.father =  <span class="hljs-string">'vader'</span>;
<span class="hljs-number">24.</span>  });

<span class="hljs-number">26.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">27.</span>  <span class="hljs-keyword">const</span> reaction =  <span class="hljs-string">"No! That's impossible!"</span>;
<span class="hljs-number">28.</span>  (<span class="hljs-keyword">async</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">meanwhileOnTheFalcon</span>(<span class="hljs-params"></span>)</span>{
<span class="hljs-number">29.</span>  <span class="hljs-comment">// handle `leia`, `lando`, `chewie`, `r2`, `c3p0`</span>
<span class="hljs-number">30.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">31.</span>  }());

<span class="hljs-number">33.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">34.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">35.</span>  <span class="hljs-keyword">return</span>  <span class="hljs-string">'search your feelings, you know it to be foo'</span>;
<span class="hljs-number">36.</span>  }

</code></pre>
<h2>类型转换 Type Casting &amp; Coercion</h2>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23coercion--explicit" target="_blank" rel="nofollow">22.1</a> 在声明语句的开始处就执行强制类型转换.</p>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23coercion--strings" target="_blank" rel="nofollow">22.2</a> 字符串: eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-new-wrappers" target="_blank" rel="nofollow"><code>no-new-wrappers</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// =&gt; this.reviewScore = 9;</span>

<span class="hljs-number">3.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">4.</span>  <span class="hljs-keyword">const</span> totalScore =  <span class="hljs-keyword">new</span>  <span class="hljs-built_in">String</span>(<span class="hljs-keyword">this</span>.reviewScore);  <span class="hljs-comment">// typeof totalScore 是 "object" 而不是 "string"</span>

<span class="hljs-number">6.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">7.</span>  <span class="hljs-keyword">const</span> totalScore =  <span class="hljs-keyword">this</span>.reviewScore +  <span class="hljs-string">''</span>;  <span class="hljs-comment">// 调用 this.reviewScore.valueOf()</span>

<span class="hljs-number">9.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">10.</span>  <span class="hljs-keyword">const</span> totalScore =  <span class="hljs-keyword">this</span>.reviewScore.toString();  <span class="hljs-comment">// 不能保证返回一个字符串</span>

<span class="hljs-number">12.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">13.</span>  <span class="hljs-keyword">const</span> totalScore =  <span class="hljs-built_in">String</span>(<span class="hljs-keyword">this</span>.reviewScore);

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23coercion--numbers" target="_blank" rel="nofollow">22.3</a> 数字: 使用 <code>Number</code> 进行转换，而 <code>parseInt</code> 则始终以基数解析字串。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fradix" target="_blank" rel="nofollow"><code>radix</code></a><a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-new-wrappers" target="_blank" rel="nofollow"><code>no-new-wrappers</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-keyword">const</span> inputValue =  <span class="hljs-string">'4'</span>;

<span class="hljs-number">3.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">4.</span>  <span class="hljs-keyword">const</span> val =  <span class="hljs-keyword">new</span>  <span class="hljs-built_in">Number</span>(inputValue);

<span class="hljs-number">6.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">7.</span>  <span class="hljs-keyword">const</span> val =  +inputValue;

<span class="hljs-number">9.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">10.</span>  <span class="hljs-keyword">const</span> val = inputValue &gt;&gt;  <span class="hljs-number">0</span>;

<span class="hljs-number">12.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">13.</span>  <span class="hljs-keyword">const</span> val = <span class="hljs-built_in">parseInt</span>(inputValue);

<span class="hljs-number">15.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">16.</span>  <span class="hljs-keyword">const</span> val =  <span class="hljs-built_in">Number</span>(inputValue);

<span class="hljs-number">18.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">19.</span>  <span class="hljs-keyword">const</span> val = <span class="hljs-built_in">parseInt</span>(inputValue,  <span class="hljs-number">10</span>);

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23coercion--comment-deviations" target="_blank" rel="nofollow">22.4</a> 如果你因为某个原因正在做些疯狂的事情，但是 <code>parseInt</code> 是你的瓶颈，所以你对于 <a href="https://link.jianshu.com?t=http%3A%2F%2Fjsperf.com%2Fcoercion-vs-casting%2F3" target="_blank" rel="nofollow">性能方面的原因</a>而必须使用位运算，请留下评论并解释为什么使用，及你做了哪些事情。</p>
<pre class="hljs cpp"><code class="cpp">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">2.</span>  <span class="hljs-comment">/**
3.  * parseInt was the reason my code was slow.
4.  * Bitshifting the String to coerce it to a
5.  * Number made it a lot faster.
6.  */</span>
<span class="hljs-number">7.</span>  <span class="hljs-keyword">const</span> val = inputValue &gt;&gt;  <span class="hljs-number">0</span>;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23coercion--bitwise" target="_blank" rel="nofollow">22.5</a> <strong>注意:</strong> 使用位运算请小心。 数字使用 <a href="https://link.jianshu.com?t=http%3A%2F%2Fes5.github.io%2F%23x4.3.19" target="_blank" rel="nofollow">64位值</a>表示, 但是位运算只返回32位整数 (<a href="https://link.jianshu.com?t=http%3A%2F%2Fes5.github.io%2F%23x11.7" target="_blank" rel="nofollow">来源</a>)。 小于32位整数的位运算会导致不可预期的行为. <a href="https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fairbnb%2Fjavascript%2Fissues%2F109" target="_blank" rel="nofollow">讨论</a>。最大的有符号整数是 2,147,483,647:</p>
<pre class="hljs ruby"><code class="ruby">
<span class="hljs-number">1</span>.  <span class="hljs-number">2147483647</span>  <span class="hljs-meta">&gt;&gt;  </span><span class="hljs-number">0</span>;  <span class="hljs-regexp">//</span> =&gt; <span class="hljs-number">2147483647</span>
<span class="hljs-number">2</span>.  <span class="hljs-number">2147483648</span>  <span class="hljs-meta">&gt;&gt;  </span><span class="hljs-number">0</span>;  <span class="hljs-regexp">//</span> =&gt; -<span class="hljs-number">2147483648</span>
<span class="hljs-number">3</span>.  <span class="hljs-number">2147483649</span>  <span class="hljs-meta">&gt;&gt;  </span><span class="hljs-number">0</span>;  <span class="hljs-regexp">//</span> =&gt; -<span class="hljs-number">2147483647</span>

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23coercion--booleans" target="_blank" rel="nofollow">22.6</a> 布尔值: eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-new-wrappers" target="_blank" rel="nofollow"><code>no-new-wrappers</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-keyword">const</span> age =  <span class="hljs-number">0</span>;

<span class="hljs-number">3.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">4.</span>  <span class="hljs-keyword">const</span> hasAge =  <span class="hljs-keyword">new</span>  <span class="hljs-built_in">Boolean</span>(age);

<span class="hljs-number">6.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">7.</span>  <span class="hljs-keyword">const</span> hasAge =  <span class="hljs-built_in">Boolean</span>(age);

<span class="hljs-number">9.</span>  <span class="hljs-comment">// best</span>
<span class="hljs-number">10.</span>  <span class="hljs-keyword">const</span> hasAge =  !!age;

</code></pre>
<h2>命名规则 Naming Conventions</h2>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23naming--descriptive" target="_blank" rel="nofollow">23.1</a> 避免使用单字母名称。使你的命名具有描述性。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fid-length" target="_blank" rel="nofollow"><code>id-length</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">q</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">3.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">4.</span>  }

<span class="hljs-number">6.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">7.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">query</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">8.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">9.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23naming--camelCase" target="_blank" rel="nofollow">23.2</a> 当命名对象，函数和实例时使用驼峰式命名。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fcamelcase.html" target="_blank" rel="nofollow"><code>camelcase</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireCamelCaseOrUpperCaseIdentifiers" target="_blank" rel="nofollow"><code>requireCamelCaseOrUpperCaseIdentifiers</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">const</span>  OBJEcttsssss  =  {};
<span class="hljs-number">3.</span>  <span class="hljs-keyword">const</span> this_is_my_object =  {};
<span class="hljs-number">4.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">c</span>(<span class="hljs-params"></span>)  </span>{}

<span class="hljs-number">6.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">7.</span>  <span class="hljs-keyword">const</span> thisIsMyObject =  {};
<span class="hljs-number">8.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">thisIsMyFunction</span>(<span class="hljs-params"></span>)  </span>{}

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23naming--PascalCase" target="_blank" rel="nofollow">23.3</a> 当命名构造函数或类的时候使用 PascalCase 式命名，（愚人码头注：即单词首字母大写）。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fnew-cap.html" target="_blank" rel="nofollow"><code>new-cap</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FrequireCapitalizedConstructors" target="_blank" rel="nofollow"><code>requireCapitalizedConstructors</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">user</span>(<span class="hljs-params">options</span>)  </span>{
<span class="hljs-number">3.</span>  <span class="hljs-keyword">this</span>.name = options.name;
<span class="hljs-number">4.</span>  }

<span class="hljs-number">6.</span>  <span class="hljs-keyword">const</span> bad =  <span class="hljs-keyword">new</span> user({
<span class="hljs-number">7.</span>  name:  <span class="hljs-string">'nope'</span>,
<span class="hljs-number">8.</span>  });

<span class="hljs-number">10.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">11.</span>  <span class="hljs-class"><span class="hljs-keyword">class</span>  <span class="hljs-title">User</span>  </span>{
<span class="hljs-number">12.</span>  <span class="hljs-keyword">constructor</span>(options)  {
<span class="hljs-number">13.</span>  <span class="hljs-keyword">this</span>.name = options.name;
<span class="hljs-number">14.</span>  }
<span class="hljs-number">15.</span>  }

<span class="hljs-number">17.</span>  <span class="hljs-keyword">const</span> good =  <span class="hljs-keyword">new</span>  User({
<span class="hljs-number">18.</span>  name:  <span class="hljs-string">'yup'</span>,
<span class="hljs-number">19.</span>  });

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23naming--leading-underscore" target="_blank" rel="nofollow">23.4</a> 不要使用下划线开头或结尾。 eslint: <a href="https://link.jianshu.com?t=https%3A%2F%2Feslint.org%2Fdocs%2Frules%2Fno-underscore-dangle.html" target="_blank" rel="nofollow"><code>no-underscore-dangle</code></a> jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FdisallowDanglingUnderscores" target="_blank" rel="nofollow"><code>disallowDanglingUnderscores</code></a></p>
<blockquote>
<p>为什么？ JavaScript 对于属性或方法而言并没有私有的概念。虽然下划线开头通常意味着 ‘private’（私有）是通用的惯例，事实上，这些属性是完全公开的，是公开API的一部分。 这个惯例可能会导致开发人员错误地认为这不重要或者测试也不必要。简而言之：如果你想让其 “private”, 必须使其不可见。</p>
</blockquote>
<pre class="hljs java"><code class="java">
<span class="hljs-number">1</span>.  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2</span>.  <span class="hljs-keyword">this</span>.__firstName__ =  <span class="hljs-string">'Panda'</span>;
<span class="hljs-number">3</span>.  <span class="hljs-keyword">this</span>.firstName_ =  <span class="hljs-string">'Panda'</span>;
<span class="hljs-number">4</span>.  <span class="hljs-keyword">this</span>._firstName =  <span class="hljs-string">'Panda'</span>;

<span class="hljs-number">6</span>.  <span class="hljs-comment">// good</span>
<span class="hljs-number">7</span>.  <span class="hljs-keyword">this</span>.firstName =  <span class="hljs-string">'Panda'</span>;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23naming--self-this" target="_blank" rel="nofollow">23.5</a> 不要存储 <code>this</code> 引用。请实用箭头函数或者 <a href="https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fbind" target="_blank" rel="nofollow">Function#bind</a>。 jscs: <a href="https://link.jianshu.com?t=http%3A%2F%2Fjscs.info%2Frule%2FdisallowNodeTypes" target="_blank" rel="nofollow"><code>disallowNodeTypes</code></a></p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">3.</span>  <span class="hljs-keyword">const</span>  self  =  <span class="hljs-keyword">this</span>;
<span class="hljs-number">4.</span>  <span class="hljs-keyword">return</span>  <span class="hljs-function"><span class="hljs-keyword">function</span>  (<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">5.</span>  <span class="hljs-built_in">console</span>.log(self);
<span class="hljs-number">6.</span>  };
<span class="hljs-number">7.</span>  }

<span class="hljs-number">9.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">10.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">11.</span>  <span class="hljs-keyword">const</span> that =  <span class="hljs-keyword">this</span>;
<span class="hljs-number">12.</span>  <span class="hljs-keyword">return</span>  <span class="hljs-function"><span class="hljs-keyword">function</span>  (<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">13.</span>  <span class="hljs-built_in">console</span>.log(that);
<span class="hljs-number">14.</span>  };
<span class="hljs-number">15.</span>  }

<span class="hljs-number">17.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">18.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">19.</span>  <span class="hljs-keyword">return</span>  <span class="hljs-function"><span class="hljs-params">()</span>  =&gt;</span>  {
<span class="hljs-number">20.</span>  <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>);
<span class="hljs-number">21.</span>  };
<span class="hljs-number">22.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23naming--filename-matches-export" target="_blank" rel="nofollow">23.6</a> basename 应与其默认导出的名称正好匹配。（愚人码头注：basename 指的是文件名）</p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// file 1 contents</span>
<span class="hljs-number">2.</span>  <span class="hljs-class"><span class="hljs-keyword">class</span>  <span class="hljs-title">CheckBox</span>  </span>{
<span class="hljs-number">3.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">4.</span>  }
<span class="hljs-number">5.</span>  <span class="hljs-keyword">export</span>  <span class="hljs-keyword">default</span>  CheckBox;

<span class="hljs-number">7.</span>  <span class="hljs-comment">// file 2 contents</span>
<span class="hljs-number">8.</span>  <span class="hljs-keyword">export</span>  <span class="hljs-keyword">default</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fortyTwo</span>(<span class="hljs-params"></span>)  </span>{  <span class="hljs-keyword">return</span>  <span class="hljs-number">42</span>;  }

<span class="hljs-number">10.</span>  <span class="hljs-comment">// file 3 contents</span>
<span class="hljs-number">11.</span>  <span class="hljs-keyword">export</span>  <span class="hljs-keyword">default</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">insideDirectory</span>(<span class="hljs-params"></span>)  </span>{}

<span class="hljs-number">13.</span>  <span class="hljs-comment">// in some other file</span>
<span class="hljs-number">14.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">15.</span>  <span class="hljs-keyword">import</span>  CheckBox  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./checkBox'</span>;  <span class="hljs-comment">// import/export 单词首字母大写命名 , filename 驼峰式命名</span>
<span class="hljs-number">16.</span>  <span class="hljs-keyword">import</span>  FortyTwo  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./FortyTwo'</span>;  <span class="hljs-comment">// import/filename 单词首字母大写命名, export 驼峰式命名</span>
<span class="hljs-number">17.</span>  <span class="hljs-keyword">import</span>  InsideDirectory  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./InsideDirectory'</span>;  <span class="hljs-comment">// import/filename 单词首字母大写命名, export 驼峰式命名</span>

<span class="hljs-number">19.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">20.</span>  <span class="hljs-keyword">import</span>  CheckBox  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./check_box'</span>;  <span class="hljs-comment">// import/export 单词首字母大写命名, filename 下划线命名</span>
<span class="hljs-number">21.</span>  <span class="hljs-keyword">import</span> forty_two <span class="hljs-keyword">from</span>  <span class="hljs-string">'./forty_two'</span>;  <span class="hljs-comment">// import/filename 下划线命名, export 驼峰式命名</span>
<span class="hljs-number">22.</span>  <span class="hljs-keyword">import</span> inside_directory <span class="hljs-keyword">from</span>  <span class="hljs-string">'./inside_directory'</span>;  <span class="hljs-comment">// import 下划线命名, export 驼峰式命名</span>
<span class="hljs-number">23.</span>  <span class="hljs-keyword">import</span> index <span class="hljs-keyword">from</span>  <span class="hljs-string">'./inside_directory/index'</span>;  <span class="hljs-comment">// 明确地 require 索引文件</span>
<span class="hljs-number">24.</span>  <span class="hljs-keyword">import</span> insideDirectory <span class="hljs-keyword">from</span>  <span class="hljs-string">'./insideDirectory/index'</span>;  <span class="hljs-comment">//  明确地 require 索引文件</span>

<span class="hljs-number">26.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">27.</span>  <span class="hljs-keyword">import</span>  CheckBox  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./CheckBox'</span>;  <span class="hljs-comment">// export/import/filename 单词首字母大写命名</span>
<span class="hljs-number">28.</span>  <span class="hljs-keyword">import</span> fortyTwo <span class="hljs-keyword">from</span>  <span class="hljs-string">'./fortyTwo'</span>;  <span class="hljs-comment">// export/import/filename 驼峰式命名</span>
<span class="hljs-number">29.</span>  <span class="hljs-keyword">import</span> insideDirectory <span class="hljs-keyword">from</span>  <span class="hljs-string">'./insideDirectory'</span>;  <span class="hljs-comment">// camelCase export/import/directory name/implicit "index"</span>
<span class="hljs-number">30.</span>  <span class="hljs-comment">// ^ supports both insideDirectory.js and insideDirectory/index.js</span>

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23naming--camelCase-default-export" target="_blank" rel="nofollow">23.7</a> 当 导出(export) 一个默认函数时使用驼峰式命名。你的文件名应该和你的函数的名字一致。</p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">makeStyleGuide</span>(<span class="hljs-params"></span>)  </span>{
<span class="hljs-number">2.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">3.</span>  }

<span class="hljs-number">5.</span>  <span class="hljs-keyword">export</span>  <span class="hljs-keyword">default</span> makeStyleGuide;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23naming--PascalCase-singleton" target="_blank" rel="nofollow">23.8</a> 当导出一个 构造函数 / 类 / 单例 / 函数库 / 纯对象时使用 PascalCase 式命名，（愚人码头注：即单词首字母大写）。</p>
<pre class="hljs cpp"><code class="cpp">


<span class="hljs-number">1.</span>  <span class="hljs-keyword">const</span>  AirbnbStyleGuide  =  {
<span class="hljs-number">2.</span>  es6:  {
<span class="hljs-number">3.</span>  },
<span class="hljs-number">4.</span>  };

<span class="hljs-number">6.</span>  <span class="hljs-keyword">export</span>  <span class="hljs-keyword">default</span>  AirbnbStyleGuide;

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23naming--Acronyms-and-Initialisms" target="_blank" rel="nofollow">23.9</a> 首字母缩写词应该总是全部大写，或全部小写。</p>
<blockquote>
<p>为什么？ 名字是更具可读性，而不是为了满足计算机算法。</p>
</blockquote>
<pre class="hljs javascript"><code class="javascript">
JavaScript  代码:

<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">import</span>  SmsContainer  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./containers/SmsContainer'</span>;

<span class="hljs-number">4.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">5.</span>  <span class="hljs-keyword">const</span>  HttpRequests  =  [
<span class="hljs-number">6.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">7.</span>  ];

<span class="hljs-number">9.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">10.</span>  <span class="hljs-keyword">import</span>  SMSContainer  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./containers/SMSContainer'</span>;

<span class="hljs-number">12.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">13.</span>  <span class="hljs-keyword">const</span>  HTTPRequests  =  [
<span class="hljs-number">14.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">15.</span>  ];

<span class="hljs-number">17.</span>  <span class="hljs-comment">// also good</span>
<span class="hljs-number">18.</span>  <span class="hljs-keyword">const</span> httpRequests =  [
<span class="hljs-number">19.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">20.</span>  ];

<span class="hljs-number">22.</span>  <span class="hljs-comment">// best</span>
<span class="hljs-number">23.</span>  <span class="hljs-keyword">import</span>  TextMessageContainer  <span class="hljs-keyword">from</span>  <span class="hljs-string">'./containers/TextMessageContainer'</span>;

<span class="hljs-number">25.</span>  <span class="hljs-comment">// best</span>
<span class="hljs-number">26.</span>  <span class="hljs-keyword">const</span> requests =  [
<span class="hljs-number">27.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">28.</span>  ];

</code></pre>
<h2>存取器 Accessors</h2>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23accessors--not-required" target="_blank" rel="nofollow">24.1</a> 属性的存取器函数不是必须的。</p>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23accessors--no-getters-setters" target="_blank" rel="nofollow">24.2</a> 別使用 JavaScript 的 getters/setters，因为它们会导致意想不到的副作用，而且很难测试，维护和理解。相反，如果要使用存取器函数，使用 getVal() 及 setVal(‘hello’)。</p>
<pre class="hljs cpp"><code class="cpp">
JavaScript  代码:

<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-class"><span class="hljs-keyword">class</span>  <span class="hljs-title">Dragon</span>  {</span>
<span class="hljs-number">3.</span>  <span class="hljs-function">get <span class="hljs-title">age</span><span class="hljs-params">()</span>  </span>{
<span class="hljs-number">4.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">5.</span>  }

<span class="hljs-number">7.</span>  <span class="hljs-function"><span class="hljs-built_in">set</span> <span class="hljs-title">age</span><span class="hljs-params">(value)</span>  </span>{
<span class="hljs-number">8.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">9.</span>  }
<span class="hljs-number">10.</span>  }

<span class="hljs-number">12.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">13.</span>  <span class="hljs-class"><span class="hljs-keyword">class</span>  <span class="hljs-title">Dragon</span>  {</span>
<span class="hljs-number">14.</span>  getAge()  {
<span class="hljs-number">15.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">16.</span>  }

<span class="hljs-number">18.</span>  setAge(value)  {
<span class="hljs-number">19.</span>  <span class="hljs-comment">// ...</span>
<span class="hljs-number">20.</span>  }
<span class="hljs-number">21.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23accessors--boolean-prefix" target="_blank" rel="nofollow">24.3</a> 如果属性/方法是一个 <code>boolean</code>, 使用 <code>isVal()</code> 或 <code>hasVal()</code> 方法。</p>
<pre class="hljs cpp"><code class="cpp">


<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  <span class="hljs-keyword">if</span>  (!dragon.age())  {
<span class="hljs-number">3.</span>  <span class="hljs-keyword">return</span>  <span class="hljs-literal">false</span>;
<span class="hljs-number">4.</span>  }

<span class="hljs-number">6.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">7.</span>  <span class="hljs-keyword">if</span>  (!dragon.hasAge())  {
<span class="hljs-number">8.</span>  <span class="hljs-keyword">return</span>  <span class="hljs-literal">false</span>;
<span class="hljs-number">9.</span>  }

</code></pre>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23accessors--consistent" target="_blank" rel="nofollow">24.4</a> 也可以创建 get() 和 set() 函数, 但要保持一致。</p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-class"><span class="hljs-keyword">class</span>  <span class="hljs-title">Jedi</span>  </span>{
<span class="hljs-number">2.</span>  <span class="hljs-keyword">constructor</span>(options =  {})  {
<span class="hljs-number">3.</span>  <span class="hljs-keyword">const</span> lightsaber = options.lightsaber ||  <span class="hljs-string">'blue'</span>;
<span class="hljs-number">4.</span>  <span class="hljs-keyword">this</span>.set(<span class="hljs-string">'lightsaber'</span>, lightsaber);
<span class="hljs-number">5.</span>  }

<span class="hljs-number">7.</span>  set(key, val)  {
<span class="hljs-number">8.</span>  <span class="hljs-keyword">this</span>[key]  = val;
<span class="hljs-number">9.</span>  }

<span class="hljs-number">11.</span>  get(key)  {
<span class="hljs-number">12.</span>  <span class="hljs-keyword">return</span>  <span class="hljs-keyword">this</span>[key];
<span class="hljs-number">13.</span>  }
<span class="hljs-number">14.</span>  }

</code></pre>
<h2>事件 Events</h2>
<p>– <a href="https://link.jianshu.com?t=http%3A%2F%2Fwww.css88.com%2Farchives%2F8345%23events--hash" target="_blank" rel="nofollow">25.1</a> 将绑定数据到事件时 (不论是 DOM 事件还是其他像Backbone一类的事件), 传递 hash 而不是原始值。 这将允许后续的贡献者不用查找和更新事件的每一个处理程序就可以给事件添加更多的数据。例如，不要使用下边的：</p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// bad</span>
<span class="hljs-number">2.</span>  $(<span class="hljs-keyword">this</span>).trigger(<span class="hljs-string">'listingUpdated'</span>, listing.id);

<span class="hljs-number">4.</span>  <span class="hljs-comment">// ...</span>

<span class="hljs-number">6.</span>  $(<span class="hljs-keyword">this</span>).on(<span class="hljs-string">'listingUpdated'</span>,  (e, listingId)  =&gt;  {
<span class="hljs-number">7.</span>  <span class="hljs-comment">// do something with listingId</span>
<span class="hljs-number">8.</span>  });

</code></pre>
<p>prefer:</p>
<pre class="hljs javascript"><code class="javascript">
<span class="hljs-number">1.</span>  <span class="hljs-comment">// good</span>
<span class="hljs-number">2.</span>  $(<span class="hljs-keyword">this</span>).trigger(<span class="hljs-string">'listingUpdated'</span>,  { <span class="hljs-attr">listingId</span>: listing.id });

<span class="hljs-number">4.</span>  <span class="hljs-comment">// ...</span>

<span class="hljs-number">6.</span>  $(<span class="hljs-keyword">this</span>).on(<span class="hljs-string">'listingUpdated'</span>,  (e, data)  =&gt;  {
<span class="hljs-number">7.</span>  <span class="hljs-comment">// do something with data.listingId</span>
<span class="hljs-number">8.</span>  });

</code></pre>