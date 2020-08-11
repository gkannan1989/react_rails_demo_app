class EventsController < ApplicationController
  def new
    @event = Event.new(date: Date.today)

    @event_data = {
      data: [
        {
          label: 'Birthday Party',
          value: 'birthday_party',
          children: [
            { label: 'Jungle Theme', value: 'jungle_theme' },
            { label: 'Ocean Adventure Theme', value: 'ocean_adventure_theme' },
            { label: 'Rainforest Theme', value: 'rainforest_theme' }
          ],
          expanded: 'true'
        },
        {
          label: 'Engagement Party',
          value: 'engagement_party',
          children: [
            { label: 'Country Club', value: 'country_club' },
            { label: 'Beach Front Villa', value: 'beach_front_villa' },
            { label: 'Ballroom Indoor', value: 'ballroom_indoor' }
          ],
          expanded: 'true'
        },
        {
          label: 'Baby Shower Party',
          value: 'baby_shower_party',
          children: [
            { label: 'Baby Girl Theme', value: 'baby_girl_theme' },
            { label: 'Baby Boy Theme', value: 'baby_boy_theme' },
            { label: 'Mystery Theme', value: 'mystery' }
          ],
          expanded: 'true'
        }
      ]
    }
  end

  def create
    binding.pry
  end
end
