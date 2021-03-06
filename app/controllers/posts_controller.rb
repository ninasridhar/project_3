class PostsController < ApplicationController
  # GET /posts
  # GET /posts.json
  def index
    # @posts = Post.all
    @q = Post.search(params[:q])
    @posts = @q.result.includes(:categories)
    @posts = @q.result.includes(:courses)
    @posts = @q.result.includes(:ingredients)
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @posts, :include => [:user, :category, :course, :bookmarks, :comments => {:include => {:user => {:only => :username} }}]}
      # format.json {render  @posts.to_json(:methods =>:current_user_posts)}
    end
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    @post = Post.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @post }
    end
  end

  # GET /posts/new
  # GET /posts/new.json
  def new
    @post = Post.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @post, :include => [:user, :category, :course, :bookmarks, :comments => {:include => {:user => {:only => :username}}}]}
    end
  end

  # GET /posts/1/edit
  def edit
    @post = Post.find(params[:id])
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(params[:post])

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'Post was successfully created.' }
        format.json { render json: @post, status: :created, location: @post,  :include => [:user, :category, :course, :bookmarks, :comments => {:include => {:user => {:only => :username} }}] }
      else
        format.html { render action: "new" }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /posts/1
  # PUT /posts/1.json
  def update
    @post = Post.find(params[:id])

    respond_to do |format|
      if @post.update_attributes(params[:post])
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render json: @posts, :include => [:user, :category, :course]}
      else
        format.html { render action: "edit" }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    respond_to do |format|
      format.html { redirect_to posts_url }
      format.json { head :no_content }
    end
  end
end
