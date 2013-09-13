class InstructorTextsController < ApplicationController
  http_basic_authenticate_with :name => "yosYos", :password => "yosYos"
  # GET /instructor_texts
  # GET /instructor_texts.json
  def index
    @instructor_texts = InstructorText.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @instructor_texts }
    end
  end

  # GET /instructor_texts/1
  # GET /instructor_texts/1.json
  def show
    @instructor_text = InstructorText.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @instructor_text }
    end
  end

  # GET /instructor_texts/new
  # GET /instructor_texts/new.json
  def new
    @instructor_text = InstructorText.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @instructor_text }
    end
  end

  # GET /instructor_texts/1/edit
  def edit
    @instructor_text = InstructorText.find(params[:id])
  end

  # POST /instructor_texts
  # POST /instructor_texts.json
  def create
    @instructor_text = InstructorText.new(params[:instructor_text])

    respond_to do |format|
      if @instructor_text.save
        format.html { redirect_to @instructor_text, notice: 'Instructor text was successfully created.' }
        format.json { render json: @instructor_text, status: :created, location: @instructor_text }
      else
        format.html { render action: "new" }
        format.json { render json: @instructor_text.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /instructor_texts/1
  # PUT /instructor_texts/1.json
  def update
    @instructor_text = InstructorText.find(params[:id])

    respond_to do |format|
      if @instructor_text.update_attributes(params[:instructor_text])
        format.html { redirect_to @instructor_text, notice: 'Instructor text was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @instructor_text.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /instructor_texts/1
  # DELETE /instructor_texts/1.json
  def destroy
    @instructor_text = InstructorText.find(params[:id])
    @instructor_text.destroy

    respond_to do |format|
      format.html { redirect_to instructor_texts_url }
      format.json { head :no_content }
    end
  end
end
