class BlogsController < ApplicationController
    
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

        # GET /blogs
        def index
            blogs = Blog.all
            render json: blogs, except: [:created_at, :updated_at]
        end

        # GET /blogs/:id
        def show
            blog = find_blog            
            render json: blog, except: [:created_at, :updated_at]
        end

        # POST /blogs
        def create
            blog = Blog.create!(blog_params)
            render json: blog, status: :created
        end

        # PATCH /blogs/:id
        def update
            blog = find_blog
            blog.update!(blog_params)
            render json: blog
        end

         # DELETE /blogs/:id
        def destroy
            blog = find_blog
            blog.destroy
            head :no_content
        end


          private

          def find_blog
            Blog.find(params[:id])
          end

          def blog_params
            params.permit(:title, :genre, :network, :image, :year, :seasons)
          end

          def render_not_found_response
            render json: { error: "Blog not found" }, status: :not_found
          end


          def render_unprocessable_entity_response(invalid)
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
          end 




end
