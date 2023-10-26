---
layout: page
title: Case Studies
description: Here are some case studies which is taken out of real situations. It shows that a large number the elders in our country are marginalized and mistreated. The system is getting to much inadequate to support the ever increasing aging population. Advantage Seniors is well established in elder care services in bangalore.
image: /images/servicebg.jpg
permalink: /case-studies/
redirect_from: /case_studies.html
links:
  - Geriatric Care Facility
  - Coma Care
  - Foster Care
  - Respite Care
  - Geriatric Counselling
  - Family Care Giver Counselling
---

## Case Studies

Here are some case studies which is taken out of real situations. It shows that a large number the elders in our country are marginalized and mistreated. The system is getting to much inadequate to support the ever increasing aging population. Long term care is in tatters. As a society we need to act fast to put new systems in place to have efficient long term care. The first case study is a letter itself thanking us for the care given Late Mr. Jeremy uncle by his daughter who lives in Canberra.

  <div class="case-studies">
    <div class="row">
      {% for item in site.data.stories %}
      <div class="col-md-12">
        <div class="card shadow bg-white mb-3 mb-md-5">
          <div class="card-header">
            <h3>{{item.author}}</h3>
          </div>
          <div class="card-body">
            {% for para in item.story %}
            <p>{{para}}</p>
            {% endfor %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
