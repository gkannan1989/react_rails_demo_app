class EventsController < ApplicationController
  def new
    @event = Event.new(date: Date.today)
  end

  def create
  end
end
