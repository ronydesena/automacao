!(function (e) {
  e.extend(e.fn, {
    livequery: function (s, i, t) {
      var l,
        a = this
      return (
        e.isFunction(s) && ((t = i), (i = s), (s = void 0)),
        e.each(e.livequery.queries, function (e, n) {
          if (
            !(
              a.selector != n.selector ||
              a.context != n.context ||
              s != n.type ||
              (i && i.$lqguid != n.fn.$lqguid) ||
              (t && t.$lqguid != n.fn2.$lqguid)
            )
          )
            return (l = n) && !1
        }),
        ((l =
          l ||
          new e.livequery(this.selector, this.context, s, i, t)).stopped = !1),
        l.run(),
        this
      )
    },
    expire: function (s, i, t) {
      var l = this
      return (
        e.isFunction(s) && ((t = i), (i = s), (s = void 0)),
        e.each(e.livequery.queries, function (a, n) {
          l.selector != n.selector ||
            l.context != n.context ||
            (s && s != n.type) ||
            (i && i.$lqguid != n.fn.$lqguid) ||
            (t && t.$lqguid != n.fn2.$lqguid) ||
            this.stopped ||
            e.livequery.stop(n.id)
        }),
        this
      )
    },
  }),
    (e.livequery = function (s, i, t, l, a) {
      return (
        (this.selector = s),
        (this.context = i),
        (this.type = t),
        (this.fn = l),
        (this.fn2 = a),
        (this.elements = []),
        (this.stopped = !1),
        (this.id = e.livequery.queries.push(this) - 1),
        (l.$lqguid = l.$lqguid || e.livequery.guid++),
        a && (a.$lqguid = a.$lqguid || e.livequery.guid++),
        this
      )
    }),
    (e.livequery.prototype = {
      stop: function () {
        var e = this
        this.type
          ? this.elements.unbind(this.type, this.fn)
          : this.fn2 &&
            this.elements.each(function (s, i) {
              e.fn2.apply(i)
            }),
          (this.elements = []),
          (this.stopped = !0)
      },
      run: function () {
        if (!this.stopped) {
          var s = this,
            i = this.elements,
            t = e(this.selector, this.context),
            l = t.not(i)
          ;(this.elements = t),
            this.type
              ? (l.bind(this.type, this.fn),
                i.length > 0 &&
                  e.each(i, function (i, l) {
                    e.inArray(l, t) < 0 && e.event.remove(l, s.type, s.fn)
                  }))
              : (l.each(function () {
                  s.fn.apply(this)
                }),
                this.fn2 &&
                  i.length > 0 &&
                  e.each(i, function (i, l) {
                    e.inArray(l, t) < 0 && s.fn2.apply(l)
                  }))
        }
      },
    }),
    e.extend(e.livequery, {
      guid: 0,
      queries: [],
      queue: [],
      running: !1,
      timeout: null,
      checkQueue: function () {
        if (e.livequery.running && e.livequery.queue.length)
          for (var s = e.livequery.queue.length; s--; )
            e.livequery.queries[e.livequery.queue.shift()].run()
      },
      pause: function () {
        e.livequery.running = !1
      },
      play: function () {
        ;(e.livequery.running = !0), e.livequery.run()
      },
      registerPlugin: function () {
        e.each(arguments, function (s, i) {
          if (e.fn[i]) {
            var t = e.fn[i]
            e.fn[i] = function () {
              var s = t.apply(this, arguments)
              return e.livequery.run(), s
            }
          }
        })
      },
      run: function (s) {
        null != s
          ? e.inArray(s, e.livequery.queue) < 0 && e.livequery.queue.push(s)
          : e.each(e.livequery.queries, function (s) {
              e.inArray(s, e.livequery.queue) < 0 && e.livequery.queue.push(s)
            }),
          e.livequery.timeout && clearTimeout(e.livequery.timeout),
          (e.livequery.timeout = setTimeout(e.livequery.checkQueue, 20))
      },
      stop: function (s) {
        null != s
          ? e.livequery.queries[s].stop()
          : e.each(e.livequery.queries, function (s) {
              e.livequery.queries[s].stop()
            })
      },
    }),
    e.livequery.registerPlugin(
      'append',
      'prepend',
      'after',
      'before',
      'wrap',
      'attr',
      'removeAttr',
      'addClass',
      'removeClass',
      'toggleClass',
      'empty',
      'remove',
      'html'
    ),
    e(function () {
      e.livequery.play()
    })
})(jQuery)
var hash = window.location.hash,
  cartClass = '__cart',
  emailClass = '__email',
  profileClass = '__profile',
  shippingClass = '__shipping',
  paymentClass = '__payment'
$(document).ready(function () {
  '#/cart' === hash && $('body').addClass(cartClass),
    '#/email' === hash && $('body').addClass(emailClass),
    '#/profile' === hash && $('body').addClass(profileClass),
    '#/shipping' === hash && $('body').addClass(shippingClass),
    '#/payment' === hash && $('body').addClass(paymentClass)
  var e = $('.cart-links.cart-links-bottom').detach()
  $('.summary-template-holder .summary').append(e),
    $('#backBtn').click(function () {
      window.history.back()
    }),
    $('.box-client-info-pj').prepend(
      '<p class="input pull-left text mask"><label for="client-birthdate">Data de nascimento</label><input type="date" id="client-birthdate" class="input-small" placeholder="00/00/0000"></p>'
    )
}),
  $(window).on('hashchange', function () {
    var e = window.location.hash
    '#/cart' === e &&
      ($('body').removeClass(emailClass),
      $('body').removeClass(profileClass),
      $('body').removeClass(shippingClass),
      $('body').removeClass(paymentClass),
      $('body').addClass(cartClass)),
      '#/email' === e &&
        ($('body').removeClass(cartClass),
        $('body').removeClass(profileClass),
        $('body').removeClass(shippingClass),
        $('body').removeClass(paymentClass),
        $('body').addClass(emailClass)),
      '#/profile' === e &&
        ($('body').removeClass(cartClass),
        $('body').removeClass(emailClass),
        $('body').removeClass(shippingClass),
        $('body').removeClass(paymentClass),
        $('body').addClass(profileClass)),
      '#/shipping' === e &&
        ($('body').removeClass(cartClass),
        $('body').removeClass(emailClass),
        $('body').removeClass(profileClass),
        $('body').removeClass(paymentClass),
        $('body').addClass(shippingClass)),
      '#/payment' === e &&
        ($('body').removeClass(cartClass),
        $('body').removeClass(emailClass),
        $('body').removeClass(profileClass),
        $('body').removeClass(shippingClass),
        $('body').addClass(paymentClass))
  }),
  $('.product-image img').livequery(function () {
    var e = $(this).attr('src')
    $(this).attr(
      'src',
      e.replace(e.match(new RegExp('/ids/[^-]*(.*?)/'))[1], '-120-180')
    ),
      setTimeout(function () {
        $('.product-image img').addClass('loaded')
      }, 1e3)
  }),
  $(
    'a#edit-profile-data, .vtex-pickup-points-modal-3-x-pointsItem.pkpmodal-points-item, button#find-pickups-manualy-button, button#find-pickups-geolocation-button'
  ).livequery('click', function () {
    'hidden' == $('body.__profile').css('overflow') &&
      ($('body.__profile').css('overflow', ''),
      $('body.__profile').css('position', ''))
  }),
  $(window).on('load', function () {
    $('#go-to-shipping').livequery('click', function (e) {
      $.ajax({
        method: 'POST',
        type: 'POST',
        dataType: 'json',
        data: {
          birthday: $('#client-birthdate').val(),
          email: $('#client-profile-data #client-email').val(),
        },
        success: function (e) {},
        error: function (e) {},
      })
    })
  })
