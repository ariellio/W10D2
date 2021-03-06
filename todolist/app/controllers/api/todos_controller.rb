class Api::TodosController < ApplicationController

  def show
    render json: Todo.find(params[:id])
  end

  def index
    @todo = Todo.all
    render json: @todo
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def updated

  end

  def destroy

  end
  
  private
  def todo_params
    params.require(:todo).permit(title:, :body, :done)
  end

end