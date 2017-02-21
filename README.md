##users
| columns | type  |
|:--------|------:|
|name     |string |
|email    |string |
|password |integer|

has_many :messages
has_many :user_groups
has_many :goups, through::user_groups


##messages
| columns |  type   |
|:--------|--------:|
|body     | text    |
|image    | string  |
|user_id  | integer |
|group_id | integer |

belongs_to :users
belongs_to :groups

##groups
| columns | type    |
|:--------|--------:|
|name     |string   |

has_many :user_groups
has_many :messages
has_many :users, through: :user_groups

##user_groups
|columns  |type     |
|:--------|--------:|
|user_id  |integer  |
|group_id |integer  |

belongs_to :group
belongs_to :user
