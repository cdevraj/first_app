class Api::EventsController < ApplicationController
	respond_to :json
	before_action :set_event, only: [:update, :destroy]

	def index
		@events = Event.order("#{sort_by} #{order}")
		respond_with @events
	end
  
  def create
  	event = Event.new(event_params)
  	if event.save
  		respond_with :api, event, status: :ok, location: api_events_url
  	else
  		render json: {errors: event.errors.full_messages }, status: :unprocessable_entity
  	end
  end

  def update
  	if @event.update(event_params)
  		respond_with :api, @event, status: :ok, location: api_events_url(@event)
  	else
			render json: {errors: @event.errors.full_messages }, status: :unprocessable_entity
  	end
  end

  def search
  	query = params[:query]
  	events = Event.where('name ILIKE ? OR place ILIKE ? OR description ILIKE ?',
                           "%#{query}%", "%#{query}%", "%#{query}%")
    respond_with events
  end

  def destroy
  	@event.destroy
  	head :ok  	
  end


  private

  def sort_by
  	sort_params = JSON.parse(params['sortable'])
  	sortable_cols =  Event.column_names -	%w(id created_at updated_at)
  	sortable_cols.include?(sort_params['sort_by']) ? sort_params['sort_by'] : "name"
  end

  def order
  	sort_params = JSON.parse(params['sortable'])
  	%w(asc desc).include?(sort_params['order']) ? sort_params['order'] : 'asc'
  end

  def set_event
  	@event = Event.find(params[:id])	
  end

  def event_params
  	params.require(:event).permit(:name, :description, :event_date, :place)
  end
end
