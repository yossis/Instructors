require 'test_helper'

class InstructorTextsControllerTest < ActionController::TestCase
  setup do
    @instructor_text = instructor_texts(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:instructor_texts)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create instructor_text" do
    assert_difference('InstructorText.count') do
      post :create, instructor_text: { name: @instructor_text.name, val: @instructor_text.val }
    end

    assert_redirected_to instructor_text_path(assigns(:instructor_text))
  end

  test "should show instructor_text" do
    get :show, id: @instructor_text
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @instructor_text
    assert_response :success
  end

  test "should update instructor_text" do
    put :update, id: @instructor_text, instructor_text: { name: @instructor_text.name, val: @instructor_text.val }
    assert_redirected_to instructor_text_path(assigns(:instructor_text))
  end

  test "should destroy instructor_text" do
    assert_difference('InstructorText.count', -1) do
      delete :destroy, id: @instructor_text
    end

    assert_redirected_to instructor_texts_path
  end
end
