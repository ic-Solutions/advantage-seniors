---
layout: default
title: Homecare for seniors
description: Advantage Seniors is knows for its hospitality. Read some of the reviews by people who opted Advantage Seniors care facility.
image: /images/servicebg.jpg
permalink: /reviews/
redirect_from: /reviews.html
links:
    - Geriatric Care Facility
    - Coma Care
    - Foster Care
    - Respite Care
    - Geriatric Counselling
    - Family Care Giver Counselling
---

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
  <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
  <link rel="icon" href="/images/favicon.ico" type="image/x-icon">

    <meta content="width=device-width, initial-scale=1" name="viewport">

    {% seo %}

    <meta
        content="seniors care, elder care, assisted living homes, coma care, dementia care, Alzheimer's care, respite care, foster care, hospice care, domicilary care, Geriatric Care Facility, old age home, bed ridden patients, Intervention patients, tracheotomy patients, colostomy, catheter, nasal feeding, PEG feeding, geriatric counseling, senior counseling, old age care, home nursing, elderly care taker,senior care giver,trained home nurses, trained senior carer, gerentology experts, research, seminar, international faculty in gerentology"
        name="keywords" />

    <link href="/assets/css/advant.css" rel="stylesheet" type="text/css" />


    <!--sidebar script start from here-->
    <script src="/sidebar/jquery.js" type="text/javascript"></script>
    <link href="/sidebar/sidebar.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript">
        jQuery(document).ready(function () {
            jQuery("#facebook_right").hover(function () {
                jQuery(this).stop(true, false).animate({
                    right: 0
                }, 500);
            }, function () {
                jQuery("#facebook_right").stop(true, false).animate({
                    right: -325
                }, 500);
            });

            jQuery("#twitter_right").hover(function () {
                jQuery(this).stop(true, false).animate({
                    right: 0
                }, 500);
            }, function () {
                jQuery("#twitter_right").stop(true, false).animate({
                    right: -325
                }, 500);
            });

            jQuery("#testimoni_right").hover(function () {
                jQuery(this).stop(true, false).animate({
                    right: 0
                }, 500);
            }, function () {
                jQuery("#testimoni_right").stop(true, false).animate({
                    right: -300
                }, 500);
            });
        });
    </script>

    <!--sidebar script end from here-->



    <!--mobile menu start-->
    <link href="/respmenu/responsivemobilemenu.css" rel="stylesheet" type="text/css" />
    <script src="/respmenu/responsivemobilemenu.js" type="text/javascript"></script>
    <!--mobile menu end-->


    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140719676-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-140719676-1');
    </script>
</head>

<body>
    <div id="servicebg">
        <div id="foot">
            <div id="fix">
                <div id="actual">

                    <div class="ratexts">
                        <style>
                            .ratexts.adjust {
                                margin-top: -9px;
                                margin-bottom: -9px;
                            }
                        </style>
                        {% include menu.html %}


                    </div>

                    <div class="ratexts">

                        <div class="onebythre">


                            <div class="servicpagehd">
                                <a name="1">What Do They Say?</a>
                            </div>


                            <style>
                                .review-item {
                                    background: white;
                                    padding: 20px;
                                    border-radius: 10px;
                                    margin-bottom: 20px;
                                }

                                .review-author {
                                    font-weight: bold;
                                }

                                .review-meta img {
                                    vertical-align: middle;
                                    margin-right: 10px;
                                }

                                .review-stars ul {
                                    margin: 0;
                                    margin-top: 10px;
                                    padding: 0;
                                    display: inline-block;
                                    list-style: none;
                                }

                                .review-stars ul {
                                    list-style: none;
                                }

                                .review-stars li {
                                    display: inline-block;
                                    margin-right: 5px;
                                }

                                .review-stars ul li i {
                                    color: #E4B248;
                                    font-size: 18px;
                                    font-style: normal;
                                }

                                .btn {
                                    text-decoration: none;
                                    background: #52a550;
                                    color: #fff;
                                    padding: 10px 25px;
                                    border-radius: 2px;
                                }

                                .author-image {
                                    vertical-align: middle;
                                    margin-right: 10px;
                                }
                            </style>

                            <section class="main-content">
                                <header>
                                    <h2>Reviews</h2>
                                </header>

                                {% for item in site.data.google-reviews %}
                                <div class="review-item">
                                    <div class="review-meta"><img width="35" src="{{item.image}}"
                                            alt="{{item.name}}"><span class="review-author">{{item.name}}</span>
                                    </div>
                                    <div class="review-stars">
                                        <ul>
                                            {% for i in (1..item.rating) %}
                                            <li>
                                                <i aria-hidden="true" class="fa fa-star"></i>
                                            </li>
                                            {% endfor %}
                                        </ul>
                                    </div>
                                    <p class="review-text">{{item.review}}</p>
                                </div>
                                {% endfor %}

                                <a href="http://search.google.com/local/writereview?placeid=ChIJYzr6B6MWrjsR-B7_17fBkO0"
                                    target="_blank">Read all reviews</a>
                            </section>

                        </div>

                        <div class="onebyfour">

                            <div class="servicpagehd">Download Brouchure</div>
                            <div align="center" class="iconcover">
                                <a href="/images/downloads/Brochure.pdf" target="_blank"><img border="0" class="widimg"
                                        src="/images/download.jpg" /></a>
                            </div>

                            <div class="servicpagehd">Geriatric Care Facilitys</div>
                            <div align="center" class="iconcover"><img src="/images/icons1.jpg" /></div>
                            <div align="center" class="iconcover"><img src="/images/icons2.jpg" /></div>
                            <div align="center" class="iconcover"><img src="/images/icons3.jpg" /></div>
                            <div align="center" class="iconcover"><img src="/images/icons4.jpg" /></div>
                            <div align="center" class="iconcover"><img src="/images/icons5.jpg" /></div>
                            <div align="center" class="iconcover"><img src="/images/icons6.jpg" /></div>


                        </div>


                    </div>

                    <div class="scroll-top-wrapper ">
                        <span class="scroll-top-inner">
                            <i class="fa fa-arrow-up"></i>
                        </span>
                    </div>


                    {% include footer.html %}

                </div>
            </div>
        </div>
    </div>

    {% include sidebar-brochure.html %}
    {% include chat.html %}
    <script defer integrity="sha384-OeDn4XE77tdHo8pGtE1apMPmAipjoxUQ++eeJa6EtJCfHlvijigWiJpD7VDPWXV1"
        src="//instant.page/3.0.0" type="module"></script>
</body>
