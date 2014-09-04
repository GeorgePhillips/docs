module TrimFilter
  def trim(input)
    input.strip unless input == nil
  end

  Liquid::Template.register_filter self
end
