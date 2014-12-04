class CoursesController < ApplicationController
  before_filter :set_course, only: [:show, :edit, :update, :destroy]

  respond_to :html, :json

  def index
    @courses = Course.all
    respond_with(@courses)
  end

  def show
    respond_with(@course)
  end

  def new
    @course = Course.new
    respond_with(@course)
  end

  def edit
  end

  def create
    @course = Course.new(params[:course])
    @course.save
    respond_with(@course)
  end

  def update
    @course.update_attributes(params[:course])
    respond_with(@course)
  end

  def destroy
    @course.destroy
    respond_with(@course)
  end

  private
    def set_course
      @course = Course.find(params[:id])
    end
end
