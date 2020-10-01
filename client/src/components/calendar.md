### Calendar Thoughts

# Structure

Month                         Month
Su Mo Tu We Th Fr Sa          Su Mo Tu We Th Fr Sa
#  #  #  #  #  #  #           #  #  #  #  #  #  #
#  #  #  #  #  #  #           #  #  #  #  #  #  #
#  #  #  #  #  #  #           #  #  #  #  #  #  #
#  #  #  #  #  #  #           #  #  #  #  #  #  #


# Can possibly be a stateful/stateless component that hold a property with the actual date
  --Has an onclick function that will change its state to active and re-render the styling
  --(Difficulty is getting the inbetween references to also be styled they can each have a unqiue key)
  --possibly can have these all live inside another component called like date span

# STATES
# - Empty (just empty div)
# - Selected (Onhover effects + styled, this updates the starting date)
# - Normal (Onhover effects + onclick changes to selected and changes value (needs to also change style upon being in a chain))
# - UnSelectable (just dashed out, no effects, not clickable)


