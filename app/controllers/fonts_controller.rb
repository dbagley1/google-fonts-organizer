class FontsController < ApplicationController
  before_action :set_font, only: %i[ show update destroy ]

  # GET /fonts
  def index
    @fonts = Font.all

    render json: @fonts
  end

  # GET /fonts/1
  def show
    render json: @font
  end

  # POST /fonts
  def create
    @font = Font.new(font_params)

    if @font.save
      render json: @font, status: :created, location: @font
    else
      render json: @font.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /fonts/1
  def update
    if @font.update(font_params)
      render json: @font
    else
      render json: @font.errors, status: :unprocessable_entity
    end
  end

  # DELETE /fonts/1
  def destroy
    @font.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_font
      @font = Font.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def font_params
      params.fetch(:font, {})
    end
end
