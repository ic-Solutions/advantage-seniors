---
layout: page
title: Homecare for seniors
description: Advantage Seniors is knows for its hospitality. Read some of the reviews by people who opted 'Advantage Seniors elder care services in bangalore care' facility.
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

<h2>Reviews</h2>
<div class="reviews">
  {% for item in site.data.google-reviews %}
  <div class="review-item card shadow border p-4 mb-3 mb-md-5">
    <div class="review-meta">
      <img width="35" src="{{item.image}}" alt="{{item.name}}" /><span
        class="review-author ml-2"
        >{{item.name}}</span
      >
    </div>
    <div class="review-stars">
      <ul class="d-flex list-unstyled">
        {% for i in (1..item.rating) %}
        <li class="mr-2">
          <i aria-hidden="true" class="fa fa-star text-warning"></i>
        </li>
        {% endfor %}
      </ul>
    </div>
    <p class="review-text">{{item.review}}</p>
  </div>
  {% endfor %}
</div>

<a
  href="http://search.google.com/local/writereview?placeid=ChIJYzr6B6MWrjsR-B7_17fBkO0"
  target="_blank"
  >Read all reviews</a
>
