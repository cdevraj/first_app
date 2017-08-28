class Api::EventsController < ApplicationController
	respond_to :json

	def index
		respond_with Event.all
	end
end
