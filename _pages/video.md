---
layout: new-default
title: advantAGE Seniors Videos
description: Advantage seniors videos
redirect_from:
  - /lionels-world.html
permalink: /videos/
---
<script src="http://www.youtube.com/player_api"></script>
<section id="advantage-videos">
    <div class="container">
        <div class="row justify-content-md-center">
            {% for item in site.data.videos %}
                <div class="col-12 col-md-6 col-lg-4 mt-20">
                    <div id="video{{forloop.index}}" video-url="https://www.youtube.com/watch?v={{item.id}}">
                        <div class="card border shadow">
                            <div class="card-img-top video">
                                <img src="https://img.youtube.com/vi/{{item.id}}/hqdefault.jpg" alt="{{item.title}}">
                            </div>
                            <div class="card-body">
                                <h5 class="title">{{item.title}}</h5>
                                <p>{{item.description | truncate: 60}}</p>
                                <div class="text-right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</section>
