! function(t) {
  function e(e) {
    for (var o, i, c = e[0], u = e[1], s = e[2], l = 0, p = []; l < c.length; l++) i = c[l], a[i] && p.push(a[i][0]), a[i] = 0;
    for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (t[o] = u[o]);
    for (d && d(e); p.length;) p.shift()();
    return n.push.apply(n, s || []), r()
  }

  function r() {
    for (var t, e = 0; e < n.length; e++) {
      for (var r = n[e], o = !0, c = 1; c < r.length; c++) {
        var u = r[c];
        0 !== a[u] && (o = !1)
      }
      o && (n.splice(e--, 1), t = i(i.s = r[0]))
    }
    return t
  }
  var o = {},
    a = {
      8: 0
    },
    n = [];

  function i(e) {
    if (o[e]) return o[e].exports;
    var r = o[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports
  }
  i.m = t, i.c = o, i.d = function(t, e, r) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    })
  }, i.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, i.t = function(t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (i.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var o in t) i.d(r, o, function(e) {
        return t[e]
      }.bind(null, o));
    return r
  }, i.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return i.d(e, "a", e), e
  }, i.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, i.p = "";
  var c = window.shopifySlateJsonp = window.shopifySlateJsonp || [],
    u = c.push.bind(c);
  c.push = e, c = c.slice();
  for (var s = 0; s < c.length; s++) e(c[s]);
  var d = u;
  n.push([149, 0, 1]), r()
}({
  149: function(t, e, r) {
    "use strict";
    var o = r(18);
    r(23), (0, o.load)("*")
  },
  23: function(t, e, r) {
    "use strict";
    var o = s(r(37)),
      a = s(r(38)),
      n = r(51),
      i = r(50),
      c = r(18),
      u = r(19);

    function s(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    var d, l, p, h, m = "hide",
      f = {
        submitButton: "[data-submit-button]",
        submitButtonText: "[data-submit-button-text]",
        comparePrice: "[data-compare-price]",
        comparePriceText: "[data-compare-text]",
        priceWrapper: "[data-price-wrapper]",
        imageWrapper: "[data-product-image-wrapper]",
        visibleImageWrapper: "[data-product-image-wrapper]:not(.hide)",
        imageWrapperById: function(t) {
          return f.imageWrapper + "[data-image-id='" + t + "']"
        },
        productForm: "[data-product-form]",
        productPrice: "[data-product-price]",
        productUnitPrice: "[data-unit-price]",
        thumbnail: "[data-product-single-thumbnail]",
        thumbnailById: function(t) {
          return "[data-thumbnail-id='" + t + "']"
        },
        thumbnailActive: "[data-product-single-thumbnail][aria-current]"
      };
    (0, c.register)("product", {
      onLoad: function() {
        var t = this;
        return (0, a.default)(o.default.mark(function e() {
          var r, a, i;
          return o.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (l) {
                  e.next = 14;
                  break
                }
                return l = !0, r = document.querySelector(f.productForm), e.next = 5, t.getProductJson(r.dataset.productHandle);
              case 5:
                t.product = e.sent, t.productForm = new n.ProductForm(r, t.product, {
                  onOptionChange: t.onFormOptionChange.bind(t)
                }), t.onThumbnailClick = t.onThumbnailClick.bind(t), t.onThumbnailKeyup = t.onThumbnailKeyup.bind(t), t.container.addEventListener("click", t.onThumbnailClick), t.container.addEventListener("keyup", t.onThumbnailKeyup), t.productForm.product.variants.length > 1 ? (d = t.productForm.variant(), a = {
                  dataset: {
                    variant: d
                  }
                }, t.onFormOptionChange(a)) : (d = t.productForm.product.variants[0], a = {
                  dataset: {
                    variant: d
                  }
                }, t.onFormOptionChange(a)), i = t, $(window).on("product-quantity-update", function() {
                  i.renderPrice(d)
                });
              case 14:
              case "end":
                return e.stop()
            }
          }, e, t)
        }))()
      },
      onUnload: function() {
        this.productForm.destroy(), this.removeEventListener("click", this.onThumbnailClick), this.removeEventListener("keyup", this.onThumbnailKeyup)
      },
      getProductJson: function(t) {
        return fetch("/products/" + t + ".js").then(function(t) {
          return t.json()
        })
      },
      onFormOptionChange: function(t) {
        var e = t.dataset.variant;

        if (e.id && window.variantLinks && window.variantLinks[e.id] && ($('.buy-now[data-alternative-url]').length > 0)) {
          $('.buy-now[data-alternative-url]').attr('href', window.variantLinks[e.id])
        }
        d = e, this.renderImages(e), this.renderPrice(e), this.renderComparePrice(e), this.renderSubmitButton(e), this.updateSpecs(e), this.updateBrowserHistory(e), this.updateDataLayer(e)
      },
      onThumbnailClick: function(t) {
        t.target.closest(f.thumbnail) && t.preventDefault()
      },
      onThumbnailKeyup: function(t) {
        if (13 === t.keyCode && t.target.closest(f.thumbnail)) {
          var e = this.container.querySelector(f.visibleImageWrapper);
          (0, u.forceFocus)(e)
        }
      },
      renderSubmitButton: function(t) {
        var e = this.container.querySelector(f.submitButton),
          r = this.container.querySelector(f.submitButtonText);
        t && $("#variantID").val(t.id), e && (t ? t.available ? (e.disabled = !1, r.innerText = theme.strings.addToCart, $(e).show(), $(".swym-button-bar").hide()) : (e.disabled = !0, r.innerText = theme.strings.soldOut, $(e).hide(), $(".swym-button-bar").show()) : (e.disabled = !0, r.innerText = theme.strings.unavailable, $(e).hide(), $(".swym-button-bar").show()))
      },
      renderImages: function(t) {
        if (t && null !== t.featured_image) {
          var e = t.option1,
            r = t.option2.replace(" ", "-").toLowerCase();
          r ? ($(".ProductInfo .slideshow-wrap." + e).hasClass("active") || ($(".ProductInfo .slideshow-wrap:not(." + e + ")").removeClass("active"), $(".ProductInfo .slideshow-wrap." + e + " .slideshow").slick("slickGoTo", 0), $(".ProductInfo .slideshow-wrap." + e).addClass("active"), $(window).trigger("resize")), p && (p.prependTo(h), h = null, p = null), $(".ProductInfo .slideshow-wrap." + e + " .slideshow").slick("slickUnfilter"), $(".ProductInfo .slideshow-wrap." + e + " .slideshow").slick("slickFilter", "." + r), h = $(".ProductInfo .slideshow-wrap." + e + " .thumbnails .thumb:not(." + r + ")").parent(), p = $(".ProductInfo .slideshow-wrap." + e + " .thumbnails .thumb:not(." + r + ")").detach(), $(".ProductInfo .slideshow-wrap." + e + " .slideshow").slick("slickGoTo", 0), $(".ProductInfo .slideshow-wrap." + e + " .thumbnails .thumb").removeClass("active"), $(".ProductInfo .slideshow-wrap." + e + " .thumbnails .thumb").first().addClass("active")) : (alert(r), $(".ProductInfo .slideshow-wrap." + e).hasClass("active") || ($(".ProductInfo .slideshow-wrap:not(." + e + ")").removeClass("active"), $(".ProductInfo .slideshow-wrap." + e + " .slideshow").slick("slickGoTo", 0), $(".ProductInfo .slideshow-wrap." + e).addClass("active"), $(window).trigger("resize")))
        }
      },
      renderPrice: function(t) {
        var e = this.container.querySelector(f.productPrice),
          r = (this.container.querySelector(f.productUnitPrice), this.container.querySelector(f.priceWrapper));
        try {
          r.classList && (r.classList.toggle(m, !t), Fv)
        } catch (t) {}
        if (t) try {
          var o = Number($(".ProductInfo .details .qty").text());
          e.innerText = (0, i.formatMoney)(t.price * o, theme.moneyFormat);
          var a = this.getLocalProductVariant(t);
          $(".unit-price").text(a.unitPrice), $(".product-add.mobile .add-to-cart .button-text").text("ADD TO CART – " + (0, i.formatMoney)(t.price * o, theme.moneyFormat))
        } catch (t) {}
      },
      renderComparePrice: function(t) {
        if (t) {
          var e = this.container.querySelector(f.comparePrice),
            r = this.container.querySelector(f.comparePriceText);
          e && r && (t.compare_at_price > t.price ? (e.innerText = (0, i.formatMoney)(t.compare_at_price, theme.moneyFormat), r.classList.remove(m), e.classList.remove(m)) : (e.innerText = "", r.classList.add(m), e.classList.add(m)))
        }
      },
      renderActiveThumbnail: function(t) {
        var e = this.container.querySelector(f.thumbnailById(t)),
          r = this.container.querySelector(f.thumbnailActive);
        e !== r && (r.removeAttribute("aria-current"), e.setAttribute("aria-current", !0))
      },
      renderFeaturedImage: function(t) {
        var e = this.container.querySelector(f.visibleImageWrapper),
          r = this.container.querySelector(f.imageWrapperById(t));
        e.classList.add(m), r.classList.remove(m)
      },
      updateSpecs: function(t) {
        if (t) {
          $(".ProductInfo .accordion .variant-custom-fields").stop().hide(), $('.ProductInfo .accordion .variant-custom-fields[data-variant-id="' + t.id + '"]').stop().hide().fadeIn();
          var e = this.getLocalProductVariant(t);
          if (e && $(".ProductInfo .product-title h1").text(e.detailTitle), $(".product-options.watt").length > 0) {
            var r = "data-" + t.option2.toLowerCase().replace(" ", "-");
            $(".product-options.watt a").each(function() {
              var t = $(this).attr(r);
              $(this).attr("href", t)
            })
          }
        }
      },
      updateBrowserHistory: function(t) {
        var e = this.productForm.element.dataset.enableHistoryState;
        if (t && "true" === e) {
          var r = (0, n.getUrlWithVariant)(window.location.href, t.id);
          window.history.replaceState({
            path: r
          }, "", r)
        }
      },
      updateDataLayer: function(t) {
        t && dataLayer.push({
          event: "generic_event",
          eventCategory: "AW_PDP",
          AW_ProductID: t.id,
          AW_ProductName: t.name,
          AW_ProductGroupID: this.product.id,
          AW_ProductPrice: t.price / 100
        })
      },
      getLocalProductVariant: function(t) {
        if (t && null !== t.featured_image) {
          for (var e, r, o = t.featured_image.product_id, a = LOCAL_PRODUCTS[o], n = a.variants.length, i = 0; i < n; i++)
            if (r = a.variants[i], Number(r.variantId) === t.id) {
              e = r;
              break
            } return e
        }
      }
    })
  }
});