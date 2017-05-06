CarrierWave.configure do |config|
  config.fog_credentials = {
      :provider => 'AWS',
      :aws_access_key_id => ENV['aws_access_key_id'],
      :aws_secret_access_key => ENV['aws_secret_access_key'],
      :region => 'ap-northeast-1',
      # :path_style => true,
  }

  # config.fog_public     = true
  config.fog_directory  = 'jio-chat-space'
  config.storage = :fog
end
