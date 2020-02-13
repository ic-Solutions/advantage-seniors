---
layout: default
title: Media
description: Some of the media houses where advanAge seniors elder Geriatric Care Facility has been featured.
image: /images/servicebg.jpg
permalink: /media/
redirect_from: /media.html
---


<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <link rel="shortcut icon" href="/images/fav-icon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1">

  {% seo %}

  <meta name="keywords"
    content="seniors care, elder care, assisted living homes, coma care, dementia care, Alzheimer's care, respite care, foster care, hospice care, domicilary care, Geriatric Care Facility, old age home, bed ridden patients, Intervention patients, tracheotomy patients, colostomy, catheter, nasal feeding, PEG feeding, geriatric counseling, senior counseling, old age care, home nursing, elderly care taker,senior care giver,trained home nurses, trained senior carer, gerentology experts, research, seminar, international faculty in gerentology" />

  <link href="/assets/css/advant.css" rel="stylesheet" type="text/css" />
  <script src="/scroltop/scrolltop.js"></script>
  <script src="/scroltop/scrolcontrole.js"></script>

  <!--mobile menu start-->
  <link rel="stylesheet" href="/respmenu/responsivemobilemenu.css" type="text/css" />
  <script type="text/javascript" src="/respmenu/responsivemobilemenu.js"></script>
  <!--mobile menu end-->

  <!--popup content start here-->
  <link href="/pop/modelpop.css" rel="stylesheet" type="text/css">
  <!--popup content end here-->


  <!--image zooming script start here-->

  <script type="text/javascript" src="/highslide/highslide-with-gallery.js"></script>
  <link rel="stylesheet" type="text/css" href="/highslide/highslide.css">

  <!--
	1) Optionally override the settings defined at the top
	of the highslide.js file. The parameter hs.graphicsDir is important!
-->

  <script type="text/javascript">
    hs.graphicsDir = '/highslide/graphics/';
    hs.align = 'center';
    hs.transitions = ['expand', 'crossfade'];
    hs.outlineType = 'rounded-white';
    hs.wrapperClassName = 'controls-in-heading';
    hs.fadeInOut = true;
    //hs.dimmingOpacity = 0.75;

    // Add the controlbar
    if (hs.addSlideshow) hs.addSlideshow({
      //slideshowGroup: 'group1',
      interval: 5000,
      repeat: false,
      useControls: true,
      fixedControls: false,
      overlayOptions: {
        opacity: 1,
        position: 'top left',
        hideOnMouseOut: false
      }
    });
  </script>
  <!--image zooming script end here-->

  <!--sidebar script start from here-->
  <script src="/sidebar/jquery.js" type="text/javascript"></script>
  <link href="/sidebar/sidebar.css" rel="stylesheet" type="text/css" />
  <script type="text/javascript">
    jQuery(document).ready(
      function () {
        jQuery("#facebook_right").hover(function () { jQuery(this).stop(true, false).animate({ right: 0 }, 500); },
          function () { jQuery("#facebook_right").stop(true, false).animate({ right: -325 }, 500); });

        jQuery("#twitter_right").hover(function () { jQuery(this).stop(true, false).animate({ right: 0 }, 500); },
          function () { jQuery("#twitter_right").stop(true, false).animate({ right: -325 }, 500); });

        jQuery("#testimoni_right").hover(function () { jQuery(this).stop(true, false).animate({ right: 0 }, 500); },
          function () { jQuery("#testimoni_right").stop(true, false).animate({ right: -300 }, 500); });
      });
  </script>

  <!--sidebar script end from here-->

  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140719676-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'UA-140719676-1');
  </script>

  <link rel="stylesheet" type="text/css" href="/assets/css/oldsite.css">

</head>

<body>
  <div id="medibg">
    <div id="foot">
      <div id="fix">
        <div id="actual">

          <div class="ratexts">

            {% include menu.html %}

          </div>

          <div class="ratexts">
            <div class="mediapagehd">Media Snippets</div>


          </div>
        </div>

        {% for item in site.data.media %}
        <div style="display: block; clear: both; float: none; margin-top: 20px">
          <img class="media-logo" id="{{item.logoid}}" src="{{item.logo}}" alt="{{item.mediatitle}}">
          <div class="media-container">

            {% for media in item.articles %}
            <div class="media">
              {% if media.image %}
              <a href="{{media.image}}" class="highslide" onclick="return hs.expand(this)">
                <div class="media-article" style="background-image: url({{media.image}});"></div>
                <!-- <img class="media-article" src="{{media.image}}" alt="{{media.title}}"> -->
              </a>
              {% else %}
              <img class="media-article"
                src="http://placehold.jp/e5e5e5/383838/450x450.png?text={{media.title | url_encode | truncate: 30}}"
                alt="{{media.title}}">
              {% endif %}
              <label for="modal-{{item.id}}-{{forloop.index}}" class="btn btn-primary media-house">Read more</label>
            </div>
            {% endfor %}
          </div>

          {% for media in item.articles %}
          <!-- Modal Starts -->
          <input class="modal-state" id="modal-{{item.id}}-{{forloop.index}}" type="checkbox" />
          <div class="modal">
            <label class="modal__bg" for="modal-{{item.id}}-{{forloop.index}}"></label>
            <div class="modal__inner">
              <label class="modal__close" for="modal-{{item.id}}-{{forloop.index}}"></label>
              <div class="modhd">{{item.media-house}}</div>
              {% for p in media.content %}
              <p>{{p}}</p>
              {% endfor %}
            </div>
          </div>
          {% endfor %}
        </div>
        {% endfor %}



        {% include footer.html %}
      </div>
    </div>
  </div>
  </div>



  {% include sidebar-brochure.html %}
  {% include chat.html %}

  <script src="//instant.page/3.0.0" type="module" defer
    integrity="sha384-OeDn4XE77tdHo8pGtE1apMPmAipjoxUQ++eeJa6EtJCfHlvijigWiJpD7VDPWXV1"></script>
</body>