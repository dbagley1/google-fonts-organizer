class FontCollectionsController < ApplicationController
  before_action :set_font_collection, only: %i[ show update destroy ]

  # GET /font_collections
  def index
    @font_collections = FontCollection.all

    render json: @font_collections
  end

  # GET /font_collections/1
  def show
    render json: @font_collection
  end

  # POST /font_collections
  def create
    @font_collection = FontCollection.new(font_collection_params)

    if @font_collection.save
      render json: @font_collection, status: :created, location: @font_collection
    else
      render json: @font_collection.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /font_collections/1
  def update
    if @font_collection.update(font_collection_params)
      render json: @font_collection
    else
      render json: @font_collection.errors, status: :unprocessable_entity
    end
  end

  # DELETE /font_collections/1
  def destroy
    @font_collection.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_font_collection
      @font_collection = FontCollection.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def font_collection_params
      params.fetch(:font_collection, {})
    end
end
